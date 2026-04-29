import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-cocktail.jpg";
import drinksImg from "@/assets/drinks-trio.jpg";
import interiorImg from "@/assets/bar-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "One Two Drink — Experiências em Coquetelaria para Eventos" },
      { name: "description", content: "Levamos a experiência de um bar de alta coquetelaria para o seu evento com equipe especializada e drinks autorais assinados." },
      { property: "og:title", content: "One Two Drink — Eventos" },
      { property: "og:description", content: "Coquetelaria de alto padrão. Equipe especializada. Experiências memoráveis." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Drink autoral com fumaça e brilho âmbar"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-8 pt-24 pb-32 w-full">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-eyebrow text-primary mb-8"
            >
              · Coquetelaria autoral · est. 2021
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.9]"
            >
              Um drink,<br />
              dois goles, <span className="italic text-primary ember-glow">três</span><br />
              histórias por noite.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 max-w-lg text-lg text-muted-foreground leading-relaxed"
            >
              No One Two Drink, cada coquetel é roteiro: um começo cítrico, um meio amargo,
              um final de fumaça. Reservamos a mesa, você traz o resto.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Link
                to="/eventos"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-eyebrow hover:shadow-ember transition-shadow w-full sm:w-auto justify-center"
              >
                Solicitar orçamento
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/drinks"
                className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 text-eyebrow hover:border-primary hover:text-primary transition-colors w-full sm:w-auto justify-center"
              >
                Nossos drinks
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-6 lg:left-12 text-eyebrow text-muted-foreground hidden sm:block"
        >
          ↓ role para descobrir
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-6 overflow-hidden bg-charcoal">
        <div className="flex gap-16 animate-[marquee_40s_linear_infinite] whitespace-nowrap font-display text-3xl md:text-5xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              Coquetelaria de autor
              <span className="text-primary">✺</span>
              <span className="italic">drinks assinados</span>
              <span className="text-primary">✺</span>
              vinis & vinhos
              <span className="text-primary">✺</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* PHILOSOPHY */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="text-eyebrow text-primary mb-6">Manifesto</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl">
              Evento não é só<br /> sobre o copo. <span className="italic text-primary">É sobre a entrega.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              É sobre a precisão do serviço, a elegância do balcão montado e a hospitalidade que 
              recebe cada convidado como se estivesse no melhor bar da cidade.
            </p>
            <p>
              Nossa equipe não apenas serve drinks; nós criamos o ambiente. Cada coquetel é um
              ponto de contato entre a técnica apurada e a memória que seu evento deixará.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-primary text-eyebrow hover:gap-4 transition-all"
            >
              Nossa história <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* DRINKS PREVIEW */}
      <section className="py-32 px-6 lg:px-12 bg-charcoal/50 border-y border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-eyebrow text-primary mb-4">A carta</p>
              <h2 className="text-5xl md:text-7xl">Drinks que <span className="italic">marcam</span></h2>
            </div>
            <Link to="/drinks" className="text-eyebrow text-primary hover:underline">
              Ver carta completa →
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-2 items-center">
            <img
              src={drinksImg}
              alt="Trio de coquetéis assinados"
              loading="lazy"
              className="w-full h-[600px] object-cover"
            />
            <div className="lg:pl-16 space-y-10">
              {[
                { n: "01", name: "Negroni Defumado", note: "gin · campari · vermute · fumaça de carvalho" },
                { n: "02", name: "Sour da Casa", note: "uísque · limão siciliano · clara · angostura" },
                { n: "03", name: "Mezcal Brava", note: "mezcal · pimenta · maracujá · sal de hibisco" },
              ].map((d) => (
                <div key={d.n} className="border-b border-border pb-8 group">
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-primary text-4xl">{d.n}</span>
                    <div>
                      <h3 className="text-3xl font-display group-hover:text-primary transition-colors">{d.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2 italic">{d.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={interiorImg}
          alt="Bar montado em evento"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-20">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-eyebrow text-primary mb-4">Experiência completa</p>
            <h2 className="text-5xl md:text-7xl max-w-3xl">
              Seu evento.<br /><span className="italic">Nossa expertise.</span>
            </h2>
            <Link
              to="/eventos"
              className="inline-flex items-center gap-3 mt-10 border border-primary text-primary px-8 py-4 text-eyebrow hover:bg-primary hover:text-primary-foreground transition"
            >
              Fazer orçamento <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
