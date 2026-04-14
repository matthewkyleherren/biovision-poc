"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import React from "react";

export function SectionReveal({
  children,
  className,
  delay = 0,
  staggerChildren = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Start VISIBLE — progressive enhancement

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    // Only animate elements that start below the viewport
    if (rect.top >= window.innerHeight) {
      // Hide it (user can't see this since it's offscreen)
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setIsVisible(false);

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: "0px 0px -50px 0px" }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
    // Already in viewport — stays visible, no animation needed
  }, []);

  // Apply transition styles only when animating (below-fold elements)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (isVisible) {
      el.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`;
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  }, [isVisible, delay]);

  if (staggerChildren) {
    const childArray = React.Children.toArray(children);
    return (
      <div ref={ref} className={cn(className)}>
        {childArray.map((child, i) => (
          <div key={i}>{child}</div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
