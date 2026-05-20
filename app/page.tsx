import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "The Sandgrounder | Coming Soon",
  description:
    "Independent opinion, satire, and honest reporting from Southport. For Sandgrounders. By Sandgrounders. Launching soon.",
  alternates: {
    canonical: "https://www.thesandgrounder.com",
  },
  openGraph: {
    title: "The Sandgrounder",
    description:
      "Independent opinion and honest reporting from Southport. For Sandgrounders. By Sandgrounders.",
    url: "https://www.thesandgrounder.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4efe6] flex flex-col">

      {/* Top accent */}
      <div className="w-full h-1 bg-[#9b2020]" />

      <main className="flex-1 flex flex-col items-center px-4 py-16 sm:py-24">

        {/* Masthead */}
        <div className="text-center mb-14 max-w-xl w-full">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9b2020] mb-5"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Southport &bull; Est. 2026
          </p>
          <h1
            className="text-[62px] sm:text-[82px] text-[#1c1c1c] leading-[0.95] mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
          >
            The<br />Sandgrounder
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[#d8cfc2]" />
            <span
              className="text-[13px] text-[#7a7069] italic"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              For Sandgrounders. By Sandgrounders.
            </span>
            <div className="h-px flex-1 bg-[#d8cfc2]" />
          </div>
        </div>

        {/* What it is */}
        <div className="max-w-xl w-full mb-5 bg-white rounded-2xl shadow-sm p-8">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b2020] mb-4"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            What This Is
          </p>
          <p className="text-[16px] text-[#2a2a2a] leading-relaxed mb-3">
            The Sandgrounder is an independent publication for Southport. Opinion, satire, and honest reporting about the town we live in.
          </p>
          <p className="text-[16px] text-[#2a2a2a] leading-relaxed mb-3">
            Not a guide. Not a promotional platform. Not a press release dressed up as news.
          </p>
          <p className="text-[16px] text-[#2a2a2a] leading-relaxed">
            The truth about Southport, told plainly, by people who actually live here.
          </p>
        </div>

        {/* Email signup */}
        <div className="max-w-xl w-full mb-5 bg-[#1c1c1c] rounded-2xl shadow-sm p-8">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8860b] mb-3"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Launching Soon
          </p>
          <p className="text-[16px] text-[#c8bfb0] leading-relaxed mb-6">
            The first issue is coming. Sign up and you will be the first to read it.
          </p>
          <SignupForm />
          <p
            className="text-[11px] text-[#5a5248] mt-3"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            No spam. One email when we launch. That is all.
          </p>
        </div>

        {/* Three pillars */}
        <div className="max-w-xl w-full grid sm:grid-cols-3 gap-4 mb-14">
          {[
            {
              label: "Opinion",
              text: "What the town actually thinks. Not what the press release says.",
            },
            {
              label: "Satire",
              text: "Because some things are best said with a cartoon of a pig.",
            },
            {
              label: "Reporting",
              text: "Primary sources. Public records. No promotional copy.",
            },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl shadow-sm p-5">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b2020] mb-2"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                {item.label}
              </p>
              <p className="text-[13px] text-[#4a4540] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Sister sites */}
        <div className="max-w-xl w-full text-center">
          <p
            className="text-[11px] text-[#9a9088] mb-4"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            From the team behind
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.siba.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-white shadow-sm text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              siba.digital
              <ArrowRight size={11} />
            </a>
            <a
              href="https://www.southportguide.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-white shadow-sm text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              southportguide.co.uk
              <ArrowRight size={11} />
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <div className="w-full border-t border-[#e0d8cc] py-6 px-4">
        <p
          className="text-[11px] text-[#9a9088] text-center"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          The Sandgrounder is an independent publication. Not affiliated with Sefton Council, Southport BID, or any promotional body.
        </p>
      </div>

      <div className="w-full h-1 bg-[#9b2020]" />

    </div>
  );
}
