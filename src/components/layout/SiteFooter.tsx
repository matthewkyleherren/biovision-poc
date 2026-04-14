import Link from "next/link";
import Image from "next/image";

const highlightCards = [
  {
    label: "Explore our ideas",
    href: "/ideas",
    image: "/images/stories/emmer-field.jpg",
    alt: "Golden grain field",
  },
  {
    label: "Sounding Soil",
    href: "/ideas/sounding-soil",
    image: "/images/sounding-soil/kids-listening.jpg",
    alt: "Children listening to sounds of the earth",
  },
  {
    label: "About BioVision",
    href: "/about",
    image: "/images/about/team-strategy.jpg",
    alt: "BioVision team in strategy session",
  },
  {
    label: "Support our work",
    href: "/give",
    image: "/images/general/ethiopia-couple.jpg",
    alt: "Farming couple in Ethiopia",
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-cream-dark">
      {/* Highlight cards row */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlightCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <span className="text-white text-[23px] leading-[1.25] tracking-[-0.014em] inline-flex items-center gap-1.5">
                  {card.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {/* Column 1: BioVision */}
          <nav className="flex flex-col gap-3">
            <span className="text-[36px] leading-[1.28] tracking-[-0.02em] font-light text-ink mb-2">BioVision</span>
            <Link href="/about" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">About</Link>
            <Link href="/about" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Team</Link>
            <Link href="#" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Annual Report</Link>
            <Link href="#" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Media</Link>
            <Link href="#" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Jobs</Link>
          </nav>

          {/* Column 2: Our Work */}
          <nav className="flex flex-col gap-3">
            <span className="text-[36px] leading-[1.28] tracking-[-0.02em] font-light text-ink mb-2">Our Work</span>
            <Link href="/impact" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Projects</Link>
            <Link href="/ideas" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Ideas</Link>
            <Link href="/ideas/sounding-soil" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Sounding Soil</Link>
            <Link href="#" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Superfood</Link>
            <Link href="#" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Education</Link>
          </nav>

          {/* Column 3: Social */}
          <nav className="flex flex-col gap-3">
            <span className="text-[36px] leading-[1.28] tracking-[-0.02em] font-light text-ink mb-2">Social</span>
            <a href="https://www.instagram.com/biovision_foundation/" target="_blank" rel="noopener noreferrer" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Instagram</a>
            <a href="https://www.facebook.com/biovision/" target="_blank" rel="noopener noreferrer" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">Facebook</a>
            <a href="https://www.youtube.com/user/BioVisionFoundation" target="_blank" rel="noopener noreferrer" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">YouTube</a>
            <a href="https://ie.linkedin.com/company/biovision-foundation" target="_blank" rel="noopener noreferrer" className="text-[15px] leading-[1.2] text-ink/60 hover:text-ink transition-colors">LinkedIn</a>
          </nav>

          {/* Column 4: Contact & Newsletter */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-[14px] leading-[1.5] text-ink/40">Have questions?</span>
              <Link
                href="#"
                className="mt-3 block w-full text-center border border-ink text-ink px-5 py-2.5 rounded-full text-[14px] leading-[1.3] hover:bg-ink hover:text-white transition-colors"
              >
                Contact us
              </Link>
            </div>
            <div>
              <span className="text-[15px] leading-[1.2] text-ink">Get updates</span>
              <p className="text-[14px] leading-[1.5] text-ink/40 mt-1">
                Drop us your email to learn what&apos;s next.
              </p>
              <div className="mt-3 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 bg-white border border-earth text-ink placeholder:text-ink-muted rounded-full px-4 py-2.5 text-[14px] focus:outline-none focus:border-saffron transition-colors"
                />
                <button className="ml-2 bg-ink text-white px-4 py-2.5 rounded-full hover:bg-ink/80 transition-colors" aria-label="Subscribe">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="border-t border-earth/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[14px] leading-[1.28] text-ink/40">
            © 2026 BioVision — Stiftung für ökologische Entwicklung
          </span>
          <div className="flex gap-6">
            <Link href="#" className="text-[14px] leading-[1.28] text-ink/40 hover:text-ink transition-colors">Privacy policy</Link>
            <Link href="#" className="text-[14px] leading-[1.28] text-ink/40 hover:text-ink transition-colors">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
