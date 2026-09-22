import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The birds had nothing to do with it | The Sandgrounder",
  description:
    "The aviary is closing because of animal welfare concerns. PETA were rung a fortnight before the announcement. The decision was made in February. There is a transformation plan. The site was always the point.",
  alternates: {
    canonical: "https://www.thesandgrounder.com/opinion/birds-had-nothing-to-do-with-it",
  },
  openGraph: {
    title: "The birds had nothing to do with it",
    description:
      "The aviary is closing. PETA were rung after the decision. The lodge was sold inside the park. Labour voted down the motion to use the money for the park. Twice. The site was always the point.",
    url: "https://www.thesandgrounder.com/opinion/birds-had-nothing-to-do-with-it",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/sandgrounder-aviary-birds.webp",
        width: 1200,
        height: 675,
        alt: "A blue and gold macaw perched on a Sefton Council Site for Development sign",
      },
    ],
  },
};

export default function BirdsOpinionPage() {
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
            <span className="text-[#7a7069]">22 September 2026</span>
            <span className="text-[#d8cfc2]">/</span>
            <span className="text-[#7a7069]">The Sandgrounder</span>
          </div>
          <h1
            className="text-[32px] sm:text-[42px] text-[#1c1c1c] leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
          >
            The birds had nothing to do with it
          </h1>
          <p
            className="text-[17px] text-[#4a4040] leading-relaxed"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            The aviary is closing because of animal welfare concerns. PETA were
            rung a fortnight before the announcement. The decision was made in
            February. There is a transformation plan. The site was always the point.
          </p>
        </div>

        {/* Hero image */}
        <div className="mb-10 rounded overflow-hidden">
          <Image
            src="/images/sandgrounder-aviary-birds.webp"
            alt="A blue and gold macaw perched on a Sefton Council Site for Development sign in a grey northern park"
            width={1200}
            height={675}
            className="w-full"
            priority
          />
          <p className="text-[11px] text-[#a09890] mt-2 italic px-1">
            The macaws had no comment to make.
          </p>
        </div>

        {/* Article body */}
        <article
          className="space-y-5 text-[16px] text-[#3d3030] leading-[1.75]"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p>
            The macaws did not ask to become a governance story. They were just
            macaws. They lived in Churchtown, they were very loud, and by all
            accounts they were extremely well looked after by a team who had
            spent years making something genuinely good out of some ageing
            cages. They were not a planning obstacle. They were not an
            inconvenience. They were birds.
          </p>

          <p>
            Then someone decided they were a welfare crisis.
          </p>

          <p>
            Here is how you know it was not a welfare crisis. When you have a
            welfare crisis, you contact the welfare experts first. You build the
            case. You let the evidence lead the decision. What Sefton Council
            did was vote to close the aviary in February 2026, tell nobody for
            five months, and then ring PETA about a fortnight before the story
            broke in July. The BBC confirmed it. The experts who backed the
            closure backed a decision that had already been made. They were not
            the reason. They were the reason that was found afterwards.
          </p>

          <p>
            Marion Atkinson, the council leader, said the closure was not about
            money. The budget document said it was about money. Both of these
            things appeared in public, within months of each other, and the
            council did not appear to find this embarrassing. You have to admire
            the brass neck, if nothing else.
          </p>

          <hr className="border-[#e8dfd8] my-6" />

          <p>
            The aviary costs £80,750 a year to run. Sefton Council&apos;s
            total funding gap is £91.757 million. Closing the aviary addresses
            0.088% of the problem. Less than a tenth of a tenth of one percent.
            You could fund the aviary for a full year on what the council paid a
            single property company in a single payment in June 2025 and still
            have £269,250 left over. That payment is for something listed in the
            council&apos;s accounts as &ldquo;Regeneration Scheme 1.&rdquo; What
            Regeneration Scheme 1 is has not been publicly explained. An FOI
            request has been pending for months.
          </p>

          <p>
            The aviary is closing. Regeneration Scheme 1 is fine.
          </p>

          <p>
            That is not a coincidence of priorities. That is a statement of them.
          </p>

          <hr className="border-[#e8dfd8] my-6" />

          <p>
            Before the closure was announced, the council sold a building that
            was physically inside the Botanic Gardens. The proceeds went to the
            general fund. Not to the park. Not to the Heritage Lottery match
            that would have turned every pound into nine. To the pot.
          </p>

          <p>
            When the Liberal Democrats asked for the money from that sale to be
            used to save the aviary and fund the Heritage Lottery bid, Labour
            voted it down. They were asked again. Labour voted it down again.
            Thirty-five to twenty-seven. Twice. On the same question. In the
            same building. Regarding money from the same park.
          </p>

          <p>
            There is a Heritage Lottery bid in development that needs match
            funding. Match funding which, if secured, would turn every £100
            raised into £1,000 of park investment. The council sold a building
            inside the park and did not put the money toward that. Make of that
            what you will.
          </p>

          <hr className="border-[#e8dfd8] my-6" />

          <p>
            There is a transformation plan for the Botanic Gardens. It has been
            in development since September 2020, when the Southport Town Deal
            Board — which does not meet in public — first proposed it. The plan
            needs the aviary site for new visitor attractions. The aviary sits
            about thirty metres from the park entrance. Best spot in the place.
          </p>

          <p>
            The chair of the Town Deal Board that originated this plan is the
            founder of Fletchers Solicitors. He sold the firm to a US private
            equity company in 2021 and kept a share of it. That firm is now
            valued at £240 million. His lock-up on that equity expires next
            month. He has never once declared any of this at a board meeting.
            The board, eight days ago, decided he should carry on as chair.
          </p>

          <p>
            Another board member&apos;s company received a digital consultancy
            contract from the same board after he stood up and suggested his
            company was &ldquo;well placed and uniquely qualified&rdquo; for it.
            The approval was taken off-meeting, so there is no public record of
            a vote. This is in the published minutes. In black and white. Nobody
            at the council seems to have found it worth remarking on at the time,
            or since.
          </p>

          <p>
            Governance is not usually dramatic. It is usually this: a meeting
            that is not public, a declaration that is not made, a document that
            is not joined up with the other documents, an approval that happens
            on email, a justification that is assembled after the fact. Nobody
            raises their voice. Nobody needs to.
          </p>

          <hr className="border-[#e8dfd8] my-6" />

          <p>
            Connor Atherton has worked at the aviary for three years. He said
            the birds were his life and that the team had spent years making
            something worth having. He accepted it was outdated. He never said
            it was perfect. He said it deserved to be improved, piece by piece,
            and he was going to keep fighting for it.
          </p>

          <p>
            That is a very Churchtown thing to say, honestly. That is the voice
            of someone who lives in the town, works in the town, and thinks the
            town is worth the effort of improving rather than replacing.
          </p>

          <p>
            The council does not share this view of improvement. The council
            prefers transformation plans, stakeholder groups, pre-development
            grants, and Heritage Lottery bids that need the old thing gone before
            the new thing can begin. This is a different philosophy. It is not
            better. It is just the one that currently has the votes.
          </p>

          <p>
            The macaws are being rehomed. The African grey parrots are being
            rehomed. The conures, the cockatiels, the ringneck parakeets. One
            hundred and seventy birds that were not sick, were not suffering, and
            were not the reason. Being rehomed because the site was needed.
          </p>

          <p>
            The Botanic Gardens aviary opened in 1939. It outlasted eighty-seven
            years of Southport&apos;s best and worst. It did not outlast the
            Southport Town Deal Board.
          </p>

          <p className="font-semibold text-[#1c1c1c]">
            That is not a welfare story. That is not a budget story.
            It is a governance story. The birds just happened to be in the way.
          </p>

          <div className="border-t border-[#e8dfd8] pt-5 mt-6">
            <p className="text-sm text-[#7a7069]">
              The full investigation is published at{" "}
              <a
                href="https://www.siba.digital/reports/botanic-gardens-aviary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9b2020] underline underline-offset-2"
              >
                siba.digital/reports/botanic-gardens-aviary
              </a>
              . Every claim is sourced to a public document.
            </p>
          </div>
        </article>

        <div className="mt-10 pt-6 border-t border-[#e8dfd8]">
          <ShareButtons
            url="https://www.thesandgrounder.com/opinion/birds-had-nothing-to-do-with-it"
            title="The birds had nothing to do with it"
          />
        </div>

      </main>

      <Footer />
    </>
  );
}
