import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Eye,
  Palette,
  FileText,
  Users,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Image,
  Type,
  MousePointerClick,
  Sparkles,
  Loader2,
  RefreshCw,
} from "lucide-react";
import {
  templates,
  type TemplateName,
  type CampaignData,
} from "@/lib/email-templates";

const SUPABASE_URL = "https://kzqvdwibtuoronyphiuq.supabase.co";

type Step = "compose" | "preview" | "send";
type CampaignStatus = "idle" | "saving" | "saved" | "approving" | "approved" | "sending" | "sent" | "error";

const segmentOptions = [
  { value: "", label: "All Subscribers" },
  { value: "website", label: "Website Signups" },
  { value: "opentable", label: "OpenTable Guests" },
  { value: "toast", label: "Toast Guests" },
  { value: "bento_box", label: "Bento Box" },
  { value: "squarespace", label: "Squarespace" },
];

export default function AdminNewsletter() {
  const [step, setStep] = useState<Step>("compose");
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateName>("elegante");
  const [campaignStatus, setCampaignStatus] = useState<CampaignStatus>("idle");
  const [campaignId, setCampaignId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [sendResult, setSendResult] = useState<{ sent: number; failed: number; total: number } | null>(null);

  const [formData, setFormData] = useState<CampaignData & { segment: string }>({
    subject: "",
    headline: "",
    body: "",
    image_url: "",
    cta_text: "",
    cta_url: "",
    segment: "",
  });

  const previewRef = useRef<HTMLIFrameElement>(null);

  // Generate preview HTML
  const generatePreview = () => {
    const template = templates[selectedTemplate];
    return template.build(formData);
  };

  // Update iframe preview
  useEffect(() => {
    if (step === "preview" && previewRef.current) {
      const doc = previewRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(generatePreview().replace(/{{first_name}}/g, "Guest"));
        doc.close();
      }
    }
  }, [step, selectedTemplate, formData]);

  const handleSaveDraft = async () => {
    if (!formData.subject || !formData.headline || !formData.body) {
      setStatusMessage("Please fill in subject, headline, and body.");
      setCampaignStatus("error");
      return;
    }
    setCampaignStatus("saving");
    try {
      const htmlContent = generatePreview();
      const res = await fetch(`${SUPABASE_URL}/functions/v1/save-campaign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: formData.subject,
          html_content: htmlContent,
          image_url: formData.image_url || null,
          campaign_type: selectedTemplate,
          segment: formData.segment || null,
          campaign_id: campaignId,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setCampaignId(data.campaign_id);
        setCampaignStatus("saved");
        setStatusMessage("Campaign saved as draft!");
      } else {
        setCampaignStatus("error");
        setStatusMessage(data.error || "Failed to save campaign.");
      }
    } catch {
      setCampaignStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
  };

  const handleApprove = async () => {
    if (!campaignId) {
      setStatusMessage("Save as draft first.");
      setCampaignStatus("error");
      return;
    }
    setCampaignStatus("approving");
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/approve-campaign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campaign_id: campaignId, action: "approve" }),
      });
      const data = await res.json();
      if (res.ok) {
        setCampaignStatus("approved");
        setStatusMessage("Campaign approved! Ready to send.");
      } else {
        setCampaignStatus("error");
        setStatusMessage(data.error || "Failed to approve.");
      }
    } catch {
      setCampaignStatus("error");
      setStatusMessage("Network error.");
    }
  };

  const handleSend = async () => {
    if (!campaignId) return;
    setCampaignStatus("sending");
    setStatusMessage("Sending newsletter to subscribers...");
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campaign_id: campaignId }),
      });
      const data = await res.json();
      if (res.ok) {
        setCampaignStatus("sent");
        setSendResult({ sent: data.sent, failed: data.failed, total: data.total_subscribers });
        setStatusMessage(`Newsletter sent to ${data.sent} subscribers!`);
      } else {
        setCampaignStatus("error");
        setStatusMessage(data.error || "Failed to send.");
      }
    } catch {
      setCampaignStatus("error");
      setStatusMessage("Network error during sending.");
    }
  };

  const resetForm = () => {
    setFormData({ subject: "", headline: "", body: "", image_url: "", cta_text: "", cta_url: "", segment: "" });
    setCampaignId(null);
    setCampaignStatus("idle");
    setStatusMessage("");
    setSendResult(null);
    setStep("compose");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Admin Header */}
      <div className="bg-[#4C5254] pt-24 pb-8">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="text-[#FF8F75]" size={28} />
            <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">
              Newsletter Studio
            </h1>
          </div>
          <p className="text-[#9EB8BD] text-sm font-body">
            Create beautiful newsletters for your subscribers
          </p>

          {/* Step Indicator */}
          <div className="flex items-center gap-2 mt-6">
            {(["compose", "preview", "send"] as Step[]).map((s, i) => {
              const icons = [FileText, Eye, Send];
              const labels = ["Compose", "Preview", "Send"];
              const Icon = icons[i];
              const isActive = step === s;
              const isPast = (["compose", "preview", "send"] as Step[]).indexOf(step) > i;
              return (
                <div key={s} className="flex items-center gap-2">
                  {i > 0 && (
                    <div className={`w-8 h-px ${isPast ? "bg-[#FF8F75]" : "bg-gray-600"}`} />
                  )}
                  <button
                    onClick={() => {
                      if (s === "compose" || isPast || isActive) setStep(s);
                      if (s === "preview" && step === "compose") setStep("preview");
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-body transition-all ${
                      isActive
                        ? "bg-[#FF8F75] text-white"
                        : isPast
                        ? "bg-[#FF8F75]/20 text-[#FF8F75]"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    <Icon size={16} />
                    {labels[i]}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* STEP 1: COMPOSE */}
        {step === "compose" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Left: Template Selection */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-[#E5DED5] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="text-[#FF8F75]" size={20} />
                  <h2 className="text-lg font-display font-semibold text-[#4C5254]">
                    Choose Template
                  </h2>
                </div>
                <div className="space-y-3">
                  {Object.values(templates).map((tmpl) => (
                    <button
                      key={tmpl.id}
                      onClick={() => setSelectedTemplate(tmpl.id as TemplateName)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        selectedTemplate === tmpl.id
                          ? "border-[#FF8F75] bg-[#FF8F75]/5"
                          : "border-[#E5DED5] hover:border-[#9EB8BD]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-display font-semibold text-[#4C5254]">
                          {tmpl.name}
                        </h3>
                        {selectedTemplate === tmpl.id && (
                          <CheckCircle size={18} className="text-[#FF8F75]" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 font-body leading-relaxed">
                        {tmpl.description}
                      </p>
                      <p className="text-xs text-[#9EB8BD] font-body mt-2 italic">
                        {tmpl.preview}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Audience Segment */}
                <div className="mt-6 pt-6 border-t border-[#E5DED5]">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="text-[#9EB8BD]" size={18} />
                    <h3 className="text-sm font-display font-semibold text-[#4C5254]">
                      Audience
                    </h3>
                  </div>
                  <select
                    value={formData.segment}
                    onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E5DED5] rounded-lg text-sm font-body text-[#4C5254] bg-white focus:outline-none focus:border-[#FF8F75] focus:ring-2 focus:ring-[#FF8F75]/20"
                  >
                    {segmentOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Right: Content Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-[#E5DED5] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Type className="text-[#FF8F75]" size={20} />
                  <h2 className="text-lg font-display font-semibold text-[#4C5254]">
                    Content
                  </h2>
                </div>

                <div className="space-y-5">
                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium font-body text-[#4C5254] mb-1.5">
                      Email Subject Line
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g., You're Invited: Wine Tasting Evening at Local House"
                      className="w-full px-4 py-3 border border-[#E5DED5] rounded-lg text-sm font-body text-[#4C5254] placeholder-gray-400 focus:outline-none focus:border-[#FF8F75] focus:ring-2 focus:ring-[#FF8F75]/20"
                    />
                    <p className="mt-1 text-xs text-gray-400 font-body">This appears in the inbox. Keep it under 60 characters.</p>
                  </div>

                  {/* Headline */}
                  <div>
                    <label className="block text-sm font-medium font-body text-[#4C5254] mb-1.5">
                      Headline
                    </label>
                    <input
                      type="text"
                      value={formData.headline}
                      onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                      placeholder="e.g., An Evening of Fine Wine & Coastal Cuisine"
                      className="w-full px-4 py-3 border border-[#E5DED5] rounded-lg text-sm font-body text-[#4C5254] placeholder-gray-400 focus:outline-none focus:border-[#FF8F75] focus:ring-2 focus:ring-[#FF8F75]/20"
                    />
                    <p className="mt-1 text-xs text-gray-400 font-body">The big title inside the email.</p>
                  </div>

                  {/* Body */}
                  <div>
                    <label className="block text-sm font-medium font-body text-[#4C5254] mb-1.5">
                      Message Body
                    </label>
                    <textarea
                      value={formData.body}
                      onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                      placeholder="Write your newsletter content here. You can use HTML for formatting: <b>bold</b>, <i>italic</i>, <br> for line breaks, <a href='...'>links</a>"
                      rows={8}
                      className="w-full px-4 py-3 border border-[#E5DED5] rounded-lg text-sm font-body text-[#4C5254] placeholder-gray-400 focus:outline-none focus:border-[#FF8F75] focus:ring-2 focus:ring-[#FF8F75]/20 resize-y"
                    />
                    <p className="mt-1 text-xs text-gray-400 font-body">
                      Supports basic HTML: &lt;b&gt;, &lt;i&gt;, &lt;br&gt;, &lt;a href="..."&gt;
                    </p>
                  </div>

                  {/* Hero Image */}
                  <div>
                    <label className="block text-sm font-medium font-body text-[#4C5254] mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <Image size={14} />
                        Hero Image URL
                        <span className="text-gray-400 font-normal">(optional)</span>
                      </span>
                    </label>
                    <input
                      type="url"
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                      placeholder="https://example.com/your-image.jpg"
                      className="w-full px-4 py-3 border border-[#E5DED5] rounded-lg text-sm font-body text-[#4C5254] placeholder-gray-400 focus:outline-none focus:border-[#FF8F75] focus:ring-2 focus:ring-[#FF8F75]/20"
                    />
                  </div>

                  {/* CTA */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium font-body text-[#4C5254] mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <MousePointerClick size={14} />
                          Button Text
                          <span className="text-gray-400 font-normal">(optional)</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        value={formData.cta_text}
                        onChange={(e) => setFormData({ ...formData, cta_text: e.target.value })}
                        placeholder="e.g., Reserve Your Seat"
                        className="w-full px-4 py-3 border border-[#E5DED5] rounded-lg text-sm font-body text-[#4C5254] placeholder-gray-400 focus:outline-none focus:border-[#FF8F75] focus:ring-2 focus:ring-[#FF8F75]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-body text-[#4C5254] mb-1.5">
                        Button Link
                      </label>
                      <input
                        type="url"
                        value={formData.cta_url}
                        onChange={(e) => setFormData({ ...formData, cta_url: e.target.value })}
                        placeholder="https://localhouse.com/..."
                        className="w-full px-4 py-3 border border-[#E5DED5] rounded-lg text-sm font-body text-[#4C5254] placeholder-gray-400 focus:outline-none focus:border-[#FF8F75] focus:ring-2 focus:ring-[#FF8F75]/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E5DED5]">
                  <p className="text-xs text-gray-400 font-body">
                    {formData.subject ? `Subject: "${formData.subject}"` : "Fill in the fields above"}
                  </p>
                  <button
                    onClick={() => setStep("preview")}
                    disabled={!formData.subject || !formData.headline || !formData.body}
                    className="flex items-center gap-2 px-6 py-3 bg-[#FF8F75] text-white font-medium font-body text-sm rounded-lg hover:bg-[#e67c63] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                  >
                    <Eye size={16} />
                    Preview Email
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 2: PREVIEW */}
        {step === "preview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setStep("compose")}
                className="flex items-center gap-2 text-sm font-body text-[#4C5254] hover:text-[#FF8F75] transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Edit
              </button>
              <div className="flex items-center gap-3">
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value as TemplateName)}
                  className="px-3 py-2 border border-[#E5DED5] rounded-lg text-sm font-body text-[#4C5254] bg-white focus:outline-none focus:border-[#FF8F75]"
                >
                  {Object.values(templates).map((t) => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
                <button
                  onClick={() => {
                    // Refresh preview
                    if (previewRef.current) {
                      const doc = previewRef.current.contentDocument;
                      if (doc) {
                        doc.open();
                        doc.write(generatePreview().replace(/{{first_name}}/g, "Guest"));
                        doc.close();
                      }
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 border border-[#E5DED5] rounded-lg text-sm font-body text-[#4C5254] hover:border-[#9EB8BD] transition-colors"
                >
                  <RefreshCw size={14} />
                  Refresh
                </button>
              </div>
            </div>

            {/* Preview Container */}
            <div className="bg-white rounded-xl shadow-sm border border-[#E5DED5] overflow-hidden">
              {/* Email client mock header */}
              <div className="bg-gray-50 border-b border-[#E5DED5] px-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400 font-body">Email Preview</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-body">
                    <span className="text-gray-400 w-16">From:</span>
                    <span className="text-[#4C5254]">Local House &lt;newsletter@localhouse.com&gt;</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-body">
                    <span className="text-gray-400 w-16">Subject:</span>
                    <span className="text-[#4C5254] font-medium">{formData.subject}</span>
                  </div>
                </div>
              </div>

              {/* Email iframe */}
              <div className="flex justify-center bg-[#e8e4df] p-4 md:p-8">
                <iframe
                  ref={previewRef}
                  title="Email Preview"
                  className="w-full max-w-[620px] bg-white shadow-lg rounded"
                  style={{ minHeight: "700px", border: "none" }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => setStep("compose")}
                className="flex items-center gap-2 px-5 py-2.5 border-2 border-[#4C5254] text-[#4C5254] font-medium font-body text-sm rounded-lg hover:bg-[#4C5254] hover:text-white transition-all"
              >
                <ArrowLeft size={16} />
                Edit Content
              </button>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleSaveDraft}
                  disabled={campaignStatus === "saving"}
                  className="flex items-center gap-2 px-5 py-2.5 border-2 border-[#FF8F75] text-[#FF8F75] font-medium font-body text-sm rounded-lg hover:bg-[#FF8F75] hover:text-white transition-all disabled:opacity-50"
                >
                  {campaignStatus === "saving" ? <Loader2 size={16} className="animate-spin" /> : <FileText size={16} />}
                  Save Draft
                </button>
                <button
                  onClick={() => {
                    if (campaignStatus !== "saved" && campaignStatus !== "approved") {
                      handleSaveDraft().then(() => setStep("send"));
                    } else {
                      setStep("send");
                    }
                  }}
                  disabled={!formData.subject || !formData.headline || !formData.body}
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#FF8F75] text-white font-medium font-body text-sm rounded-lg hover:bg-[#e67c63] transition-all disabled:opacity-40 shadow-sm hover:shadow-md"
                >
                  <Send size={16} />
                  Proceed to Send
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 3: SEND */}
        {step === "send" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            {campaignStatus === "sent" ? (
              /* Success Screen */
              <div className="bg-white rounded-xl shadow-sm border border-[#E5DED5] p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h2 className="text-2xl font-display font-semibold text-[#4C5254] mb-2">
                  Newsletter Sent!
                </h2>
                <p className="text-gray-500 font-body mb-6">
                  Your newsletter has been delivered successfully.
                </p>
                {sendResult && (
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-[#FAF7F2] rounded-lg p-4">
                      <p className="text-2xl font-display font-semibold text-[#4C5254]">{sendResult.total}</p>
                      <p className="text-xs text-gray-500 font-body">Total Recipients</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-2xl font-display font-semibold text-green-600">{sendResult.sent}</p>
                      <p className="text-xs text-gray-500 font-body">Delivered</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-2xl font-display font-semibold text-red-500">{sendResult.failed}</p>
                      <p className="text-xs text-gray-500 font-body">Failed</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={resetForm}
                  className="flex items-center gap-2 px-6 py-3 bg-[#FF8F75] text-white font-medium font-body text-sm rounded-lg hover:bg-[#e67c63] transition-all mx-auto"
                >
                  <Sparkles size={16} />
                  Create Another Newsletter
                </button>
              </div>
            ) : (
              /* Send Confirmation */
              <div className="bg-white rounded-xl shadow-sm border border-[#E5DED5] p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-[#FF8F75]/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-[#FF8F75]" />
                  </div>
                  <h2 className="text-2xl font-display font-semibold text-[#4C5254] mb-2">
                    Ready to Send?
                  </h2>
                  <p className="text-gray-500 font-body">
                    Review the details below before sending your newsletter.
                  </p>
                </div>

                {/* Summary */}
                <div className="bg-[#FAF7F2] rounded-lg p-6 mb-6 space-y-3">
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-gray-500">Subject</span>
                    <span className="text-[#4C5254] font-medium">{formData.subject}</span>
                  </div>
                  <div className="h-px bg-[#E5DED5]" />
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-gray-500">Template</span>
                    <span className="text-[#4C5254] font-medium capitalize">{selectedTemplate}</span>
                  </div>
                  <div className="h-px bg-[#E5DED5]" />
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-gray-500">Audience</span>
                    <span className="text-[#4C5254] font-medium">
                      {segmentOptions.find((s) => s.value === formData.segment)?.label || "All Subscribers"}
                    </span>
                  </div>
                  <div className="h-px bg-[#E5DED5]" />
                  <div className="flex justify-between items-center text-sm font-body">
                    <span className="text-gray-500">Status</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      campaignStatus === "approved"
                        ? "bg-green-100 text-green-700"
                        : campaignStatus === "saved"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {campaignStatus === "approved" ? "Approved" : campaignStatus === "saved" ? "Draft Saved" : "Pending"}
                    </span>
                  </div>
                </div>

                {/* Status Messages */}
                {statusMessage && (
                  <div className={`flex items-center gap-2 p-3 rounded-lg mb-6 text-sm font-body ${
                    campaignStatus === "error"
                      ? "bg-red-50 text-red-600"
                      : campaignStatus === "sending"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-green-50 text-green-600"
                  }`}>
                    {campaignStatus === "error" ? (
                      <AlertCircle size={16} />
                    ) : campaignStatus === "sending" ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <CheckCircle size={16} />
                    )}
                    {statusMessage}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  {(campaignStatus === "idle" || campaignStatus === "error" || campaignStatus === "saving") && (
                    <button
                      onClick={handleSaveDraft}
                      disabled={campaignStatus === "saving"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#9EB8BD] text-[#4C5254] font-medium font-body text-sm rounded-lg hover:bg-[#9EB8BD]/10 transition-all disabled:opacity-50"
                    >
                      {campaignStatus === "saving" ? <Loader2 size={16} className="animate-spin" /> : <FileText size={16} />}
                      1. Save as Draft
                    </button>
                  )}
                  {(campaignStatus === "saved" || campaignStatus === "approving") && (
                    <button
                      onClick={handleApprove}
                      disabled={campaignStatus === "approving"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#FF8F75] text-[#FF8F75] font-medium font-body text-sm rounded-lg hover:bg-[#FF8F75]/10 transition-all disabled:opacity-50"
                    >
                      {campaignStatus === "approving" ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle size={16} />}
                      2. Approve Campaign
                    </button>
                  )}
                  {campaignStatus === "approved" && (
                    <button
                      onClick={handleSend}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#FF8F75] text-white font-semibold font-body text-base rounded-lg hover:bg-[#e67c63] transition-all shadow-md hover:shadow-lg"
                    >
                      <Send size={18} />
                      Send Newsletter Now
                    </button>
                  )}
                  {campaignStatus === "sending" && (
                    <div className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-500 font-medium font-body text-sm rounded-lg">
                      <Loader2 size={18} className="animate-spin" />
                      Sending in progress... Please wait.
                    </div>
                  )}
                </div>

                {/* Back buttons */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E5DED5]">
                  <button
                    onClick={() => setStep("preview")}
                    className="flex items-center gap-2 text-sm font-body text-[#4C5254] hover:text-[#FF8F75] transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Back to Preview
                  </button>
                  <button
                    onClick={() => setStep("compose")}
                    className="text-sm font-body text-gray-400 hover:text-[#4C5254] transition-colors"
                  >
                    Edit Content
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
