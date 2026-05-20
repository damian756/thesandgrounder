import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Legal & Editorial Standards | The Sandgrounder",
  description: "Legal notices, editorial standards, and right of reply policy for The Sandgrounder.",
  alternates: { canonical: "https://www.thesandgrounder.com/legal" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        className="text-[18px] font-bold text-[#1c1c1c] mb-3"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h2>
      <div
        className="space-y-3 text-[15px] text-[#3a3530] leading-relaxed"
        style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function LegalPage() {
  return (
    <>
      <div className="w-full h-1 bg-[#9b2020]" />
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1
          className="text-[32px] sm:text-[42px] text-[#1c1c1c] leading-[1.1] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
        >
          Legal and Editorial Standards
        </h1>
        <p
          className="text-[13px] text-[#9a9088] mb-10"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          Last updated: May 2026
        </p>

        <Section title="Publisher">
          <p>
            The Sandgrounder is published by Churchtown Media.             For editorial enquiries or legal correspondence, use our <a href="/contact" className="text-[#9b2020] underline underline-offset-2">contact form</a>.
          </p>
        </Section>

        <Section title="Satire">
          <p>
            Content published under the Satire category is satirical. It uses exaggeration, irony, and fictional framing to comment on matters of public interest. Satirical pieces are clearly labelled and include a disclaimer identifying them as satire.
          </p>
          <p>
            Where factual claims appear within satire, those claims are drawn from public records and are accurate. The satirical framing does not alter the accuracy of the underlying facts.
          </p>
        </Section>

        <Section title="Reporting">
          <p>
            Content published under the Reporting category makes factual claims about named individuals and organisations in their public capacity. All factual claims are sourced to primary public records, including Companies House filings, council-published supplier spend data, Freedom of Information disclosures, Land Registry title registers, and publicly filed accounts.
          </p>
          <p>
            We do not allege personal dishonesty or criminal conduct. We report documented structural conflicts of interest and governance failures as they appear in the public record.
          </p>
          <p>
            Source documentation for all reporting is maintained at{" "}
            <a href="https://www.siba.digital" className="text-[#9b2020] underline underline-offset-2">siba.digital</a>.
          </p>
        </Section>

        <Section title="Right of reply">
          <p>
            Before publishing any piece that makes factual claims about named individuals or organisations, The Sandgrounder sends a right-of-reply letter to those named, providing a reasonable opportunity to respond. Responses received before publication are incorporated into the piece. Responses received after publication are published as addenda.
          </p>
          <p>
            If you have received a right-of-reply letter or wish to respond to a published piece, use our <a href="/contact" className="text-[#9b2020] underline underline-offset-2">contact form</a>.
          </p>
        </Section>

        <Section title="Corrections">
          <p>
            If you believe any factual claim published on this site is inaccurate, we invite you to contact us with supporting evidence. We investigate all correction requests and publish corrections promptly where errors are confirmed.
          </p>
        </Section>

        <Section title="Independence">
          <p>
            The Sandgrounder is not affiliated with Sefton Council, Southport BID, any council-connected company, or any commercial partner of those bodies. We do not accept advertising. We do not accept payments from the organisations we cover. We do not have undisclosed commercial relationships with any party whose activities we report on.
          </p>
        </Section>

        <Section title="Opinion">
          <p>
            Content published under the Opinion category represents the views of the author. Opinion pieces are clearly labelled. They are distinguished from factual reporting. Where opinion pieces reference factual matters, those facts are accurate.
          </p>
        </Section>

        <Section title="Jurisdiction">
          <p>
            This publication is subject to the laws of England and Wales.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
