import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Opinion | The Sandgrounder",
  description:
    "Opinion pieces from The Sandgrounder. What the town actually thinks. Not what the press release says.",
  alternates: { canonical: "https://www.thesandgrounder.com/opinion" },
};

export default function OpinionPage() {
  const articles = getArticlesByCategory("opinion");

  return (
    <>
      <div className="w-full h-1 bg-[#9b2020]" />
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:py-16">
        <div className="mb-10">
          <p
            className="text-[10px] font-bold uppercase tracking-widest text-[#9b2020] mb-2"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            The Sandgrounder
          </p>
          <h1
            className="text-[40px] sm:text-[52px] text-[#1c1c1c] leading-[1.05] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
          >
            Opinion
          </h1>
          <p
            className="text-[15px] text-[#7a7069]"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            What the town actually thinks. Not what the press release says.
          </p>
        </div>

        {articles.length === 0 ? (
          <p
            className="text-[15px] text-[#9a9088]"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            No pieces yet. Check back soon.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
