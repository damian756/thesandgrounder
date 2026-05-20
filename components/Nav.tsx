import Link from "next/link";

const links = [
  { href: "/opinion", label: "Opinion" },
  { href: "/satire", label: "Satire" },
  { href: "/reporting", label: "Reporting" },
  { href: "/about", label: "About" },
];

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
        <div className="flex items-center gap-6">
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
      <div className="sm:hidden flex gap-4 px-4 pb-3 overflow-x-auto">
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
      </div>
    </nav>
  );
}
