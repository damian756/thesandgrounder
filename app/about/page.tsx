import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata: Metadata = {
  title: "About | The Sandgrounder",
  description:
    "What The Sandgrounder is, who is behind it, and why it exists.",
  alternates: { canonical: "https://www.thesandgrounder.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="w-full h-1 bg-[#9b2020]" />
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-10 sm:py-16">

        <div className="mb-10">
          <p
            className="text-[10px] font-bold uppercase tracking-widest text-[#9b2020] mb-2"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            The Sandgrounder
          </p>
          <h1
            className="text-[40px] sm:text-[52px] text-[#1c1c1c] leading-[1.05]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
          >
            About
          </h1>
        </div>

        <div className="mb-10">
          <ImageLightbox
            src="/images/about-desk.png"
            alt="A desk viewed from above showing The Sandgrounder newspaper, a Companies House printout, a supplier spend spreadsheet with figures circled in red, an FOI folder, a pen, and a cold cup of tea"
            width={1080}
            height={720}
            priority
          />
        </div>

        <div className="space-y-5 text-[16px] text-[#2a2a2a] leading-relaxed mb-12" style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}>
          <p>
            The Sandgrounder is an independent publication for Southport. It exists because the town has a gap that most local media does not fill: honest, unsponsored opinion and reporting from people who actually live here.
          </p>
          <p>
            We are not a guide. We are not a promotional platform. We do not carry press releases dressed as news, sponsored content dressed as reviews, or council announcements dressed as journalism.
          </p>
          <p>
            We have three sections. Opinion covers what the town actually thinks. Satire covers the things best said with a cartoon of a pig. Reporting covers primary sources, public records, and things people in public life would sometimes prefer were not reported at all.
          </p>
          <p>
            The name comes from the Sandgrounder, the nickname for people born and bred in Southport. It is a term of belonging, not exclusion. Visitors are welcome. But this is written by people who have skin in the game.
          </p>
          <p>
            The Sandgrounder is produced by Churchtown Media, the same team behind{" "}
            <a href="https://www.siba.digital" className="text-[#9b2020] underline underline-offset-2 hover:no-underline">siba.digital</a>{" "}
            and{" "}
            <a href="https://www.southportguide.co.uk" className="text-[#9b2020] underline underline-offset-2 hover:no-underline">southportguide.co.uk</a>.
          </p>
          <p>
            We are not affiliated with Sefton Council, Southport BID, Savills, or any other body with a financial interest in the town&apos;s perception. We have no advertising relationships to protect. We have no grant funding to lose.
          </p>
        </div>

        <div className="bg-[#1c1c1c] rounded-2xl p-8">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8860b] mb-3"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Stay in the loop
          </p>
          <p
            className="text-[16px] text-[#c8bfb0] mb-6"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            New pieces straight to your inbox. No promotional content. No third parties.
          </p>
          <SignupForm />
        </div>

      </main>
      <Footer />
    </>
  );
}
