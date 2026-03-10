import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n/config";

// Declare gtag_report_conversion function from index.html
declare global {
  function gtag_report_conversion(url: string): boolean;
}

createRoot(document.getElementById("root")!).render(<App />);
