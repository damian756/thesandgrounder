import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The council is negotiating with an estate it has not named | The Sandgrounder",
  description:
    "Sefton is ready to pay the Scarisbrick Estate out of the events centre budget. The land register of the site does not name a living Scarisbrick.",
  alternates: {
    canonical: "https://www.thesandgrounder.com/opinion/the-council-is-negotiating-with-an-estate-it-has-not-named",
  },
  openGraph: {
    title: "The council is negotiating with an estate it has not named",
    description:
      "The 1885 promise is real. The person the council says it is negotiating with is not on the register.",
    url: "https://www.thesandgrounder.com/opinion/the-council-is-negotiating-with-an-estate-it-has-not-named",
    type: "article",
    images: [
      {
        url: "https://www.thesandgrounder.com/images/sandgrounder-unnamed-estate.png",
        width: 1152,
        height: 864,
        alt: "A pig solicitor waits on the telephone. The chair opposite is empty.",
      },
    ],
  },
};

export default function UnnamedEstatePage() {
  return (
    <>
      <div className="w-full h-1 bg-[#9b2020]" />
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-widest">
            <Link href="/opinion" className="text-[#9b2020] hover:underline" style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}>
              Opinion
            </Link>
            <span className="text-[#d8cfc2]">/</span>
            <span className="text-[#7a7069]">24 September 2026</span>
            <span className="text-[#d8cfc2]">/</span>
            <span className="text-[#7a7069]">The Sandgrounder</span>
          </div>
          <h1 className="text-[30px] sm:text-[40px] text-[#1c1c1c] leading-tight mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}>
            The council is negotiating with an estate it has not named
          </h1>
          <p className="text-[17px] text-[#4a4040] leading-relaxed" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}>
            Sefton is going to build on land it already owns. It is also ready to pay someone for permission. The register does not say who.
          </p>
        </div>

        <div className="mb-10 rounded overflow-hidden">
          <Image
            src="/images/sandgrounder-unnamed-estate.png"
            alt="A pig solicitor waits on the telephone. The chair opposite is empty, and the nameplate on the desk is blank."
            width={1152}
            height={864}
            className="w-full"
            priority
          />
          <p className="text-[11px] text-[#a09890] mt-2 italic px-1">Still holding.</p>
        </div>

        <article className="space-y-5 text-[16px] text-[#3d3030] leading-[1.75]" style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}>
          <p>
            Sefton is going to build the Marine Lake Events Centre on land it already owns. Before it does, it has to deal with a promise the old Southport Corporation made on 29 September 1885. The land stays for sanitation or recreation. No building without written consent.
          </p>
          <p>
            Cabinet was told, on 2 October 2025, that the consent belongs to &ldquo;the Scarisbrick Estate&rdquo;, that the estate has a trustee, and that DLA Piper has tried several times to get that trustee on the phone. No answer. The recommendation was to build anyway, and to pay compensation out of the events centre budget. No figure. No name.
          </p>
          <p>
            The land register for the site was read this week. The 1885 promise is there. The people it was made to were Philip Henry Chambres and Christopher Lethbridge. Not a Scarisbrick. The register does record a Scarisbrick. Charles Anthony Scarisbrick, in 2002, as one of the trustees who released the promise over a different piece of land, the Ocean Plaza site. He signed it away. He is not written down as the man who can still say no.
          </p>
          <p>
            So the public document asks the Executive Director to negotiate with an estate. The public register of the land he would be negotiating about does not say who that estate is now. The solicitors have had no reply. The compensation, whatever it turns out to be, comes out of the same budget as the venue.
          </p>
          <p className="font-semibold text-[#1c1c1c]">
            Nobody has published a sum. Nobody has published a name. The building is going up regardless. We will wait.
          </p>
          <div className="border-t border-[#e8dfd8] pt-5 mt-6">
            <p className="text-sm text-[#7a7069]">
              The SIBA report, with the register and the Cabinet paper set out in full, is at{" "}
              <a href="https://www.siba.digital/reports/sefton-seafront-covenant" target="_blank" rel="noopener noreferrer" className="text-[#9b2020] underline underline-offset-2">
                siba.digital/reports/sefton-seafront-covenant
              </a>
              .
            </p>
          </div>
        </article>

        <div className="mt-10 pt-6 border-t border-[#e8dfd8]">
          <ShareButtons path="/opinion/the-council-is-negotiating-with-an-estate-it-has-not-named" title="The council is negotiating with an estate it has not named" />
        </div>
      </main>
      <Footer />
    </>
  );
}
