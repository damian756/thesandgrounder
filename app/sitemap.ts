import { MetadataRoute } from "next";
import { articles, articleHref } from "@/lib/articles";

const BASE = "https://www.thesandgrounder.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/archive`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/opinion`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/satire`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/reporting`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE}${articleHref(article)}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "weekly",
    priority: article.featured ? 0.9 : 0.7,
  }));

  return [...staticPages, ...articlePages];
}
