export interface AudioSample {
  id: string;
  label: string;
  location: string;
  caption: string;
  variant: "healthy" | "degraded";
}

export const audioSamples: AudioSample[] = [
  {
    id: "healthy-meadow",
    label: "Healthy Meadow",
    location: "Wildflower meadow, Kiental, Bern",
    caption: "Rich biodiversity — earthworms, beetles, springtails, fungi",
    variant: "healthy",
  },
  {
    id: "degraded-farmland",
    label: "Degraded Farmland",
    location: "Intensive monoculture field, Mittelland",
    caption: "Low biodiversity — compacted soil, minimal organism activity",
    variant: "degraded",
  },
];

export interface RecordingSite {
  name: string;
  x: number;
  y: number;
}

export const recordingSites: RecordingSite[] = [
  { name: "Kiental", x: 42, y: 55 },
  { name: "Grindelwald", x: 48, y: 52 },
  { name: "Zürich", x: 55, y: 35 },
  { name: "Bern", x: 42, y: 42 },
  { name: "Basel", x: 38, y: 22 },
  { name: "Luzern", x: 50, y: 42 },
  { name: "St. Gallen", x: 65, y: 30 },
  { name: "Lausanne", x: 25, y: 55 },
  { name: "Davos", x: 68, y: 45 },
  { name: "Lugano", x: 55, y: 72 },
  { name: "Thun", x: 45, y: 50 },
  { name: "Interlaken", x: 46, y: 52 },
  { name: "Fribourg", x: 35, y: 48 },
  { name: "Chur", x: 65, y: 48 },
  { name: "Sion", x: 35, y: 62 },
  { name: "Aarau", x: 48, y: 28 },
  { name: "Schaffhausen", x: 55, y: 15 },
  { name: "Winterthur", x: 58, y: 28 },
];

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    title: "Record",
    description:
      "Sensitive microphones are placed 15cm deep in the soil, recording for 10 minutes at standardized times.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Acoustic biodiversity is measured using the number of distinct sound frequencies — a proxy for species diversity.",
  },
  {
    number: "03",
    title: "Compare",
    description:
      "Sites are compared across Switzerland, building a growing sound archive that reveals the state of our soils.",
  },
];

export const timeline = [
  { year: "1998", event: "Founded by Dr. Hans Rudolf Herren in Zurich" },
  { year: "2003", event: "First projects in Kenya" },
  { year: "2008", event: "10-year anniversary, 500,000 people reached" },
  { year: "2013", event: "Launch of Sounding Soil" },
  { year: "2016", event: "CLEVER interactive exhibition opens" },
  { year: "2019", event: "Neycha Accelerator founded" },
  { year: "2022", event: "National Agroecology Strategy developed for Kenya" },
  { year: "2024", event: "14 million people reached" },
  { year: "2026", event: "Superfood of the Year launched" },
];
