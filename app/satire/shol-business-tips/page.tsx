import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import ImageLightbox from "@/components/ImageLightbox";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "How to run a hospitality business: a guide from SHOL | The Sandgrounder",
  description:
    "Sefton Council has been running a hospitality company for four years. Losses stand at £1.945 million. Here is what they have learned.",
  alternates: {
    canonical: "https://www.thesandgrounder.com/satire/shol-business-tips",
  },
  openGraph: {
    title: "How to run a hospitality business: a guide from SHOL",
    description:
      "Sefton Council has been running a hospitality company for four years. Losses stand at £1.945 million. Here is what they have learned.",
    url: "https://www.thesandgrounder.com/satire/shol-business-tips",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/shol-business-tips.png",
        width: 1080,
        height: 720,
        alt: "Council pigs in chef hats run a chaotic kitchen under a Losses 1.945M Today's Special sign while a scrutiny committee pig reads a newspaper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to run a hospitality business: a guide from SHOL",
    description: "Sefton Council has been running a hospitality company for four years. Losses stand at £1.945 million. Here is what they have learned.",
    images: ["https://www.thesandgrounder.com/images/shol-business-tips.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to run a hospitality business: a guide from SHOL",
  description:
    "Sefton Council has been running a hospitality company for four years. Losses stand at £1.945 million. Here is what they have learned.",
  datePublished: "2026-05-20",
  image: "https://www.thesandgrounder.com/images/shol-business-tips.png",
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

const tips: { n: number; heading: string; body: string }[] = [
  {
    n: 1,
    heading: "Do not let a lack of hospitality experience hold you back.",
    body: "None of the founding directors of Sefton Hospitality Operations Ltd had a background in running hospitality businesses. This should not be seen as a disadvantage. The hospitality industry is full of people who learned on the job. SHOL has been learning on the job for four years. The lessons have cost approximately £486,000 per year. The education continues.",
  },
  {
    n: 2,
    heading: "Choose your venues carefully. Or not at all.",
    body: "SHOL operates Cone Head, Beach House, and White House. These are Southport seafront venues. Southport seafront venues have historically been challenging commercial propositions. This was knowable before the company was incorporated. The company was incorporated anyway. There is a lesson here, though SHOL may not have found it yet.",
  },
  {
    n: 3,
    heading: "On governance: appoint your scrutiny committee chair to the board.",
    body: "The Vice Chair of Sefton Council's Overview and Scrutiny Committee (Regeneration and Skills) also serves as a SHOL director. The Overview and Scrutiny Committee exists to independently review decisions made by the council and its companies. When the person chairing scrutiny is also a director of the company being scrutinised, the reviews are very efficient. No uncomfortable questions have been asked in public. This is called streamlining.",
  },
  {
    n: 4,
    heading: "Your shareholder is the public. This is the ideal investor relationship.",
    body: "Private investors can sell their shares. They can vote against management. They can ask questions at AGMs. They can withhold further funding when losses mount. The public cannot do any of these things. SHOL has borrowed approximately £2 million from its shareholder to cover its losses. The shareholder was not consulted individually. This is a significant structural advantage that private hospitality businesses do not enjoy.",
  },
  {
    n: 5,
    heading: "Accumulated losses of £1.945 million across four years are not a failure. They are a journey.",
    body: "The hospitality industry is notoriously difficult. Margins are thin. Overheads are high. Seasons are short. SHOL has navigated all of these challenges while also navigating the additional challenge of being run by a council. When you account for the complexity of the operating environment, £1.945 million in losses over four years is, arguably, a form of resilience. SHOL is still here. That is something.",
  },
  {
    n: 6,
    heading: "When the losses grow, borrow more from the public and continue.",
    body: "Some businesses, when faced with sustained losses, conduct a strategic review. They examine whether the model is viable. They consider whether the venues are the right venues, the management is the right management, or the entire enterprise was a sound idea to begin with. SHOL has not taken this approach. It has borrowed approximately £2 million from Sefton Council, which is funded by taxpayers, and continued operating. This is called conviction.",
  },
  {
    n: 7,
    heading: "Ensure the person who writes the reports also holds the authority to act on them.",
    body: "SHOL's executive director also authored Sefton Council's report on the Sovini land deal, which handed ten public sites to a private developer without published valuations. He holds delegated authority to execute that deal. He directs SHOL. He is not, as far as public records show, scrutinised by anyone who does not also work alongside him. This is called efficiency of governance.",
  },
  {
    n: 8,
    heading: "File your accounts on time. Nobody will read them.",
    body: "SHOL's accounts are filed at Companies House and are public record. They show accumulated losses of £1.945 million. They show the shareholder loans. They show the trajectory. They have been available to any interested party for four years. No elected member has raised them publicly in council. Steve Ashcroft at Southport News was first to report the £138k council consultancy contract awarded to SHOL. The Echo and BBC followed without crediting him. The accumulated losses have not been covered elsewhere. The one outlet that might have covered them — Stand Up For Southport, whose proprietor is paid by the council — has not. Filing your accounts is a legal requirement, not a risk.",
  },
  {
    n: 9,
    heading: "On expansion: keep going.",
    body: "After four years and nearly £4 million of public money consumed in losses and loans, the question of whether SHOL should continue to operate has not been publicly debated. There has been no published review. No published options appraisal. No published exit strategy. The company continues to operate. The losses continue to accumulate. The public continues to fund it. In private business, this is called insolvency. In the public sector, it is called an ongoing commitment to the visitor economy.",
  },
  {
    n: 10,
    heading: "Define success broadly.",
    body: "The venues have not closed. The accounts have been filed. The directors remain in post. Nobody has resigned. Nobody has been asked to resign. The scrutiny committee has not published a critical report. The local media has not covered the losses. By most of the metrics that matter to the people running SHOL, the enterprise is a success. The £1.945 million in losses belongs to someone else. That someone else is you.",
  },
];

export default function SholBusinessTipsPage() {
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
          className="text-[34px] sm:text-[46px] text-[#1c1c1c] leading-[1.1] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
        >
          How to run a hospitality business: a guide from SHOL
        </h1>

        <p
          className="text-[15px] text-[#7a7069] italic mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Sefton Council has been running a hospitality company for four years. Losses stand at £1.945 million. Shareholder loans from the public purse stand at approximately £2 million. Total public exposure: nearly £4 million. Here is what they have learned.
        </p>

        <div className="mb-10">
          <ImageLightbox
            src="/images/shol-business-tips.png"
            alt="Council pigs in chef hats run a chaotic kitchen under a Losses 1.945M Today's Special sign while a scrutiny committee pig reads a newspaper undisturbed in the corner and another delivers a Public Funds Another 2M money bag through the back door"
            width={1080}
            height={720}
            priority
          />
        </div>

        <div
          className="space-y-4 text-[16px] text-[#2a2a2a] leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p>
            Sefton Hospitality Operations Ltd (Companies House: 13451207) was incorporated in 2021. It is wholly owned by Sefton Council. It operates beach and seafront venues in Southport. Its directors include a senior council executive, the Cabinet Member for Regeneration, and the Vice Chair of the council&apos;s Overview and Scrutiny Committee.
          </p>
          <p>
            It has accumulated losses of £1.945 million. It has borrowed approximately £2 million from its shareholder. Its shareholder is the council. The council is funded by the public. The public was not asked.
          </p>
          <p>
            Having studied SHOL&apos;s record carefully, The Sandgrounder is pleased to share ten lessons for the aspiring hospitality entrepreneur.
          </p>
        </div>

        {/* Tips */}
        <div className="space-y-5 mb-12">
          {tips.map((tip) => (
            <div key={tip.n} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start gap-4">
                <span
                  className="text-[26px] font-bold text-[#f0e8d8] leading-none flex-shrink-0 mt-0.5"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {tip.n}
                </span>
                <div>
                  <p
                    className="text-[15px] font-bold text-[#1c1c1c] mb-2"
                    style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
                  >
                    {tip.heading}
                  </p>
                  <p
                    className="text-[14px] text-[#4a4540] leading-relaxed"
                    style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
                  >
                    {tip.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div
          className="space-y-4 text-[16px] text-[#2a2a2a] leading-relaxed mb-10 pt-6 border-t border-[#e8e0d4]"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p>
            SHOL continues to operate. The council continues to fund it. The scrutiny committee has not published a critical report. The accounts are public record and available at Companies House (13451207) to anyone who wishes to read them.
          </p>
          <p>
            The Sandgrounder wishes SHOL every success in year five. We will be checking the accounts.
          </p>
        </div>

        <ShareButtons
          path="/satire/shol-business-tips"
          title="How to run a hospitality business: a guide from SHOL"
          excerpt="Sefton Council has been running a hospitality company for four years. Losses stand at £1.945 million. Here is what they have learned."
        />

        {/* Disclaimer */}
        <div
          className="text-[11px] text-[#9a9088] mb-10 p-4 bg-[#fdf8e8] rounded-xl"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          This is satire. All figures cited (£1.945m accumulated losses, approximately £2m in council loans) are drawn from SHOL&apos;s filed accounts at Companies House (13451207) and are public record. Director roles are confirmed from the same source. Full investigation documentation at{" "}
          <a href="https://www.siba.digital" className="text-[#8a6800] underline underline-offset-2">siba.digital</a>.
        </div>

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
            href="/reporting/savills-in-southport"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Related: The Savills map <ArrowRight size={11} />
          </Link>
          <Link
            href="https://find-and-update.company-information.service.gov.uk/company/13451207"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            SHOL at Companies House <ArrowRight size={11} />
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
