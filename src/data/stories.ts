import type { Topic } from "./projects";

export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  topic: Topic;
  date: string;
  featured?: boolean;
}

export const stories: Story[] = [
  {
    slug: "the-power-of-community",
    title: "The power of community",
    excerpt:
      "Monica Ngoma and her fellow young farmers in Malawi are forging a new path — cooperation over chemicals, local value over global markets.",
    topic: "Agriculture",
    date: "2026-03-15",
    featured: true,
  },
  {
    slug: "old-grains-new-strength",
    title: "Old grains, new strength",
    excerpt:
      "Emmer, once nearly forgotten, is making a comeback in Swiss fields. A conversation with cereal breeder Felix Jähne.",
    topic: "Agriculture",
    date: "2026-02-28",
  },
  {
    slug: "what-enterprises-need",
    title: "What agroecological enterprises need",
    excerpt:
      "At the WEF in Davos, experts discussed how agroecological businesses can succeed and scale their impact.",
    topic: "Markets",
    date: "2026-01-22",
  },
  {
    slug: "energy-crises-food-system",
    title: "When energy crises hit the food system",
    excerpt:
      "Middle East tensions ripple through global food supply chains. Why the poorest households bear the greatest burden.",
    topic: "Policy",
    date: "2026-01-10",
  },
  {
    slug: "five-tips-sustainable-consumption",
    title: "Five tips for sustainable consumption",
    excerpt:
      "Your purchasing decisions influence the climate, the economy, society, and your own health. Here's where to start.",
    topic: "Consumption",
    date: "2025-12-05",
  },
  {
    slug: "agroecology-in-practice-switzerland",
    title: "Agroecology in practice — Swiss pioneers",
    excerpt:
      "Real projects and initiatives proving that a sustainable food system in Switzerland is not just possible — it's already happening.",
    topic: "Knowledge",
    date: "2025-11-20",
  },
  {
    slug: "women-feed-the-world",
    title: "Women feed the world",
    excerpt:
      "For the International Year of Women Farmers, we spotlight the women driving agroecological transformation across three continents.",
    topic: "Agriculture",
    date: "2026-03-08",
  },
];
