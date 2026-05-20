import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import ImageLightbox from "@/components/ImageLightbox";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "This town deserves better | The Sandgrounder",
  description:
    "Why The Sandgrounder exists, what it is going to do, and who it is for.",
  alternates: {
    canonical:
      "https://www.thesandgrounder.com/opinion/this-town-deserves-better",
  },
  openGraph: {
    title: "This town deserves better",
    description:
      "Why The Sandgrounder exists, what it is going to do, and who it is for.",
    url: "https://www.thesandgrounder.com/opinion/this-town-deserves-better",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/lord-street-open-for-business.png",
        width: 1080,
        height: 720,
        alt: "Lord Street Southport under its Victorian glass canopy, every shop unit showing a TO LET sign, a single pigeon on the empty street",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "This town deserves better",
    description: "Why The Sandgrounder exists, what it is going to do, and who it is for.",
    images: ["https://www.thesandgrounder.com/images/lord-street-open-for-business.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "This town deserves better",
  description:
    "Why The Sandgrounder exists, what it is going to do, and who it is for.",
  datePublished: "2026-05-20",
  image: "https://www.thesandgrounder.com/images/lord-street-open-for-business.png",
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

export default function FoundingArticle() {
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
          This town deserves better
        </h1>

        <p
          className="text-[15px] text-[#7a7069] italic mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Why The Sandgrounder exists, what it is going to do, and who it is for.
        </p>

        <div className="mb-10">
          <ImageLightbox
            src="/images/lord-street-open-for-business.png"
            alt="Lord Street Southport under its Victorian glass canopy, every shop unit showing a TO LET sign, a single pigeon on the empty street, one unit reading Grand Opening: Another Coffee Shop, and a billboard at the end reading Southport: Open For Business"
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
            Southport is a town that has been told it is doing fine for twenty years while the evidence to the contrary has been piling up in plain sight.
          </p>
          <p>
            Vacancy rates that would embarrass most market towns. A pier closed for three years. A £73 million events centre that is currently a hole in the ground. A Business Improvement District levying businesses through the same period, accredited for its governance by a body that, it turns out, it quietly co-owns via a £2.5 billion property company.
          </p>
          <p>
            Nobody commissioned a press release about any of that.
          </p>
          <p>
            The Sandgrounder exists because those things deserve to be said out loud, by people who live here, without the usual softening.
          </p>
          <p>
            We are not a guide. We are not a promotional platform. We are not a press release with a masthead. We are not funded by a council, a BID, a property company, or a regeneration partnership.
          </p>
          <p>
            We are a Southport publication, in the tradition of every local newspaper that ever told its readers something the council would have preferred they did not know. The difference is we are starting in 2026, with no printer&apos;s bill to pay and no advertising relationships to protect.
          </p>
          <p>
            What that means in practice: we will say when something is wrong. We will name who is responsible. We will apply the same scrutiny to public bodies that those bodies claim to apply to themselves. And we will do it in plain English, without the kind of careful hedging that renders most accountability journalism harmless before it is published.
          </p>
          <p>
            We will also, occasionally, find things that are worth celebrating. Southport is not a lost cause. It is a town with good bones, full of people who care about it and have no platform to say so.
          </p>
          <p>
            This is that platform.
          </p>
          <p
            className="font-bold text-[#1c1c1c]"
          >
            The Sandgrounder. For Sandgrounders. By Sandgrounders.
          </p>
        </div>

        <ShareButtons
          path="/opinion/this-town-deserves-better"
          title="This town deserves better"
          excerpt="Why The Sandgrounder exists, what it is going to do, and who it is for."
        />

        <div className="mt-4 pt-0">
          <div className="bg-[#1c1c1c] rounded-2xl p-8">
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
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            About The Sandgrounder <ArrowRight size={11} />
          </Link>
          <Link
            href="/opinion"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e0d8cc] bg-white px-4 py-2.5 text-[12px] font-bold text-[#1c1c1c] hover:shadow-md transition-shadow"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            All opinion <ArrowRight size={11} />
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
