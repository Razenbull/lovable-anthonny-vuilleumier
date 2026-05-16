import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  heroImage?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  collection: string; // collection slug
  price: number;
  description: string;
  longDescription: string;
  materials: string;
  dimensions?: string;
  images: string[];
  featured?: boolean;
  new?: boolean;
  category?: "portrait" | "landscape" | "moment-of-life";
}

export const PRODUCT_CATEGORIES: { value: NonNullable<Product["category"]>; label: string }[] = [
  { value: "portrait", label: "Portrait" },
  { value: "landscape", label: "Landscape" },
  { value: "moment-of-life", label: "Moment of Life" },
];

// ---------- Sanity fetchers ----------

const COLLECTIONS_QUERY = `*[_type == "collection"] | order(order asc, name asc) {
  "id": coalesce(slug.current, _id),
  name,
  "slug": slug.current,
  description,
  "image": coalesce(image.asset->url, imageUrl),
  "heroImage": coalesce(heroImage.asset->url, heroImageUrl, image.asset->url, imageUrl)
}`;

const PRODUCTS_QUERY = `*[_type == "product"] | order(order asc, name asc) {
  "id": coalesce(slug.current, _id),
  name,
  "slug": slug.current,
  "collection": collectionSlug,
  price,
  description,
  longDescription,
  materials,
  dimensions,
  "images": coalesce(images[].asset->url, imageUrls),
  featured,
  "new": isNew,
  category
}`;

export async function fetchCollections(): Promise<Collection[]> {
  const data = await sanityClient.fetch<Collection[]>(COLLECTIONS_QUERY);
  return (data ?? []).map((c) => ({ ...c, image: c.image ?? "" }));
}

export async function fetchProducts(): Promise<Product[]> {
  const data = await sanityClient.fetch<Product[]>(PRODUCTS_QUERY);
  return (data ?? []).map((p) => ({ ...p, images: p.images ?? [] }));
}

// ---------- React Query hooks ----------

export const useCollections = () =>
  useQuery({ queryKey: ["collections"], queryFn: fetchCollections, staleTime: 60_000 });

export const useProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: fetchProducts, staleTime: 60_000 });

// ---------- Pure helpers (operate on provided arrays) ----------

export const getProductsByCollection = (
  list: Product[],
  collectionSlug: string
): Product[] => list.filter((p) => p.collection === collectionSlug);

export const getFeaturedProducts = (list: Product[]): Product[] =>
  list.filter((p) => p.featured);

export const getNewProducts = (list: Product[]): Product[] =>
  list.filter((p) => p.new);

export const getProductBySlug = (
  list: Product[],
  slug: string
): Product | undefined => list.find((p) => p.slug === slug);

export const getCollectionBySlug = (
  list: Collection[],
  slug: string
): Collection | undefined => list.find((c) => c.slug === slug);

export const getRelatedProducts = (
  list: Product[],
  productId: string,
  limit = 4
): Product[] => {
  const product = list.find((p) => p.id === productId);
  if (!product) return [];
  return list
    .filter((p) => p.collection === product.collection && p.id !== productId)
    .slice(0, limit);
};
