import { MetadataRoute } from "next";

// The site closed on 28 Sep 2026. Crawling stays open so search engines can
// fetch the former URLs and see the 410 Gone and X-Robots-Tag: noindex that
// proxy.ts returns. A disallow here would hide both. The closing page at `/`
// carries noindex in its meta tag and header.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
