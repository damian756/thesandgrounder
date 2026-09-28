import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.thesandgrounder.com",
      lastModified: new Date("2026-09-28"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
