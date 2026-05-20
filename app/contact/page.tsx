import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | The Sandgrounder",
  description: "Get in touch with The Sandgrounder. Tips, corrections, right of reply, or general enquiries.",
  alternates: { canonical: "https://www.thesandgrounder.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="w-full h-1 bg-[#9b2020]" />
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1
          className="text-[32px] sm:text-[42px] text-[#1c1c1c] leading-[1.1] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
        >
          Get in touch
        </h1>
        <p
          className="text-[15px] text-[#7a7069] italic mb-10"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Tips, corrections, right of reply, or anything else.
        </p>

        <div className="grid sm:grid-cols-5 gap-10 mb-12">
          <div className="sm:col-span-3">
            <ContactForm />
          </div>
          <div className="sm:col-span-2 space-y-6">
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9a9088] mb-2"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                Tips
              </p>
              <p
                className="text-[13px] text-[#4a4540] leading-relaxed"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                If you have information about public bodies, governance, or council spending in Southport or Sefton, we want to hear from you. All contact is treated in confidence.
              </p>
            </div>
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9a9088] mb-2"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                Right of reply
              </p>
              <p
                className="text-[13px] text-[#4a4540] leading-relaxed"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                If you have been named in a piece and wish to respond, use the form. Responses are published in full.
              </p>
            </div>
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9a9088] mb-2"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                Corrections
              </p>
              <p
                className="text-[13px] text-[#4a4540] leading-relaxed"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                If you believe a factual claim is wrong, contact us with supporting evidence. We investigate and correct promptly.
              </p>
            </div>
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9a9088] mb-2"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                Email directly
              </p>
              <a
                href="mailto:contact@thesandgrounder.com"
                className="text-[13px] text-[#9b2020] underline underline-offset-2"
                style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
              >
                contact@thesandgrounder.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
