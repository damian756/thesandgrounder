import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Sefton Council marked its own homework. It got a B minus and a pat on the head. | The Sandgrounder",
  description:
    "SIBA read the whole council so you don't have to. Twenty-one sections. £648.8 million. Five waiver reports with zero numbers in any of them.",
  alternates: {
    canonical:
      "https://www.thesandgrounder.com/opinion/sefton-council-marked-its-own-homework",
  },
  openGraph: {
    title:
      "Sefton Council marked its own homework. It got a B minus and a pat on the head.",
    description:
      "SIBA read the whole council so you don't have to. £648.8 million out the door. Five waiver reports. Not one number in any of them.",
    url: "https://www.thesandgrounder.com/opinion/sefton-council-marked-its-own-homework",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/sefton-scrutiny-waiver-magic.png",
        width: 1152,
        height: 864,
        alt: "A pig magician gestures to a curtained cabinet labelled Waivers: Closed Appendix, while committee pigs applaud",
      },
    ],
  },
};

export default function SeftonHomeworkOpinionPage() {
  return (
    <>
      <div className="w-full h-1 bg-[#9b2020]" />
      <Nav />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:py-16">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-widest">
            <Link
              href="/opinion"
              className="text-[#9b2020] hover:underline"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              Opinion
            </Link>
            <span className="text-[#d8cfc2]">/</span>
            <span className="text-[#7a7069]">23 September 2026</span>
            <span className="text-[#d8cfc2]">/</span>
            <span className="text-[#7a7069]">The Sandgrounder</span>
          </div>
          <h1
            className="text-[30px] sm:text-[40px] text-[#1c1c1c] leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
          >
            Sefton Council marked its own homework. It got a B minus and a pat on the head.
          </h1>
          <p
            className="text-[17px] text-[#4a4040] leading-relaxed"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            SIBA read the whole council so you don&rsquo;t have to. Twenty-one
            sections. £648.8 million. Five waiver reports with zero numbers
            in any of them. Here&rsquo;s the bit that made us laugh, and the
            bit that didn&rsquo;t.
          </p>
          <a
            href="https://www.siba.digital/files/sefton-council-scrutiny-23-september-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-widest text-[#9b2020] hover:underline"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            &#8595; Download the full SIBA report (PDF)
          </a>
        </div>

        {/* Hero image */}
        <div className="mb-10 rounded overflow-hidden">
          <Image
            src="/images/sefton-scrutiny-waiver-magic.png"
            alt="A pig magician in a top hat gestures to a curtained cabinet labelled Waivers: Closed Appendix, Schedule 12A, while committee pigs applaud, one asleep under a newspaper. Signs read Fit For Purpose and 4 Significant Weaknesses side by side."
            width={1152}
            height={864}
            className="w-full"
            priority
          />
          <p className="text-[11px] text-[#a09890] mt-2 italic px-1">
            The Audit and Governance Committee&rsquo;s finest trick. Nobody has explained how it&rsquo;s done.
          </p>
        </div>

        {/* Article body */}
        <article
          className="space-y-5 text-[16px] text-[#3d3030] leading-[1.75]"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p>
            There&rsquo;s a line in the new SIBA scrutiny report that we&rsquo;ve
            read four times now because we keep not believing it. The
            council&rsquo;s own governance statement, on the same page, in the
            same breath, says the arrangements are &ldquo;fit for
            purpose&rdquo; and lists two &ldquo;significant governance
            issues.&rdquo; The external auditor found four significant
            weaknesses in the same year. Someone, presumably, was paid to
            write that page. We&rsquo;d love to know how the meeting went.
          </p>

          <p>
            The report is twenty-one sections long and reads like a man
            counting his own pulse and grading himself &ldquo;healthy.&rdquo;
            A cabinet member signs the disposal. The officer who wrote the
            report recommending it sits on the board of the company getting
            it. The committee meant to catch that has, for most of two
            years, had a vice chair who was also a director of the thing it
            was checking. Nobody broke a rule. There wasn&rsquo;t a rule in
            the way.
          </p>

          <hr className="border-[#e8dfd8] my-6" />

          <p>
            But the bit worth your time is the waivers, because it&rsquo;s
            the only part of this that&rsquo;s actually funny rather than
            just depressing.
          </p>

          <p>
            A waiver is what happens when the council decides it doesn&rsquo;t
            need to compete a contract. Sefton has published five quarterly
            waiver reports to the Audit and Governance Committee since
            September 2025. Every single one of the five keeps the actual
            list of waivers in an appendix marked not for publication. The
            public part of each report contains, and we are not simplifying
            this for effect, no number. Not a count. Not a total. The
            council&rsquo;s own summary sentence, verbatim, is: &ldquo;Overall,
            the report highlights the number of Waivers that are
            authorised.&rdquo;
          </p>

          <p>
            Read that sentence again. It highlights that there is a number.
            It does not tell you the number. That is not a governance
            process. That is a magic trick, and not even a good one, because
            you can see exactly where the number&rsquo;s hidden. It&rsquo;s
            behind the curtain marked &ldquo;Schedule 12A.&rdquo; Everyone in
            the room knows it&rsquo;s there. Nobody asks to look.
          </p>

          <hr className="border-[#e8dfd8] my-6" />

          <p>
            While we&rsquo;re on the subject of numbers the council would
            rather you didn&rsquo;t add up: £648.8 million left Sefton Council
            in payments over 2022 and 2023 alone. Eight contracts hold 61 per
            cent of everything on the public contracts register. Savills got
            £350,000 in June 2025 for something recorded as
            &ldquo;Regeneration Scheme 1,&rdquo; which is either the name of a
            project or the name of a Bond villain&rsquo;s lair, and the
            council hasn&rsquo;t said which.
          </p>

          <p>
            Thirteen of the first fifteen freedom of information requests
            about one officer&rsquo;s own roles were signed by that same
            officer. That&rsquo;s not a conflict of interest so much as a
            man marking his own exam and then filing the appeal himself when
            he disagrees with the grade.
          </p>

          <hr className="border-[#e8dfd8] my-6" />

          <p>
            The good news, if you can call it that: nobody is accused of
            taking a backhander. The bad news is worse than a backhander,
            because a backhander is at least illegal and this isn&rsquo;t.
            This is just how the building works. A meeting that isn&rsquo;t
            public, a declaration that isn&rsquo;t made, an appendix that
            stays closed, a sentence that tells you a number exists without
            telling you the number. Nobody raises their voice. Nobody needs
            to.
          </p>

          <p className="font-semibold text-[#1c1c1c]">
            We have written before about one room in this building, the
            Botanic Gardens aviary. This report is the building the room
            sits in. Read it. It&rsquo;s long. That&rsquo;s rather the point.
          </p>

          <div className="border-t border-[#e8dfd8] pt-5 mt-6">
            <a
              href="https://www.siba.digital/files/sefton-council-scrutiny-23-september-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-widest text-[#9b2020] hover:underline mb-3"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              &#8595; Download the full SIBA report (PDF)
            </a>
            <p className="text-sm text-[#7a7069]">
              The full scrutiny report is published at{" "}
              <a
                href="https://www.siba.digital/reports/sefton-council-scrutiny"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9b2020] underline underline-offset-2"
              >
                siba.digital/reports/sefton-council-scrutiny
              </a>
              . Every claim is sourced to a public document. See also our
              own coverage of the{" "}
              <Link
                href="/opinion/birds-had-nothing-to-do-with-it"
                className="text-[#9b2020] underline underline-offset-2"
              >
                Botanic Gardens aviary
              </Link>
              .
            </p>
          </div>
        </article>

        <div className="mt-10 pt-6 border-t border-[#e8dfd8]">
          <ShareButtons
            path="/opinion/sefton-council-marked-its-own-homework"
            title="Sefton Council marked its own homework. It got a B minus and a pat on the head."
          />
        </div>

      </main>

      <Footer />
    </>
  );
}
