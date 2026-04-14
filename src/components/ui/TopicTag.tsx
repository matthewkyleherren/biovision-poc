import { cn } from "@/lib/utils";

export function TopicTag({ topic, className }: { topic: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block text-caption px-3 py-1 rounded-full bg-cream-dark text-ink-muted border border-earth/40",
        className
      )}
    >
      {topic}
    </span>
  );
}
