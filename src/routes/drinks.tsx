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
      { title: "Nossos Drinks — One Two Drink" },
      { name: "description", content: "Conheça as opções de coquetéis para o seu evento: clássicos reinventados e signatures autorais." },
      { property: "og:title", content: "Nossos Drinks — One Two Drink" },
      { property: "og:description", content: "Menu de coquetéis autorais e clássicos para eventos." },
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
  },
  {
    img: mezcal,
    name: "Mezcal Brava",
    desc: "Mezcal artesanal espadin encontra pimenta dedo-de-moça, maracujá fresco e um toque ácido de hibisco. Para quem gosta de ousar.",
    ingredients: "Mezcal espadin · Pimenta · Maracujá · Hibisco",
  },
  {
    img: whiskey,
    name: "Sour da Casa",
    desc: "Uísque bourbon envelhecido, limão siciliano espremido na hora, calda de açúcar demerara, clara de ovo e desenho de angostura.",
    ingredients: "Bourbon · Limão siciliano · Demerara · Clara · Angostura",
  },
];

const classics = [
  ["Old Fashioned", "Bourbon, açúcar, angostura, casca de laranja"],
  ["Manhattan", "Rye whiskey, vermute rosso, angostura, cereja amarena"],
  ["Margarita", "Tequila reposado, triple sec, limão tahiti, sal"],
  ["Daiquiri", "Rum branco, limão, açúcar — simples e perfeito"],
  ["Aperol Spritz", "Aperol, prosecco, água com gás, laranja"],
  ["Espresso Martini", "Vodka, café espresso, licor de café, açúcar"],
];

function DrinksPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Nossas opções · para seu evento"
        title="Cada drink, uma"
        italic="experiência."
        description="Oferecemos uma curadoria de drinks dividida em três atos: signatures autorais, clássicos imortais e criações sazonais exclusivas para sua festa."
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
            {classics.map(([name, desc]) => (
              <div key={name} className="flex items-baseline justify-between gap-6 py-6 border-b border-border group">
                <div>
                  <h3 className="font-display text-2xl group-hover:text-primary transition-colors">{name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
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
