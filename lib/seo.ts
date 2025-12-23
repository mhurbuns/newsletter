export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "My Newsletter Site";
export const defaultOgImage = "/icon.svg";

export function buildOgImages({ alt }: { alt?: string } = {}) {
  return [
    {
      url: defaultOgImage,
      alt: alt ?? `${siteName} logo`,
    },
  ];
}
