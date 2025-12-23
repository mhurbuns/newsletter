import Link from "next/link";
import type { Metadata } from "next";
import { newsletters } from "@/lib/newsletters";
import { buildOgImages, siteName } from "@/lib/seo";

const description =
  "A starter template for static sites with Markdown newsletters.";

export const metadata: Metadata = {
  title: "Home",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteName,
    description,
    url: "/",
    siteName,
    type: "website",
    images: buildOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: buildOgImages(),
  },
};

export default function HomePage() {
  const latest = newsletters[0];

  return (
    <main>
      <div className="cm-container">
        <section className="cm-hero">
          <div className="cm-hero-inner">
            <h1 className="cm-hero-title">{siteName}</h1>
            <p className="cm-hero-subtitle">
              The beginner-friendly planting newsletter: practical tips, simple
              weekly routines, and tiny challenges you can actually do.
            </p>
            <p className="cm-hero-subtitle cm-hero-subtitle-small">
              Publish a simple blog/newsletter by dropping Markdown files into{" "}
              <code>news_letter/</code>. Deploy it as a static site to Cloudflare
              Pages (or GitHub Pages).
            </p>
            <div className="cm-hero-actions">
              <Link href="/newsletter" className="cm-button-link">
                <span className="cm-button cm-button-primary">Read the newsletter</span>
              </Link>
              <Link href="/about" className="cm-button-link">
                <span className="cm-button">About</span>
              </Link>
              <Link href="/contact" className="cm-button-link">
                <span className="cm-button">Contact</span>
              </Link>
            </div>
          </div>
        </section>

        <div className="cm-card">
          <h1 className="cm-title">{siteName}</h1>
          <p className="cm-subtitle">{description}</p>

          <div style={{ marginTop: "1.3rem" }}>
            <Link href="/newsletter">Browse the newsletter archive →</Link>
          </div>

          {latest && (
            <div style={{ marginTop: "1.6rem" }}>
              <div className="cm-badge" style={{ marginBottom: "0.6rem" }}>
                Latest issue
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                <Link href={`/newsletter/${latest.slug}`}>{latest.title}</Link>
              </div>
              <div style={{ color: "var(--muted)", marginTop: "0.25rem" }}>
                {latest.summary}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
