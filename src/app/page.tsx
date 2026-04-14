import { HeroHome } from "@/components/sections/HeroHome";
import { InlineImageStatement } from "@/components/sections/InlineImageStatement";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { SuperfoodFeature } from "@/components/sections/SuperfoodFeature";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StoryCard } from "@/components/ui/StoryCard";
import { DonateModule } from "@/components/ui/DonateModule";
import Image from "next/image";
import Link from "next/link";

/* ─── Data ────────────────────────────────────────────────────────────────── */

const pillars = [
  {
    title: "Ecological Agriculture",
    body: "We support smallholder farmers in adopting agroecological practices that increase yields, protect biodiversity, and build resilient livelihoods — without synthetic chemicals.",
    link: "Explore projects",
    href: "/impact",
  },
  {
    title: "Food Systems & Markets",
    body: "From farm to fork, we work to build fair, local food systems — connecting producers to markets, promoting organic certification, and strengthening food sovereignty.",
    link: "Explore projects",
    href: "/impact",
  },
  {
    title: "Knowledge & Policy",
    body: "We translate field experience into evidence-based policy, advocate for agroecological transformation in Switzerland and internationally, and educate the next generation.",
    link: "Explore ideas",
    href: "/ideas",
  },
];

const latestStories = [
  {
    title: "Old grains, new strength",
    excerpt:
      "Emmer, once nearly forgotten, is making a comeback. Cereal breeder Felix Jähne on diversity, farmers' experience, and the agriculture of the future.",
    topic: "Agriculture" as const,
    slug: "old-grains-new-strength",
    image: "/images/stories/emmer-field.jpg",
    imageAlt: "Golden emmer grain field in Switzerland",
  },
  {
    title: "What agroecological enterprises need to create impact",
    excerpt:
      "At the World Economic Forum in Davos, experts discussed how agroecological businesses can succeed — and a high-profile guest declared himself a fan.",
    topic: "Markets" as const,
    slug: "what-enterprises-need",
    image: "/images/stories/climate-hub.jpg",
    imageAlt: "Climate Hub event discussion at the World Economic Forum in Davos",
  },
  {
    title: "When energy crises hit the food system",
    excerpt:
      "Tensions in the Middle East affect more than oil markets. Charlotte Pavageau explains why the poorest households would be hit hardest.",
    topic: "Policy" as const,
    slug: "energy-crises-food-system",
    image: "/images/stories/kenya-agriculture.jpg",
    imageAlt: "Agricultural scene in Kenya showing food system challenges",
  },
];

const navCards = [
  {
    title: "Our impact",
    href: "/impact",
    image: "/images/projects/malawi-group.jpg",
    alt: "Community group in Malawi gathered together",
  },
  {
    title: "Ideas & stories",
    href: "/ideas",
    image: "/images/stories/emmer-field.jpg",
    alt: "Golden emmer grain field stretching to the horizon",
  },
];

const photoGrid = [
  { src: "/images/general/ethiopia-landscape.jpg", alt: "Lush Ethiopian landscape" },
  { src: "/images/projects/kenya-farming.jpg", alt: "Farming in Kenya" },
  { src: "/images/sounding-soil/soil-close.jpg", alt: "Close-up of healthy soil" },
  { src: "/images/general/swiss-horses-field.jpg", alt: "Horses grazing in a Swiss field" },
];

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <HeroHome />

      {/* ── 2. Statement with inline images ─────────────────────────────── */}
      <InlineImageStatement />

      {/* ── 3. Two Navigation Cards ─────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {navCards.map((card) => (
              <SectionReveal key={card.href}>
                <Link href={card.href} className="group block relative rounded-2xl overflow-hidden">
                  <div className="relative aspect-[3/2] md:aspect-[16/9]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <h2 className="text-display text-white">{card.title}</h2>
                      <span className="inline-flex items-center gap-2 text-white/80 text-body-sm mt-2 group-hover:gap-3 transition-all">
                        Explore
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Impact Stats ─────────────────────────────────────────────── */}
      <ImpactStats />

      {/* ── 5. Featured Story — Full-bleed ──────────────────────────────── */}
      <section className="bg-cream">
        <SectionReveal>
          <Link href="/impact/blooming-markets-malawi" className="group block relative">
            <div className="relative min-h-[60vh] overflow-hidden">
              <Image
                src="/images/projects/malawi-market.jpg"
                alt="Vibrant market scene in Northern Malawi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
                <div className="max-w-7xl mx-auto">
                  <span className="text-body-sm text-white/60">
                    Featured Project
                  </span>
                  <h2 className="text-display text-white mt-3 max-w-2xl">
                    The power of community in Northern Malawi
                  </h2>
                  <p className="text-body-lg text-white/70 mt-4 max-w-xl">
                    How local farmers are building resilient food systems, strengthening
                    markets, and transforming livelihoods through collective action and
                    agroecological practices.
                  </p>
                  <span className="inline-flex items-center gap-2 text-white text-body-sm mt-6 group-hover:gap-3 transition-all">
                    Read the story
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </SectionReveal>
      </section>

      {/* ── 6. Large Quote ──────────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-32">
        <SectionReveal className="max-w-4xl mx-auto px-6 text-center">
          <blockquote>
            <p className="text-statement text-ink">
              &ldquo;We believe in a world where food systems work for people, animals,
              and the planet — rooted in science, partnership, and the soil
              itself.&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="text-body text-ink-muted not-italic">
                — BioVision Foundation
              </cite>
            </footer>
          </blockquote>
        </SectionReveal>
      </section>

      {/* ── 7. Three Pillars ────────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-display text-ink text-center mb-12">
              What we do
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <SectionReveal key={pillar.title} delay={i * 0.1}>
                <div className="group bg-cream-dark rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1">
                  <span className="text-saffron text-display font-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-heading text-ink mt-4">
                    {pillar.title}
                  </h3>
                  <p className="text-body text-ink-light mt-3">
                    {pillar.body}
                  </p>
                  <Link
                    href={pillar.href}
                    className="text-ink text-body-sm mt-6 inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    {pillar.link}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Photo Grid ───────────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photoGrid.map((photo, i) => (
              <SectionReveal key={photo.src} delay={i * 0.08}>
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Superfood Feature ────────────────────────────────────────── */}
      <SuperfoodFeature />

      {/* ── 10. Latest Stories — From the Field ─────────────────────────── */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-display text-ink mb-12">
              From the field
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestStories.map((story, i) => (
              <SectionReveal key={story.slug} delay={i * 0.1}>
                <StoryCard
                  title={story.title}
                  excerpt={story.excerpt}
                  topic={story.topic}
                  slug={story.slug}
                  image={story.image}
                  imageAlt={story.imageAlt}
                />
              </SectionReveal>
            ))}
          </div>
          <Link
            href="/ideas"
            className="text-saffron mt-8 inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            All stories
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ── 11. Donate CTA ──────────────────────────────────────────────── */}
      <section className="bg-ink relative py-20 md:py-32 text-cream text-center">
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-display text-cream">
              Your contribution grows
            </h2>
            <p className="text-body-lg text-cream/70 mt-4">
              CHF 60 provides a farming family with seeds and training for one
              growing season. CHF 100 supports the development of local organic
              markets. CHF 250 funds a community workshop reaching 30 farmers.
            </p>
            <DonateModule
              theme="dark"
              variant="compact"
              className="mt-8 max-w-md mx-auto"
            />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
