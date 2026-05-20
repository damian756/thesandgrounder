import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | The Sandgrounder",
  description: "How The Sandgrounder handles your data.",
  alternates: { canonical: "https://www.thesandgrounder.com/privacy" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        className="text-[18px] font-bold text-[#1c1c1c] mb-3"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h2>
      <div
        className="space-y-3 text-[15px] text-[#3a3530] leading-relaxed"
        style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <div className="w-full h-1 bg-[#9b2020]" />
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1
          className="text-[32px] sm:text-[42px] text-[#1c1c1c] leading-[1.1] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700 }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-[13px] text-[#9a9088] mb-10"
          style={{ fontFamily: "var(--font-lato), Arial, sans-serif" }}
        >
          Last updated: May 2026
        </p>

        <Section title="Who we are">
          <p>
            The Sandgrounder is an independent publication covering Southport. It is operated by Churchtown Media.           For data enquiries, use our <a href="/contact" className="text-[#9b2020] underline underline-offset-2">contact form</a>.
          </p>
        </Section>

        <Section title="What data we collect">
          <p>
            <strong>Newsletter subscribers.</strong> If you sign up to our newsletter, we collect your email address. We do not collect your name unless you provide it via the contact form.
          </p>
          <p>
            <strong>Contact form submissions.</strong> If you use our contact form, we collect your name, email address, and the content of your message. This is used solely to respond to your enquiry.
          </p>
          <p>
            <strong>Analytics.</strong> We use Plausible Analytics, a privacy-friendly analytics service. Plausible does not use cookies, does not collect personal data, and does not track you across sites. No IP addresses are stored. You can read Plausible&apos;s privacy policy at{" "}
            <a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="text-[#9b2020] underline underline-offset-2">
              plausible.io/privacy
            </a>.
          </p>
        </Section>

        <Section title="How we use your data">
          <p>
            Email addresses collected via newsletter signup are used only to send The Sandgrounder newsletter. We do not sell, share, or transfer your email address to any third party for marketing purposes.
          </p>
          <p>
            Contact form messages are read by the editorial team and used to respond to your enquiry. They are not shared externally.
          </p>
        </Section>

        <Section title="Who we share data with">
          <p>
            <strong>Resend</strong> (resend.com) is our email delivery provider. Your email address is stored on Resend&apos;s platform to enable newsletter delivery. Resend is GDPR-compliant. You can read their privacy policy at{" "}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#9b2020] underline underline-offset-2">
              resend.com/legal/privacy-policy
            </a>.
          </p>
          <p>
            We do not use advertising networks, tracking pixels, or third-party data brokers.
          </p>
        </Section>

        <Section title="How long we keep your data">
          <p>
            Newsletter subscriber data is retained until you unsubscribe. Every newsletter includes an unsubscribe link. You can also request removal by emailing us directly.
          </p>
          <p>
            Contact form messages are retained for as long as is necessary to handle your enquiry.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            Under UK GDPR, you have the right to access the personal data we hold about you, request correction, request deletion, and object to processing.             To exercise any of these rights, use our <a href="/contact" className="text-[#9b2020] underline underline-offset-2">contact form</a>. We will respond within 30 days.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            This site does not use advertising or tracking cookies. Plausible Analytics operates without cookies. No cookie consent banner is required.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy from time to time. The date at the top of this page reflects the most recent revision.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
