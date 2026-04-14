"use client";

import Link from "next/link";
import Image from "next/image";

export function HeroHome() {
  return (
    <section className="relative h-screen bg-cream overflow-hidden">
      {/* ── Headline — centered, behind the image, just above the lady's headdress ── */}
      <div className="absolute inset-x-0 top-0 z-0 flex items-end justify-center px-6 pt-34 md:pt-48 pb-4">
        <h1
          className="text-[clamp(64px,12vw,180px)] font-light leading-[0.96] tracking-[-0.04em] text-ink text-center animate-[fadeUp_0.8s_ease-out_both]"
        >
          A future for all,
          <br />
          naturally.
        </h1>
      </div>

      {/* ── Image — anchored to bottom, covers full width, overlaps headline ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Desktop */}
        <Image
          src="/images/hero/hero_desktop.webp"
          alt="Farmer harvesting leafy greens at golden hour in Sub-Saharan Africa"
          width={1920}
          height={960}
          className="w-full h-auto hidden md:block"
          priority
        />
        {/* Mobile */}
        <Image
          src="/images/hero/hero_mobile.webp"
          alt="Farmer harvesting leafy greens at golden hour in Sub-Saharan Africa"
          width={960}
          height={1200}
          className="w-full h-auto md:hidden"
          priority
        />
      </div>

      {/* ── Description — in the sky/white space above the bending man ── */}
      <div className="absolute top-[38%] md:top-[26%] right-[4%] md:right-[4%] z-20 max-w-[180px] md:max-w-[240px] animate-[fadeUp_0.8s_ease-out_0.3s_both]">
        <p className="text-[clamp(12px,1.2vw,16px)] leading-[1.5] tracking-[-0.01em] text-ink/70">
          Strengthening food systems in Sub-Saharan Africa and Switzerland
          — through science, partnerships, and 25 years on the ground.
        </p>
        <Link
          href="/impact"
          className="inline-flex items-center gap-2 mt-2 text-[13px] text-ink/60 hover:text-ink transition-colors"
        >
          See our impact
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="inline-block">
            <path d="M3 1h7v7M10 1L1 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
