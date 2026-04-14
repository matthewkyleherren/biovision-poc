"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/navigation";

export function SiteHeader() {
  const [inverted, setInverted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const checkInversion = useCallback(() => {
    const centerX = window.innerWidth / 2;
    const sampleY = 40;

    const nav = document.getElementById("site-nav");
    if (!nav) return;
    nav.style.pointerEvents = "none";
    nav.style.visibility = "hidden";
    const el = document.elementFromPoint(centerX, sampleY);
    nav.style.visibility = "";
    nav.style.pointerEvents = "";

    if (!el) return;

    let target: Element | null = el;
    while (target && target !== document.body) {
      const bg = window.getComputedStyle(target).backgroundColor;
      const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        const [, r, g, b] = match.map(Number);
        const alphaMatch = bg.match(/,\s*([\d.]+)\)$/);
        if (alphaMatch && parseFloat(alphaMatch[1]) === 0) {
          target = target.parentElement;
          continue;
        }
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        setInverted(luminance < 0.45);
        return;
      }
      target = target.parentElement;
    }
    setInverted(false);
  }, []);

  useEffect(() => {
    checkInversion();
    const onScroll = () => checkInversion();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [checkInversion]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        id="site-nav"
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{ padding: "18px 24px" }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <Image
              src="/images/biovision-logo.jpg"
              alt="BioVision"
              width={36}
              height={36}
              className="rounded-[4px]"
            />
          </Link>

          {/* Center glass pill — desktop only */}
          <div
            className={`hidden md:flex items-center gap-0 rounded-xl px-6 py-[15px] backdrop-blur-[18px] backdrop-saturate-150 transition-colors duration-300 ${
              inverted ? "bg-black/20" : "bg-white/40"
            }`}
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 text-[15px] leading-[1] transition-colors ${
                  inverted
                    ? "text-white/80 hover:text-white"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language switcher — desktop */}
            <div className={`hidden md:flex items-center gap-3 text-[12px] ${
              inverted ? "text-white/60" : "text-ink/60"
            }`}>
              <button className={inverted ? "text-white" : "text-ink"}>DE</button>
              <button className={inverted ? "hover:text-white" : "hover:text-ink"}>EN</button>
              <button className={inverted ? "hover:text-white" : "hover:text-ink"}>FR</button>
            </div>

            {/* Donate button — desktop */}
            <Link
              href="/give"
              className="hidden md:inline-flex bg-saffron text-white px-5 py-2 rounded-full text-[14px] hover:bg-saffron-light transition-colors"
            >
              Donate
            </Link>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`md:hidden p-2 ${inverted ? "text-white" : "text-ink"}`}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-cream z-50 flex flex-col transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/biovision-logo.jpg"
              alt="BioVision"
              width={36}
              height={36}
              className="rounded-[4px]"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-ink p-2"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 flex flex-col items-center justify-center gap-8">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-display text-ink hover:text-saffron transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-6 pb-12">
          <Link
            href="/give"
            className="block w-full text-center bg-saffron text-white py-4 rounded-full text-body-lg"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>
          <div className="flex justify-center gap-4 mt-4 text-body-sm text-ink-muted">
            <span className="text-ink">DE</span>
            <span>EN</span>
            <span>FR</span>
          </div>
        </div>
      </div>
    </>
  );
}
