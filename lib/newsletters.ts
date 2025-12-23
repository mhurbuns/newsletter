import fs from "node:fs";
import path from "node:path";

export type NewsletterIssue = {
  slug: string;
  title: string;
  date: string; // ISO string: e.g. "2025-01-01"
  summary?: string;
  markdown: string;
};

function toTitleCase(value: string) {
  return value
    .split("_")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function extractTitle(markdown: string) {
  const lines = markdown.split("\n");
  const firstNonEmpty = lines.find((line) => line.trim().length > 0);
  if (!firstNonEmpty) return null;
  const match = firstNonEmpty.match(/^#\s+(.+)\s*$/);
  return match ? match[1].trim() : null;
}

function extractSummary(markdown: string) {
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const firstParagraph = lines.find((line) => !line.startsWith("#")) ?? "";
  if (!firstParagraph) return undefined;
  return firstParagraph.length > 160
    ? `${firstParagraph.slice(0, 160)}…`
    : firstParagraph;
}

function loadNewslettersFromFiles(): NewsletterIssue[] {
  const dir = path.join(process.cwd(), "news_letter");

  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  const issues: NewsletterIssue[] = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const base = path.basename(file, ".md");
    const match = base.match(/^(.+?)_(\d{8})_(\d{6})$/);
    if (!match) continue;

    const [, prefix, datePart, timePart] = match;
    const year = datePart.slice(0, 4);
    const month = datePart.slice(4, 6);
    const day = datePart.slice(6, 8);
    const isoDate = `${year}-${month}-${day}`;

    const fullPath = path.join(dir, file);
    let markdown = "";
    try {
      markdown = fs.readFileSync(fullPath, "utf8");
    } catch {
      continue;
    }

    const titleFromMarkdown = extractTitle(markdown);
    const titleBase = toTitleCase(prefix);
    const title = titleFromMarkdown ?? `${titleBase} – ${isoDate}`;
    const summary = extractSummary(markdown);
    const slug = `${prefix}-${isoDate}-${timePart}`;

    issues.push({
      slug,
      title,
      date: isoDate,
      summary,
      markdown,
    });
  }

  return issues.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export const newsletters: NewsletterIssue[] = loadNewslettersFromFiles();
