import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata: Metadata = {
  title: "The MLEC, one year from now | The Sandgrounder",
  description:
    "Southport has a pattern. The same names, the same undisclosed relationships, the same media contractor covering it all warmly. The Marine Lake Events Centre will not be different.",
  alternates: {
    canonical: "https://www.thesandgrounder.com/opinion/mlec-year-one",
  },
  openGraph: {
    title: "The MLEC, one year from now",
    description:
      "Southport has a pattern. The same names, the same undisclosed relationships, the same media contractor covering it all warmly. The Marine Lake Events Centre will not be different.",
    url: "https://www.thesandgrounder.com/opinion/mlec-year-one",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/mlec-year-one.png",
        width: 1080,
        height: 720,
        alt: "Cartoon of a pig serving Mikhail Ale at the MLEC grand opening while the BID Annual Gala fills the seats",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The MLEC, one year from now",
  description:
    "Southport has a pattern. The same names, the same undisclosed relationships, the same media contractor covering it all warmly. The Marine Lake Events Centre will not be different.",
  datePublished: "2026-05-20",
  image: "https://www.thesandgrounder.com/images/mlec-year-one.png",
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

export default function MlecYearOnePage() {
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
            href="/opinion"
            className="inline-flex items-center gap-1.5 text-[12px] text-[#9a9088] hover:text-[#1c1c1c] transition-colors"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            <ArrowLeft size={12} />
            Opinion
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              color: "#9b2020",
              backgroundColor: "#fdf0f0",
              fontFamily: "var(--font-lato), Arial, sans-serif",
            }}
          >
            Opinion
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
          The MLEC, one year from now
        </h1>

        <p
          className="text-[15px] text-[#7a7069] italic mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          A prediction. Clearly labelled as one.
        </p>

        <div className="mb-10">
          <ImageLightbox
            src="/images/mlec-year-one.png"
            alt="A pig bartender serves Mikhail Ale at the MLEC grand opening while identical grey-suited men fill the seats for the BID Annual Gala. A reporter pig scribbles in a Stand Up For Southport notepad. A 515,000 Visitors Expected sign hangs on the wall."
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
            Southport has a pattern. It is not a conspiracy. It is something more mundane and more durable: a small network of people who run everything, whose relationships are undisclosed, whose event calendars overlap, and who have been doing this long enough that it no longer requires coordination. It just happens.
          </p>
          <p>
            The Flower Show. The BID board. Southport Market. The Town Deal board. The same names appear in each. The same financial relationships are not declared. The same media contractor covers all of them warmly. Nobody is in a room deciding this. It is just how Southport works.
          </p>
          <p>
            The Marine Lake Events Centre will open in 2027. It will cost £73 million of public money. It will have a stage, a bar, a conference suite, and an events calendar. Within twelve months of opening, here is what we predict that calendar will look like.
          </p>

          <h2
            className="text-[20px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The BID Annual Gala will be one of the first bookings.
          </h2>
          <p>
            The BID has held its annual events at venues across Southport. It will hold them at the MLEC. This is not a prediction that requires much courage. The BID&apos;s council-appointed director oversees Southport&apos;s major events. The MLEC is Southport&apos;s major new event venue. The booking is a formality.
          </p>

          <h2
            className="text-[20px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The bar will pour Mikhail Ale.
          </h2>
          <p>
            The MLEC will have a bar. The dominant hospitality operator in Southport is Mikhail Hotels: The Bold, The Grand, Lord Street Hotel, Punch Tarmey&apos;s, Mavericks, Southport Market Bar. Mikhail Hotels already operates a bar inside Southport Market, a council-supported venue. The pattern is established.
          </p>
          <p>
            The MLEC operator agreement has not been published. The catering concession tender has not been published. We are making a prediction, not an allegation. We are recording it now so it can be checked later.
          </p>

          <h2
            className="text-[20px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Stand Up For Southport will cover the opening warmly.
          </h2>
          <p>
            Andrew Brown runs Stand Up For Southport. He is paid by the BID. He has received £13,700 in direct-award council contracts between 2020 and 2025. He covered SHOL venues without disclosing that Mikhail Hotels, whose venues he also covers positively, part-funded his operation.
          </p>
          <p>
            He will cover the MLEC opening. He will describe it as fantastic for the town. He will not disclose his financial relationships with the parties involved. He has not done so before.
          </p>

          <h2
            className="text-[20px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The 515,000 visitor projection will appear in at least one press release.
          </h2>
          <p>
            It will not appear alongside any actual attendance figures. Those will be commercially sensitive.
          </p>

          <h2
            className="text-[20px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The event calendar will be heavy on industry nights and light on the public.
          </h2>
          <p>
            Award ceremonies. Sector dinners. Regeneration conferences. Council showcase events. BID networking evenings. Town Deal legacy events. These are the events that fill the calendars of venues like the MLEC, because they are the events that the people who control the bookings need to host.
          </p>
          <p>
            The public will be welcome on selected evenings when a national act passes through. Tickets will be priced to cover costs. The act will have been popular approximately seven years earlier.
          </p>

          <h2
            className="text-[20px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The vacancy rate on Lord Street will not have improved.
          </h2>
          <p>
            The MLEC was not designed to fix the vacancy rate. It was designed to bring 515,000 additional visitors annually to the waterfront. The connection between waterfront visitors and the long-term health of Lord Street&apos;s independent retail is, at best, indirect. Nobody has explained the mechanism. Nobody has been asked to.
          </p>

          <h2
            className="text-[20px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The comparison with Crosby Lakeside will not be made publicly.
          </h2>
          <p>
            Crosby Lakeside Adventure Centre opened in 2013 as part of Sefton&apos;s waterfront regeneration programme. It has events facilities, water sports, and family activities. It has consistently underperformed its footfall projections. The venue is not a destination. The waterfront is not a destination. The overnight accommodation infrastructure to support the projected visitor volumes does not exist.
          </p>
          <p>
            The MLEC is larger and more expensive. The projections are larger and more expensive. The structural conditions are similar. Nobody involved in commissioning either study has been asked to explain the difference.
          </p>

          <h2
            className="text-[20px] font-bold text-[#1c1c1c] pt-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            One year from now, the MLEC will be Southport&apos;s finest conference facility.
          </h2>
          <p>
            It will be clean, modern, and well-run. The people who attend the events held there will describe it as excellent. The bar will be busy. The speeches will be warm. Someone will hold a trophy.
          </p>
          <p>
            Outside, on Lord Street and in the arcades, the vacancy rate will continue to tell a different story. That story will not be covered at the BID Annual Gala.
          </p>
          <p className="font-bold text-[#1c1c1c]">
            Stand Up For Southport will file at 9pm with photographs.
          </p>
        </div>

        <div
          className="mt-10 p-4 bg-[#fdf0f0] rounded-xl text-[11px] text-[#9a9088]"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          This is opinion. All named individuals and entities are referenced in their public capacity. Financial relationships cited are drawn from public records documented at{" "}
          <a href="https://www.siba.digital" className="text-[#9b2020] underline underline-offset-2">siba.digital</a>.
          Predictions are the author&apos;s own. The MLEC operator agreement and catering concession terms have not been published.
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
            href="/opinion"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            All opinion <ArrowRight size={11} />
          </Link>
          <Link
            href="/satire/mlec-what-we-expect"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Also: The MLEC predictions <ArrowRight size={11} />
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
