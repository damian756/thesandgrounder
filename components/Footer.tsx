import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e0d8cc] bg-[#f4efe6] mt-16">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-8">
          <div>
            <p
              className="text-[20px] text-[#1c1c1c] mb-1"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
            >
              The Sandgrounder
            </p>
            <p
              className="text-[12px] text-[#9a9088] italic"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              For Sandgrounders. By Sandgrounders.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-widest text-[#9b2020] mb-3"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                Read
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { href: "/opinion", label: "Opinion" },
                  { href: "/satire", label: "Satire" },
                  { href: "/reporting", label: "Reporting" },
                  { href: "/archive", label: "Archive" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[13px] text-[#4a4540] hover:text-[#1c1c1c] transition-colors"
                    style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-widest text-[#9b2020] mb-3"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                More
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { href: "/about", label: "About" },
                  { href: "https://www.siba.digital", label: "SIBA Digital" },
                  {
                    href: "https://www.southportguide.co.uk",
                    label: "Southport Guide",
                  },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[13px] text-[#4a4540] hover:text-[#1c1c1c] transition-colors"
                    style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e0d8cc] pt-6">
          <p
            className="text-[11px] text-[#9a9088]"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            The Sandgrounder is an independent publication. Not affiliated with Sefton Council, Southport BID, or any promotional body.
            All opinions are those of the authors. Satire is satire.
          </p>
        </div>
      </div>
      <div className="w-full h-1 bg-[#9b2020]" />
    </footer>
  );
}
