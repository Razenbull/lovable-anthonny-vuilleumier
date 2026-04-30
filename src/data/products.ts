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
  collection: string;
  price: number;
  description: string;
  longDescription: string;
  materials: string;
  dimensions?: string;
  images: string[];
  featured?: boolean;
  new?: boolean;
}

export const collections: Collection[] = [
  {
    id: "maasai",
    name: "Maasai",
    slug: "maasai",
    description: "Faces of the Rift Valley, told in red ochre and beadwork",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&q=80",
  },
  {
    id: "himba",
    name: "Himba",
    slug: "himba",
    description: "Portraits from northern Namibia, painted by sun and earth",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1920&q=80",
  },
  {
    id: "berber",
    name: "Berber",
    slug: "berber",
    description: "Indigo and silver across the Atlas Mountains",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1920&q=80",
  },
  {
    id: "mursi",
    name: "Mursi & Suri",
    slug: "mursi-suri",
    description: "Body paint and ceremony in the Omo Valley",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1920&q=80",
  },
  {
    id: "andes",
    name: "Andean Highlands",
    slug: "andes",
    description: "Quechua weavers and herders above the clouds",
    image: "https://images.unsplash.com/photo-1531179829398-820e0fbcd95d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1531179829398-820e0fbcd95d?w=1920&q=80",
  },
  {
    id: "mongolia",
    name: "Mongolian Nomads",
    slug: "mongolia",
    description: "Eagle hunters and steppe families of the Altai",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
  },
  {
    id: "new",
    name: "New Work",
    slug: "new-work",
    description: "The latest portraits from the field",
    image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=1920&q=80",
  },
  {
    id: "studio",
    name: "Studio Editions",
    slug: "studio",
    description: "Intimate sittings, formal light",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1920&q=80",
  },
];

