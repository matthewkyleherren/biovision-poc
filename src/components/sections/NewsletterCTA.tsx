import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function NewsletterCTA() {
  return (
    <section className="bg-cream-dark py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <SectionReveal>
            <h2 className="text-heading text-ink">Stay informed</h2>
            <p className="text-body text-ink-light mt-4">
              Monthly updates from the field, policy insights, and stories
              of the people transforming food systems.
            </p>
            <div className="mt-6 flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-earth px-5 py-3 rounded-full text-body-sm bg-white focus:outline-none focus:border-saffron transition-colors"
              />
              <button className="bg-saffron text-white px-6 py-3 rounded-full hover:bg-saffron-light transition-colors text-body-sm">
                Subscribe
              </button>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <h2 className="text-heading text-ink">Become a member</h2>
            <p className="text-body text-ink-light mt-4">
              Join a community of people committed to ecological development.
              Members receive our quarterly magazine, annual report, and
              invitations to exclusive events.
            </p>
            <Link
              href="/give"
              className="mt-6 inline-flex border border-ink text-ink px-8 py-3 rounded-full hover:bg-ink hover:text-white transition-colors"
            >
              Join BioVision
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
