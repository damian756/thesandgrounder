import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import ImageLightbox from "@/components/ImageLightbox";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "The Southport Regeneration Glossary | The Sandgrounder",
  description:
    "Twenty terms in common use across Southport's regeneration ecosystem, with accurate definitions. None of these definitions appear in the documents where the terms are used.",
  alternates: {
    canonical: "https://www.thesandgrounder.com/satire/southport-regeneration-glossary",
  },
  openGraph: {
    title: "The Southport Regeneration Glossary",
    description:
      "Twenty terms in common use across Southport's regeneration ecosystem, with accurate definitions. None of these definitions appear in the documents where the terms are used.",
    url: "https://www.thesandgrounder.com/satire/southport-regeneration-glossary",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/southport-regeneration-glossary.png",
        width: 1080,
        height: 720,
        alt: "A pig bureaucrat writes in the Official Definitions: Southport Regeneration Edition dictionary while FOI filing cabinets loom behind and a Regeneration Milestone Award sits on the desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Southport Regeneration Glossary",
    description: "Twenty terms in common use. With accurate definitions. None of which appear in the documents where the terms are used.",
    images: ["https://www.thesandgrounder.com/images/southport-regeneration-glossary.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Southport Regeneration Glossary",
  description:
    "Twenty terms in common use across Southport's regeneration ecosystem, with accurate definitions.",
  datePublished: "2026-05-20",
  image: "https://www.thesandgrounder.com/images/southport-regeneration-glossary.png",
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

type Entry = {
  term: string;
  pos: string;
  definition: string;
};

const entries: Entry[] = [
  {
    term: "WORLD-CLASS",
    pos: "adj.",
    definition:
      "Planning permission granted. Not yet constructed. When constructed, will be world-class. The 515,000 additional annual visitors will confirm this. Check back in 2029.",
  },
  {
    term: "TRANSFORMATIONAL",
    pos: "adj.",
    definition:
      "A rendering has been released. The rendering shows people enjoying themselves in sunlight. Southport averages 1,450 hours of sunshine per year. The rendering does not reflect this.",
  },
  {
    term: "COMMERCIALLY SENSITIVE",
    pos: "adj.",
    definition:
      "Information exists. It cannot be shared. The reason it cannot be shared is commercially sensitive.",
  },
  {
    term: "TRANSPARENCY",
    pos: "n.",
    definition:
      "The state in which all information is technically available, provided you know which form to submit, which council department to address it to, and which of the 23 exemptions in the Freedom of Information Act does not apply to your specific request. Response within 20 working days. Possibly.",
  },
  {
    term: "OPEN AND TRANSPARENT",
    pos: "phrase",
    definition:
      "Appears in BID annual reports. The BID accounts are contractually exempt from Freedom of Information requests under Clause 11.4 of the Service Level Agreement. These are separate matters.",
  },
  {
    term: "FOI RESPONSE",
    pos: "n.",
    definition:
      "A document confirming that the information requested is either not held, held by a third party, commercially sensitive, or exempt under Section 36 (prejudice to the effective conduct of public affairs). Signed, in most cases, by the person the question is about. This is efficient.",
  },
  {
    term: "INDEPENDENT ACCREDITATION",
    pos: "n.",
    definition:
      "A quality standard issued to Southport BID by British BIDs. British BIDs is a wholly owned subsidiary of Savills. Savills has received over £650,000 from Sefton Council since 2020 and manages the town's major retail destinations. The certificate does not mention any of this. The word independent appears on the certificate.",
  },
  {
    term: "BEST PRACTICE",
    pos: "n.",
    definition:
      "What the BID was assessed as demonstrating in its accreditation. The assessment was conducted by the accreditation body. The accreditation body is owned by a company that is also paid by the council that oversees the BID. This is called an independent review.",
  },
  {
    term: "SCRUTINY",
    pos: "n.",
    definition:
      "An oversight function. In Sefton Council, the Overview and Scrutiny Committee exists to independently review decisions made by the council and its companies. The Vice Chair of the relevant scrutiny committee is also a director of SHOL, a council-owned company. The scrutiny committee has not published a critical report on SHOL. The reviews are very efficient.",
  },
  {
    term: "CONFLICT OF INTEREST",
    pos: "n.",
    definition:
      "A situation managed through the register of interests. In Southport, the council officer responsible for the BID, the pier concessions, the market, and major events also sits on the BID board as a council-appointed director. His register of interests entry for the BID directorship: not present. The FOI response confirming this was signed by him.",
  },
  {
    term: "STAKEHOLDER",
    pos: "n.",
    definition:
      "A person invited to meetings about decisions that have already been made. Not to be confused with a levy payer. A levy payer is a business that funds those decisions through a mandatory charge and was not invited to the meetings.",
  },
  {
    term: "DIRECT AWARD",
    pos: "n.",
    definition:
      "A procurement method used when competitive tender is not required. Between 2020 and 2025, Sefton Council issued £13,700 in direct-award contracts to the operator of Stand Up For Southport. Stand Up For Southport covers Sefton Council. The specific conditions under which competitive tender was not required have not been published. This information may be commercially sensitive.",
  },
  {
    term: "FOOTFALL",
    pos: "n.",
    definition:
      "A metric. Footfall is always up. The methodology for counting it has not been published. The baseline against which it is up has not been specified. The locations at which it is counted have not been disclosed. Footfall is up.",
  },
  {
    term: "MILESTONE",
    pos: "n.",
    definition:
      "An event. Milestones are always achieved. When a milestone date passes without the milestone being achieved, a new milestone is announced. The new milestone is described as reflecting the project's ambition. The original milestone is not referenced. Progress continues.",
  },
  {
    term: "REGENERATION",
    pos: "n.",
    definition:
      "The process by which public money is invested in infrastructure that will benefit the town, the supply chain, and, where interests are not disclosed, some members of the supply chain's wider portfolio. All procurement is fully compliant. The full picture will emerge in due course.",
  },
  {
    term: "SUPPLIER",
    pos: "n.",
    definition:
      "A company that has received public money. In Southport, some suppliers also appear in roles that help determine which suppliers are engaged. This is called market expertise. It is not called a conflict of interest. See CONFLICT OF INTEREST.",
  },
  {
    term: "COMMUNITY BENEFIT",
    pos: "n.",
    definition:
      "The stated purpose of the investment. The mechanism by which the investment produces the benefit has not been published. The evidence that the benefit has been produced has not been published. The body that would normally publish this evidence has not done so. Stand Up For Southport has reported that the project is fantastic for the town.",
  },
  {
    term: "RIGHT TO REPLY",
    pos: "n.",
    definition:
      "An offer extended by The Sandgrounder to every individual and organisation named in its reporting. Responses, when received, are published in full. Letters sent to date: several. Responses received: none. Deadline: passed. Updates: pending.",
  },
  {
    term: "VIBRANT",
    pos: "adj.",
    definition:
      "Not currently vibrant. However, the MLEC will bring 515,000 additional visitors annually, at which point the word will become accurate. Lord Street's current vacancy rate is not relevant to this definition.",
  },
  {
    term: "THE FULL PICTURE WILL EMERGE IN DUE COURSE",
    pos: "phrase",
    definition: "It won't.",
  },
];

export default function SouthportRegenerationGlossaryPage() {
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
          The Southport Regeneration Glossary
        </h1>

        <p
          className="text-[15px] text-[#7a7069] italic mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          A public service. Twenty terms in common use across Southport&apos;s regeneration ecosystem, with accurate definitions. None of these definitions appear in the documents where the terms are used.
        </p>

        <div className="mb-10">
          <ImageLightbox
            src="/images/southport-regeneration-glossary.png"
            alt="A pig bureaucrat in a pinstripe suit writes in the Official Definitions: Southport Regeneration Edition dictionary. Three filing cabinets behind read FOI Pending, FOI Declined, FOI Commercially Sensitive. A second pig holds a Regeneration Milestone Award 2024 trophy. The bin contains crumpled Vacancy Rate and Accountability papers."
            width={1080}
            height={720}
            priority
          />
        </div>

        {/* Entries */}
        <div className="space-y-3 mb-12">
          {entries.map((entry) => (
            <div key={entry.term} className="bg-white rounded-2xl shadow-sm px-6 py-5">
              <div className="flex items-baseline gap-2 mb-1.5 flex-wrap">
                <span
                  className="text-[13px] font-bold tracking-wider text-[#1c1c1c]"
                  style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
                >
                  {entry.term}
                </span>
                <span
                  className="text-[11px] text-[#9a9088] italic"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {entry.pos}
                </span>
              </div>
              <p
                className="text-[14px] text-[#3a3530] leading-relaxed"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                {entry.definition}
              </p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div
          className="space-y-3 text-[15px] text-[#2a2a2a] leading-relaxed mb-10 pt-6 border-t border-[#e8e0d4]"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p>
            The Sandgrounder will be publishing a second edition once the outstanding FOI responses are received. We anticipate several new entries under the letters C, E, and S.
          </p>
          <p>
            If any of the above definitions are inaccurate, corrections with supporting evidence are welcome. We will publish them.
          </p>
        </div>

        {/* Disclaimer */}
        <div
          className="text-[11px] text-[#9a9088] mb-8 p-4 bg-[#fdf8e8] rounded-xl"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          This is satire. All factual claims embedded in the definitions are drawn from public records documented at{" "}
          <a href="https://www.siba.digital" className="text-[#8a6800] underline underline-offset-2">siba.digital</a>.
          The glossary format is a satirical device. The facts are not.
        </div>

        <ShareButtons
          path="/satire/southport-regeneration-glossary"
          title="The Southport Regeneration Glossary"
          excerpt="Twenty terms in common use. With accurate definitions. None of which appear in the documents where the terms are used."
        />

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
            href="/satire/shol-business-tips"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Related: SHOL business tips <ArrowRight size={11} />
          </Link>
          <Link
            href="https://www.siba.digital/foi"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            FOI tracker <ArrowRight size={11} />
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
