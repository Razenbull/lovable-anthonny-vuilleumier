import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "gycrbyl9",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type SiteSettings = {
  brandName?: string;
  tagline?: string;
  heroEyebrow?: string;
  heroHeadlineLine1?: string;
  heroHeadlineLine2?: string;
  heroSubheadline?: string;
  heroCtaLabel?: string;
  heroCtaHref?: string;
  heroImage?: SanityImageSource;
  featuredEyebrow?: string;
  newWorkEyebrow?: string;
  newWorkHeadline?: string;
  seriesEyebrow?: string;
  seriesHeadline?: string;
  aboutEyebrow?: string;
  aboutHeadline?: string;
  aboutBody?: string;
  aboutCtaLabel?: string;
  instagramEyebrow?: string;
  instagramHandle?: string;
  instagramSubtitle?: string;
  instagramUrl?: string;
  instagramImages?: SanityImageSource[];
};

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}
