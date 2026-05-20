"use client";

import { useState, useEffect } from "react";
import { Mail, Copy, Check, Share2 } from "lucide-react";

const BASE = "https://www.thesandgrounder.com";

interface ShareButtonsProps {
  path: string;   // relative, e.g. "/satire/shol-business-tips"
  title: string;
  excerpt?: string;
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L2.517 21.56l1.799-6.074a9.875 9.875 0 0 1-1.333-4.93c.001-5.455 4.436-9.89 9.893-9.89 2.641 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.455-4.437 9.89-9.89 9.89m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 192 192" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.05l13.677 9.366c5.734-8.705 14.739-10.57 21.443-10.57h.23c8.284.052 14.556 2.366 18.644 6.873 2.958 3.28 4.942 7.816 5.938 13.526a72.892 72.892 0 0 0-23.89-.188c-23.894 2.744-39.3 17.37-38.252 39.297.535 11.058 6.284 20.574 16.177 26.765C86.6 152.685 97.92 155 110.08 154.338c16.113-.899 28.818-7.197 37.769-18.718 6.828-8.833 11.157-20.312 13.07-34.786 3.077 1.86 5.489 4.16 7.13 6.834 2.952 4.783 3.092 13.116.278 20.556-6.458 17.256-22.03 26.22-46.92 26.22-31.027 0-52.28-18.85-52.28-51.044 0-31.948 20.638-51.796 52.28-51.796 10.25 0 21.36 2.625 29.8 8.14l10.44-13.44c-11.51-8.47-26.2-12.73-40.24-12.73C61.77 36.574 34 61.85 34 96.224c0 34.374 27.77 59.826 78.22 59.826 30.38 0 52.51-11.784 61.4-33.516 4.28-11.27 4.31-26.174-.36-37.524-3.75-8.99-10.93-15.7-21.723-19.022zM100.64 128.5c-10.03-.56-16.4-4.856-16.927-12.38-.413-5.874 2.583-12.655 14.12-13.955a62.26 62.26 0 0 1 8.014-.523c5.455 0 10.56.554 15.17 1.599-1.726 21.516-10.553 25.715-20.377 25.259z" />
    </svg>
  );
}

export default function ShareButtons({ path, title, excerpt }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const url = `${BASE}${path}`;

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback: select text (older browsers)
    }
  }

  async function handleNativeShare() {
    try {
      await navigator.share({ title, text: excerpt ?? title, url });
    } catch {
      // user cancelled or unsupported
    }
  }

  const platforms = [
    {
      id: "twitter",
      label: "X",
      title: "Share on X / Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      bg: "#000",
      fg: "#fff",
      Icon: TwitterIcon,
    },
    {
      id: "facebook",
      label: "Facebook",
      title: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      bg: "#1877f2",
      fg: "#fff",
      Icon: FacebookIcon,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      title: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
      bg: "#25d366",
      fg: "#fff",
      Icon: WhatsAppIcon,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      title: "Share on LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      bg: "#0a66c2",
      fg: "#fff",
      Icon: LinkedInIcon,
    },
    {
      id: "threads",
      label: "Threads",
      title: "Share on Threads",
      href: `https://www.threads.net/intent/post?text=${encodeURIComponent(title + " " + url)}`,
      bg: "#000",
      fg: "#fff",
      Icon: ThreadsIcon,
    },
  ] as const;

  return (
    <div className="py-6 border-t border-b border-[#e8e0d4] my-8">
      <p
        className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9a9088] mb-4"
        style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
      >
        Share this piece
      </p>

      <div className="flex flex-wrap gap-2">
        {platforms.map(({ id, label, title: btnTitle, href, bg, fg, Icon }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={btnTitle}
            aria-label={btnTitle}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-bold transition-opacity hover:opacity-85 active:scale-95"
            style={{
              backgroundColor: bg,
              color: fg,
              fontFamily: "var(--font-lato), Arial, sans-serif",
            }}
          >
            <Icon />
            <span>{label}</span>
          </a>
        ))}

        {/* Email */}
        <a
          href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
          title="Share by email"
          aria-label="Share by email"
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-bold transition-opacity hover:opacity-85 active:scale-95"
          style={{
            backgroundColor: "#f0ece4",
            color: "#1c1c1c",
            fontFamily: "var(--font-lato), Arial, sans-serif",
          }}
        >
          <Mail size={15} />
          <span>Email</span>
        </a>

        {/* Copy link */}
        <button
          onClick={handleCopy}
          title="Copy link"
          aria-label="Copy link"
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-bold transition-all hover:opacity-85 active:scale-95"
          style={{
            backgroundColor: copied ? "#e6f4ea" : "#f0ece4",
            color: copied ? "#2a7a40" : "#1c1c1c",
            fontFamily: "var(--font-lato), Arial, sans-serif",
          }}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          <span>{copied ? "Copied" : "Copy link"}</span>
        </button>

        {/* Native share — mobile only, shown when available */}
        {canNativeShare && (
          <button
            onClick={handleNativeShare}
            title="More sharing options"
            aria-label="More sharing options"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-bold transition-opacity hover:opacity-85 active:scale-95"
            style={{
              backgroundColor: "#1c1c1c",
              color: "#fff",
              fontFamily: "var(--font-lato), Arial, sans-serif",
            }}
          >
            <Share2 size={15} />
            <span>More</span>
          </button>
        )}
      </div>
    </div>
  );
}
