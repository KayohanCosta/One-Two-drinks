import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import interior from "@/assets/bar-interior.jpg";
import pour from "@/assets/gallery-pour.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — One Two Drink Bar" },
      { name: "description", content: "Conheça a história, os bartenders e a filosofia por trás do One Two Drink Bar." },
      { property: "og:title", content: "Sobre — One Two Drink Bar" },
      { property: "og:description", content: "A história, os bartenders e a filosofia da casa." },
      { property: "og:image", content: interior },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="A casa · desde 2021"
        title="Três amigos,"
        italic="uma esquina, mil noites."
      />

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img src={interior} alt="Interior" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-2xl text-foreground font-display italic leading-snug">
              "A gente abriu o One Two pra ter um bar que a gente também quisesse frequentar."
            </p>
            <p>
              Em 2021, três amigos — um bartender com mais de 15 anos de balcão, uma sommelier
              cansada de cartas previsíveis e um arquiteto que sempre quis desenhar um bar do zero — alugaram
              uma esquina escondida na Vila Madalena.
            </p>
            <p>
              A ideia era simples: um lugar pequeno, com luz quente, vinil tocando baixo, e drinks
              que valessem a história contada depois. Cinco anos depois, ainda é essa.
            </p>
            <p>
              Servimos coquetelaria autoral inspirada nos clássicos, mas sempre com um toque
              brasileiro — cachaça de alambique, frutas da estação, ervas do nosso pequeno horto.
              Tudo feito na hora, no balcão, na sua frente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-charcoal/50 border-y border-border">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12">
          {[
            { n: "01", t: "Tudo no balcão", d: "Sem batch, sem pré-mix. Cada drink é shaken ou stirred na sua frente — e isso muda tudo." },
            { n: "02", t: "Ingrediente local", d: "Trabalhamos com produtores brasileiros: cachaças artesanais, frutas da feira, ervas do nosso horto." },
            { n: "03", t: "Vinil sempre", d: "Nossa playlist mora num gira-discos. Jazz, MPB, soul. Música baixa o suficiente pra você conversar." },
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
            <p className="text-eyebrow text-primary mb-4">Quem está atrás do balcão</p>
            <h2 className="text-5xl md:text-6xl">Bartenders <span className="italic">premiados.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Nossa equipe acumula passagens pelos melhores bares do mundo — de Londres a Cidade do
              México. Aqui, eles têm liberdade para criar e tempo para conversar com você sobre cada drink.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
