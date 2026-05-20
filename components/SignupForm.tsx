"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 py-4">
        <CheckCircle size={20} className="text-[#c9a84c] flex-shrink-0" />
        <p className="text-[14px] text-[#c8bfb0]" style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}>
          You&apos;re on the list. We&apos;ll be in touch when we launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 px-4 py-3 rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder-[#6a6a6a] text-[14px] focus:outline-none focus:border-[#b8860b] transition-colors disabled:opacity-50"
        style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#9b2020] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#b02525] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
      >
        <Mail size={13} />
        {status === "loading" ? "Sending..." : "Notify me"}
      </button>
      {status === "error" && (
        <p className="text-[12px] text-red-400 mt-1 sm:col-span-2" style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
