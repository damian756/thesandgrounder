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
  image?: string;
  imageAlt?: string;
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
    slug: "southport-regeneration-glossary",
    category: "satire",
    title: "The Southport Regeneration Glossary",
    excerpt:
      "A public service. Twenty terms in common use across Southport's regeneration ecosystem, with accurate definitions. None of these definitions appear in the documents where the terms are used.",
    publishedAt: "2026-05-20",
    author: "The Sandgrounder",
    tags: ["southport", "sefton-council", "bid", "regeneration", "mlec", "foi"],
    featured: false,
    image: "/images/southport-regeneration-glossary.png",
    imageAlt:
      "A pig bureaucrat in a pinstripe suit writes in a large dictionary titled Official Definitions: Southport Regeneration Edition while a second pig holds a Regeneration Milestone Award 2024 trophy. Three filing cabinets read FOI Pending, FOI Declined, FOI Commercially Sensitive. The bin contains crumpled Vacancy Rate and Accountability papers.",
  },
  {
    slug: "the-local-news-that-isnt",
    category: "reporting",
    title: "The local news that isn't",
    excerpt:
      "Stand Up For Southport is the most-read local news source in Southport. It is paid by the BID, the council, and Mikhail Hotels. None of this is disclosed to its readers.",
    publishedAt: "2026-05-20",
    author: "The Sandgrounder",
    tags: ["stand-up-for-southport", "southport", "bid", "mikhail", "local-press"],
    featured: false,
    image: "/images/local-news-that-isnt.png",
    imageAlt:
      "A pig newsreader sits at a local news desk wearing badges reading BID Contractor, Council Supplier, Mikhail Partner. A stack of Huge Success For Southport scripts sits on the desk. The bin overflows with crumpled BID Accounts, Vacancy Rate and FOI Response papers. The green screen behind shows the real Lord Street with To Let signs.",
  },
  {
    slug: "savills-in-southport",
    category: "reporting",
    title: "The Savills map",
    excerpt:
      "What one property company manages, advises, and accredits in Southport. And what levy payers were never told.",
    publishedAt: "2026-05-20",
    author: "The Sandgrounder",
    tags: ["savills", "southport", "bid", "mlec", "sefton-council", "regeneration"],
    featured: false,
    image: "/images/savills-map.png",
    imageAlt:
      "A large Savills-labelled pig reclines on public funds money bags while smaller piglets labelled BID Board, Sefton Council, Regeneration Scheme 1 and 515,000 Visitors feed from it. Documents on the ground read Supplier Spend, FOI Outstanding, British BIDs Accreditation, Companies House. Behind them: MLEC Opening Soon and Lord Street To Let signs.",
  },
  {
    slug: "mlec-year-one",
    category: "opinion",
    title: "The MLEC, one year from now",
    excerpt:
      "Southport has a pattern. The same names, the same undisclosed relationships, the same media contractor covering it all warmly. The Marine Lake Events Centre will not be different.",
    publishedAt: "2026-05-20",
    author: "The Sandgrounder",
    tags: ["mlec", "sefton-council", "southport", "regeneration", "bid"],
    featured: false,
    image: "/images/mlec-year-one.png",
    imageAlt:
      "A pig bartender serves Mikhail Ale at the MLEC grand opening while identical grey-suited men fill the seats for the BID Annual Gala. A reporter pig scribbles in a Stand Up For Southport notepad. A 515,000 Visitors Expected sign hangs on the wall. One pigeon sits in the otherwise empty back rows.",
  },
  {
    slug: "shol-business-tips",
    category: "satire",
    title: "How to run a hospitality business: a guide from SHOL",
    excerpt:
      "Sefton Council has been running a hospitality company for four years. Losses stand at £1.945 million. Here is what they have learned.",
    publishedAt: "2026-05-20",
    author: "The Sandgrounder",
    tags: ["shol", "sefton-council", "southport"],
    featured: true,
    image: "/images/shol-business-tips.png",
    imageAlt:
      "Council pigs in chef hats run a chaotic kitchen under a Losses 1.945M Today's Special sign while a scrutiny committee pig reads a newspaper undisturbed in the corner",
  },
  {
    slug: "mlec-what-we-expect",
    category: "satire",
    title: "The MLEC: what we expect",
    excerpt:
      "The Marine Lake Events Centre will open. At some point. Here are our predictions for when it does.",
    publishedAt: "2026-05-20",
    author: "The Sandgrounder",
    tags: ["mlec", "sefton-council", "southport", "regeneration"],
    featured: false,
    image: "/images/mlec-predictions.png",
    imageAlt:
      "Council officials celebrating in front of the unfinished MLEC construction site, banner reading Celebrating Our Success, someone holding a falling vacancy rate graph",
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
    image: "/images/lord-street-open-for-business.png",
    imageAlt:
      "Lord Street Southport under its Victorian glass canopy, every shop unit showing a TO LET sign, a single pigeon on the empty street, one unit reading Grand Opening: Another Coffee Shop, and a billboard at the end reading Southport: Open For Business",
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
