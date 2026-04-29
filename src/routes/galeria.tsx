import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

// Import all event images dynamically
const eventImages = import.meta.glob("@/assets/events/**/*.jpg", {
  eager: true,
  query: "?url",
}) as Record<string, { default: string }>;

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — One Two Drink" },
      {
        name: "description",
        content:
          "Registros de eventos, drinks e a experiência One Two Drink em celebrações.",
      },
      { property: "og:title", content: "Galeria — One Two Drink" },
      {
        property: "og:description",
        content: "Momentos, drinks e experiências em eventos.",
      },
    ],
  }),
  component: GalleryPage,
});

const events = [
  {
    id: "nattan-25",
    title: "Aniversário Nattan 25",
    description: "Uma noite de muita energia e coquetelaria autoral.",
  },
  {
    id: "ferborgesr-fabio",
    title: "Casamento Ferborgesr & Fabio",
    description: "Elegância e sofisticação em cada brinde.",
  },
  {
    id: "pamella-lucas",
    title: "Casamento Pamella & Lucas",
    description: "Celebrando o amor com drinks inesquecíveis.",
  },
];

function GalleryPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Galeria"
        title="Nossos"
        italic="eventos."
        description="Cliques de celebrações reais transformadas pela nossa coquetelaria."
      />

      <div className="space-y-32 py-20">
        {events.map((event) => {
          // Filter images for this specific event
          const images = Object.entries(eventImages)
            .filter(([path]) => path.includes(event.id))
            .map(([_, mod]) => mod.default);

          if (images.length === 0) return null;

          return (
            <section key={event.id} className="px-6 lg:px-12">
              <div className="max-w-[1400px] mx-auto">
                <div className="mb-10">
                  <p className="text-eyebrow text-primary mb-2">Evento</p>
                  <h2 className="text-4xl md:text-5xl font-display">
                    {event.title}
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    {event.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] gap-4">
                  {images.map((src, i) => (
                    <div
                      key={i}
                      className={`relative overflow-hidden group ${
                        i % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""
                      }`}
                    >
                      <img
                        src={src}
                        alt={`${event.title} - foto ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}
