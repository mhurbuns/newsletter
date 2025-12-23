import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "../styles/globals.css";
import { buildOgImages, siteName, siteUrl } from "@/lib/seo";
import ThemeToggle from "./ThemeToggle";
import { themeInitScript } from "./theme-init";

const siteDescription =
  "A static Next.js newsletter site: Markdown issues + Cloudflare Pages deploy.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    images: buildOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: buildOgImages(),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <header className="cm-header">
          <div className="cm-header-inner">
            <Link href="/" className="cm-brand">
              {siteName.toUpperCase()}
            </Link>
            <nav className="cm-nav">
              <Link href="/about">About</Link>
              <Link href="/newsletter">Newsletter</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        {children}
        <footer className="cm-footer-global">
          <div className="cm-footer-inner">
            <span>
              © {new Date().getFullYear()} {siteName}
            </span>
            <nav className="cm-footer-links">
              <Link href="/about">About</Link>
              <Link href="/newsletter">Newsletter</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
