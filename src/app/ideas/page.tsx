import Image from "next/image";
import Link from "next/link";
import {
  heroImage,
  pressHighlightHeading,
  pressHighlightCards,
  featuredLogos,
  videoFeatures,
  pullQuote,
  articles,
  externalArticles,
  pressGroups,
} from "@/data/news";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom \u2014 BioVision",
  description:
    "The latest news, press releases, and media coverage from BioVision.",
};

/* ── Tiny external-link icon ── */
function ExtIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      className={`inline-block ml-1 ${className}`}
    >
      <path
        d="M3 1h7v7M10 1L1 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Article card (medium: image left | alternative: image right) ── */
function ArticleCard({
  title,
  category,
  date,
  image,
  layout,
  href,
  externalSource,
}: {
  title: string;
  category: string;
  date: string;
  image: string;
  layout: "medium" | "alternative";
  href: string;
  externalSource?: string;
}) {
  const isAlt = layout === "alternative";
  const isExternal = !!externalSource;

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-[22px] pb-[60px] max-w-[1332px] mx-auto px-6 lg:px-0"
    >
      {/* Image */}
      <Link
        href={href}
        className={
          isAlt
            ? "lg:col-start-6 lg:col-end-12 lg:row-start-1"
            : "lg:col-start-2 lg:col-end-9"
        }
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <div className="relative aspect-[16/9] rounded-md overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      {/* Details */}
      <div
        className={`flex flex-col justify-center ${
          isAlt
            ? "lg:col-start-2 lg:col-end-6 lg:row-start-1"
            : "lg:col-start-9 lg:col-end-12"
        }`}
      >
        <div className="text-[18px] leading-[24px] text-black/60">
          {externalSource ? (
            <span>
              {externalSource} <ExtIcon />
            </span>
          ) : (
            category
          )}
        </div>
        <h2
          className={`mt-2 font-normal ${
            isAlt
              ? "text-[28px] lg:text-[42px] leading-[1.12] tracking-[-0.033em]"
              : "text-[28px] lg:text-[36px] leading-[1.12] tracking-[-0.033em]"
          }`}
        >
          <Link
            href={href}
            className="hover:opacity-70 transition-opacity"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {title}
          </Link>
        </h2>
        <div className="mt-4 text-[12px] leading-[18px] tracking-[0.06em] uppercase text-black/60">
          {date}
        </div>
      </div>
    </div>
  );
}

