import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { stories } from "@/data/stories";
import { TopicTag } from "@/components/ui/TopicTag";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { DonateModule } from "@/components/ui/DonateModule";
import { StoryCard } from "@/components/ui/StoryCard";

/* ------------------------------------------------------------------ */
/*  Image map — first image is the hero, rest populate gallery/inline */
/* ------------------------------------------------------------------ */

const projectImages: Record<string, string[]> = {
  "blooming-markets-malawi": [
    "/images/projects/malawi-market.jpg",
    "/images/projects/malawi-group.jpg",
    "/images/projects/malawi-farming1.jpg",
    "/images/projects/malawi-farming2.jpg",
    "/images/projects/malawi-field1.jpg",
    "/images/projects/malawi-field2.jpg",
    "/images/projects/malawi-field3.jpg",
    "/images/projects/malawi-farming3.jpg",
  ],
  "sounding-soil": [
    "/images/sounding-soil/kids-listening.jpg",
    "/images/sounding-soil/soil-close.jpg",
    "/images/sounding-soil/field-test.jpg",
    "/images/sounding-soil/soil-measurement.jpg",
    "/images/sounding-soil/soil-research.jpg",
  ],
  "neycha-accelerator": [
    "/images/projects/kenya-seeds.jpg",
    "/images/projects/kenya-farming.jpg",
    "/images/projects/kenya-organic-farm.jpg",
    "/images/projects/kenya-syscom.jpg",
  ],
  "swiss-food-policy": [
    "/images/projects/swiss-farm.jpg",
    "/images/general/swiss-cows.jpg",
    "/images/general/swiss-horses-field.jpg",
    "/images/general/swiss-twann.jpg",
  ],
  "slow-food-uganda": [
    "/images/general/uganda-biodefenders.jpg",
    "/images/general/bio-farm-chickens.jpg",
    "/images/general/market-africa.jpg",
  ],
  "bio-tanzania": [
    "/images/projects/tanzania-organic.jpg",
    "/images/general/tanzania-entrepreneur.jpg",
    "/images/general/food-system.jpg",
  ],
};

const heroAlts: Record<string, string> = {
  "blooming-markets-malawi": "Agroecological market transaction in northern Malawi",
  "sounding-soil": "Two children listening to the sounds of healthy soil",
  "neycha-accelerator": "Seed production at a Kenyan agroecological enterprise",
  "swiss-food-policy": "Swiss organic farmland landscape",
  "slow-food-uganda": "Biodefenders working in Uganda",
  "bio-tanzania": "Organic produce shop in Tanzania",
};

/* ------------------------------------------------------------------ */
/*  Static generation                                                  */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: `${project?.title || "Project"} — BioVision`,
    description: project?.excerpt || "",
  };
}

/* ------------------------------------------------------------------ */
/*  Helper: render markdown-lite bold (**text**) as <strong>           */
/* ------------------------------------------------------------------ */

