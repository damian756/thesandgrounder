import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "On Independent Journalism in Southport | Dan Hayes, Southport Central",
  description:
    "Dan Hayes, Editor of Southport Central, on twenty years of independent local reporting: what it takes, what it costs, and why it still matters.",
  alternates: {
    canonical: "https://www.thesandgrounder.com/opinion/southport-central-dan-hayes",
  },
  openGraph: {
    title: "On Independent Journalism in Southport",
    description:
      "Dan Hayes, Editor of Southport Central, on twenty years of independent local reporting: what it takes, what it costs, and why it still matters.",
    url: "https://www.thesandgrounder.com/opinion/southport-central-dan-hayes",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/southport-central-dan-hayes.webp",
        width: 1200,
        height: 675,
        alt: "Southport Central website homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "On Independent Journalism in Southport",
    description:
      "Dan Hayes, Editor of Southport Central, on twenty years of independent local reporting.",
    images: ["https://www.thesandgrounder.com/images/southport-central-dan-hayes.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "On Independent Journalism in Southport",
  description:
    "Dan Hayes, Editor of Southport Central, on twenty years of independent local reporting: what it takes, what it costs, and why it still matters.",
  datePublished: "2026-06-30",
  dateModified: "2026-06-30",
  author: {
    "@type": "Person",
    name: "Dan Hayes",
    jobTitle: "Editor, Southport Central",
    url: "https://www.southportcentral.co.uk",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.thesandgrounder.com/#organization",
    name: "The Sandgrounder",
    logo: { "@type": "ImageObject", url: "https://www.thesandgrounder.com/window.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.thesandgrounder.com/opinion/southport-central-dan-hayes",
  },
};

export default function DanHayesPost() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-[#1c1c1c] text-white overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/southport-central-dan-hayes.webp"
            alt="Southport Central website homepage"
            fill
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1c1c1c 44%, rgba(28,28,28,0.85) 64%, rgba(28,28,28,0.1) 100%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-[540px]">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Link
                href="/opinion"
                className="inline-flex items-center gap-1 text-[11px] text-[#a0a0a0] hover:text-white transition-colors"
              >
                <ArrowLeft size={11} />
                Opinion
              </Link>
              <span className="text-[#a0a0a0]/40">/</span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#a0a0a0] border border-[#a0a0a0]/30 px-2 py-0.5">
                Guest
              </span>
              <span className="text-xs text-[#a0a0a0]">June 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              On Independent Journalism in Southport
            </h1>
            <p className="text-lg text-[#c0c0c0] leading-relaxed">
              Twenty years of archival work, long-form reporting, and asking questions the local media did not always want asked.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Author byline */}
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-[#e0d8cc]">
          <div>
            <p
              className="font-bold text-[#1c1c1c] text-[15px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Dan Hayes
            </p>
            <p
              className="text-[12px] text-[#7a7069]"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              Editor,{" "}
              <a
                href="https://www.southportcentral.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9b2020] hover:underline"
              >
                Southport Central
              </a>
            </p>
          </div>
        </div>

        <div
          className="space-y-5 text-[16px] text-[#2a2a2a] leading-relaxed"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          <p>
            For a long time, towns like Southport benefited from genuinely strong local journalism and local history was well documented and preserved. Even when people disagreed with coverage, there was usually an understanding that local reporting served an important purpose.
          </p>

          <p>
            Over time, however, much of that depth has gradually disappeared. Like many regional publications across the country, local newspapers came under increasing commercial pressure. Too much local coverage drifted towards recycled press releases, quick-turnaround online content, and social media reaction rather than detailed reporting or investigation.
          </p>

          <p>
            Southport Central was not created to fill that gap. Originally, the site was a historical and statistical project rooted in a long-standing interest in Southport FC. Much of the early work focused on documenting the club history properly, building statistical databases, researching historical inconsistencies, and preserving information that increasingly felt fragmented or overlooked.
          </p>

          <p>
            The more research I carried out, the more interested I became not only in results and statistics, but in wider questions surrounding identity, continuity, governance, ownership, and more. That work eventually led to the publication of my book on the origins and early history of Southport Football Club and Southport Rugby Club, challenging several long-standing assumptions surrounding the formation and development of the two clubs.
          </p>

          <p>
            The Southport Central that you see today emerged much more gradually than you would expect. What began as archival and historical work evolved more organically into broader reporting, analysis, and investigative writing.
          </p>

          <p>
            Over time, gaps increasingly became visible within the local media landscape. Important issues were often receiving only surface-level coverage, while areas requiring historical context, financial understanding, or sustained scrutiny were frequently underexplored altogether.
          </p>

          <p>
            Coming from a professional background outside journalism, particularly within analytical and governance-focused environments, I slowly realised I could probably contribute something useful within those gaps.
          </p>

          <p>
            Southport Central now sits somewhere between archive, specialist publication, independent newsroom, and long-form historical project. That unusual structure is probably part of what allows it to approach subjects differently from both traditional local media and modern social media-driven coverage.
          </p>

          <p>
            Over the past few years, much of my reporting has focused on the various ownership changes at Southport FC. That work involved examining company accounts, governance structures, financial statements, regulatory issues, and public claims in considerable depth. Much of it was work that simply was not being carried out elsewhere, locally, regionally or nationally.
          </p>

          <p>
            Part of the frustration during that period came from the growing disconnect between the public narrative surrounding the club and the underlying reality visible within the available evidence.
          </p>

          <p>
            At times, coverage and online discussion could feel heavily sanitised, with difficult subjects either softened, ignored entirely, or dismissed as negativity. Public relations messaging was often repeated with little challenge or scrutiny, while supporters raising legitimate concerns were sometimes portrayed as disruptive rather than engaged.
          </p>

          <p>
            That environment increasingly reinforced the importance of independent reporting grounded in documents, evidence, and verifiable information rather than access, loyalty, or sentiment.
          </p>

          <p>
            One of the lessons I gradually learned was that communities can sometimes become surprisingly resistant to uncomfortable truths when those truths threaten narratives people emotionally want to believe. Yet journalism has very little value if it only operates comfortably within consensus.
          </p>

          <p>
            At times, that approach inevitably created friction. Independent scrutiny is often welcomed in principle far more readily than in practice, particularly at local level where personal relationships, access, and long-standing loyalties can easily become intertwined. There were certainly periods where asking difficult questions or pursuing uncomfortable subjects led to some pretty poor treatment.
          </p>

          <p>
            At the same time, I have never believed the role of independent journalism is simply to antagonise institutions or individuals unnecessarily. Southport is a relatively small community where relationships, trust, and communication still matter, and maintaining those relationships responsibly is part of serious local reporting.
          </p>

          <p>
            One of the realities of independent journalism is that information often circulates privately long before it reaches the public domain. Over time, I have frequently found myself aware of developments, announcements, or disputes that had not yet been made public, sometimes well in advance.
          </p>

          <p>
            Not every piece of information necessarily needs to become an immediate scoop. There are times where allowing events to unfold naturally provides better context, greater accuracy, or more meaningful reporting than simply publishing information first for its own sake.
          </p>

          <p>
            In many cases, that level of understanding is only possible because relationships of trust exist in the first place. People will often share information in confidence when they believe discretion, fairness, and integrity will be exercised responsibly. On that basis I have frequently been made aware of future developments in the full knowledge that they would not be revealed prematurely. Formal embargoes have actually been extremely rare. I have only once been explicitly given advance information under embargo, and rather than feeling restrictive it actually allowed me to prepare context and informed response properly so coverage could add value immediately once the information entered the public domain.
          </p>

          <p>
            Since its founding around twenty years ago, Southport Central has developed into the largest archive of Southport FC history available anywhere. It is now also much more than that.
          </p>

          <p>
            The ambition was to create something with substance and permanence. It is now home to detailed reporting, documented history, investigative work, statistical archives, and thoughtful analysis.
          </p>

          <p>
            The reality is that modern local journalism operates under significant resource constraints. Most local outlets no longer have the staffing, time, or specialist capacity to investigate every issue in depth, particularly in areas such as governance, financial analysis, historical research, or long-form reporting.
          </p>

          <p>
            That is one of the reasons I have generally been happy for other publications and platforms to syndicate or republish Southport Central content when appropriately credited.
          </p>

          <p>
            If proper reporting reaches wider audiences through syndication, collaboration, or republication, then that ultimately benefits public understanding and strengthens local discourse.
          </p>

          <p>
            That is not to say the arrangement is entirely without tension. There are certainly moments where it can be frustrating to see work requiring significant time and research subsequently benefiting organisations with larger audiences or commercial structures when Southport Central itself operates independently and without financial reward.
          </p>

          <p>
            Ultimately, though, the greatest satisfaction probably comes from the feedback the site receives from ordinary supporters, readers, former players, historians, and people connected to the club and town.
          </p>

          <p>
            Over the years, I have lost count of the number of messages from people who discovered information about relatives, revisited memories they thought had disappeared, gained a better understanding of the club history, or simply appreciated seeing difficult subjects explored properly rather than reduced to slogans or reaction.
          </p>

          <p>
            If any of that sounds interesting to you, then I hope you will find Southport Central worth exploring.
          </p>
        </div>

        {/* Author footer */}
        <div className="mt-10 pt-8 border-t border-[#e0d8cc]">
          <p
            className="text-[13px] text-[#7a7069] leading-relaxed"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            <strong className="text-[#1c1c1c]">Dan Hayes</strong> is the Editor of{" "}
            <a
              href="https://www.southportcentral.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9b2020] hover:underline"
            >
              Southport Central
            </a>
            , Southport&apos;s largest independent archive of local football history and the town&apos;s broadest long-form independent publication.
            The Sandgrounder is grateful for his contribution.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e0d8cc] flex flex-wrap gap-4">
          <Link
            href="/opinion"
            className="inline-flex items-center gap-2 text-[13px] text-[#7a7069] hover:text-[#1c1c1c] transition-colors"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            <ArrowLeft size={13} />
            All opinion
          </Link>
          <a
            href="https://www.southportcentral.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#9b2020] hover:underline"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Visit Southport Central
          </a>
        </div>

      </div>
    </div>
  );
}
