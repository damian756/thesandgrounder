import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Sandgrounder has closed",
  description: "This site has closed.",
  metadataBase: new URL("https://www.thesandgrounder.com"),
  alternates: {
    canonical: "https://www.thesandgrounder.com",
  },
  robots: { index: true, follow: false },
  openGraph: {
    title: "The Sandgrounder has closed",
    description: "This site has closed.",
    url: "https://www.thesandgrounder.com",
    type: "website",
    siteName: "The Sandgrounder",
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
