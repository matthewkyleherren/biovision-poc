"use client";

import { useState, useMemo } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

function generateBars(variant: "healthy" | "degraded", count: number): number[] {
  let seed = variant === "healthy" ? 42 : 137;
  const bars: number[] = [];
  const [min, max] = variant === "healthy" ? [0.2, 1.0] : [0.05, 0.25];
  for (let i = 0; i < count; i++) {
    seed = (seed * 16807 + 7) % 2147483647;
    const t = (seed % 1000) / 1000;
    bars.push(min + t * (max - min));
  }
  return bars;
}

export function AudioPlayer({
  label,
  location,
  caption,
  variant,
  className,
}: {
  label: string;
  location: string;
  caption: string;
  variant: "healthy" | "degraded";
  className?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const bars = useMemo(() => generateBars(variant, 40), [variant]);
  const barColor = variant === "healthy" ? "bg-saffron" : "bg-earth";

  return (
    <div
      className={cn(
        "p-6 rounded-2xl bg-cream-dark border transition-all duration-300",
        isPlaying ? "border-saffron shadow-[0_0_24px_rgba(0,145,255,0.1)]" : "border-earth",
        className
      )}
    >
      <h3 className="text-subheading text-ink">{label}</h3>
      <p className="text-caption text-ink-muted mt-1">{location}</p>

      <div className="relative h-24 mt-4 flex items-end justify-center gap-[3px]">
        {bars.map((height, i) => (
          <div
            key={i}
            className={cn(
              "w-[3px] rounded-full origin-bottom transition-all",
              barColor,
              isPlaying ? "animate-waveform" : ""
            )}
            style={{
              height: `${height * 100}%`,
              ["--bar-height" as string]: height,
              ["--bar-duration" as string]: `${1.2 + (i % 5) * 0.3}s`,
              ["--bar-delay" as string]: `${(i * 0.05)}s`,
              opacity: isPlaying ? 0.8 : 0.3,
            }}
          />
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200",
            isPlaying ? "bg-saffron text-white" : "bg-ink text-white hover:bg-ink-light"
          )}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>
        <div className="flex-1 h-1 bg-earth rounded-full overflow-hidden">
          <div
            className="h-full bg-saffron rounded-full transition-all duration-1000"
            style={{ width: isPlaying ? "35%" : "0%" }}
          />
        </div>
      </div>

      <p className="text-caption text-ink-muted mt-3">{caption}</p>
    </div>
  );
}
