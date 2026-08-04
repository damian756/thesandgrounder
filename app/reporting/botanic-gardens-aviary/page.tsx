import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Botanic Gardens Aviary is closing. It will cost £60,000 a year to save it. | The Sandgrounder",
  description:
    "Sefton Council decided in March 2026 to close the Botanic Gardens Aviary in Churchtown. Staff were not told for four months. We have filed an FOI and you can follow it.",
  alternates: {
    canonical: "https://www.thesandgrounder.com/reporting/botanic-gardens-aviary",
  },
  openGraph: {
    title: "The Botanic Gardens Aviary is closing. It will cost £60,000 a year to save it.",
    description:
      "Sefton Council decided in March 2026 to close the Botanic Gardens Aviary in Churchtown. Staff were not told for four months. We have filed an FOI.",
    url: "https://www.thesandgrounder.com/reporting/botanic-gardens-aviary",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/aviary-macaw.webp",
        width: 1200,
        height: 1600,
        alt: "Blue and gold macaw perched in the Botanic Gardens Aviary, Churchtown, Southport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Botanic Gardens Aviary is closing. It will cost £60,000 a year to save it.",
    description:
      "Sefton Council decided in March 2026 to close the Botanic Gardens Aviary in Churchtown. Staff were not told for four months.",
    images: ["https://www.thesandgrounder.com/images/aviary-macaw.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "The Botanic Gardens Aviary is closing. It will cost £60,000 a year to save it.",
  description:
    "Sefton Council decided in March 2026 to close the Botanic Gardens Aviary in Churchtown. Staff were not told for four months. We have filed an FOI.",
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  author: {
    "@type": "Organization",
    name: "The Sandgrounder",
    url: "https://www.thesandgrounder.com",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.thesandgrounder.com/#organization",
    name: "The Sandgrounder",
    logo: {
      "@type": "ImageObject",
      url: "https://www.thesandgrounder.com/window.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.thesandgrounder.com/reporting/botanic-gardens-aviary",
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.thesandgrounder.com/images/aviary-macaw.webp",
    width: 1200,
    height: 1600,
  },
};

const galleryImages = [
  {
    src: "/images/aviary-african-grey-pond.webp",
    alt: "African grey parrot perched on a rock above the koi pond at the Botanic Gardens Aviary",
    caption: "One of the aviary's African grey parrots by the indoor koi pond.",
  },
  {
    src: "/images/aviary-african-grey-sky.webp",
    alt: "African grey parrot with blue sky visible through the aviary mesh roof",
    caption: "African grey with the summer sky behind the mesh.",
  },
  {
    src: "/images/aviary-ringneck.webp",
    alt: "Green ringneck parakeet close-up with red beak at the Botanic Gardens Aviary",
    caption: "Alexandrine ringneck. One of several parakeet species at the aviary.",
  },
  {
    src: "/images/aviary-conure.webp",
    alt: "Colourful green and yellow conure parakeet perched on wooden frame",
    caption: "Conure parakeet. These birds can live 20 to 30 years.",
  },
  {
    src: "/images/aviary-cockatiel.webp",
    alt: "Cockatiel with yellow crest perched on a desk",
    caption: "A cockatiel that had been brought out of the aviary by staff.",
  },
  {
    src: "/images/aviary-corella.webp",
    alt: "White corella cockatoo perched in the aviary holding food in its claw",
    caption: "The aviary's corella. Highly intelligent birds that form strong bonds.",
  },
  {
    src: "/images/aviary-guinea-pigs.webp",
    alt: "Two guinea pigs in a hutch at the Botanic Gardens Aviary",
    caption: "Guinea pigs were also kept at the aviary, popular with visiting children.",
  },
  {
    src: "/images/aviary-rescue.webp",
    alt: "Aviary staff with a bird carrier in a car",
    caption:
      "The aviary team. Staff say they are not yet at the stage of rehoming animals.",
  },
];

export default function AviaryclosurePage() {
  return (
    <>
      <div className="w-full h-1 bg-[#1a3a5c]" />
      <Nav />
      <div className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        {/* Hero */}
        <section className="relative bg-[#0d1f30] text-white overflow-hidden min-h-[520px] sm:min-h-[580px] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/aviary-macaw.webp"
              alt="Blue and gold macaw perched in the Botanic Gardens Aviary, Churchtown, Southport"
              fill
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(13,31,48,0.96) 40%, rgba(13,31,48,0.80) 60%, rgba(13,31,48,0.30) 100%)",
              }}
            />
          </div>
          <div className="relative mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-[560px]">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <Link
                  href="/reporting"
                  className="inline-flex items-center gap-1 text-[11px] text-[#a0b8cc] hover:text-white transition-colors"
                >
                  <ArrowLeft size={11} />
                  From the Record
                </Link>
                <span className="text-[#a0b8cc]/40">/</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#a0b8cc] border border-[#a0b8cc]/30 px-2 py-0.5">
                  Community
                </span>
                <span className="text-xs text-[#a0b8cc]">1 July 2026</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                The Botanic Gardens Aviary is closing. It will cost&nbsp;£60,000 a year to save&nbsp;it.
              </h1>
              <p className="text-lg text-[#b8ccd8] leading-relaxed">
                The decision was made in March. Staff were not told until 1 July. We have filed an FOI request and you can follow it.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

          {/* Byline */}
          <div className="flex items-center gap-4 mb-10 pb-8 border-b border-[#e0d8cc]">
            <div>
              <p
                className="font-bold text-[#1c1c1c] text-[15px]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                The Sandgrounder
              </p>
              <p
                className="text-[12px] text-[#7a7069]"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                1 July 2026 &bull; Churchtown, Southport
              </p>
            </div>
          </div>

          <div
            className="space-y-5 text-[16px] text-[#2a2a2a] leading-relaxed"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            <p>
              The Botanic Gardens Aviary in Churchtown has been part of the gardens for decades. It sits within the park that runs alongside Bankfield Lane, used daily by local families, school children, and people who simply walk through on their way to school or the shops. It is free to visit. It houses macaws, African grey parrots, ringneck parakeets, conures, cockatiels, and more. It has a staff team who know the birds, care for them, and have built something genuinely worth having.
            </p>

            <p>
              Sefton Council has decided to close it. The planned closure date is March 2027.
            </p>

            <p>
              The annual saving: <strong>£60,000</strong>.
            </p>

            {/* Key facts box */}
            <div className="my-8 bg-[#eef3f8] border border-[#c0d0e0] rounded-xl p-6 space-y-3">
              <p
                className="text-[10px] font-bold uppercase tracking-widest text-[#1a3a5c] mb-4"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                Key facts
              </p>
              {[
                ["Location", "Botanic Gardens, Bankfield Lane, Churchtown, Southport"],
                ["Decision made", "Full Council, 26 February 2026"],
                ["Staff notified", "1 July 2026 (five months later)"],
                ["Planned closure", "March 2027"],
                ["Annual operating cost", "£80,750 (2026/27 estimate)"],
                ["Stated budget saving", "£60,000 (gap unexplained)"],
                ["Equality impact assessment", "None conducted"],
                ["Alternatives considered", "None"],
                ["Community approached", "No"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <span
                    className="text-[12px] font-bold text-[#1a3a5c] min-w-[140px] shrink-0"
                    style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-[13px] text-[#2a2a2a]"
                    style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <h2
              className="text-[24px] text-[#1c1c1c] leading-tight mt-10 mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
            >
              The numbers in context
            </h2>

            <p>
              The council&apos;s total funding gap is £91.757 million over the medium-term financial plan. The aviary costs £80,750 a year to run. The council stated the saving as £60,000. Either way, it is less than 0.1% of the funding gap.
            </p>

            <p>
              The council announced a £106 million Marine Lake Events Centre in June 2026. The aviary&apos;s annual operating cost is 0.057% of that figure.
            </p>

            <p>
              The same budget document that includes the aviary closure approves acceptance of £75,000 in corporate sponsorship for Southport&apos;s 2026 cultural events programme. A single sponsorship deal from a national retailer exceeds the entire annual cost of a community facility that has served Churchtown for decades.
            </p>

            <p>
              As recently as 2022 to 2023, the council was actively pursuing up to £5 million in external improvement funding for the Botanic Gardens, with the aviary listed as a key feature to be restored or improved. The same administration is now closing it to save £60,000.
            </p>

            <h2
              className="text-[24px] text-[#1c1c1c] leading-tight mt-10 mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
            >
              Five months
            </h2>

            <p>
              The FOI response confirms the decision was made at the Full Council meeting of 26 February 2026 — not by an officer, not by a Cabinet member, but by a vote of the elected council as part of the annual budget. Staff were told on 1 July 2026. That is five months, not the four initially reported.
            </p>

            <p>
              Staff members Connor Atherton, Emily, Lucy, and Luke were informed on 1 July. They are publicly opposed to the closure and are working to reverse it.
            </p>
          </div>

          {/* Gallery */}
          <div className="my-12">
            <p
              className="text-[10px] font-bold uppercase tracking-widest text-[#9a9088] mb-5"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              The birds and animals at the aviary
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {galleryImages.map((img) => (
                <div key={img.src} className="group relative overflow-hidden rounded-lg bg-[#1c1c1c]">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                      <p className="text-white text-[11px] leading-snug">{img.caption}</p>
                    </div>
                  </div>
                  <p
                    className="text-[11px] text-[#5a5248] p-2 leading-snug sm:hidden"
                    style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
                  >
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="text-[11px] text-[#9a9088] mt-3 italic"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              Photos provided by aviary staff. All images taken at the Botanic Gardens Aviary, Churchtown.
            </p>
          </div>

          <div
            className="space-y-5 text-[16px] text-[#2a2a2a] leading-relaxed"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            <h2
              className="text-[24px] text-[#1c1c1c] leading-tight mt-2 mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
            >
              The animals
            </h2>

            <p>
              Macaws. African greys. Ringneck parakeets. Conures. Cockatiels. Corellas. Guinea pigs. These are not abstract numbers in a budget document. They are animals with long lifespans. African grey parrots can live 40 to 60 years. Macaws can live 50 years or more. What happens to them is a genuine question, and the council has not yet provided a clear public answer.
            </p>

            <p>
              The staff have been clear: they are not yet at the stage of rehoming animals. They have been contacted by donors who gave animals to the aviary and are responding to those messages. But no rehoming has begun, and staff are still working to reverse the decision before that becomes necessary.
            </p>

            <p>
              Connor Atherton, who has worked at the aviary for three years, posted publicly on 1 July: &ldquo;I&apos;ll keep doing everything I can to help ensure the aviary remains open for everyone to enjoy.&rdquo;
            </p>

            <p>
              The Facebook page for the aviary is{" "}
              <a
                href="https://www.facebook.com/botanicaviary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a3a5c] hover:underline font-medium"
              >
                facebook.com/botanicaviary
              </a>
              . If you want to follow the campaign or offer support, that is where it is happening.
            </p>

            <h2
              className="text-[24px] text-[#1c1c1c] leading-tight mt-10 mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
            >
              What the FOI found
            </h2>

            <p>
              We filed a Freedom of Information request on 1 July 2026. The response arrived on 30 July. Here is what it confirms.
            </p>

            <h3
              className="text-[18px] font-semibold text-[#1c1c1c] mt-6 mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              No equality impact assessment
            </h3>

            <p>
              We asked whether an equality impact assessment or equalities screening was conducted before the decision. The council&apos;s answer: <strong>&ldquo;No such assessment or screening was undertaken.&rdquo;</strong>
            </p>

            <p>
              The Public Sector Equality Duty requires public authorities to have due regard to equality impacts before making decisions. The Botanic Gardens Aviary is a free facility used by families, elderly residents, children, and people with disabilities, located in a park that sits on a school walking route. It was closed without anyone asking who would be affected. That is not just an oversight. It may be a ground for legal challenge.
            </p>

            <h3
              className="text-[18px] font-semibold text-[#1c1c1c] mt-6 mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The actual cost: £80,750 a year
            </h3>

            <p>
              The council&apos;s own budget document stated the saving from closure as £60,000 a year. The FOI response discloses the actual operating costs. In 2025/26, the aviary cost £71,607 to run. The estimate for 2026/27 is £80,750.
            </p>

            <p>
              Staff salaries account for most of that: £54,480 in 2025/26 and an estimated £60,000 in 2026/27. The salary bill has nearly doubled since 2023/24, as the aviary grew and the team expanded. The council then voted to close it to save £60,000 — a figure that does not account for the full operating cost.
            </p>

            <p>
              The gap between the stated saving (£60,000) and the actual cost (£80,750) has not been explained. The most likely reason is that some staff costs will be redistributed rather than eliminated. But that was not said in the budget document and has not been publicly confirmed.
            </p>

            <h3
              className="text-[18px] font-semibold text-[#1c1c1c] mt-6 mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              No alternatives considered. No community approach made.
            </h3>

            <p>
              We asked whether community transfer, charitable lease, or third-party operation was considered before the closure decision was taken. The council&apos;s answer: <strong>&ldquo;None of the above were considered before the closure decision was taken.&rdquo;</strong>
            </p>

            <p>
              We asked whether any approach was made to the Botanic Gardens Community Association or any other organisation. The answer: <strong>&ldquo;No such approach was made.&rdquo;</strong>
            </p>

            <p>
              The council voted in February 2026 to close a community facility that costs £80,000 a year to run, without asking whether anyone else wanted to run it, without considering whether a community group could take it on, and without conducting any equalities check. The decision was made and it was only when staff were told five months later that anyone outside the council found out it had happened.
            </p>

            {/* FOI call-to-action */}
            <div className="my-8 bg-[#0d1f30] rounded-xl p-6 sm:p-8">
              <p
                className="text-[10px] font-bold uppercase tracking-widest text-[#6a9abf] mb-3"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                Follow the FOI
              </p>
              <p
                className="text-white text-[16px] leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                The FOI request is public. You can read it, follow it, and see the council&apos;s response as soon as it arrives.
              </p>
              <a
                href="https://www.whatdotheyknow.com/request/oi_request_botanic_gardens_aviar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0d1f30] text-[13px] font-bold px-5 py-3 rounded-lg hover:bg-[#eef3f8] transition-colors"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                View FOI request on WhatDoTheyKnow
                <ExternalLink size={13} />
              </a>
              <p
                className="text-[#6a9abf] text-[12px] mt-4"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                Filed 1 July 2026. Statutory deadline: 29 July 2026.
              </p>
            </div>

            <h2
              className="text-[24px] text-[#1c1c1c] leading-tight mt-4 mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
            >
              The questions that remain
            </h2>

            <p>
              We do not yet know which Cabinet meeting or committee approved this closure, or whether it was taken at officer level without a formal public decision. We do not know whether any public consultation was conducted. We do not know whether community transfer or charitable operation was ever explored. We do not know the exact per-animal plan for rehoming, or who bears the cost.
            </p>

            <p>
              Those answers should be public. They are not, yet.
            </p>

            <p>
              We will report the council&apos;s response when it arrives.
            </p>
          </div>

          {/* Footer nav */}
          <div className="mt-12 pt-8 border-t border-[#e0d8cc] flex flex-wrap gap-4">
            <Link
              href="/reporting"
              className="inline-flex items-center gap-2 text-[13px] text-[#7a7069] hover:text-[#1c1c1c] transition-colors"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              <ArrowLeft size={13} />
              All From the Record
            </Link>
            <a
              href="https://www.whatdotheyknow.com/request/oi_request_botanic_gardens_aviar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-[#1a3a5c] hover:underline"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              Follow on WhatDoTheyKnow
              <ExternalLink size={13} />
            </a>
          </div>

        </div>
        <Footer />
      </div>
    </>
  );
}
