import Link from "next/link";
import type { Metadata } from "next";
import { buildOgImages, siteName } from "@/lib/seo";

const description =
  "Contact page. Replace the email address and add any links you want (socials, booking, etc.).";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description,
    url: "/contact",
    siteName,
    type: "website",
    images: buildOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description,
    images: buildOgImages(),
  },
};

export default function ContactPage() {
  return (
    <main>
      <div className="cm-container">
        <div className="cm-card">
          <h1 className="cm-title">Contact</h1>
          <p className="cm-subtitle">{description}</p>

          <article className="cm-prose" style={{ marginTop: "1.4rem" }}>
            <h2>Email</h2>
            <p>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </p>

            <h2>Notes</h2>
            <p>
              This boilerplate is intentionally static (no backend). If you want
              a contact form, the simplest option is to use a form service, or
              link to a Google Form.
            </p>
          </article>

          <div className="cm-footer">
            <span>
              ← <Link href="/">Back to home</Link>
            </span>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

