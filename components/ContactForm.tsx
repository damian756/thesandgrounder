"use client";

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";

const FONT = { fontFamily: "var(--font-lato), Arial, sans-serif" };

const SUBJECTS = [
  "General enquiry",
  "News tip",
  "Right of reply",
  "Correction",
  "Press enquiry",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        const data = await res.json();
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Could not send message. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-[#e6f4ea] rounded-full flex items-center justify-center">
            <Check size={22} className="text-[#2a7a40]" />
          </div>
        </div>
        <p
          className="text-[16px] font-bold text-[#1c1c1c] mb-2"
          style={FONT}
        >
          Message sent
        </p>
        <p className="text-[14px] text-[#7a7069]" style={FONT}>
          We read everything and will get back to you if a response is needed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a7069] mb-1.5"
          style={FONT}
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[14px] text-[#1c1c1c] placeholder:text-[#c0b8b0] focus:outline-none focus:ring-2 focus:ring-[#9b2020]/30 transition"
          style={FONT}
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a7069] mb-1.5"
          style={FONT}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[14px] text-[#1c1c1c] placeholder:text-[#c0b8b0] focus:outline-none focus:ring-2 focus:ring-[#9b2020]/30 transition"
          style={FONT}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a7069] mb-1.5"
          style={FONT}
        >
          Subject
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[14px] text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#9b2020]/30 transition"
          style={FONT}
        >
          <option value="">Select a subject</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a7069] mb-1.5"
          style={FONT}
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[14px] text-[#1c1c1c] placeholder:text-[#c0b8b0] focus:outline-none focus:ring-2 focus:ring-[#9b2020]/30 transition resize-none"
          style={FONT}
          placeholder="Your message..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl bg-[#fdf0f0] px-4 py-3">
          <AlertCircle size={15} className="text-[#9b2020] flex-shrink-0" />
          <p className="text-[13px] text-[#9b2020]" style={FONT}>{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-xl bg-[#9b2020] px-6 py-2.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={FONT}
      >
        <Send size={14} />
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