export const products: Product[] = [
  // Maasai
  {
    id: "warrior-dusk",
    name: "Warrior at Dusk",
    slug: "warrior-at-dusk",
    collection: "maasai",
    price: 485,
    description: "A young moran, framed against the closing light of Amboseli",
    longDescription:
      "Photographed at the edge of dusk in southern Kenya, this portrait holds the stillness of a moment between worlds. The red shúkà catches the last sun, the beadwork carries the colors of his age-set. Printed on archival cotton rag, signed and editioned by hand in the studio.",
    materials: "Archival pigment print on Hahnemühle Photo Rag",
    dimensions: "60 × 80 cm — Edition of 15",
    images: [
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "elder-beadwork",
    name: "Elder, Beadwork",
    slug: "elder-beadwork",
    collection: "maasai",
    price: 295,
    description: "A study of hands, ochre and a lifetime of color",
    longDescription:
      "An intimate close study of an elder woman's hands and beadwork in Narok County. Each strand of color marks a season, a ceremony, a child. Captured on medium format film and hand-printed in the studio.",
    materials: "Silver gelatin & pigment hybrid print",
    dimensions: "40 × 50 cm — Edition of 25",
    images: [
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80",
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    ],
    new: true,
  },
  // Himba
  {
    id: "otjize",
    name: "Otjize",
    slug: "otjize",
    collection: "himba",
    price: 520,
    description: "A Himba woman in the red earth of Kaokoland",
    longDescription:
      "Otjize — the mixture of butterfat and ochre that gives Himba skin its deep red glow — has been worn by women here for centuries. Photographed in a small village near Opuwo, this portrait is about the quiet authority of someone fully at home in her tradition.",
    materials: "Archival pigment print on Hahnemühle Photo Rag",
    dimensions: "70 × 90 cm — Edition of 12",
    images: [
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "young-himba",
    name: "Daughter, Morning",
    slug: "daughter-morning",
    collection: "himba",
    price: 245,
    description: "Soft side-light on a girl outside her family's hut",
    longDescription:
      "Taken in the cool first hour of light, when the village is still quiet. A small portrait of a child looking just past the lens — present, unhurried, entirely herself.",
    materials: "Archival pigment print on cotton rag",
    dimensions: "40 × 50 cm — Edition of 25",
    images: [
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=800&q=80",
    ],
  },
  // Berber
  {
    id: "indigo-veil",
    name: "Indigo Veil",
    slug: "indigo-veil",
    collection: "berber",
    price: 425,
    description: "A Tuareg man in the deep blue of the Sahara",
    longDescription:
      "The tagelmust — the indigo veil of the desert — stains the skin of those who wear it daily, earning the Tuareg their name as the 'blue people'. Photographed at the edge of the Erg Chebbi dunes, the light falling soft and lateral.",
    materials: "Archival pigment print on Hahnemühle Photo Rag",
    dimensions: "60 × 80 cm — Edition of 15",
    images: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "atlas-weaver",
    name: "Atlas Weaver",
    slug: "atlas-weaver",
    collection: "berber",
    price: 295,
    description: "A woman at her loom in a high mountain village",
    longDescription:
      "In the high villages above Marrakech, weaving is still a daily practice — patterns passed mother to daughter for generations. This portrait was made in the warm, single window of her workroom.",
    materials: "Archival pigment print on cotton rag",
    dimensions: "50 × 70 cm — Edition of 20",
    images: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
      "https://images.unsplash.com/photo-1531179829398-820e0fbcd95d?w=800&q=80",
    ],
  },
  // Mursi & Suri
  {
    id: "ceremony-paint",
    name: "Ceremony, White Paint",
    slug: "ceremony-white-paint",
    collection: "mursi-suri",
    price: 540,
    description: "Suri body paint at first light, lower Omo Valley",
    longDescription:
      "Body painting among the Suri is daily, ephemeral, and entirely personal — chalk, ash and ochre applied with a fingertip and gone by evening. This portrait was made just after sunrise, the paint still wet.",
    materials: "Archival pigment print on Hahnemühle Photo Rag",
    dimensions: "70 × 90 cm — Edition of 10",
    images: [
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "mursi-mother",
    name: "Mother, Lip Plate",
    slug: "mother-lip-plate",
    collection: "mursi-suri",
    price: 395,
    description: "A formal sitting in the village shade",
    longDescription:
      "A Mursi mother in her best, photographed in the soft shade of an acacia. The lip plate, the scarification, the calm gaze — all a quiet refusal of any other story but her own.",
    materials: "Archival pigment print on cotton rag",
    dimensions: "60 × 80 cm — Edition of 15",
    images: [
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80",
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    ],
    new: true,
  },
  // Andes
  {
    id: "quechua-pollera",
    name: "Quechua, Pollera",
    slug: "quechua-pollera",
    collection: "andes",
    price: 365,
    description: "A weaver from the Sacred Valley in her layered skirts",
    longDescription:
      "Above Cusco, the women still walk hours to market in the polleras their grandmothers wore. This portrait was made on a cold morning at 3,800 metres, the light thin and clean.",
    materials: "Archival pigment print on Hahnemühle Photo Rag",
    dimensions: "60 × 80 cm — Edition of 18",
    images: [
      "https://images.unsplash.com/photo-1531179829398-820e0fbcd95d?w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    ],
  },
  {
    id: "herder-boy",
    name: "Herder, Altiplano",
    slug: "herder-altiplano",
    collection: "andes",
    price: 245,
    description: "A boy and his alpacas above the clouds",
    longDescription:
      "On the high plateau between Peru and Bolivia, children herd alongside their families from a very young age. This portrait was made at the boy's request — he wanted his alpacas in the frame.",
    materials: "Archival pigment print on cotton rag",
    dimensions: "40 × 50 cm — Edition of 25",
    images: [
      "https://images.unsplash.com/photo-1531179829398-820e0fbcd95d?w=800&q=80",
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=800&q=80",
    ],
  },
  // Mongolia
  {
    id: "eagle-hunter",
    name: "The Eagle Hunter",
    slug: "the-eagle-hunter",
    collection: "mongolia",
    price: 595,
    description: "A Kazakh hunter and his golden eagle in the Altai",
    longDescription:
      "Photographed in the western Altai mountains in mid-winter. The bond between hunter and bird is built over years; the bird is released back to the wild after a season together. Light fell through high cloud and the temperature was -22°C.",
    materials: "Archival pigment print on Hahnemühle Photo Rag",
    dimensions: "80 × 100 cm — Edition of 10",
    images: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "ger-interior",
    name: "Inside the Ger",
    slug: "inside-the-ger",
    collection: "mongolia",
    price: 285,
    description: "A grandmother by the stove on the open steppe",
    longDescription:
      "A quiet interior portrait made by the light of the open ger door. She offered tea, then sat as if she had always meant to. One frame, no second exposure.",
    materials: "Archival pigment print on cotton rag",
    dimensions: "50 × 70 cm — Edition of 20",
    images: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    ],
    new: true,
  },
];

export const getProductsByCollection = (collectionSlug: string): Product[] => {
  return products.filter((product) => product.collection === collectionSlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.new);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find((collection) => collection.slug === slug);
};

export const getRelatedProducts = (productId: string, limit = 4): Product[] => {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];

  return products
    .filter((p) => p.collection === product.collection && p.id !== productId)
    .slice(0, limit);
};
