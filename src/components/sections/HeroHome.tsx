"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function HeroHome() {
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowChevron(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lines = ["Healthy soil.", "Sustainable food.", "For everyone."];

  return (
    <section className="min-h-screen relative bg-black overflow-hidden">
      {/* Full-bleed hero image */}
      <Image
        src="/images/hero/hero-main.jpg"
        alt="Farmers working together in a green field in Sub-Saharan Africa"
        fill
        className="object-cover"
        priority
      />
      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Text pinned to the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block text-body-sm text-white/50 mb-6 animate-[fadeUp_0.8s_ease-out_both]">
            Foundation for Ecological Development
          </span>

          <div className="space-y-1">
            {lines.map((line, i) => (
              <h1
                key={i}
                className="text-hero text-white animate-[fadeUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {line}
              </h1>
            ))}
          </div>

          <p
            className="text-body-lg text-white/70 max-w-xl mt-6 animate-[fadeUp_0.8s_ease-out_both]"
            style={{ animationDelay: "0.5s" }}
          >
            BioVision strengthens ecological food systems in Sub-Saharan Africa
            and Switzerland — through science, partnerships, and 25 years of
            proven impact on the ground.
          </p>

          <div
            className="flex flex-col sm:flex-row items-start gap-4 mt-8 animate-[fadeUp_0.8s_ease-out_both]"
            style={{ animationDelay: "0.65s" }}
          >
            <Link
              href="/impact"
              className="bg-white text-ink px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              See our impact
            </Link>
            <Link
              href="/give"
              className="border border-white/40 text-white px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Support our work
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500 z-10"
        style={{ opacity: showChevron ? 1 : 0 }}
      >
        <ChevronDown className="w-6 h-6 text-white/50 animate-scroll-bounce" />
      </div>
    </section>
  );
}
