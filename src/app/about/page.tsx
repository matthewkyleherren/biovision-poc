import Image from "next/image";
import { HeroPage } from "@/components/sections/HeroPage";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { teamPreview } from "@/data/team";
import { timeline } from "@/data/soundingSoil";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BioVision — Foundation for Ecological Development",
  description:
    "Since 1998, BioVision has been proving that ecological agriculture is not just viable — it's the future. Founded by World Food Prize laureate Hans Rudolf Herren.",
};

const values = [
  {
    title: "Agroecology at the core",
    description:
      "We believe in farming that works with nature, not against it. Agroecology is our lens for every decision.",
  },
  {
    title: "Local ownership",
    description:
      "Solutions must come from and belong to the communities they serve. We partner, we don't prescribe.",
  },
  {
    title: "Evidence-based action",
    description:
      "Every program is grounded in science and measured by outcomes. We're transparent about what works and what doesn't.",
  },
  {
    title: "Systemic change",
    description:
      "Individual projects matter. But changing the system — policy, markets, knowledge — creates lasting transformation.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <HeroPage
        title={"A foundation built\non living soil"}
        description="Since 1998, BioVision has been proving that ecological agriculture is not just viable — it's the future. Founded by World Food Prize laureate Hans Rudolf Herren."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Timeline */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[20px] md:left-[40px] top-0 bottom-0 w-px bg-earth/30" />

            {timeline.map((item, i) => (
              <SectionReveal key={item.year} delay={i * 0.1}>
                <div
                  className={`relative pl-12 md:pl-20 ${
                    i === timeline.length - 1 ? "pb-0" : "pb-10"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[16px] md:left-[36px] top-1 w-2 h-2 rounded-full bg-saffron" />
                  <div className="text-data-label text-saffron uppercase tracking-wider">
                    {item.year}
                  </div>
                  <div className="text-body text-ink-light mt-1">
                    {item.event}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 lg:sticky lg:top-32 lg:self-start space-y-8">
              <h2 className="text-display font-display text-ink">
                What guides us
              </h2>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/team-strategy.jpg"
                  alt="BioVision team in a strategy meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-12">
              {values.map((value, i) => (
                <SectionReveal key={value.title} delay={i * 0.1}>
                  <div>
                    <h3 className="text-heading font-display text-ink">
                      {value.title}
                    </h3>
                    <p className="text-body text-ink-light mt-2">
                      {value.description}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-display font-display text-ink text-center">
            The people behind BioVision
          </h2>
          <p className="text-body-lg text-ink-light text-center mt-4 max-w-2xl mx-auto">
            A team of ~45 passionate professionals in Zurich and partner
            organizations across Sub-Saharan Africa.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {teamPreview.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 0.05}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full relative overflow-hidden">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`Portrait of ${member.name}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className="w-full h-full"
                        style={{
                          background: "linear-gradient(135deg, #E5E5E5 0%, #CCCCCC 100%)",
                        }}
                      />
                    )}
                  </div>
                  <div className="font-display text-body text-ink mt-4">
                    {member.name}
                  </div>
                  <div className="text-caption text-ink-muted mt-1">
                    {member.role}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="text-display font-display text-ink">
              Transparency & trust
            </h2>
            <p className="text-body-lg text-ink-light mt-4 max-w-2xl mx-auto">
              BioVision holds the ZEWO seal of approval — Switzerland&apos;s
              quality standard for nonprofit organizations. We publish detailed
              annual reports and financial statements.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
              <div>
                <div className="text-data-hero text-ink">86%</div>
                <div className="text-body-sm text-ink-muted mt-2">
                  of funds go directly to programs
                </div>
              </div>
              <div>
                <div className="text-data text-saffron">ZEWO</div>
                <div className="text-body-sm text-ink-muted mt-2">
                  certified since 2004
                </div>
              </div>
              <div>
                <div className="text-data text-saffron">A+</div>
                <div className="text-body-sm text-ink-muted mt-2">
                  transparency rating
                </div>
              </div>
            </div>
            <Link
              href="#"
              className="mt-8 inline-block border border-ink text-ink px-6 py-3 rounded-full hover:bg-ink hover:text-white transition-colors"
            >
              Read the 2024 Annual Report
            </Link>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
