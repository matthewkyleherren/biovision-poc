import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { DonateModule } from "@/components/ui/DonateModule";
import { audioSamples, recordingSites, howItWorksSteps } from "@/data/soundingSoil";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sounding Soil — The Earth is Singing — BioVision",
  description:
    "Beneath our feet, billions of organisms produce sound. Sounding Soil captures these hidden voices to reveal soil health.",
};

export default function SoundingSoilPage() {
  return (
    <>
      {/* Section 1: Intro — Full viewport dark hero */}
      <section className="min-h-screen bg-ink text-cream relative flex items-center justify-center text-center overflow-hidden">
        {/* Hero background image */}
        <Image
          src="/images/sounding-soil/kids-listening.jpg"
          alt="Two children listening to soil sounds through headphones — the iconic Sounding Soil image"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <p className="text-caption uppercase tracking-wider text-cream/50 mb-6">
            A BioVision Project
          </p>
          <h1 className="text-hero text-cream">
            The earth
            <br />
            is singing
          </h1>
          <p className="text-body-lg text-cream/70 mt-6 max-w-lg mx-auto">
            Beneath our feet, billions of organisms are producing sounds.
            Sounding Soil captures these hidden voices — revealing the health of
            our most vital resource.
          </p>
          <div className="mt-12">
            <ChevronDown className="text-cream/40 animate-scroll-bounce mx-auto w-8 h-8" />
          </div>
        </div>
      </section>

      {/* Section 2: The Concept — Two columns */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <SectionReveal>
            <div className="text-body-lg text-ink leading-relaxed space-y-6">
              <p>
                Healthy soil is alive with sound. Earthworms tunneling. Beetle
                larvae chewing. Fungi crackling as they grow.
              </p>
              <p>
                A single handful of healthy soil contains more living organisms
                than there are people on Earth.
              </p>
              <p>
                Sounding Soil makes this invisible world audible — and in doing
                so, transforms how we understand and protect the ground beneath
                our feet.
              </p>
            </div>
          </SectionReveal>

          {/* Right: Soil measurement and field test images */}
          <SectionReveal delay={0.2}>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/sounding-soil/soil-measurement.jpg"
                  alt="Soil measurement equipment being used to record underground sounds"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/sounding-soil/field-test.jpg"
                  alt="Field test of Sounding Soil recording equipment in a natural environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Section 3: Audio Comparison */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-display font-display text-ink text-center">
              Hear the difference
            </h2>
            <p className="text-body-lg text-ink-light text-center mt-4 max-w-2xl mx-auto">
              Healthy, biodiverse soil teems with acoustic life. Degraded soil
              falls silent. Listen for yourself.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {audioSamples.map((sample) => (
              <AudioPlayer
                key={sample.id}
                label={sample.label}
                location={sample.location}
                caption={sample.caption}
                variant={sample.variant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-display font-display text-ink text-center mb-12">
            How Sounding Soil works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 0.15}>
                <div className="bg-cream rounded-2xl p-8 text-center">
                  <span className="text-data text-saffron mb-4 block">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="h-16 flex items-center justify-center mb-4">
                    {step.number === "01" && (
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-saffron stroke-current"
                      >
                        {/* Microphone going into soil */}
                        <circle cx="24" cy="10" r="6" strokeWidth="2" fill="none" />
                        <line x1="24" y1="16" x2="24" y2="36" strokeWidth="2" strokeLinecap="round" />
                        <path d="M14 36 Q19 32 24 36 Q29 40 34 36" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <path d="M10 40 Q19 35 24 40 Q29 45 38 40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    )}
                    {step.number === "02" && (
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-saffron stroke-current"
                      >
                        {/* Waveform bars */}
                        <line x1="10" y1="30" x2="10" y2="18" strokeWidth="3" strokeLinecap="round" />
                        <line x1="18" y1="34" x2="18" y2="10" strokeWidth="3" strokeLinecap="round" />
                        <line x1="26" y1="32" x2="26" y2="14" strokeWidth="3" strokeLinecap="round" />
                        <line x1="34" y1="36" x2="34" y2="8" strokeWidth="3" strokeLinecap="round" />
                        <line x1="42" y1="30" x2="42" y2="20" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    )}
                    {step.number === "03" && (
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-saffron stroke-current"
                      >
                        {/* Venn diagram — two overlapping circles */}
                        <circle cx="18" cy="24" r="12" strokeWidth="2" fill="none" />
                        <circle cx="30" cy="24" r="12" strokeWidth="2" fill="none" />
                      </svg>
                    )}
                  </div>

                  <h3 className="font-display text-subheading text-ink">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-ink-light mt-2">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Soundmap Preview — Dark section */}
      <section className="bg-ink py-16 md:py-24 relative">

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-display font-display text-cream">The Soundmap</h2>
          <p className="text-body-lg text-cream/70 mt-4 max-w-2xl mx-auto">
            Over 200 recording sites across Switzerland, from alpine meadows to
            urban gardens. Each dot is a story about the soil beneath.
          </p>

          {/* Switzerland outline SVG */}
          <svg
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-2xl mx-auto mt-12 w-full"
          >
            {/* Simplified Switzerland outline */}
            <path
              d="M90 160 L120 130 L150 120 L180 100 L210 90 L240 95 L270 80 L300 85
                 L330 75 L360 90 L390 85 L420 100 L450 110 L480 130 L500 150
                 L490 180 L470 200 L450 230 L430 250 L400 260 L380 280 L350 290
                 L320 300 L290 310 L260 300 L230 290 L200 300 L170 290 L140 270
                 L120 250 L100 230 L80 210 L75 190 L80 170 Z"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Recording site dots */}
            {recordingSites.map((site, i) => (
              <circle
                key={site.name}
                cx={(site.x / 100) * 600}
                cy={(site.y / 100) * 400}
                r={5}
                fill="#688D2D"
                className="animate-pulse-dot"
                style={{ animationDelay: `${(i * 0.2) % 3}s` }}
              >
                <title>{site.name}</title>
              </circle>
            ))}
          </svg>

          <button
            disabled
            className="mt-8 inline-block bg-cream/10 text-cream/50 px-6 py-3 rounded-full cursor-not-allowed"
          >
            Explore the full Soundmap
          </button>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="bg-ink py-20 md:py-32 relative text-center">

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-display font-display text-cream">
            Protect the ground
            <br />
            beneath your feet
          </h2>
          <p className="text-body-lg text-cream/70 mt-4">
            Sounding Soil is made possible by people like you. Your support
            funds ongoing research, recording expeditions, and educational
            programs that bring soil science to life.
          </p>
          <DonateModule
            heading="Support Sounding Soil"
            theme="dark"
            variant="compact"
            className="mt-8 max-w-md mx-auto"
          />
        </div>
      </section>
    </>
  );
}