/* ── Press group (3 external links in a row) ── */
function PressGroup({
  items,
}: {
  items: { source: string; headline: string; date: string }[];
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-[1332px] mx-auto px-6 lg:px-[110px] pb-[60px]">
      {items.map((item, i) => (
        <div key={i} className="flex-1">
          <div className="text-[15px] leading-[18px] text-black/60">
            {item.source} <ExtIcon />
          </div>
          <h2 className="mt-2 text-[21.6px] leading-[28px] font-normal">
            {item.headline}
          </h2>
          <div className="mt-3 text-[12px] leading-[18px] tracking-[0.06em] uppercase text-black/60">
            {item.date}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Horizontal rule ── */
function Divider() {
  return (
    <hr className="border-t border-black/10 max-w-[1440px] mx-auto" />
  );
}

export default function NewsroomPage() {
  return (
    <main className="bg-cream">
      {/* ── Newsroom Title ── */}
      <section className="pt-32 md:pt-40 pb-8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[54px]">
          <h1 className="text-[clamp(56px,8.3vw,120px)] font-light leading-[1] tracking-[-0.033em]">
            Newsroom
          </h1>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="pb-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[54px]">
          <div className="relative aspect-[16/9] rounded-md overflow-hidden">
            <Image
              src={heroImage}
              alt="Construction workers on site"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Press Highlights ── */}
      <section className="pb-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[54px]">
          {/* Label */}
          <div className="text-[15px] leading-[18px] text-black/60 mb-6">
            Press highlights
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(28px,3.6vw,48px)] font-normal leading-[1.15] tracking-[-0.02em] max-w-[850px]">
            {pressHighlightHeading}
          </h2>

          {/* Scrollable cards */}
          <div className="flex gap-4 overflow-x-auto mt-10 pb-4 -mr-6 md:-mr-[54px] pr-6 md:pr-[54px] scrollbar-hide">
            {pressHighlightCards.map((card, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[260px] md:w-[300px] bg-[#E8E5DE] rounded-lg p-6 flex flex-col justify-between min-h-[200px]"
              >
                <p className="text-[22px] md:text-[28.8px] leading-[1.2] tracking-[-0.014em] font-normal">
                  {card.headline}
                </p>
                <p className="text-[15px] leading-[18px] text-black/60 mt-6">
                  {card.source} <ExtIcon />
                </p>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="flex justify-center mt-12 mb-8">
            <button className="bg-black text-white px-8 py-4 rounded-full text-[15px] leading-[18px] hover:bg-black/80 transition-colors">
              Learn about our fire recovery efforts
            </button>
          </div>
        </div>
      </section>

      {/* ── "We've been featured in:" ── */}
      <section className="max-w-[1440px] mx-auto">
        <Divider />
        <div className="py-10 md:py-16 text-center px-6">
          <p className="text-[18px] leading-[1] text-black/60 mb-10">
            We&apos;ve been featured in:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {featuredLogos.map((logo) => (
              <span
                key={logo}
                className="text-[20px] md:text-[28px] font-bold text-black/70 tracking-tight"
                style={{
                  fontFamily:
                    logo === "Bloomberg" || logo === "WSJ"
                      ? "Georgia, serif"
                      : "inherit",
                }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
        <Divider />
      </section>

      {/* ── Spacer ── */}
      <div className="h-[50px]" />

      {/* ── Article 1: TIME Best Invention (medium) ── */}
      <ArticleCard
        title={articles[0].title}
        category={articles[0].category}
        date={articles[0].date}
        image={articles[0].image}
        layout={articles[0].layout}
        href={`/ideas/${articles[0].slug}`}
      />

      <Divider />
      <div className="h-[50px]" />

      {/* ── Video Features ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[54px] pb-12">
        <h2 className="text-[28.8px] leading-[1.2] font-normal mb-8">
          Recent video features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoFeatures.map((video, i) => (
            <div key={i}>
              <div className="relative aspect-[16/9] rounded-md overflow-hidden mb-4">
                <Image
                  src={video.image}
                  alt={video.description}
                  fill
                  className="object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 2L16 9L4 16V2Z" fill="black" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-[15px] leading-[18px] text-black/60">
                {video.source} <ExtIcon />
              </p>
              <h3 className="mt-2 text-[23px] leading-[28.8px] font-normal">
                {video.description}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pull Quote ── */}
      <section className="max-w-[1440px] mx-auto">
        <Divider />
        <div className="py-16 md:py-24 px-6 md:px-[54px]">
          <div className="max-w-[900px] ml-auto text-right">
            <h2 className="text-[clamp(32px,4.16vw,60px)] leading-[1.1] tracking-[-0.04em] font-normal">
              {pullQuote.text}
            </h2>
            <p className="mt-6 text-[15px] leading-[18px] text-black/60">
              &mdash; {pullQuote.attribution} <ExtIcon />
            </p>
          </div>
        </div>
        <Divider />
      </section>

      <div className="h-[50px]" />

      {/* ── Article 2: Backyard XL 10 (alternative) ── */}
      <ArticleCard
        title={articles[1].title}
        category={articles[1].category}
        date={articles[1].date}
        image={articles[1].image}
        layout={articles[1].layout}
        href={`/ideas/${articles[1].slug}`}
      />

      <Divider />
      <div className="h-[50px]" />

      {/* ── Article 3: Financing (medium) ── */}
      <ArticleCard
        title={articles[2].title}
        category={articles[2].category}
        date={articles[2].date}
        image={articles[2].image}
        layout={articles[2].layout}
        href={`/ideas/${articles[2].slug}`}
      />

      <Divider />
      <div className="h-[50px]" />

      {/* ── Article 4: Backyard XL 8 (alternative) ── */}
      <ArticleCard
        title={articles[3].title}
        category={articles[3].category}
        date={articles[3].date}
        image={articles[3].image}
        layout={articles[3].layout}
        href={`/ideas/${articles[3].slug}`}
      />

      {/* ── Press Group 1 ── */}
      <PressGroup items={pressGroups[0]} />

      <Divider />
      <div className="h-[50px]" />

      {/* ── Article 5: Factory (medium) ── */}
      <ArticleCard
        title={articles[4].title}
        category={articles[4].category}
        date={articles[4].date}
        image={articles[4].image}
        layout={articles[4].layout}
        href={`/ideas/${articles[4].slug}`}
      />

      {/* ── Article 6: $41M raise (alternative) ── */}
      <ArticleCard
        title={articles[5].title}
        category={articles[5].category}
        date={articles[5].date}
        image={articles[5].image}
        layout={articles[5].layout}
        href={`/ideas/${articles[5].slug}`}
      />

      <Divider />

      {/* ── Press Group 2 ── */}
      <div className="h-[50px]" />
      <PressGroup items={pressGroups[1]} />

      <Divider />
      <div className="h-[50px]" />

      {/* ── External Article: WSJ (medium) ── */}
      <ArticleCard
        title={externalArticles[0].title}
        category=""
        date={externalArticles[0].date}
        image={externalArticles[0].image}
        layout={externalArticles[0].layout}
        href="#"
        externalSource={externalArticles[0].externalSource}
      />

      <Divider />
      <div className="h-[50px]" />

      {/* ── External Article: Fast Company (alternative) ── */}
      <ArticleCard
        title={externalArticles[1].title}
        category=""
        date={externalArticles[1].date}
        image={externalArticles[1].image}
        layout={externalArticles[1].layout}
        href="#"
        externalSource={externalArticles[1].externalSource}
      />

      {/* Bottom spacing */}
      <div className="h-16" />
    </main>
  );
}
