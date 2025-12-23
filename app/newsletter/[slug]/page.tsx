import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import type { Metadata } from "next";
import { newsletters } from "@/lib/newsletters";
import { buildOgImages, siteName, siteUrl } from "@/lib/seo";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return newsletters.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const issue = newsletters.find((n) => n.slug === params.slug);
  if (!issue) {
    return { title: "Issue not found" };
  }

  const url = `/newsletter/${issue.slug}`;
  const publishedTime = new Date(issue.date).toISOString();

  return {
    title: issue.title,
    description: issue.summary,
    alternates: { canonical: url },
    openGraph: {
      title: issue.title,
      description: issue.summary,
      url,
      siteName,
      type: "article",
      publishedTime,
      modifiedTime: publishedTime,
      images: buildOgImages({
        alt: `${issue.title} — ${siteName}`,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: issue.title,
      description: issue.summary,
      images: buildOgImages({
        alt: `${issue.title} — ${siteName}`,
      }),
    },
  };
}

export default function NewsletterIssuePage({ params }: Props) {
  const issue = newsletters.find((n) => n.slug === params.slug);
  if (!issue) return notFound();

  const canonicalPath = `/newsletter/${issue.slug}`;
  const articleLd = {
    "@type": "Article",
    headline: issue.title,
    description: issue.summary,
    datePublished: new Date(issue.date).toISOString(),
    dateModified: new Date(issue.date).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${canonicalPath}`,
    },
    author: { "@type": "Organization", name: siteName },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: { "@type": "ImageObject", url: `${siteUrl}/icon.png` },
    },
  };

  return (
    <main>
      <div className="cm-container">
        <div className="cm-card">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({ "@context": "https://schema.org", ...articleLd }),
            }}
          />
          <h1 className="cm-title" style={{ fontSize: "1.8rem" }}>
            {issue.title}
          </h1>
          <div style={{ color: "var(--muted)", marginBottom: "1.2rem" }}>
            {new Date(issue.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>

          <article className="cm-prose">
            <ReactMarkdown>{issue.markdown}</ReactMarkdown>
          </article>

          <div className="cm-footer">
            <span>
              ← <Link href="/newsletter">Back to archive</Link>
            </span>
            <Link href="/">Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
