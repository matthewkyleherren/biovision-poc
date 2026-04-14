import { SectionReveal } from "@/components/ui/SectionReveal";
import { ImpactCounter } from "@/components/ui/ImpactCounter";

const stats = [
  { value: 14, suffix: "M+", label: "people reached", note: "in Sub-Saharan Africa since 1998" },
  { value: 8, suffix: "", label: "countries", note: "across Africa and Europe" },
  { value: 25, suffix: "", label: "years", note: "of ecological development" },
];

export function ImpactStats() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <SectionReveal className="max-w-7xl mx-auto px-6">
        <ImpactCounter stats={stats} />
      </SectionReveal>
    </section>
  );
}
