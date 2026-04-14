import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function SuperfoodFeature() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <span className="text-body-sm text-saffron">
              NEW — Superfood of the Year 2026
            </span>
            <h2 className="text-display text-ink mt-4">The Lupine</h2>
            <p className="text-body-lg text-ink-light mt-6 max-w-lg">
              Extraordinarily healthy for humans, cold-resistant, and a gift
              to both agriculture and biodiversity. The lupine is BioVision&apos;s
              first-ever Superfood of the Year — highlighting foods that deserve
              a bigger role in our future.
            </p>
            <Link
              href="/ideas"
              className="mt-8 inline-flex bg-saffron text-white px-8 py-3.5 rounded-full hover:bg-saffron-light transition-colors"
            >
              Discover why
            </Link>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/superfood/lupine-bee.jpg"
                  alt="A bee pollinating a white lupine flower — the superfood of the year"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-cream shadow-lg">
                <Image
                  src="/images/superfood/lupine-field.jpg"
                  alt="Field of blooming lupine plants stretching to the horizon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
