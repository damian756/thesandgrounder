import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import SignupForm from "@/components/SignupForm";
import { getFeaturedArticle, getLatestArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "The Sandgrounder | Independent Opinion from Southport",
  description:
    "Independent opinion, satire, and honest reporting from Southport. For Sandgrounders. By Sandgrounders.",
  alternates: {
    canonical: "https://www.thesandgrounder.com",
  },
  openGraph: {
    title: "The Sandgrounder",
    description:
      "Independent opinion and honest reporting from Southport. For Sandgrounders. By Sandgrounders.",
    url: "https://www.thesandgrounder.com",
    type: "website",
  },
};

export default function Home() {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(6).filter((a) => !a.featured);

  return (
    <>
      <div className="w-full h-1 bg-[#9b2020]" />
      <Nav />

      <main className="mx-auto max-w-4xl px-4 py-10 sm:py-16">

        {/* Masthead */}
        <div className="text-center mb-12">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9b2020] mb-4"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Southport &bull; Est. 2026
          </p>
          <h1
            className="text-[58px] sm:text-[76px] text-[#1c1c1c] leading-[0.95] mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
          >
            The Sandgrounder
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[80px] bg-[#d8cfc2]" />
            <p
              className="text-[13px] text-[#7a7069] italic"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              For Sandgrounders. By Sandgrounders.
            </p>
            <div className="h-px flex-1 max-w-[80px] bg-[#d8cfc2]" />
          </div>
        </div>

        {/* Featured article */}
        {featured && (
          <div className="mb-6">
            <p
              className="text-[10px] font-bold uppercase tracking-widest text-[#9a9088] mb-3"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              Featured
            </p>
            <ArticleCard article={featured} variant="featured" />
          </div>
        )}

        {/* Latest articles */}
        {latest.length > 0 && (
          <div className="mb-12">
            <p
              className="text-[10px] font-bold uppercase tracking-widest text-[#9a9088] mb-3"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              Latest
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {latest.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        )}

        {/* Subscribe */}
        <div id="subscribe" className="bg-[#1c1c1c] rounded-2xl p-8 sm:p-10 mb-12">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8860b] mb-3"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Stay in the loop
          </p>
          <p
            className="text-[18px] text-white mb-2"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            New pieces, straight to your inbox.
          </p>
          <p
            className="text-[14px] text-[#9a9088] mb-6"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            No promotional content. No third parties. Just The Sandgrounder.
          </p>
          <SignupForm />
        </div>

        {/* What we are */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "Opinion",
              href: "/opinion",
              text: "What the town actually thinks. Not what the press release says.",
            },
            {
              label: "Satire",
              href: "/satire",
              text: "Because some things are best said with a cartoon of a pig.",
            },
            {
              label: "Reporting",
              href: "/reporting",
              text: "Primary sources. Public records. No promotional copy.",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <p
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b2020] mb-2"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                {item.label}
              </p>
              <p
                className="text-[13px] text-[#4a4540] leading-relaxed"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                {item.text}
              </p>
            </a>
          ))}
        </div>

      </main>

      <Footer />
    </>
  );
}
