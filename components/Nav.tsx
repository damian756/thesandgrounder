import Link from "next/link";

const links = [
  { href: "/opinion", label: "Opinion" },
  { href: "/satire", label: "Satire" },
  { href: "/reporting", label: "Reporting" },
  { href: "/about", label: "About" },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Nav() {
  return (
    <nav className="w-full bg-[#f4efe6] border-b border-[#e0d8cc] sticky top-0 z-50">
      <div className="mx-auto max-w-4xl px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-[22px] text-[#1c1c1c] leading-none tracking-tight"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
        >
          The Sandgrounder
        </Link>
        <div className="flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden sm:block text-[13px] font-bold text-[#4a4540] hover:text-[#9b2020] transition-colors"
              style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.facebook.com/TheSandgrounder/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Sandgrounder on Facebook"
            className="hidden sm:flex text-[#4a4540] hover:text-[#1877f2] transition-colors"
          >
            <FacebookIcon />
          </a>
          <Link
            href="/#subscribe"
            className="text-[12px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg bg-[#9b2020] text-white hover:bg-[#b02525] transition-colors"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            Subscribe
          </Link>
        </div>
      </div>
      {/* Mobile nav */}
      <div className="sm:hidden flex items-center gap-4 px-4 pb-3 overflow-x-auto">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-[12px] font-bold text-[#4a4540] hover:text-[#9b2020] transition-colors whitespace-nowrap"
            style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
          >
            {l.label}
          </Link>
        ))}
        <a
          href="https://www.facebook.com/TheSandgrounder/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-[#4a4540] hover:text-[#1877f2] transition-colors flex-shrink-0"
        >
          <FacebookIcon />
        </a>
      </div>
    </nav>
  );
}
