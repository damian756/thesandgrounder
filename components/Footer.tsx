import Link from "next/link";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e0d8cc] bg-[#f4efe6] mt-16">
      <div className="mx-auto max-w-4xl px-4 py-10">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <p
              className="text-[20px] text-[#1c1c1c] mb-1"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
            >
              The Sandgrounder
            </p>
            <p
              className="text-[12px] text-[#9a9088] italic mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              For Sandgrounders. By Sandgrounders.
            </p>
            <a
              href="https://www.facebook.com/TheSandgrounder/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Sandgrounder on Facebook"
              className="inline-flex items-center gap-2 text-[#4a4540] hover:text-[#1877f2] transition-colors"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              <FacebookIcon />
              <span className="text-[12px] font-bold">Facebook</span>
            </a>
          </div>

          {/* Read */}
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

          {/* More */}
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
                  { href: "/contact", label: "Contact" },
                  { href: "https://www.churchtownmedia.co.uk", label: "Churchtown Media" },
                  { href: "https://www.siba.digital", label: "SIBA Digital" },
                  { href: "https://www.southportguide.co.uk", label: "Southport Guide" },
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

        {/* Bottom bar */}
        <div className="border-t border-[#e0d8cc] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p
            className="text-[11px] text-[#9a9088]"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Independent publication. Not affiliated with Sefton Council, Southport BID, or any promotional body.
            All opinions are those of the authors. Satire is satire.
          </p>
          <div className="flex gap-4 flex-shrink-0">
            {[
              { href: "/privacy", label: "Privacy" },
              { href: "/legal", label: "Legal" },
              { href: "/contact", label: "Contact" },
              { href: "https://www.siba.digital/disclosure", label: "Disclosure" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] text-[#9a9088] hover:text-[#1c1c1c] transition-colors underline underline-offset-2"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
      <div className="w-full h-1 bg-[#9b2020]" />
    </footer>
  );
}
