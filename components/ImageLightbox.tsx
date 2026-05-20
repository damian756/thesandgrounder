"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
};

export default function ImageLightbox({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className="group relative cursor-zoom-in rounded-2xl overflow-hidden"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        aria-label="Enlarge image"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full transition-transform duration-300 group-hover:scale-[1.01]"
          priority={priority}
        />
        <div className="absolute bottom-3 right-3 bg-black/50 rounded-lg p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn size={14} className="text-white" />
        </div>
      </div>
      {caption && (
        <p
          className="text-[11px] text-[#9a9088] mt-2 px-1"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          {caption}
        </p>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X size={20} className="text-white" />
          </button>
          <div
            className="max-w-5xl w-full cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto rounded-xl"
            />
            {caption && (
              <p
                className="text-[12px] text-white/50 mt-3 text-center"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
