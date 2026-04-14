import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function FeaturedStory({
  title,
  excerpt,
  topic,
  href,
  featured = false,
  image,
  imageAlt,
  className,
}: {
  title: string;
  excerpt: string;
  topic: string;
  href?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl bg-cream-dark overflow-hidden", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {image && (
          <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[360px]">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className={cn("p-8 md:p-12 lg:p-16 flex flex-col justify-center", !image && "lg:col-span-2")}>
          <div className="max-w-3xl">
            <span className="text-saffron text-body-sm">
              {featured ? "Featured" : topic}
            </span>
            <h2 className="text-display mt-4 text-ink">{title}</h2>
            <p className="text-body-lg text-ink-light mt-4 max-w-2xl">{excerpt}</p>
            <Link
              href={href || "#"}
              className="text-ink mt-8 inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Read the full story
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
