import Image from "next/image";

type TextFragment = { text: string };
type ImageFragment = { src: string; alt: string };
type Fragment = TextFragment | ImageFragment;

const fragments: Fragment[] = [
  { text: "We partner with" },
  { src: "/images/projects/malawi-farming2.jpg", alt: "Farmers in Malawi" },
  { text: "smallholder farmers to grow" },
  { src: "/images/stories/emmer-field.jpg", alt: "Golden grain field" },
  { text: "resilient food systems across" },
  { src: "/images/general/africa-scene.jpg", alt: "Community in Africa" },
  { text: "8 countries — with science," },
  { src: "/images/sounding-soil/kids-listening.jpg", alt: "Children exploring soil" },
  { text: "local knowledge, and 25 years on the ground." },
];

export function InlineImageStatement() {
  return (
    <section className="bg-cream min-h-screen flex items-center">
      <div className="max-w-[1332px] mx-auto px-6 md:px-[54px] py-20">
        <p className="text-[clamp(32px,6.6vw,85px)] font-light leading-[0.96] tracking-[-0.04em] text-ink text-center">
          {fragments.map((frag, i) => {
            if ("text" in frag) {
              return (
                <span key={i}>
                  {frag.text}{" "}
                </span>
              );
            }
            return (
              <span
                key={i}
                className="inline-image-pill"
              >
                <Image
                  src={frag.src}
                  alt={frag.alt}
                  fill
                  className="object-cover"
                />
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