function renderBodyText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const images = projectImages[project.slug] || [];
  const heroImage = images[0];
  const galleryImages = images.slice(1);
  const relatedStories = stories.slice(0, 3);

  /* Map content section keys to display labels */
  const contentSections = [
    { key: "challenge" as const, label: "The challenge" },
    { key: "approach" as const, label: "Our approach" },
    { key: "impact" as const, label: "Impact so far" },
    { key: "people" as const, label: "The people" },
  ];

  /* Pick images to intersperse between editorial sections */
  const inlineImages = [galleryImages[2], galleryImages[4]].filter(Boolean);

  return (
    <main>
      {/* ============================================================ */}
      {/*  1. HERO — full-bleed image, min-h-[70vh]                    */}
      {/* ============================================================ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {heroImage ? (
          <>
            <Image
              src={heroImage}
              alt={heroAlts[project.slug] || project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #E5E5E5 0%, #999999 100%)",
            }}
          />
        )}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-caption text-white/60 mb-6">
            <Link href="/" className="hover:text-white/90 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/impact"
              className="hover:text-white/90 transition-colors"
            >
              Impact
            </Link>
            <span>/</span>
            <span className="text-white/80">{project.title}</span>
          </nav>

          {/* Topic tags + Region */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {project.topics.map((topic) => (
              <TopicTag
                key={topic}
                topic={topic}
                className="bg-white/15 text-white border-white/20 backdrop-blur-sm"
              />
            ))}
            <span className="inline-block text-caption px-3 py-1 rounded-full bg-white/15 text-white border border-white/20 backdrop-blur-sm">
              {project.region}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-display text-white max-w-4xl">{project.title}</h1>

          {/* Excerpt */}
          <p className="text-body-lg text-white/70 max-w-2xl mt-4">
            {project.excerpt}
          </p>

          {/* Key stats pills */}
          {project.facts && (
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-body-sm px-4 py-2 rounded-full">
                <span>
                  {project.facts.householdsReached}
                </span>{" "}
                Households
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-body-sm px-4 py-2 rounded-full">
                {project.facts.duration}
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-body-sm px-4 py-2 rounded-full">
                {project.facts.region}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. IMAGE GALLERY                                             */}
      {/* ============================================================ */}
      {galleryImages.length >= 2 && (
        <section className="bg-cream py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={
                galleryImages.length >= 3
                  ? "grid grid-cols-1 md:grid-cols-3 gap-4"
                  : "grid grid-cols-1 md:grid-cols-2 gap-4"
              }
            >
              {galleryImages.slice(0, 3).map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[3/2] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt={`${project.title} — photo ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes={
                      galleryImages.length >= 3
                        ? "(max-width: 768px) 100vw, 33vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/*  3. LARGE STATEMENT                                           */}
      {/* ============================================================ */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <p className="text-statement text-ink">
              {project.content
                ? project.excerpt
                : `${project.title} — building resilient communities through agroecological innovation.`}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. EDITORIAL CONTENT                                         */}
      {/* ============================================================ */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {project.content ? (
            <>
              {contentSections.map((section, i) => {
                const text = project.content![section.key];
                if (!text) return null;

                /* Insert a full-width image between certain sections */
                const showImageAfter = i === 1 || i === 2;
                const inlineImg =
                  showImageAfter && inlineImages[i === 1 ? 0 : 1];

                return (
                  <SectionReveal key={section.key}>
                    <div className={i > 0 ? "mt-16" : ""}>
                      <h2 className="text-heading text-ink mb-6">
                        {section.label}
                      </h2>
                      <div className="text-body-lg text-ink-light whitespace-pre-line leading-relaxed">
                        {renderBodyText(text)}
                      </div>
                    </div>

                    {inlineImg && (
                      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mt-16">
                        <Image
                          src={inlineImg}
                          alt={`${project.title} — ${section.label}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 768px"
                        />
                      </div>
                    )}
                  </SectionReveal>
                );
              })}
            </>
          ) : (
            <SectionReveal>
              <p className="text-body-lg text-ink-muted italic text-center">
                Full project details coming soon.
              </p>
            </SectionReveal>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. FACTS STRIP                                               */}
      {/* ============================================================ */}
      {project.facts && (
        <section className="bg-cream-dark py-16">
          <div className="max-w-7xl mx-auto px-6">
            <SectionReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div>
                  <span className="text-caption uppercase tracking-wider text-ink-muted block mb-2">
                    Region
                  </span>
                  <span className="text-heading text-ink">
                    {project.facts.region}
                  </span>
                </div>
                <div>
                  <span className="text-caption uppercase tracking-wider text-ink-muted block mb-2">
                    Partners
                  </span>
                  <span className="text-heading text-ink">
                    {project.facts.partners}
                  </span>
                </div>
                <div>
                  <span className="text-caption uppercase tracking-wider text-ink-muted block mb-2">
                    Duration
                  </span>
                  <span className="text-heading text-ink">
                    {project.facts.duration}
                  </span>
                </div>
                <div>
                  <span className="text-caption uppercase tracking-wider text-ink-muted block mb-2">
                    Households reached
                  </span>
                  <span className="text-heading text-ink">
                    {project.facts.householdsReached}
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/*  6. RELATED STORIES                                           */}
      {/* ============================================================ */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-heading text-ink mb-10">Related stories</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStories.map((story, i) => (
              <SectionReveal key={story.slug} delay={i * 0.1}>
                <StoryCard
                  title={story.title}
                  excerpt={story.excerpt}
                  topic={story.topic}
                  slug={story.slug}
                  href={`/ideas/${story.slug}`}
                />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. DONATE CTA                                                */}
      {/* ============================================================ */}
      <section className="bg-ink py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="text-display text-white mb-4">
              Support this project
            </h2>
            <p className="text-body-lg text-white/60 mb-8">
              Your contribution directly supports farmers, communities, and the
              transition to sustainable food systems.
            </p>
            <DonateModule
              theme="dark"
              variant="compact"
              heading=""
              context={
                project.slug === "blooming-markets-malawi"
                  ? "CHF 60 provides seeds and training for one family for a growing season."
                  : undefined
              }
              className="max-w-md mx-auto"
            />
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
