import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Instagram, Mail, MessageCircle, MapPin, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — One Two Drink" },
      {
        name: "description",
        content:
          "Fale com a One Two Drink para orçamentos de coquetelaria em eventos e celebrações.",
      },
      { property: "og:title", content: "Contato — One Two Drink" },
      {
        property: "og:description",
        content: "Canais de contato para orçamentos e informações.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "5585981815287";
    const text = `Olá! Meu nome é ${name}. ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Fale · siga · solicite"
        title="Vamos planejar"
        italic="seu evento?"
        description="Estamos prontos para levar a melhor experiência de coquetelaria para a sua celebração."
      />

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">
          <div className="space-y-10 lg:col-span-1">
            <Item
              icon={MessageCircle}
              title="WhatsApp · orçamentos"
              lines={["(85) 98181-5287"]}
              link="https://wa.me/5585981815287"
            />
            <Item
              icon={Mail}
              title="E-mail"
              lines={["ola@onetwodrink.com.br"]}
              link="mailto:ola@onetwodrink.com.br"
            />
            <Item
              icon={Instagram}
              title="Instagram"
              lines={["@onetwodrink"]}
              link="https://www.instagram.com/onetwodrink/"
            />

            <div className="pt-10 border-t border-border">
              <p className="text-eyebrow text-primary mb-6">Atendimento</p>
              <div className="space-y-4">
                <p className="text-xl text-foreground font-display">
                  Fortaleza e Região
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Atendemos em toda a capital e outras localidades sob consulta.
                  Para eventos em outros estados, consulte nossa disponibilidade
                  e logística.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <p className="text-eyebrow text-primary mb-4">Envie uma mensagem</p>
            <h3 className="text-3xl font-display mb-8">
              Mande um <span className="italic">oi.</span>
            </h3>

            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              <div>
                <label className="text-eyebrow text-muted-foreground block mb-3">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
                />
              </div>
              <div>
                <label className="text-eyebrow text-muted-foreground block mb-3">
                  Mensagem
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Como podemos te ajudar?"
                  rows={4}
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-eyebrow hover:shadow-ember transition"
              >
                Falar no WhatsApp
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Prefere um formulário detalhado?{" "}
                <Link to="/eventos" className="text-primary hover:underline">
                  Solicitar orçamento completo →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Item({
  icon: Icon,
  title,
  lines,
  link,
}: {
  icon: LucideIcon;
  title: string;
  lines: string[];
  link?: string;
}) {
  const Inner = (
    <div className="flex gap-5 group">
      <Icon size={22} className="text-primary mt-1 shrink-0" />
      <div>
        <p className="text-eyebrow text-muted-foreground mb-2">{title}</p>
        {lines.map((l) => (
          <p key={l} className="font-display text-2xl group-hover:text-primary transition-colors">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
  return link ? (
    <a href={link} target={link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
      {Inner}
    </a>
  ) : (
    Inner
  );
}

function Row({ d, h, muted }: { d: string; h: string; muted?: boolean }) {
  return (
    <li className={`flex justify-between border-b border-border/50 pb-2 ${muted ? "text-muted-foreground" : ""}`}>
      <span>{d}</span>
      <span className="font-display text-primary">{h}</span>
    </li>
  );
}
