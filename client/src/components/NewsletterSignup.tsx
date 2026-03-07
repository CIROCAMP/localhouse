import { useState } from "react";
import { Mail } from "lucide-react";

const SUPABASE_URL = "https://kzqvdwibtuoronyphiuq.supabase.co";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, first_name: firstName }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're in! Check your inbox for a welcome email.");
        setEmail("");
        setFirstName("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#3a3d3f] border-t border-gray-700">
      <div className="container py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="text-[#FF8F75]" size={24} />
            <h3 className="text-xl font-display font-semibold text-white">
              Stay in the Know
            </h3>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Get exclusive updates on events, seasonal menus, and special offers. No spam, just good vibes.
          </p>

          {status === "success" ? (
            <p className="text-[#FF8F75] font-medium py-4">{message}</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="px-4 py-3 bg-white/10 border border-gray-600 rounded text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF8F75] sm:w-32"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF8F75]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-[#FF8F75] text-white font-medium text-sm rounded hover:bg-[#e67c63] transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">{message}</p>
          )}

          <p className="text-gray-600 text-xs mt-4">
            By subscribing you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
