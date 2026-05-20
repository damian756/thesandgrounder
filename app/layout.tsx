import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Sandgrounder",
  description:
    "Independent opinion, satire, and honest reporting from Southport. For Sandgrounders. By Sandgrounders.",
  metadataBase: new URL("https://www.thesandgrounder.com"),
  alternates: {
    canonical: "https://www.thesandgrounder.com",
  },
  openGraph: {
    title: "The Sandgrounder",
    description:
      "Independent opinion, satire, and honest reporting from Southport. For Sandgrounders. By Sandgrounders.",
    url: "https://www.thesandgrounder.com",
    type: "website",
    siteName: "The Sandgrounder",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sandgrounder",
    description: "Independent opinion, satire, and honest reporting from Southport.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
