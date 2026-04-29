import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import interior from "@/assets/bar-interior.jpg";
import pour from "@/assets/gallery-pour.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — One Two Drink" },
      { name: "description", content: "Conheça a história, a equipe e a filosofia por trás da One Two Drink." },
      { property: "og:title", content: "Sobre — One Two Drink" },
      { property: "og:description", content: "Nossa história, equipe e a paixão pela coquetelaria em eventos." },
      { property: "og:image", content: interior },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Nossa história · desde 2021"
        title="Três amigos,"
        italic="uma missão: o coquetel perfeito."
      />

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img src={interior} alt="Interior" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-2xl text-foreground font-display italic leading-snug">
              "Decidimos levar a expertise de balcão para onde a celebração estiver."
            </p>
            <p>
              Em 2021, três amigos — um bartender com mais de 15 anos de balcão, uma sommelier
              especialista em hospitalidade e um produtor de eventos — decidiram que o padrão de
              bebidas em festas precisava mudar.
            </p>
            <p>
              A ideia era simples: levar a luz quente, o serviço impecável e os drinks de alta
              coquetelaria que você só encontraria nos melhores bares do mundo para dentro de
              casamentos, corporativos e celebrações privadas.
            </p>
            <p>
              Servimos coquetelaria autoral inspirada nos clássicos, mas sempre com um toque
              brasileiro. Tudo é feito na hora, com ingredientes frescos e uma equipe que 
              entende que cada detalhe importa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-charcoal/50 border-y border-border">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12">
          {[
            { n: "01", t: "Bar Itinerante", d: "Estruturas modulares e elegantes que se adaptam ao seu espaço, mantendo a sofisticação de um bar fixo." },
            { n: "02", t: "Ingrediente fresco", d: "Nada de pré-mix. Usamos frutas da estação, infusões próprias e gelo cristalino em cada preparo." },
            { n: "03", t: "Equipe de Elite", d: "Bartenders que dominam a técnica e a hospitalidade. Rapidez sem perder a elegância do serviço." },
          ].map((p) => (
            <div key={p.n}>
              <span className="font-display text-6xl text-primary">{p.n}</span>
              <h3 className="font-display text-3xl mt-6">{p.t}</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 lg:order-2">
            <img src={pour} alt="Bartender" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          </div>
          <div className="lg:col-span-5">
            <p className="text-eyebrow text-primary mb-4">Especialistas em hospitalidade</p>
            <h2 className="text-5xl md:text-6xl">Equipe <span className="italic">especializada.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Nossa equipe acumula passagens pelos melhores bares do mundo — de Londres a Cidade do
              México. Levamos essa bagagem para o seu evento, garantindo que o serviço de bebidas 
              seja um dos grandes destaques da sua noite.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
