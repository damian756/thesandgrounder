import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata: Metadata = {
  title: "The local news that isn't | The Sandgrounder",
  description:
    "Stand Up For Southport is the most-read local news source in Southport. It is paid by the BID, the council, and Mikhail Hotels. None of this is disclosed to its readers.",
  alternates: {
    canonical:
      "https://www.thesandgrounder.com/reporting/the-local-news-that-isnt",
  },
  openGraph: {
    title: "The local news that isn't",
    description:
      "Stand Up For Southport is paid by the BID, the council, and Mikhail Hotels. None of this is disclosed to its readers.",
    url: "https://www.thesandgrounder.com/reporting/the-local-news-that-isnt",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/local-news-that-isnt.png",
        width: 1080,
        height: 720,
        alt: "A pig newsreader with BID Contractor, Council Supplier and Mikhail Partner badges reads from a Press Release script while the bin overflows with crumpled BID Accounts and FOI Response papers",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The local news that isn't",
  description:
    "Stand Up For Southport is the most-read local news source in Southport. It is paid by the BID, the council, and Mikhail Hotels. None of this is disclosed to its readers.",
  datePublished: "2026-05-20",
  image:
    "https://www.thesandgrounder.com/images/local-news-that-isnt.png",
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

export default function LocalNewsThatIsntPage() {
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
          The local news that isn&apos;t
        </h1>

        <p
          className="text-[17px] text-[#7a7069] italic mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Stand Up For Southport is the most-read local news source in Southport. It is paid by the BID, the council, and Mikhail Hotels. None of this is disclosed to its readers.
        </p>

        <div className="mb-10">
          <ImageLightbox
            src="/images/local-news-that-isnt.png"
            alt="A pig newsreader sits at a local news desk wearing badges reading BID Contractor, Council Supplier, Mikhail Partner. A stack of Huge Success For Southport scripts sits on the desk. The bin overflows with crumpled BID Accounts, Vacancy Rate and FOI Response papers. The green screen behind shows the real Lord Street with To Let signs."
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
            Stand Up For Southport is the dominant local news voice in Southport. Its Facebook page has tens of thousands of followers. It is routinely the first outlet to cover council announcements, BID events, and business openings in the town. When the BID wants its activities covered, SUFS covers them. When a Mikhail Hotels venue opens, SUFS is there. When Sefton Council announces a regeneration milestone, SUFS reports it warmly.
          </p>
          <p>
            It does not describe itself as a sponsored publication. It does not carry commercial disclosure notices. It publishes no editorial policy and no register of interests. It presents, in every way that matters to its audience, as independent local news.
          </p>
          <p>
            It is not independent local news.
          </p>

          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Who runs it. Who pays for it.
          </h2>

          <p>
            Stand Up For Southport is operated by Andrew Brown. Between 2020 and 2025, Sefton Council paid Brown £13,700 in direct-award contracts. Direct-award contracts are issued without competitive tender. The specific reasons for their award to Brown are not published in the council&apos;s procurement records. The payments appear in the council&apos;s own published supplier spend data.
          </p>
          <p>
            Brown is also a contracted media partner of Southport BID. The contract value is not publicly available. Clause 11.4 of the BID&apos;s Service Level Agreement with Sefton Council declares BID financial information exempt from Freedom of Information requests. The BID cannot respond to FOI requests independently. The council decides what is disclosed. Brown&apos;s contract value has not been disclosed.
          </p>
          <p>
            Brown has also received commercial payments connected to Mikhail Hotels, the dominant hospitality group in Southport. Mikhail Hotels operates The Bold, The Grand, Lord Street Hotel, Punch Tarmey&apos;s, Mavericks, and Southport Market Bar. It is the single most powerful private entity in Southport&apos;s visitor economy.
          </p>
          <p>
            None of these financial relationships are disclosed anywhere on Stand Up For Southport. Not on its Facebook page. Not on its website. Not in any published content. A resident reading SUFS has no way of knowing that the outlet covering Southport BID is contracted by Southport BID. No way of knowing that the outlet covering Mikhail Hotels venues has a commercial relationship with Mikhail Hotels. No way of knowing that the outlet covering council regeneration announcements has received direct-award council contracts.
          </p>

          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What the coverage looks like.
          </h2>

          <p>
            SUFS&apos;s coverage of Southport BID is consistently positive. BID announcements are reported without question or context. The BID&apos;s accreditation by British BIDs — which is, as we have reported, an accreditation product sold by a Savills subsidiary — was not examined. The question of whether levy payers know who owns their accreditation body has not been asked. The BID accounts, protected from public scrutiny by Clause 11.4, have not been pursued.
          </p>
          <p>
            SUFS&apos;s coverage of Mikhail Hotels venues is consistently positive. Openings, renovations, and events at The Bold, The Grand, and Southport Market Bar have all received prominent coverage. The Mikhail Hotels connection to the BID treasury — Geoffrey Wareham serves as BID Treasurer while simultaneously holding directorships in Mikhail Hotels companies, including Lord Street Car Park Ltd alongside Andrew Mikhail and Rob Ashcroft — has not been reported.
          </p>
          <p>
            SUFS covered SHOL venues, the council-owned hospitality company operating Cone Head, Beach House, and White House, without disclosing that Mikhail Hotels had commercial connections to Brown&apos;s operation. SHOL has accumulated £1.945 million in losses over four years, funded by council loans. SUFS has not reported this.
          </p>
          <p>
            SUFS has covered multiple council announcements about the Marine Lake Events Centre. The approximately £13 million in pre-contract consultancy fees was not reported. The identity of the Towns Fund delivery consortium, which included Savills, was not reported. The £350,000 council payment to Savills coded as &ldquo;Regeneration Scheme 1&rdquo; with no published explanation was not reported. The Freedom of Information request asking what it was for is currently outstanding.
          </p>

          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What SUFS has not covered.
          </h2>

          <p>
            The vacancy rate trend on Lord Street. The BID accounts. The Savills ownership of British BIDs. The council&apos;s direct-award contracts to Brown. The MLEC pre-contract consultancy fees. The BID Treasurer&apos;s directorships in Mikhail Hotels companies. The SHOL accumulated losses. The Sovini land deal and the absence of published valuations. The FOI responses that directly contradict each other. The formal complaint filed with the council&apos;s Chief Executive in May 2026.
          </p>
          <p>
            These are not obscure stories requiring specialist knowledge to find. They concern public money, public institutions, and public accountability in a town that SUFS covers every single day.
          </p>
          <p>
            The selection of what to cover and what not to cover is, in any editorial operation, the most consequential editorial decision made. At SUFS, that selection has produced, consistently and without exception, coverage that is positive about the BID, positive about the council&apos;s regeneration programme, positive about Mikhail Hotels, and silent about every accountability question that touches any of the three.
          </p>

          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The structural argument.
          </h2>

          <p>
            The collapse of local journalism in England has been documented extensively. The Southport Visiter, the town&apos;s historic local newspaper, no longer functions as a meaningful accountability outlet. In that vacuum, social media operations like Stand Up For Southport have become the primary source of local news for tens of thousands of residents.
          </p>
          <p>
            That would be entirely unremarkable if those operations were independent. When the dominant local news voice in a town has undisclosed commercial relationships with the BID it covers, the council whose press releases it runs, and the hospitality group whose openings it attends, the effect on public understanding is real and measurable. Residents form views about their town&apos;s institutions based on coverage that has not disclosed how it is funded. Those institutions benefit directly from that coverage. The loop is closed.
          </p>
          <p>
            Brown is not the cause of this problem. The closure of the local press created the space. Brown filled it with energy and local knowledge and found a commercial model for doing so. That model requires relationships with the institutions he covers. The institutions require the coverage he provides. Neither party has disclosed the arrangement to the audience that both depend on.
          </p>
          <p>
            The problem is structural. The record is what it is. Southport residents deserve to know what they are reading.
          </p>

          <h2
            className="text-[22px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Right of reply.
          </h2>

          <p>
            A right-of-reply letter has been sent to Andrew Brown and Stand Up For Southport seeking comment on the financial relationships documented in this piece and their non-disclosure to readers. We will update this piece when a response is received.
          </p>
          <p>
            If the financial relationships described above are inaccurate, we invite correction with supporting evidence. If they are accurate and there is an explanation for their non-disclosure, we will publish it in full.
          </p>
        </div>

        {/* Source note */}
        <div
          className="mt-10 p-5 bg-[#eef3f8] rounded-xl text-[12px] text-[#4a5a6a] space-y-1"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p className="font-bold text-[#1a3a5c] mb-2">Sources</p>
          <p>Sefton Council published supplier spend data, 2020 to 2025.</p>
          <p>Southport BID Service Level Agreement (SP-07), disclosed via FOI, 61 pages. Clause 11.4: BID financial information FOI-exempt. Clause 20: all FOI requests to be transferred to council.</p>
          <p>Companies House: Mikhail Hotels and Leisure Holdings Ltd (10533763). Lord Street Car Park Ltd — directors: Geoffrey Wareham, Andrew Mikhail, Rob Ashcroft.</p>
          <p>SHOL (Sefton Hospitality Operations Ltd, CH: 13451207) — accumulated losses £1.945m, confirmed from filed accounts.</p>
          <p>Right-of-reply letter sent to Andrew Brown/Stand Up For Southport, 20 May 2026. Response awaited.</p>
          <p>Full investigation documentation: <a href="https://www.siba.digital" className="text-[#1a3a5c] underline underline-offset-2">siba.digital</a></p>
        </div>

        <div className="mt-10 bg-[#1c1c1c] rounded-2xl p-8">
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
            href="/reporting/savills-in-southport"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Related: The Savills map <ArrowRight size={11} />
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
