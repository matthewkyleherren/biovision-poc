import { SectionReveal } from "@/components/ui/SectionReveal";
import { FeaturedStory } from "@/components/ui/FeaturedStory";

export function FeaturedStories() {
  return (
    <section className="bg-cream-dark py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <FeaturedStory
            title="The power of community in Northern Malawi"
            excerpt="Intensive tobacco farming was long one of the few ways to earn money in northern Malawi. Monica Ngoma and her fellow young farmers are forging a new path: cooperation, agroecological methods, and local value creation instead of dependence on chemicals, tobacco, and the whims of world markets."
            topic="Agriculture"
            href="/impact/blooming-markets-malawi"
            image="/images/projects/malawi-market.jpg"
            imageAlt="Market transaction at an agroecological market in Malawi"
          />
        </SectionReveal>
      </div>
    </section>
  );
}
