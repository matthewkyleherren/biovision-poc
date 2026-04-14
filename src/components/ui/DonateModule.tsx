"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const amounts = [60, 100, 250];

export function DonateModule({
  heading = "Support this work",
  context,
  variant = "compact",
  theme = "light",
  className,
}: {
  heading?: string;
  context?: string;
  variant?: "compact" | "full";
  theme?: "light" | "dark";
  className?: string;
}) {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const isCustom = customAmount !== "";

  const textColor = theme === "dark" ? "text-white" : "text-ink";
  const subTextColor = theme === "dark" ? "text-white/60" : "text-ink-light";
  const borderColor = theme === "dark" ? "border-white/20" : "border-earth";
  const inputBg = theme === "dark" ? "bg-white/10" : "bg-white";

  return (
    <div className={cn(variant === "full" ? "p-8" : "p-6", className)}>
      <h3 className={cn(variant === "full" ? "text-heading" : "text-subheading", textColor)}>
        {heading}
      </h3>
      {context && <p className={cn("mt-2 text-body-sm", subTextColor)}>{context}</p>}

      <div className="flex gap-3 mt-5">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
            className={cn(
              "flex-1 py-2.5 rounded-full text-body-sm transition-all duration-200",
              !isCustom && selectedAmount === amount
                ? "bg-saffron text-white shadow-sm"
                : cn("border", borderColor, textColor, "hover:border-saffron/50")
            )}
          >
            CHF {amount}
          </button>
        ))}
      </div>

      <div className={cn("relative mt-3")}>
        <span className={cn("absolute left-4 top-1/2 -translate-y-1/2 text-body-sm", subTextColor)}>
          CHF
        </span>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          placeholder="Other amount"
          className={cn(
            "w-full pl-14 pr-4 py-2.5 rounded-full border text-body-sm",
            borderColor,
            inputBg,
            textColor,
            "placeholder:text-ink-muted focus:outline-none focus:border-saffron"
          )}
        />
      </div>

      <button className="w-full mt-4 bg-saffron text-white py-3 rounded-full text-body hover:bg-saffron-light transition-colors">
        Donate now
      </button>

      <p className={cn("mt-3 text-caption text-center", subTextColor)}>
        BioVision is ZEWO-certified. Your donation is tax-deductible.
      </p>
    </div>
  );
}
