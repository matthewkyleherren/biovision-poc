"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  note: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function AnimatedNumber({ value, suffix, delay }: { value: number; suffix?: string; delay: number }) {
  const [display, setDisplay] = useState(value); // Start with final value — progressive enhancement
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    const run = () => {
      animated.current = true;
      setDisplay(0);
      const duration = 2000;
      const start = performance.now();
      function tick(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        setDisplay(Math.round(easeOutQuart(progress) * value));
        if (progress < 1) requestAnimationFrame(tick);
      }
      setTimeout(() => requestAnimationFrame(tick), delay);
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="text-data-hero text-ink">
      {display.toLocaleString()}
      {suffix && <span className="text-saffron">{suffix}</span>}
    </div>
  );
}

export function ImpactCounter({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <div className={cn("flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20", className)}>
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <AnimatedNumber value={stat.value} suffix={stat.suffix} delay={i * 200} />
          <div className="text-subheading text-ink-light mt-2">{stat.label}</div>
          <div className="text-caption text-ink-muted mt-1">{stat.note}</div>
        </div>
      ))}
    </div>
  );
}
