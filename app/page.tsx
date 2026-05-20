import type { Metadata } from "next";
import { Mail, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-[#f5f0e8] flex flex-col">

      {/* Top rule */}
      <div className="w-full h-1 bg-[#8b1a1a]" />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">

        {/* Masthead */}
        <div className="text-center mb-12 max-w-2xl">
          <p className="sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b1a1a] mb-4">
            Southport &bull; Est. 2026
          </p>
          <h1 className="text-[64px] sm:text-[88px] font-bold text-[#1a1a1a] leading-[0.9] mb-6 tracking-tight">
            The<br />Sandgrounder
          </h1>
          <div className="w-16 h-px bg-[#8b1a1a] mx-auto mb-6" />
          <p className="text-xl text-[#3a3a3a] leading-relaxed max-w-lg mx-auto" style={{ fontStyle: "italic" }}>
            For Sandgrounders. By Sandgrounders.
          </p>
        </div>

        {/* What it is */}
        <div className="max-w-xl w-full mb-12 border border-[#d4c9b0] bg-white p-8">
          <p className="sans text-[11px] font-bold uppercase tracking-widest text-[#8b1a1a] mb-4">
            What This Is
          </p>
          <p className="text-[16px] text-[#2a2a2a] leading-relaxed mb-4">
            The Sandgrounder is an independent publication for Southport. Opinion, satire, and honest reporting about the town we live in.
          </p>
          <p className="text-[16px] text-[#2a2a2a] leading-relaxed mb-4">
            Not a guide. Not a promotional platform. Not a press release dressed up as news.
          </p>
          <p className="text-[16px] text-[#2a2a2a] leading-relaxed">
            The truth about Southport, told plainly, by people who actually live here.
          </p>
        </div>

        {/* Coming soon / email */}
        <div className="max-w-xl w-full mb-12 border border-[#d4c9b0] bg-[#1a1a1a] p-8">
          <p className="sans text-[11px] font-bold uppercase tracking-widest text-[#c9a84c] mb-4">
            Launching Soon
          </p>
          <p className="text-[16px] text-[#d4c9b0] leading-relaxed mb-6">
            The first issue is coming. Sign up and you will be the first to read it.
          </p>
          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="sans flex-1 px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder-[#6a6a6a] text-[14px] focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
            <button
              type="submit"
              className="sans inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8b1a1a] text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#a02020] transition-colors"
            >
              <Mail size={13} />
              Notify me
            </button>
          </form>
          <p className="sans text-[11px] text-[#5a5a5a] mt-3">
            No spam. One email when we launch. That is all.
          </p>
        </div>

        {/* Three pillars */}
        <div className="max-w-xl w-full grid sm:grid-cols-3 gap-px bg-[#d4c9b0] border border-[#d4c9b0] mb-12">
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
            <div key={item.label} className="bg-[#f5f0e8] p-5">
              <p className="sans text-[10px] font-bold uppercase tracking-widest text-[#8b1a1a] mb-2">
                {item.label}
              </p>
              <p className="text-[13px] text-[#4a4a4a] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Sister sites */}
        <div className="max-w-xl w-full">
          <p className="sans text-[11px] text-[#7a6f5e] text-center mb-4">
            From the team behind
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.siba.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="sans inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-[#d4c9b0] bg-white text-[12px] font-bold text-[#1a1a1a] hover:bg-[#ede8dc] transition-colors"
            >
              siba.digital
              <ArrowRight size={11} />
            </a>
            <a
              href="https://www.southportguide.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="sans inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-[#d4c9b0] bg-white text-[12px] font-bold text-[#1a1a1a] hover:bg-[#ede8dc] transition-colors"
            >
              southportguide.co.uk
              <ArrowRight size={11} />
            </a>
          </div>
        </div>

      </main>

      {/* Bottom rule */}
      <div className="w-full border-t border-[#d4c9b0] py-6 px-4">
        <p className="sans text-[11px] text-[#7a6f5e] text-center">
          The Sandgrounder is an independent publication. Not affiliated with Sefton Council, Southport BID, or any promotional body.
        </p>
      </div>

      {/* Bottom accent rule */}
      <div className="w-full h-1 bg-[#8b1a1a]" />

    </div>
  );
}
