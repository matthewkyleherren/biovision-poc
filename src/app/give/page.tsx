import { HeroPage } from "@/components/sections/HeroPage";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { DonateModule } from "@/components/ui/DonateModule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support BioVision — Donate",
  description:
    "Your tax-deductible donation funds proven, measurable impact on food systems and farming communities. ZEWO-certified.",
};

const tiers = [
  {
    amount: "CHF 60",
    description:
      "Seeds and agroecological training for one farming family for an entire growing season in Malawi.",
  },
  {
    amount: "CHF 100",
    description:
      "Development of local organic market infrastructure, connecting 10 farmers to fair-price buyers in Tanzania.",
  },
  {
    amount: "CHF 250",
    description:
      "A community workshop reaching 30 farmers with soil conservation techniques and pest management training.",
  },
  {
    amount: "CHF 1,000",
    description:
      "A full year of Sounding Soil recording and analysis at three new sites in Switzerland.",
  },
];

const otherWays = [
  {
    title: "Become a member",
    description:
      "From CHF 75/year. Receive our quarterly magazine, annual report, and event invitations.",
    cta: "Join",
  },
  {
    title: "Leave a legacy",
    description:
      "Include BioVision in your estate planning and create lasting change for future generations.",
    cta: "Learn more",
  },
  {
    title: "For foundations & corporates",
    description:
      "Strategic partnerships for organizations aligned with sustainable food systems.",
    cta: "Get in touch",
  },
];

export default function GivePage() {
  return (
    <main>
      {/* Hero */}
      <HeroPage
        title={"Your contribution\ngrows"}
        description="Every franc supports proven, measurable impact on food systems, farming communities, and our shared planet."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Give" }]}
      />

      {/* Main Donate Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Donate Form */}
            <SectionReveal>
              <h2 className="text-heading font-display text-ink mb-6">
                Make a donation
              </h2>
              <DonateModule variant="full" />
            </SectionReveal>

            {/* Right: What your donation funds */}
            <SectionReveal delay={0.2}>
              <h2 className="text-heading font-display text-ink mb-6">
                What your donation funds
              </h2>
              <div className="space-y-6">
                {tiers.map((tier) => (
                  <div
                    key={tier.amount}
                    className="bg-cream-dark rounded-2xl p-6"
                  >
                    <div className="text-data text-saffron">
                      {tier.amount}
                    </div>
                    <p className="text-body text-ink-light mt-2">
                      {tier.description}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherWays.map((card, i) => (
              <SectionReveal key={card.title} delay={i * 0.1}>
                <div className="bg-cream rounded-2xl p-8 text-center">
                  <h3 className="text-heading font-display text-ink">
                    {card.title}
                  </h3>
                  <p className="text-body text-ink-light mt-3">
                    {card.description}
                  </p>
                  <button className="mt-6 inline-block bg-saffron text-white px-6 py-3 rounded-full hover:bg-saffron-light transition-colors">
                    {card.cta}
                  </button>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
