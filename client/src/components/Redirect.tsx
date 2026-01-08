import { useEffect } from "react";
import { useLocation } from "wouter";

interface RedirectProps {
  to: string;
}

/**
 * SEO Redirect Component
 * Handles client-side redirects for old URLs
 * Note: For proper 301 redirects, server-side configuration is needed
 */
export function Redirect({ to }: RedirectProps) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation(to, { replace: true });
  }, [to, setLocation]);

  return null;
}

export default Redirect;
