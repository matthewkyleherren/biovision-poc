export type Topic = "Agriculture" | "Markets" | "Policy" | "Knowledge" | "Consumption";

export interface Project {
  slug: string;
  title: string;
  excerpt: string;
  topics: Topic[];
  region: string;
  status: "ongoing" | "completed";
  content?: {
    challenge: string;
    approach: string;
    impact: string;
    people: string;
  };
  facts?: {
    region: string;
    partners: string;
    duration: string;
    householdsReached: string;
  };
}

export const projects: Project[] = [
  {
    slug: "blooming-markets-malawi",
    title: "Blooming Markets in Northern Malawi",
    excerpt:
      "Agroecological production, local markets, and cooperative processing are strengthening incomes, food security, and rural communities.",
    topics: ["Agriculture", "Markets"],
    region: "Malawi",
    status: "ongoing",
    content: {
      challenge:
        "In northern Malawi, intensive tobacco farming has long dominated the agricultural landscape. Farmers depend on a single cash crop, leaving them vulnerable to price fluctuations, soil degradation, and the health risks of tobacco cultivation. Young people, especially women, have had few alternatives.",
      approach:
        "BioVision works with local partner organizations to introduce agroecological farming practices that diversify production, restore soil health, and create new income streams. The program combines:\n\n**Training in agroecological methods** — composting, intercropping, natural pest management, and soil conservation techniques that reduce dependence on expensive chemical inputs.\n\n**Local market development** — establishing agroecological markets where farmers can sell their diverse produce directly to consumers at fair prices, cutting out exploitative middlemen.\n\n**Cooperative processing** — supporting community groups to process and add value to their products locally, keeping economic benefits in the region.",
      impact:
        "The project has reached over 2,400 farming households in the Ekwendeni region. Participating farmers report increased dietary diversity, higher net incomes, and improved soil fertility. The Ekwendeni Agroecological Market has become a model for other regions in Malawi.",
      people:
        'Monica Ngoma, 28, is one of the young farmers transforming her community. Together with her husband and a group of fellow young farmers, she has shifted from tobacco to diversified agroecological production. "For the first time, I\'m earning my own income from food I\'m proud to grow," she says.',
    },
    facts: {
      region: "Northern Malawi (Ekwendeni)",
      partners: "SFHC, Ekwendeni Hospital AEDO",
      duration: "2022 — ongoing",
      householdsReached: "2,400+",
    },
  },
  {
    slug: "sounding-soil",
    title: "Sounding Soil — Healthy Soil Sounds",
    excerpt:
      "Soil organisms produce sounds. Sounding Soil opens an entirely new acoustic world that raises awareness of this finite resource.",
    topics: ["Knowledge"],
    region: "Switzerland",
    status: "ongoing",
  },
  {
    slug: "neycha-accelerator",
    title: "Neycha: The Agroecology Accelerator",
    excerpt:
      "The first accelerator and fund dedicated to agroecological enterprises — providing knowledge, networks, and access to capital.",
    topics: ["Markets"],
    region: "Kenya",
    status: "ongoing",
  },
  {
    slug: "swiss-food-policy",
    title: "Agroecological Swiss Food Policy",
    excerpt:
      "Working toward a Swiss food system that is environmentally friendly, animal-friendly, and socially fair by 2030.",
    topics: ["Policy"],
    region: "Switzerland",
    status: "ongoing",
  },
  {
    slug: "slow-food-uganda",
    title: "Slow Food Uganda",
    excerpt:
      "Building local markets, strengthening biodiversity, and raising awareness of healthy nutrition in partnership with Slow Food Uganda.",
    topics: ["Consumption", "Knowledge", "Markets"],
    region: "Uganda",
    status: "ongoing",
  },
  {
    slug: "bio-tanzania",
    title: "Building an Organic Market in Tanzania",
    excerpt:
      "It's not enough for farmers to produce sustainably. Someone has to pay a fair price. We're building the organic market in Tanzania.",
    topics: ["Agriculture", "Markets"],
    region: "Tanzania",
    status: "ongoing",
  },
];

export const countryProjects = [
  { country: "Kenya", count: 6 },
  { country: "Tanzania", count: 4 },
  { country: "Malawi", count: 3 },
  { country: "Ethiopia", count: 2 },
  { country: "Uganda", count: 2 },
  { country: "Zimbabwe", count: 1 },
  { country: "Switzerland", count: 5 },
  { country: "International", count: 3 },
];
