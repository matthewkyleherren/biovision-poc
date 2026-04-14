import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ProjectMap } from "@/components/ui/ProjectMap";
import { countryProjects } from "@/data/projects";

export function ProjectSpotlight() {
  return (
    <section className="bg-ink text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hidden lg:block space-y-6">
            <ProjectMap size="compact" />
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/images/general/market-africa.jpg"
                alt="Vibrant market scene in Africa where BioVision supports local food systems"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <SectionReveal>
            <h2 className="text-display text-white">Where we work</h2>
            <p className="text-body-lg text-white/60 mt-6">
              From the highlands of Kenya to the fields of Northern Malawi,
              from Swiss farmland to global policy forums — BioVision operates
              wherever food systems need transformation.
            </p>

            <ul className="mt-8 space-y-3">
              {countryProjects.map((item) => (
                <li key={item.country} className="flex justify-between text-body-sm py-2 border-b border-white/10 last:border-0">
                  <span className="text-white/80">{item.country}</span>
                  <span className="text-saffron">{item.count} project{item.count !== 1 ? "s" : ""}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/impact"
              className="mt-10 inline-flex bg-saffron text-white px-8 py-3.5 rounded-full hover:bg-saffron-light transition-colors"
            >
              See all projects
            </Link>
          </SectionReveal>

          <div className="lg:hidden">
            <ul className="space-y-3">
              {countryProjects.map((item) => (
                <li key={item.country} className="flex justify-between text-body-sm py-2 border-b border-white/10 last:border-0">
                  <span className="text-white/80">{item.country}</span>
                  <span className="text-saffron">{item.count} project{item.count !== 1 ? "s" : ""}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
