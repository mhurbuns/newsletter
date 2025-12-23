import Link from "next/link";
import type { Metadata } from "next";
import { newsletters } from "@/lib/newsletters";
import { buildOgImages, siteName } from "@/lib/seo";

const description =
  "Browse newsletter issues stored as Markdown files in the repo.";

export const metadata: Metadata = {
  title: "Newsletter",
  description,
  alternates: {
    canonical: "/newsletter",
  },
  openGraph: {
    title: "Newsletter",
    description,
    url: "/newsletter",
    siteName,
    type: "website",
    images: buildOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter",
    description,
    images: buildOgImages(),
  },
};

export default function NewsletterArchivePage() {
  const sorted = [...newsletters].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main>
      <div className="cm-container">
        <div className="cm-card">
          <h1 className="cm-title">Newsletter</h1>
          <p className="cm-subtitle">{description}</p>

          <ul style={{ marginTop: "1.5rem", paddingLeft: "1.1rem" }}>
            {sorted.map((issue) => (
              <li key={issue.slug} style={{ marginBottom: "1rem" }}>
                <div>
                  <Link href={`/newsletter/${issue.slug}`}>{issue.title}</Link>
                </div>
                <div style={{ color: "var(--muted)", marginTop: "0.25rem" }}>
                  {new Date(issue.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                {issue.summary && (
                  <div style={{ color: "var(--muted)", marginTop: "0.25rem" }}>
                    {issue.summary}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="cm-footer">
            <span>
              Back to <Link href="/">home</Link>
            </span>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
