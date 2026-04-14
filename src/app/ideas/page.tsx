import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SuperfoodFeature } from "@/components/sections/SuperfoodFeature";
import { stories } from "@/data/stories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideas — BioVision",
  description:
    "Stories, research, and insights from the intersection of food, ecology, and human dignity.",
};

const topics = [
  "All",
  "Agriculture",
  "Markets",
  "Policy",
  "Knowledge",
  "Consumption",
];

const storyImages: Record<string, string> = {
  "the-power-of-community": "/images/projects/malawi-group.jpg",
  "old-grains-new-strength": "/images/stories/emmer-field.jpg",
  "what-enterprises-need": "/images/stories/climate-hub.jpg",
  "energy-crises-food-system": "/images/stories/kenya-agriculture.jpg",
  "five-tips-sustainable-consumption": "/images/general/food-system.jpg",
  "agroecology-in-practice-switzerland": "/images/general/swiss-cows.jpg",
  "women-feed-the-world": "/images/general/ethiopia-couple.jpg",
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function IdeasPage() {
  const featuredStory = stories.find((s) => s.featured)!;
  const twoColumn = stories.filter(
    (s) =>
      s.slug === "old-grains-new-strength" ||
      s.slug === "what-enterprises-need"
  );
  const threeColumn = stories.filter(
    (s) =>
      s.slug === "energy-crises-food-system" ||
      s.slug === "five-tips-sustainable-consumption" ||
      s.slug === "agroecology-in-practice-switzerland"
  );
  const fullWidthStory = stories.find(
    (s) => s.slug === "women-feed-the-world"
  )!;

  return (
    <>
      {/* ── Header Section ── */}
      <section className="bg-cream pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-caption text-ink-muted mb-8">
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">Ideas</span>
          </nav>

          {/* Title */}
          <h1 className="text-hero text-ink">Ideas</h1>

          {/* Subtitle */}
          <p className="text-body-lg text-ink-light mt-5 max-w-2xl">
            Stories, research, and insights from the intersection of food,
            ecology, and human dignity.
          </p>

          {/* Topic Filter Pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {topics.map((topic) => (
              <button
                key={topic}
                className={
                  topic === "All"
                    ? "bg-ink text-white px-5 py-2.5 rounded-full text-body-sm transition-colors"
                    : "bg-transparent border border-ink/15 text-ink-light px-5 py-2.5 rounded-full text-body-sm hover:border-ink/40 hover:text-ink transition-colors"
                }
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Story ── */}
      <section className="bg-cream pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <Link
              href={`/ideas/${featuredStory.slug}`}
              className="group block relative rounded-2xl overflow-hidden mt-8"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] md:aspect-[16/9] overflow-hidden">
                <Image
                  src={storyImages[featuredStory.slug]}
                  alt={featuredStory.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
                <span className="text-saffron text-body-sm">
                  {featuredStory.topic}
                </span>
                <h2 className="text-display text-white mt-3">
                  {featuredStory.title}
                </h2>
                <p className="text-body-lg text-white/70 mt-3 max-w-2xl">
                  {featuredStory.excerpt}
                </p>
                <span className="text-caption text-white/50 mt-4 block">
                  {formatDate(featuredStory.date)}
                </span>
              </div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ── Two-Column Story Row ── */}
      <section className="bg-cream pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {twoColumn.map((story, i) => (
              <SectionReveal key={story.slug} delay={i * 0.1}>
                <Link
                  href={`/ideas/${story.slug}`}
                  className="group block bg-cream-dark rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={storyImages[story.slug]}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="text-saffron text-body-sm">
                      {story.topic}
                    </span>
                    <h3 className="text-heading mt-3 text-ink">
                      {story.title}
                    </h3>
                    <p className="text-body text-ink-light mt-2 line-clamp-2">
                      {story.excerpt}
                    </p>
                    <span className="text-caption text-ink-muted mt-4 block">
                      {formatDate(story.date)}
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull Quote ── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <blockquote className="max-w-4xl mx-auto text-center">
              <p className="text-statement text-ink">
                &ldquo;The future of food is not about producing more &mdash;
                it&apos;s about producing better, with respect for people and
                planet.&rdquo;
              </p>
              <footer className="mt-8">
                <span className="text-body-sm text-ink-muted">
                  Hans Rudolf Herren, World Food Prize Laureate &amp; BioVision
                  Founder
                </span>
              </footer>
            </blockquote>
          </SectionReveal>
        </div>
      </section>

      {/* ── Three-Column Story Row ── */}
      <section className="bg-cream pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threeColumn.map((story, i) => (
              <SectionReveal key={story.slug} delay={i * 0.1}>
                <Link
                  href={`/ideas/${story.slug}`}
                  className="group block bg-cream-dark rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={storyImages[story.slug]}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-saffron text-body-sm">
                      {story.topic}
                    </span>
                    <h3 className="text-heading mt-3 text-ink">
                      {story.title}
                    </h3>
                    <p className="text-body text-ink-light mt-2 line-clamp-2">
                      {story.excerpt}
                    </p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Superfood Feature ── */}
      <SuperfoodFeature />

      {/* ── Full-Width Story Card (Horizontal) ── */}
      <section className="bg-cream py-8">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <Link
              href={`/ideas/${fullWidthStory.slug}`}
              className="group block bg-cream-dark rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image half */}
                <div className="relative aspect-[3/2] md:aspect-auto md:min-h-[400px] overflow-hidden">
                  <Image
                    src={storyImages[fullWidthStory.slug]}
                    alt={fullWidthStory.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Content half */}
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  <span className="text-saffron text-body-sm">
                    {fullWidthStory.topic}
                  </span>
                  <h3 className="text-display mt-4 text-ink">
                    {fullWidthStory.title}
                  </h3>
                  <p className="text-body-lg text-ink-light mt-4 max-w-lg">
                    {fullWidthStory.excerpt}
                  </p>
                  <span className="text-caption text-ink-muted mt-6 block">
                    {formatDate(fullWidthStory.date)}
                  </span>
                  <span className="mt-8 inline-flex items-center text-saffron text-body group-hover:underline">
                    Read story
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="bg-cream-dark rounded-2xl max-w-3xl mx-auto p-8 md:p-12 text-center">
              <h2 className="text-heading text-ink">Stay in the loop</h2>
              <p className="text-body text-ink-light mt-3 max-w-md mx-auto">
                Get the latest stories, research, and ideas from BioVision
                delivered to your inbox. No spam, just substance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white border border-ink/10 rounded-full px-5 py-3 text-body text-ink placeholder:text-ink-muted focus:outline-none focus:border-saffron transition-colors"
                />
                <button className="bg-saffron text-white px-8 py-3 rounded-full hover:bg-saffron-light transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-caption text-ink-muted mt-4">
                Monthly digest. Unsubscribe anytime.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
