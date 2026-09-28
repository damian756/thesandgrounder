import { MetadataRoute } from "next";

/** Every public URL this site served before it closed. `/` covers anything else. */
const FORMER_PATHS = [
  "/",
  "/about",
  "/contact",
  "/privacy",
  "/legal",
  "/archive",
  "/opinion",
  "/satire",
  "/reporting",
  "/opinion/the-council-is-negotiating-with-an-estate-it-has-not-named",
  "/opinion/sefton-council-marked-its-own-homework",
  "/opinion/birds-had-nothing-to-do-with-it",
  "/opinion/southport-central-dan-hayes",
  "/opinion/mlec-year-one",
  "/opinion/this-town-deserves-better",
  "/reporting/botanic-gardens-aviary",
  "/reporting/the-local-news-that-isnt",
  "/reporting/savills-in-southport",
  "/satire/southport-regeneration-glossary",
  "/satire/shol-business-tips",
  "/satire/mlec-what-we-expect",
  "/api/contact",
  "/api/newsletter",
  "/images",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: FORMER_PATHS,
    },
  };
}
