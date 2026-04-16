import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import negroni from "@/assets/drink-negroni.jpg";
import mezcal from "@/assets/drink-mezcal.jpg";
import whiskey from "@/assets/drink-whiskey.jpg";

export const Route = createFileRoute("/drinks")({
  head: () => ({
    meta: [
      { title: "Drinks — One Two Drink Bar" },
      { name: "description", content: "Carta autoral de coquetéis: clássicos reinventados, signatures da casa e criações sazonais." },
      { property: "og:title", content: "Drinks — One Two Drink Bar" },
      { property: "og:description", content: "Carta autoral de coquetéis e signatures da casa." },
      { property: "og:image", content: negroni },
    ],
  }),
  component: DrinksPage,
});

const signatures = [
  {
    img: negroni,
    name: "Negroni Defumado",
    desc: "Nossa releitura do clássico italiano: gin London Dry, Campari, vermute rosso e um banho de fumaça de carvalho americano servido na taça.",
    ingredients: "Gin · Campari · Vermute Rosso · Fumaça de carvalho",
    price: "R$ 38",
  },
  {
    img: mezcal,
    name: "Mezcal Brava",
    desc: "Mezcal artesanal espadin encontra pimenta dedo-de-moça, maracujá fresco e um toque ácido de hibisco. Para quem gosta de ousar.",
    ingredients: "Mezcal espadin · Pimenta · Maracujá · Hibisco",
    price: "R$ 42",
  },
  {
    img: whiskey,
    name: "Sour da Casa",
    desc: "Uísque bourbon envelhecido, limão siciliano espremido na hora, calda de açúcar demerara, clara de ovo e desenho de angostura.",
    ingredients: "Bourbon · Limão siciliano · Demerara · Clara · Angostura",
    price: "R$ 36",
  },
];

const classics = [
  ["Old Fashioned", "Bourbon, açúcar, angostura, casca de laranja", "R$ 34"],
  ["Manhattan", "Rye whiskey, vermute rosso, angostura, cereja amarena", "R$ 36"],
  ["Margarita", "Tequila reposado, triple sec, limão tahiti, sal", "R$ 32"],
  ["Daiquiri", "Rum branco, limão, açúcar — simples e perfeito", "R$ 30"],
  ["Aperol Spritz", "Aperol, prosecco, água com gás, laranja", "R$ 28"],
  ["Espresso Martini", "Vodka, café espresso, licor de café, açúcar", "R$ 34"],
];

function DrinksPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="A carta · sazonal"
        title="Cada drink, uma"
        italic="história."
        description="Nossos drinks são divididos em três atos: signatures da casa, clássicos imortais e criações sazonais. Pergunte ao bartender — ele tem recomendação."
      />

      {/* SIGNATURES */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-eyebrow text-primary mb-4">Ato I</p>
          <h2 className="text-5xl md:text-6xl mb-20">Signatures <span className="italic">da casa</span></h2>

          <div className="space-y-32">
            {signatures.map((d, i) => (
              <motion.article
                key={d.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-12 gap-12 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className="lg:col-span-5 lg:[direction:ltr]">
                  <img src={d.img} alt={d.name} loading="lazy" className="w-full aspect-[4/5] object-cover" />
                </div>
                <div className="lg:col-span-6 lg:col-start-7 lg:[direction:ltr]">
                  <p className="text-eyebrow text-primary mb-4">0{i + 1} / signature</p>
                  <h3 className="text-5xl md:text-6xl mb-6">{d.name}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{d.desc}</p>
                  <p className="italic text-foreground/80 border-l-2 border-primary pl-4">{d.ingredients}</p>
                  <p className="font-display text-4xl text-primary mt-8">{d.price}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSICS */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal/50 border-y border-border">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-eyebrow text-primary mb-4">Ato II</p>
          <h2 className="text-5xl md:text-6xl mb-16">Clássicos <span className="italic">imortais</span></h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-2">
            {classics.map(([name, desc, price]) => (
              <div key={name} className="flex items-baseline justify-between gap-6 py-6 border-b border-border group">
                <div>
                  <h3 className="font-display text-2xl group-hover:text-primary transition-colors">{name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
                <span className="font-display text-2xl text-primary shrink-0">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIRINGS */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-eyebrow text-primary mb-4">Ato III · sazonal</p>
          <h2 className="text-5xl md:text-7xl max-w-3xl mx-auto">
            Toda estação,<br /> uma <span className="italic text-primary">carta nova.</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-muted-foreground text-lg">
            Trabalhamos com produtores locais e ingredientes do mês. Pergunte sobre nossos
            drinks especiais quando estiver no balcão.
          </p>
        </div>
      </section>
    </Layout>
  );
}
