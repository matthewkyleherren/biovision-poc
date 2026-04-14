export interface NewsArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  layout: "medium" | "alternative";
  externalSource?: string;
  body: string[];
}

export const heroImage = "/images/news/news-4.jpg";

export const pressHighlightHeading =
  "Samara and Steadfast LA\u2019s wildfire recovery initiative in the news:";

export const pressHighlightCards = [
  {
    headline:
      "This nonprofit will deliver free homes to L.A. fire victims",
    source: "Fast Company",
  },
  {
    headline:
      "Prefab builder offers free homes to wildfire victims after $15 million donation",
    source: "Los Angeles Daily News",
  },
  {
    headline:
      "Airbnb Co-Founder Is Donating $15 Million to Build Prefab Homes for L.A. Fire Victims",
    source: "realtor.com",
  },
  {
    headline:
      "Caruso-backed nonprofit partners with builder to give prefab homes to fire victims",
    source: "Los Angeles Times",
  },
];

export const featuredLogos = [
  "CNBC",
  "FAST COMPANY",
  "Bloomberg",
  "WSJ",
  "Wallpaper*",
];

export const videoFeatures = [
  {
    source: "Squawk Box on CNBC",
    description:
      "Watch Samara co-founders Mike McNamara and Joe Gebbia on CNBC\u2019s Squawk Box",
    image: "/images/news/news-2.jpg",
  },
  {
    source: "Fox Business: Mornings with Maria",
    description:
      "Co-founders Mike McNamara and Joe Gebbia discuss Samara on Fox Business Network\u2019s Mornings with Maria",
    image: "/images/news/news-3.jpg",
  },
];

export const pullQuote = {
  text: "\u201CIt really is the Tesla or Apple of housing.\u201D",
  attribution: "Andrew Ross Sorkin, Squawk Box on CNBC",
};

export const articles: NewsArticle[] = [
  {
    slug: "time-names-backyard-a-best-invention-of-2024",
    title:
      "TIME names Samara\u2019s Backyard a Best Invention of 2024",
    category: "Update",
    date: "October 30, 2024",
    image: "/images/news/news-1.jpg",
    layout: "medium",
    body: [
      "Each year, TIME honors genius ideas and products that are changing how we live, work, play, and think about what\u2019s possible. We\u2019re proud to announce that this year, Backyard has been recognized as one of TIME\u2019s Best Inventions of 2024.",
      "\u201CAdding more space to your home can be tough,\u201D notes TIME. \u201CWhether it\u2019s adding an in-law suite, guest house, gym or yoga studio, or creating a small rental, building an additional dwelling unit (ADU) on your property can come with months of disruption and contractors. Samara\u2019s Backyard homes aim to cut out the turmoil.\u201D",
      "TIME recognized Samara for making it remarkably easy to add extra space to an existing property. The company offers a seamless customer experience, handling everything from design and manufacturing, to permitting and site preparation, to financing and installation.",
      "Because Samara manufactures its models off-site at a factory it owns, it can ensure each home is built to the highest standards. Prefabrication also means Backyard can be installed in as few as seven months, with only about six weeks of on-site construction time. Homeowners can have peace of mind knowing that the process will be simple, straightforward and fast\u2014it\u2019s as easy as buying a Tesla online.",
      "To that end, Samara is upfront about costs and timelines, unlike most general contractors, and manages the entire process from conception to completion. And because finding a loan for an ADU can be challenging, Samara uniquely offers competitive financing with as little as no money down and no need to touch your existing mortgage.",
      "The recognition from TIME underscores Samara\u2019s commitment to empowering homeowners to easily and quickly create the property of their dreams. Visit our website to learn more about our award-winning Backyard models.",
    ],
  },
  {
    slug: "there-s-more-to-love-with-backyard-xl-10",
    title: "There\u2019s more to love with Backyard XL 10",
    category: "Update",
    date: "August 01, 2024",
    image: "/images/news/news-4.jpg",
    layout: "alternative",
    body: [
      "We\u2019re excited to introduce Backyard XL 10 \u2014 our largest and most versatile model yet. At nearly 1,000 square feet, XL 10 offers homeowners an entirely new way to think about the space in their backyard.",
      "With two bedrooms, a full kitchen, and a spacious living area, XL 10 is designed for families who need more room without the hassle of a traditional home addition. It\u2019s a complete home that can be installed in your backyard in as little as seven months.",
      "Like all Backyard models, XL 10 is built in our factory to the highest quality standards and arrives at your property ready for installation. Every detail has been thoughtfully considered, from the floor plan to the finishes.",
    ],
  },
  {
    slug: "samara-launches-proprietary-financing-product",
    title:
      "Samara Launches Proprietary Financing Product to Bring More Space to Millions of Homeowners",
    category: "Press Release",
    date: "June 20, 2024",
    image: "/images/news/news-5.jpg",
    layout: "medium",
    body: [
      "Samara today announced the launch of its proprietary financing product, designed specifically for Backyard. The new offering makes it easier than ever for California homeowners to add living space to their property.",
      "With APRs as low as 6.5%, no payments or interest for 6 months, as little as no money down, and no need to touch your existing mortgage, Samara\u2019s financing is designed to remove the biggest barrier to building an ADU: cost.",
      "The financing product is available exclusively through Samara and can be accessed directly from the company\u2019s website. Homeowners can get a rate estimate in minutes without impacting their credit score.",
    ],
  },
  {
    slug: "introducing-backyard-xl",
    title: "Introducing Backyard XL 8",
    category: "Update",
    date: "May 01, 2024",
    image: "/images/news/news-6.jpg",
    layout: "alternative",
    body: [
      "Today we\u2019re introducing Backyard XL 8 \u2014 a new model that brings even more space and flexibility to homeowners across California. At 800 square feet, XL 8 offers a generous one-bedroom layout with a full kitchen, bathroom, and living area.",
      "XL 8 was designed with multi-generational living in mind. Whether you\u2019re creating a home for aging parents, a rental unit for extra income, or simply more space for your growing family, XL 8 delivers.",
    ],
  },
  {
    slug: "samara-acquires-factory",
    title:
      "Samara Acquires Factory to Scale Manufacturing of Backyard as Demand for ADUs Soars in California",
    category: "Press Release",
    date: "February 29, 2024",
    image: "/images/news/news-7.jpg",
    layout: "medium",
    body: [
      "Samara has acquired a state-of-the-art manufacturing facility to meet surging demand for its Backyard accessory dwelling units. The acquisition positions Samara to significantly increase production capacity while maintaining the quality standards that have defined the brand.",
      "The factory, located in Mexicali, Mexico, spans over 100,000 square feet and will enable Samara to manufacture hundreds of units per year. The acquisition comes as California continues to see record demand for ADUs, driven by the state\u2019s housing shortage.",
    ],
  },
  {
    slug: "samara-raises-41-million",
    title:
      "Samara raises $41 million to bring high quality ADUs to every backyard in California and beyond",
    category: "Update",
    date: "October 30, 2023",
    image: "/images/news/news-8.jpg",
    layout: "alternative",
    body: [
      "Samara has raised $41 million in a funding round led by Thrive Capital, with participation from Airbnb and 8VC. The investment will fuel Samara\u2019s mission to make it easy for every homeowner to add beautiful, high-quality living space to their property.",
      "The company plans to use the funds to expand its manufacturing capabilities, grow its team, and bring Backyard to new markets across California and beyond.",
    ],
  },
];

