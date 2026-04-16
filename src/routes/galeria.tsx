import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import g1 from "@/assets/gallery-pour.jpg";
import g2 from "@/assets/gallery-cheers.jpg";
import g3 from "@/assets/gallery-music.jpg";
import g4 from "@/assets/bar-interior.jpg";
import g5 from "@/assets/drink-negroni.jpg";
import g6 from "@/assets/drink-mezcal.jpg";
import g7 from "@/assets/drink-whiskey.jpg";
import g8 from "@/assets/drinks-trio.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — One Two Drink Bar" },
      { name: "description", content: "Imagens do ambiente, dos drinks e das noites no One Two Drink Bar." },
      { property: "og:title", content: "Galeria — One Two Drink Bar" },
      { property: "og:description", content: "O ambiente, os drinks e as noites." },
      { property: "og:image", content: g2 },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: g4, span: "md:col-span-2 md:row-span-2", alt: "Interior do bar" },
  { src: g1, span: "", alt: "Pour de drink" },
  { src: g5, span: "", alt: "Negroni" },
  { src: g2, span: "md:col-span-2", alt: "Brinde no bar" },
  { src: g6, span: "", alt: "Mezcal" },
  { src: g3, span: "md:row-span-2", alt: "Cabine de vinis" },
  { src: g8, span: "md:col-span-2", alt: "Trio de drinks" },
  { src: g7, span: "", alt: "Whiskey sour" },
];

function GalleryPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Galeria"
        title="Noites em"
        italic="quadros."
        description="Cliques de drinks, ambiente e momentos que aconteceram no balcão."
      />

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[280px] gap-3">
          {items.map((it, i) => (
            <div key={i} className={`relative overflow-hidden group ${it.span}`}>
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
