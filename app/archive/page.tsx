import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles, categoryMeta } from "@/lib/articles";
import type { Category } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Archive | The Sandgrounder",
  description: "All pieces from The Sandgrounder, in order.",
  alternates: { canonical: "https://www.thesandgrounder.com/archive" },
};

export default function ArchivePage() {
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const categories: Category[] = ["opinion", "satire", "reporting"];

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
            Archive
          </h1>
          <p
            className="text-[15px] text-[#7a7069]"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Everything we have published, in order.
          </p>
        </div>

        {/* Filter by category */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            return (
              <a
                key={cat}
                href={`/${cat}`}
                className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-colors"
                style={{
                  color: meta.color,
                  backgroundColor: meta.bg,
                  fontFamily: "var(--font-lato), Arial, sans-serif",
                }}
              >
                {meta.label}
              </a>
            );
          })}
        </div>

        {sorted.length === 0 ? (
          <p
            className="text-[15px] text-[#9a9088]"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Nothing published yet.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {sorted.map((a) => (
              <ArticleCard key={`${a.category}-${a.slug}`} article={a} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
