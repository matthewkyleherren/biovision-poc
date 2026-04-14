import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function StoryCard({
  title,
  excerpt,
  topic,
  slug,
  href,
  index,
  image,
  imageAlt,
  className,
}: {
  title: string;
  excerpt: string;
  topic: string;
  slug: string;
  href?: string;
  index?: number;
  image?: string;
  imageAlt?: string;
  className?: string;
}) {
  return (
    <Link
      href={href || "#"}
      className={cn(
        "group block bg-cream-dark rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1",
        className
      )}
    >
      {image && (
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-103"
          />
        </div>
      )}
      <div className="p-8 md:p-10">
        <span className="text-saffron text-body-sm">
          {index !== undefined
            ? String(index).padStart(2, "0")
            : topic}
        </span>
        <h3 className="text-heading mt-4 text-ink line-clamp-2">
          {title}
        </h3>
        <p className="text-body text-ink-light mt-3 line-clamp-3">
          {excerpt}
        </p>
        <span className="text-ink text-body-sm mt-6 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
          Read more
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}
