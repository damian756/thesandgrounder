export type Category = "opinion" | "satire" | "reporting";

export type Article = {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  tags: string[];
  featured?: boolean;
};

export const categoryMeta: Record<
  Category,
  { label: string; description: string; color: string; bg: string }
> = {
  opinion: {
    label: "Opinion",
    description:
      "What the town actually thinks. Not what the press release says.",
    color: "#9b2020",
    bg: "#fdf0f0",
  },
  satire: {
    label: "Satire",
    description: "Because some things are best said with a cartoon of a pig.",
    color: "#8a6800",
    bg: "#fdf8e8",
  },
  reporting: {
    label: "Reporting",
    description: "Primary sources. Public records. No promotional copy.",
    color: "#1a3a5c",
    bg: "#eef3f8",
  },
};

export const articles: Article[] = [
  {
    slug: "mlec-what-we-expect",
    category: "satire",
    title: "The MLEC: what we expect",
    excerpt:
      "The Marine Lake Events Centre will open. At some point. Here are our predictions for when it does.",
    publishedAt: "2026-05-20",
    author: "The Sandgrounder",
    tags: ["mlec", "sefton-council", "southport", "regeneration"],
    featured: true,
  },
  {
    slug: "this-town-deserves-better",
    category: "opinion",
    title: "This town deserves better",
    excerpt:
      "Why The Sandgrounder exists, what it is going to do, and who it is for.",
    publishedAt: "2026-05-20",
    author: "The Sandgrounder",
    tags: ["southport", "community"],
    featured: false,
  },
];

export function getArticlesByCategory(category: Category): Article[] {
  return [...articles]
    .filter((a) => a.category === category)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getLatestArticles(n = 6): Article[] {
  return [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, n);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured) ?? articles[0];
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function articleHref(article: Article): string {
  return `/${article.category}/${article.slug}`;
}