export const externalArticles: NewsArticle[] = [
  {
    slug: "",
    title:
      "Airbnb Co-founder\u2019s New Business Is Building Small Homes in Backyards",
    category: "",
    date: "November 14, 2022",
    image: "/images/news/news-9.jpg",
    layout: "medium",
    externalSource: "Wall Street Journal",
    body: [],
  },
  {
    slug: "",
    title:
      "Inside an Airbnb cofounder\u2019s latest venture: Building tiny backyard homes",
    category: "",
    date: "November 14, 2022",
    image: "/images/news/news-10.jpg",
    layout: "alternative",
    externalSource: "Fast Company",

    body: [],
  },
];

export const pressGroups = [
  [
    {
      source: "Wallpaper",
      headline:
        "This flexible, customisable garden dwelling by Samara brings functionality to outside space",
      date: "November 20, 2022",
    },
    {
      source: "Insider",
      headline:
        "An Airbnb cofounder\u2019s new startup is building $289,000 prefab tiny homes that can be set up in a few hours",
      date: "November 16, 2022",
    },
    {
      source: "Time Out",
      headline:
        "The co-founder of Airbnb is now making backyard tiny homes",
      date: "November 21, 2022",
    },
  ],
  [
    {
      source: "New York: Curbed",
      headline:
        "Airbnb\u2019s Co-Founder Is Building ADUs That Would Make Great Airbnbs",
      date: "November 17, 2022",
    },
    {
      source: "Archinect",
      headline:
        "Airbnb co-founder\u2019s startup Samara unveils \u2018Backyard,\u2019 its first ADU model for California",
      date: "November 16, 2022",
    },
    {
      source: "DesignBoom",
      headline:
        "Samara\u2019s flexible solar-powered unit unlocks the full potential of your backyard",
      date: "November 14, 2022",
    },
  ],
];
