"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { countryProjects } from "@/data/projects";

interface MapDot {
  country: string;
  cx: number;
  cy: number;
  delay: string;
}

const dots: MapDot[] = [
  { country: "Kenya", cx: 340, cy: 290, delay: "0s" },
  { country: "Tanzania", cx: 330, cy: 330, delay: "0.3s" },
  { country: "Malawi", cx: 340, cy: 370, delay: "0.6s" },
  { country: "Uganda", cx: 310, cy: 270, delay: "0.9s" },
  { country: "Ethiopia", cx: 340, cy: 240, delay: "0.2s" },
  { country: "Zimbabwe", cx: 300, cy: 400, delay: "0.5s" },
  { country: "Switzerland", cx: 445, cy: 75, delay: "0.4s" },
];

export function ProjectMap({ className, size = "compact" }: { className?: string; size?: "compact" | "full" }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const getCount = (country: string) =>
    countryProjects.find((c) => c.country === country)?.count || 0;

  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 500 600"
        className={cn("w-full", size === "full" ? "max-w-2xl" : "max-w-md")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified Africa outline */}
        <path
          d="M220,50 C250,45 280,50 300,60 C320,70 340,90 350,110 C360,130 365,155 370,180 C375,200 380,220 375,245 C370,265 360,280 355,300 C350,320 345,340 350,360 C355,380 345,400 330,420 C315,440 300,455 290,475 C280,490 275,510 260,520 C245,530 230,535 225,530 C220,525 225,510 230,495 C235,480 230,465 220,455 C210,445 195,440 185,430 C175,420 170,405 175,390 C180,375 185,355 180,340 C175,325 160,315 150,300 C140,285 135,270 140,255 C145,240 155,228 160,215 C165,200 160,185 150,170 C140,155 130,145 125,130 C120,115 120,100 130,85 C140,70 155,60 175,55 C195,50 210,52 220,50 Z"
          stroke="currentColor"
          strokeWidth="1"
          className="text-earth"
          fill="none"
        />

        <rect x="420" y="45" width="60" height="40" rx="8" stroke="currentColor" strokeWidth="1" className="text-earth" fill="none" />
        <text x="450" y="42" textAnchor="middle" className="fill-ink-muted" style={{ fontSize: "9px" }}>CH</text>

        {dots.map((dot) => (
          <g key={dot.country}>
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r={size === "full" ? 8 : 6}
              className="fill-saffron animate-pulse-dot cursor-pointer"
              style={{ animationDelay: dot.delay }}
              onMouseEnter={() => setHovered(dot.country)}
              onMouseLeave={() => setHovered(null)}
            />
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r={size === "full" ? 14 : 10}
              className="fill-saffron/10 animate-pulse-dot"
              style={{ animationDelay: dot.delay }}
            />
          </g>
        ))}
      </svg>

      {hovered && (() => {
        const dot = dots.find((d) => d.country === hovered);
        if (!dot) return null;
        const count = getCount(hovered);
        return (
          <div
            className="absolute bg-ink text-white px-4 py-2 rounded-xl text-body-sm pointer-events-none z-20 shadow-lg"
            style={{
              left: `${(dot.cx / 500) * 100}%`,
              top: `${(dot.cy / 600) * 100 - 8}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <span className="font-medium">{hovered}</span>
            <span className="text-white/60 ml-2">{count} project{count !== 1 ? "s" : ""}</span>
          </div>
        );
      })()}
    </div>
  );
}
