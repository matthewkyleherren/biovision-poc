import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroPage } from "@/components/sections/HeroPage";
import { ProjectMap } from "@/components/ui/ProjectMap";
import { TopicTag } from "@/components/ui/TopicTag";
import { SectionReveal } from "@/components/ui/SectionReveal";

import { projects } from "@/data/projects";

const projectImages: Record<string, { src: string; alt: string }> = {
  "blooming-markets-malawi": {
    src: "/images/projects/malawi-market.jpg",
    alt: "Agroecological market transaction in Malawi",
  },
  "sounding-soil": {
    src: "/images/sounding-soil/kids-listening.jpg",
    alt: "Two children listening to soil sounds through headphones",
  },
  "swiss-food-policy": {
    src: "/images/projects/swiss-farm.jpg",
    alt: "Swiss organic farm landscape",
  },
  "neycha-accelerator": {
    src: "/images/projects/kenya-seeds.jpg",
    alt: "Seed production at a Kenyan agroecological enterprise",
  },
  "slow-food-uganda": {
    src: "/images/general/bio-farm-chickens.jpg",
    alt: "Free-range chickens on a bio farm",
  },
  "bio-tanzania": {
    src: "/images/projects/tanzania-organic.jpg",
    alt: "Organic produce shop in Tanzania",
  },
};

export const metadata: Metadata = {
  title: "Our Impact — BioVision",
  description:
    "14 million people reached across 8 countries. Explore BioVision's projects in agroecology, food systems, and policy.",
};

const filterTopics = ["All", "Agriculture", "Markets", "Policy", "Knowledge", "Consumption"] as const;

export default function ImpactPage() {
  return (
    <main>
      {/* Hero */}
      <HeroPage
        title={"Our impact across\nthree continents"}
        description="BioVision works with local partners in Sub-Saharan Africa, advocates for policy change in Switzerland, and advances agroecological knowledge worldwide."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Impact" }]}
      />

      {/* Map section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <ProjectMap size="full" className="mx-auto" />
        </div>
      </section>

      {/* Project grid section */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter bar (visual only) */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filterTopics.map((topic) => (
              <span
                key={topic}
                className={
                  topic === "All"
                    ? "px-4 py-2 rounded-full text-body-sm cursor-pointer bg-ink text-white"
                    : "px-4 py-2 rounded-full text-body-sm cursor-pointer bg-cream border border-ink/15 text-ink-light hover:border-ink/40 transition-colors"
                }
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => {
              const img = projectImages[project.slug];
              return (
                <SectionReveal key={project.slug} delay={i * 0.1}>
                  <Link
                    href={`/impact/${project.slug}`}
                    className="group block bg-cream rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1"
                  >
                    {img && (
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-103"
                        />
                      </div>
                    )}
                    <div className="p-8 md:p-10">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-saffron text-display font-light">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-caption text-ink-muted mt-2">
                          {project.region}
                        </span>
                      </div>
                      <h3 className="text-heading text-ink mt-4">
                        {project.title}
                      </h3>
                      <p className="text-body text-ink-light mt-3 line-clamp-3">
                        {project.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.topics.map((topic) => (
                          <TopicTag key={topic} topic={topic} />
                        ))}
                      </div>
                      <span className="text-ink text-body-sm mt-6 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        View project
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
