import Link from "next/link";
import type { Metadata } from "next";
import { buildOgImages, siteName } from "@/lib/seo";

const description =
  "About this site. Replace this page with your story, mission, and what readers can expect.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About",
    description,
    url: "/about",
    siteName,
    type: "website",
    images: buildOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description,
    images: buildOgImages(),
  },
};

export default function AboutPage() {
  return (
    <main>
      <div className="cm-container">
        <div className="cm-card">
          <h1 className="cm-title">About</h1>
          <p className="cm-subtitle">{description}</p>

          <article className="cm-prose" style={{ marginTop: "1.4rem" }}>
            <h2>What this is</h2>
            <p>
              This is a simple newsletter-style website. You publish new posts
              by adding Markdown files to <code>news_letter/</code>.
            </p>

            <h2>Who it’s for</h2>
            <p>
              Bloggers, hobbyists, and creators who want a lightweight site
              that’s easy to maintain.
            </p>

            <h2>What to customize</h2>
            <ul>
              <li>Site name and URL in <code>.env.local</code>.</li>
              <li>Homepage copy in <code>app/page.tsx</code>.</li>
              <li>Styles in <code>styles/globals.css</code>.</li>
            </ul>
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

