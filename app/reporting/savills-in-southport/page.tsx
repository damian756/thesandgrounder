import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import ImageLightbox from "@/components/ImageLightbox";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "The Savills map | The Sandgrounder",
  description:
    "What one property company manages, advises, and accredits in Southport. And what levy payers were never told.",
  alternates: {
    canonical: "https://www.thesandgrounder.com/reporting/savills-in-southport",
  },
  openGraph: {
    title: "The Savills map",
    description:
      "What one property company manages, advises, and accredits in Southport. And what levy payers were never told.",
    url: "https://www.thesandgrounder.com/reporting/savills-in-southport",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/savills-map.png",
        width: 1080,
        height: 720,
        alt: "A large Savills-labelled pig reclines on public funds money bags while smaller piglets labelled BID Board, Sefton Council, Regeneration Scheme 1 and 515,000 Visitors feed from it",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Savills map",
    description: "What one property company manages, advises, and accredits in Southport. And what levy payers were never told.",
    images: ["https://www.thesandgrounder.com/images/savills-map.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Savills map",
  description:
    "What one property company manages, advises, and accredits in Southport. And what levy payers were never told.",
  datePublished: "2026-05-20",
  image: "https://www.thesandgrounder.com/images/savills-map.png",
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

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-[#1a3a5c] pl-5 py-1 my-6">
      <p
        className="text-[10px] font-bold uppercase tracking-widest text-[#1a3a5c] mb-1"
        style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
      >
        {label}
      </p>
      <div
        className="text-[14px] text-[#2a2a2a] leading-relaxed"
        style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function SavillsInSouthportPage() {
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
            href="/reporting"
            className="inline-flex items-center gap-1.5 text-[12px] text-[#9a9088] hover:text-[#1c1c1c] transition-colors"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            <ArrowLeft size={12} />
            Reporting
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              color: "#1a3a5c",
              backgroundColor: "#eef3f8",
              fontFamily: "var(--font-lato), Arial, sans-serif",
            }}
          >
            Reporting
          </span>
          <span
            className="text-[12px] text-[#9a9088]"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            20 May 2026
          </span>
        </div>

        <h1
          className="text-[36px] sm:text-[48px] text-[#1c1c1c] leading-[1.1] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
        >
          The Savills map
        </h1>

        <p
          className="text-[17px] text-[#7a7069] italic mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          What one property company manages, advises, and accredits in Southport. And what levy payers were never told.
        </p>

        <div className="mb-10">
          <ImageLightbox
            src="/images/savills-map.png"
            alt="A large Savills-labelled pig reclines on public funds money bags while smaller piglets labelled BID Board, Sefton Council, Regeneration Scheme 1 and 515,000 Visitors feed from it. Documents on the ground read Supplier Spend, FOI Outstanding, British BIDs Accreditation, Companies House. Behind them: MLEC Opening Soon and Lord Street To Let signs."
            width={1080}
            height={720}
            priority
          />
        </div>

        <div
          className="space-y-5 text-[16px] text-[#2a2a2a] leading-relaxed"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >

          <p>
            If you are a business in Southport paying BID levy, your money is partly used to fund an accreditation from a body owned by a property company that manages two of the town&apos;s largest retail destinations, has handled transactions on some of its most prominent commercial streets, received over £650,000 from the council for regeneration work, and helped design the government funding programme that produced the £73 million events centre currently being built on the waterfront.
          </p>
          <p>
            None of this is disclosed to levy payers. None of it is disclosed on the accreditation body&apos;s website. All of it is confirmed from public records.
          </p>
          <p>
            The company is Savills. This is its map.
          </p>

          {/* Section 1 */}
          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            1. The accreditation body
          </h2>

          <p>
            British BIDs presents itself as the independent industry body for UK Business Improvement Districts. It offers membership, accreditation, training, and best practice guidance. Its accreditation is cited by BID executives as evidence of governance quality. In Southport, BID CEO Rachel Fitzgerald cited it publicly as evidence of transparency.
          </p>
          <p>
            BBIDS Limited (Companies House: 07473073) trades as British BIDs. Its sole shareholder is Savills Place-shaping and Marketing Ltd (Companies House: 07595573). Savills Place-shaping and Marketing Ltd is a wholly owned subsidiary of Savills Plc (Companies House: 02122174), a FTSE 250 real estate company with 2025 revenues of £2.551 billion.
          </p>
          <p>
            British BIDs is not independent. It is a wholly owned subsidiary of the largest commercial property advisory company in the United Kingdom. The company that accredits BID governance is owned by the industry&apos;s largest commercial operator in the BID sector.
          </p>

          <Fact label="Source">
            Companies House filings: BBIDS Limited (07473073), Savills Place-shaping and Marketing Ltd (07595573), Savills Plc (02122174). All public record.
          </Fact>

          {/* Section 2 */}
          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            2. The Towns Fund
          </h2>

          <p>
            In June 2020, the Ministry of Housing, Communities and Local Government appointed a consortium led by Arup to deliver the £3.6 billion Towns Fund programme across 101 English towns. Savills was named within the consortium, providing what the government described as specialist place-based expertise. The consortium helped towns develop their Town Investment Plans and business cases for capital funding.
          </p>
          <p>
            Southport was one of those towns. The programme produced the Marine Lake Events Centre: a £73 million publicly-funded events venue projected to bring 515,000 additional visitors annually to the town. The MLEC is currently under construction. The contract was awarded to VINCI. The building is a concrete frame on a waterfront site.
          </p>
          <p>
            The company that helped shape the funding case for Southport&apos;s largest regeneration project in decades is the same company that subsequently received over £650,000 from Sefton Council in regeneration-related payments, manages the town&apos;s major retail destinations, and owns the body that accredits the town&apos;s BID.
          </p>

          <Fact label="Source">
            MHCLG Towns Fund delivery consortium announcement, 16 June 2020. Sefton Council published supplier spend data, 2020 to 2025.
          </Fact>

          {/* Section 3 */}
          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            3. The council payments
          </h2>

          <p>
            Sefton Council&apos;s published supplier spend data records payments to Savills totalling over £650,000 between 2020 and 2025 across six separate payment streams. The payments are coded to regeneration and property functions.
          </p>
          <p>
            The largest single payment: £350,000 in June 2025, coded as &ldquo;Regeneration Scheme 1&rdquo; with no further published description. There is no publicly available contract notice, procurement record, or scope of work document explaining what this payment was for.
          </p>
          <p>
            A Freedom of Information request (SP-17) was filed with Sefton Council on 19 May 2026, requesting all contracts, invoices, and scopes of work relating to Savills payments since 2020. The response is due 17 June 2026. We will report what it says.
          </p>

          <Fact label="Source">
            Sefton Council published supplier spend data, 2020 to 2025. FOI SP-17, filed 19 May 2026 via WhatDoTheyKnow.
          </Fact>

          {/* Section 4 */}
          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            4. The retail estate
          </h2>

          <p>
            Savills commercially manages Meols Cop Retail Park, a large out-of-town retail destination on the eastern edge of Southport. It commercially manages Marble Place Shopping Centre in the town centre. It has handled commercial property transactions on Lord Street, Nevill Street, Eastbank Street, Princes Street, and Cambridge Court.
          </p>
          <p>
            That coverage is not incidental. It means Savills has active commercial management mandates across Southport&apos;s major retail destinations and has been the agent for a significant number of the town centre&apos;s commercial property transactions. In practical terms, if a major retailer is making a decision about Southport, there is a high probability that Savills is involved on one side of the conversation.
          </p>
          <p>
            Next occupied a prominent unit on Lord Street. Next subsequently relocated to Meols Cop Retail Park. Savills manages Meols Cop Retail Park. Savills was simultaneously engaged by Sefton Council on regeneration advisory work covering the town centre. The commercial interests of a property manager whose client relocated from a struggling high street to a thriving retail park are not straightforwardly aligned with the health of that high street.
          </p>
          <p>
            We are not asserting that Savills caused Next to leave Lord Street. We are asserting that a company receiving public money to advise on Southport&apos;s town centre regeneration simultaneously managed the destination that one of Lord Street&apos;s anchor tenants moved to. That conflict has not been publicly examined.
          </p>

          <Fact label="Source">
            Savills commercial property listings and management mandates, publicly available. Sefton Council supplier spend data. Land Registry title registers.
          </Fact>

          {/* Section 5 */}
          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            5. The Waterfront Hotel
          </h2>

          <p>
            The site adjacent to the Marine Lake Events Centre includes the Waterfront Hotel. Land Registry title documents show Savills has been involved in transactions on that site. The precise nature of that involvement is being established. We will report further when the record is complete.
          </p>
          <p>
            We note it here because the MLEC was designed in part to increase the commercial value of the surrounding area, including waterfront hospitality and hotel development. A company engaged on the funding case for the MLEC, managing the surrounding retail estate, and involved in transactions on adjacent hotel sites is in a position to benefit from the public investment it helped to shape.
          </p>

          {/* Section 6 */}
          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            6. What the map looks like
          </h2>

          <p>
            Set out sequentially, this is Savills&apos; position in Southport&apos;s public infrastructure:
          </p>
        </div>

        {/* Map list */}
        <div className="my-8 space-y-3">
          {[
            "It helped design the government funding bid that produced the MLEC.",
            "It received over £650,000 from the council for regeneration work, including £350,000 with no published explanation.",
            "It manages the town's largest out-of-town retail destination.",
            "It manages the town centre's principal shopping centre.",
            "It has handled commercial property transactions across the town centre's main commercial streets.",
            "It has been involved in transactions adjacent to the MLEC site.",
            "It owns the body that accredits the BID's governance.",
            "The BID's CEO cited that accreditation as evidence of transparency without disclosing the ownership structure.",
            "None of this has been disclosed to the businesses paying BID levy.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white rounded-xl shadow-sm p-4">
              <span
                className="text-[20px] font-bold text-[#d0dde8] leading-none flex-shrink-0 mt-0.5"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {i + 1}
              </span>
              <p
                className="text-[14px] text-[#2a2a2a] leading-relaxed"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        <div
          className="space-y-5 text-[16px] text-[#2a2a2a] leading-relaxed"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p>
            None of the individual items on that list is, by itself, necessarily improper. Large property companies provide services to public bodies. They manage retail assets. They win government advisory contracts. That is what they do.
          </p>
          <p>
            The question is not whether any single item is wrong. The question is whether the full picture has been visible to the people it affects. Whether the businesses paying levy in a BID accredited by a Savills subsidiary were told that was the case. Whether the council members voting to approve Savills regeneration payments understood the company&apos;s commercial interests in the outcome. Whether the levy payers whose money funded the Towns Fund bid knew that the consortium advising on their town&apos;s future was the same company managing the retail estate that would benefit from it.
          </p>
          <p>
            They were not told. The information was available in public records. Nobody compiled it.
          </p>
          <p>
            We have compiled it.
          </p>

          {/* What is outstanding */}
          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What is still outstanding
          </h2>

          <p>
            A right-of-reply letter was sent to British BIDs on 19 May 2026 asking for comment on the ownership structure and its disclosure practices. The deadline was 2 June 2026. No response was received.
          </p>
          <p>
            A right-of-reply letter was sent to Southport BID CEO Rachel Fitzgerald on the same date. The deadline was 2 June 2026. No response was received.
          </p>
          <p>
            FOI SP-17, requesting all Savills contracts and scopes of work from Sefton Council since 2020, is due for response on 17 June 2026. We will report what it says.
          </p>
          <p>
            The facts reported above are drawn entirely from public records and will not change. Both parties had the opportunity to respond. Neither did.
          </p>
        </div>

        {/* Source note */}
        <div
          className="mt-10 p-5 bg-[#eef3f8] rounded-xl text-[12px] text-[#4a5a6a] space-y-1"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p className="font-bold text-[#1a3a5c] mb-2">Sources</p>
          <p>Companies House: BBIDS Limited (07473073), Savills Place-shaping and Marketing Ltd (07595573), Savills Plc (02122174).</p>
          <p>MHCLG Towns Fund delivery consortium announcement, 16 June 2020.</p>
          <p>Sefton Council published supplier spend data, 2020 to 2025.</p>
          <p>Land Registry title registers: MS587626, MS509220, MS544921.</p>
          <p>FOI SP-17, filed 19 May 2026. Response due 17 June 2026.</p>
          <p>Right-of-reply letters CL-014 (British BIDs) and CL-015 (Rachel Fitzgerald), sent 19 May 2026.</p>
          <p>Full investigation documentation: <a href="https://www.siba.digital" className="text-[#1a3a5c] underline underline-offset-2">siba.digital</a></p>
        </div>

        <ShareButtons
          path="/reporting/savills-in-southport"
          title="The Savills map"
          excerpt="What one property company manages, advises, and accredits in Southport. And what levy payers were never told."
        />

        <div className="mt-2 bg-[#1c1c1c] rounded-2xl p-8">
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

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/reporting"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            All reporting <ArrowRight size={11} />
          </Link>
          <Link
            href="https://www.siba.digital/blog/before-report-14-who-is-savills"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Background: who is Savills? <ArrowRight size={11} />
          </Link>
          <Link
            href="https://www.siba.digital/foi"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            FOI tracker: SP-17 <ArrowRight size={11} />
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
