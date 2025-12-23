import Link from "next/link";
import type { Metadata } from "next";
import { buildOgImages, siteName } from "@/lib/seo";

const description =
  "Privacy policy for this boilerplate site.";

export const metadata: Metadata = {
  title: "Privacy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy",
    description,
    url: "/privacy",
    siteName,
    type: "website",
    images: buildOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy",
    description,
    images: buildOgImages(),
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="cm-container">
        <div className="cm-card">
          <h1 className="cm-title" style={{ fontSize: "2rem" }}>
            Privacy
          </h1>
          <p className="cm-subtitle" style={{ marginBottom: "1.2rem" }}>
            Last updated: {new Date().toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>

          <article className="cm-prose">
            <h2>What we collect</h2>
            <p>
              Update this section based on your product. This boilerplate does
              not include analytics by default.
            </p>

            <h2>Contact</h2>
            <p>Replace this with your contact email (or remove it).</p>
          </article>

          <div className="cm-footer">
            <span>
              ← <Link href="/">Back to home</Link>
            </span>
            <Link href="/newsletter">Newsletter</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
