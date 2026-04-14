import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/news";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} \u2014 News \u2014 BioVision`,
    description: article.body[0] || "",
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <main className="bg-cream">
      {/* ── Header ── */}
      <section className="pt-32 md:pt-40 pb-8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[54px] text-center">
          {/* Breadcrumb */}
          <div className="text-[16px] leading-[1.5] text-black/60">
            <Link
              href="/ideas"
              className="hover:text-black transition-colors"
            >
              Newsroom
            </Link>
            <span className="mx-2">&middot;</span>
            <span>{article.category}</span>
            <span className="mx-2">&middot;</span>
            <span>{article.date}</span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-[clamp(36px,5vw,72px)] font-normal leading-[1.1] tracking-[-0.041em] max-w-[900px] mx-auto">
            {article.title}
          </h1>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="pb-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[54px]">
          <div className="relative aspect-[16/9] rounded-md overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="pb-16">
        <div className="max-w-[654px] mx-auto px-6">
          {article.body.map((paragraph, i) => (
            <p
              key={i}
              className="text-[18px] leading-[1.33] text-black/60 mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <hr className="border-t border-black/10 max-w-[1440px] mx-auto" />

      {/* ── Share ── */}
      <section className="py-12">
        <div className="max-w-[654px] mx-auto px-6 flex items-center gap-6">
          <span className="text-[15px] text-black/60">Share:</span>
          <button className="text-[15px] text-black/60 hover:text-black transition-colors">
            Copy link
          </button>
          <button className="text-[15px] text-black/60 hover:text-black transition-colors">
            Email
          </button>
          <button className="text-[15px] text-black/60 hover:text-black transition-colors">
            X
          </button>
          <button className="text-[15px] text-black/60 hover:text-black transition-colors">
            Facebook
          </button>
        </div>
      </section>

      <hr className="border-t border-black/10 max-w-[1440px] mx-auto" />

      {/* ── Back to Newsroom ── */}
      <section className="py-16 text-center">
        <div className="max-w-[654px] mx-auto px-6">
          <p className="text-[23px] leading-[28px] font-normal">
            What else is going on?
          </p>
          <Link
            href="/ideas"
            className="mt-4 inline-block text-[15px] text-black/60 hover:text-black transition-colors underline underline-offset-4"
          >
            Read the latest news &rarr;
          </Link>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-16" />
    </main>
  );
}
