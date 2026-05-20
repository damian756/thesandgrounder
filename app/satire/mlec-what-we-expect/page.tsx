import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import ImageLightbox from "@/components/ImageLightbox";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "The MLEC: what we expect | The Sandgrounder",
  description:
    "The Marine Lake Events Centre will open. At some point. Here are our predictions for when it does.",
  alternates: {
    canonical: "https://www.thesandgrounder.com/satire/mlec-what-we-expect",
  },
  openGraph: {
    title: "The MLEC: what we expect",
    description:
      "The Marine Lake Events Centre will open. At some point. Here are our predictions for when it does.",
    url: "https://www.thesandgrounder.com/satire/mlec-what-we-expect",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/mlec-predictions.png",
        width: 1080,
        height: 720,
        alt: "Council officials celebrating in front of the unfinished MLEC construction site, banner reading Celebrating Our Success, someone holding a falling vacancy rate graph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The MLEC: what we expect",
    description: "The Marine Lake Events Centre will open. At some point. Here are our predictions for when it does.",
    images: ["https://www.thesandgrounder.com/images/mlec-predictions.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The MLEC: what we expect",
  description:
    "The Marine Lake Events Centre will open. At some point. Here are our predictions for when it does.",
  datePublished: "2026-05-20",
  image: "https://www.thesandgrounder.com/images/mlec-predictions.png",
  author: {
    "@type": "Organization",
    name: "The Sandgrounder",
    url: "https://www.thesandgrounder.com",
  },
  publisher: {
    "@type": "Organization",
    name: "The Sandgrounder",
    url: "https://www.thesandgrounder.com",
  },
};

const predictions: { n: number; heading: string; body: string }[] = [
  {
    n: 1,
    heading: "The opening ceremony will involve champagne.",
    body: "This is not a criticism. Champagne at an opening ceremony is standard. We mention it because Sefton Council has demonstrated a consistent preference for celebrating milestones rather than completing them. We want the record to show we called it.",
  },
  {
    n: 2,
    heading: "The 515,000 visitor projection will appear in the first press release.",
    body: "The figure comes from a viability study commissioned as part of the Towns Fund bid. It represents additional annual visitors. We have seen similar projections attached to similar venues in similar towns. We note them here and look forward to checking back in 2029.",
  },
  {
    n: 3,
    heading: "Someone will describe it as world-class.",
    body: "We are recording this prediction now so that when it happens the reader knows it happened on schedule. The Sandgrounder does not use the phrase world-class. We cannot speak for everyone.",
  },
  {
    n: 4,
    heading: "The consultation fees will not be broken down publicly.",
    body: "Approximately £13 million was spent before a contractor was appointed. This is not unusual for a publicly-funded project of this scale and complexity. The itemised breakdown has not been published. A Freedom of Information request is outstanding. We predict it will remain commercially sensitive.",
  },
  {
    n: 5,
    heading: "The operator agreement terms will be commercially sensitive.",
    body: "A £73 million publicly-funded venue. A private operator. Commercially sensitive contractual terms. This is the standard arrangement and there is no particular reason to expect Southport will be different. The Service Level Agreement for the BID was commercially sensitive too. We have a copy of that one.",
  },
  {
    n: 6,
    heading: "The vacancy rate on Lord Street will be cited as the reason the MLEC was necessary.",
    body: "It will not be used to explain what was done about it in the preceding ten years.",
  },
  {
    n: 7,
    heading: "The first major event will be described as a huge success.",
    body: "Attendance figures will be described as exceeding expectations. The specific figures will not be published. This is also standard.",
  },
  {
    n: 8,
    heading: "A planning application for a hotel adjacent to the MLEC will follow within eighteen months.",
    body: "This is not a criticism. It is the point. The MLEC was designed to make the marine lake area commercially attractive to private development. That is what regeneration means. We simply note that some of the parties best placed to benefit from that uplift have been involved in adjacent roles throughout the process. We look forward to checking the Land Registry.",
  },
  {
    n: 9,
    heading: "The car park will be a source of ongoing discussion.",
    body: "Marine Drive car park fills by 10am on a summer Saturday without a 515,000-visitor magnet on the waterfront. We have flagged this. Nobody has asked us.",
  },
  {
    n: 10,
    heading: "We will be told the MLEC has transformed Southport.",
    body: "We will check the vacancy rate on Lord Street. We will check the number of independent businesses open within half a mile of the site. We will report back. We are keeping this edition.",
  },
];

export default function MlecPredictionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="w-full h-1 bg-[#9b2020]" />
      <Nav />

      <main className="mx-auto max-w-2xl px-4 py-10 sm:py-16">

        <div className="mb-8">
          <Link
            href="/satire"
            className="inline-flex items-center gap-1.5 text-[12px] text-[#9a9088] hover:text-[#1c1c1c] transition-colors"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            <ArrowLeft size={12} />
            Satire
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              color: "#8a6800",
              backgroundColor: "#fdf8e8",
              fontFamily: "var(--font-lato), Arial, sans-serif",
            }}
          >
            Satire
          </span>
          <span
            className="text-[12px] text-[#9a9088]"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            20 May 2026
          </span>
        </div>

        <h1
          className="text-[36px] sm:text-[48px] text-[#1c1c1c] leading-[1.1] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
        >
          The MLEC: what we expect
        </h1>

        <p
          className="text-[15px] text-[#7a7069] italic mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          The Marine Lake Events Centre will open. At some point. Here are our predictions for when it does.
        </p>

        {/* Illustration */}
        <div className="mb-10">
          <ImageLightbox
            src="/images/mlec-predictions.png"
            alt="Council officials celebrating in front of the unfinished MLEC construction site, banner reading Celebrating Our Success, someone holding a falling vacancy rate graph"
            width={1080}
            height={720}
            caption="An artist's impression of the project status update. The vacancy rate graph is accurate."
            priority
          />
        </div>

        {/* Intro */}
        <div
          className="space-y-4 text-[16px] text-[#2a2a2a] leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p>
            The Marine Lake Events Centre will open. At some point. The precise date has moved several times since the project was announced and there is no particular reason to believe the current timeline is the final one. But it will open.
          </p>
          <p>
            It will cost £73 million of public money. It will promise 515,000 additional visitors annually. It will have a Savills-connected property consultant somewhere in the supply chain. And when it opens, we will be told it has transformed Southport.
          </p>
          <p>
            We have ten specific predictions. We are publishing them now so they can be checked later. We will keep a copy.
          </p>
        </div>

        {/* Predictions */}
        <div className="space-y-6 mb-12">
          {predictions.map((p) => (
            <div key={p.n} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start gap-4">
                <span
                  className="text-[28px] font-bold text-[#e8dfd0] leading-none flex-shrink-0 mt-0.5"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {p.n}
                </span>
                <div>
                  <p
                    className="text-[16px] font-bold text-[#1c1c1c] mb-2"
                    style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
                  >
                    {p.heading}
                  </p>
                  <p
                    className="text-[14px] text-[#4a4540] leading-relaxed"
                    style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div
          className="space-y-4 text-[16px] text-[#2a2a2a] leading-relaxed mb-12 pt-6 border-t border-[#e8e0d4]"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p>
            The Sandgrounder will be here when it opens. We will check each of these predictions against the record. We will publish our findings.
          </p>
          <p>
            We have been told the MLEC will bring half a million additional visitors to Southport every year. We genuinely hope it does. The town could use them.
          </p>
          <p>
            We just want to be sure someone is keeping score.
          </p>
        </div>

        {/* Disclaimer */}
        <div
          className="text-[11px] text-[#9a9088] mb-10 p-4 bg-[#fdf8e8] rounded-xl"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          This is satire. The predictions are the authors&apos; own. The facts cited (£73m public funding, £13m pre-contract spend, 515,000 visitor projection, VINCI appointment, Savills payment history) are drawn from public records and outstanding FOI requests documented at{" "}
          <a href="https://www.siba.digital" className="text-[#8a6800] underline underline-offset-2">siba.digital</a>.
        </div>

        <ShareButtons
          path="/satire/mlec-what-we-expect"
          title="The MLEC: what we expect"
          excerpt="The Marine Lake Events Centre will open. At some point. Here are our predictions for when it does."
        />

        {/* Subscribe */}
        <div className="bg-[#1c1c1c] rounded-2xl p-8 mb-8">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8860b] mb-3"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Stay in the loop
          </p>
          <p
            className="text-[15px] text-[#c8bfb0] mb-5"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            New pieces straight to your inbox.
          </p>
          <SignupForm />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/satire"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            All satire <ArrowRight size={11} />
          </Link>
          <Link
            href="https://www.siba.digital/reports"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            The evidence: siba.digital <ArrowRight size={11} />
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
