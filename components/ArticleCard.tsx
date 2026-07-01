import Link from "next/link";
import Image from "next/image";
import { Article, categoryMeta, formatDate, articleHref } from "@/lib/articles";

type Props = {
  article: Article;
  variant?: "default" | "featured";
};

export default function ArticleCard({ article, variant = "default" }: Props) {
  const meta = categoryMeta[article.category];

  if (variant === "featured") {
    return (
      <Link href={articleHref(article)} className="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        {article.image && (
          <div className="w-full overflow-hidden relative aspect-[16/9]">
            <Image
              src={article.image}
              alt={article.imageAlt ?? article.title}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.01]"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
        )}
        <div className={`${article.image ? "p-8 sm:p-10" : "p-8 sm:p-10"}`}>
        <div className="flex items-center gap-3 mb-5">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              color: meta.color,
              backgroundColor: meta.bg,
              fontFamily: "var(--font-lato), Arial, sans-serif",
            }}
          >
            {meta.label}
          </span>
          <span
            className="text-[11px] text-[#9a9088]"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            {formatDate(article.publishedAt)}
          </span>
        </div>
        <h2
          className="text-[32px] sm:text-[40px] text-[#1c1c1c] leading-[1.1] mb-4 group-hover:text-[#9b2020] transition-colors"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
        >
          {article.title}
        </h2>
        <p
          className="text-[16px] text-[#5a5248] leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          {article.excerpt}
        </p>
        <span
          className="text-[12px] font-bold uppercase tracking-widest text-[#9b2020]"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          Read more
        </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={articleHref(article)} className="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {article.image && (
        <div className="w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt ?? article.title}
            width={600}
            height={340}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>
      )}
      <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
          style={{
            color: meta.color,
            backgroundColor: meta.bg,
            fontFamily: "var(--font-lato), Arial, sans-serif",
          }}
        >
          {meta.label}
        </span>
        <span
          className="text-[11px] text-[#9a9088]"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          {formatDate(article.publishedAt)}
        </span>
      </div>
      <h3
        className="text-[20px] text-[#1c1c1c] leading-[1.2] mb-2 group-hover:text-[#9b2020] transition-colors"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
      >
        {article.title}
      </h3>
      <p
        className="text-[13px] text-[#5a5248] leading-relaxed"
        style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
      >
        {article.excerpt}
      </p>
      </div>
    </Link>
  );
}
