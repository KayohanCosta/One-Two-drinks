import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Instagram, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — One Two Drink Bar" },
      { name: "description", content: "Endereço, horário e canais de contato do One Two Drink Bar na Vila Madalena, São Paulo." },
      { property: "og:title", content: "Contato — One Two Drink Bar" },
      { property: "og:description", content: "Endereço, horário e canais de contato." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Visite · fale · siga"
        title="Aparece"
        italic="por aqui."
        description="A porta é discreta, mas a luz é quente. Estamos numa esquina da Vila Madalena."
      />

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <Item icon={MapPin} title="Endereço" lines={["Rua das Noites, 12", "Vila Madalena · São Paulo · SP", "CEP 05433-000"]} />
            <Item icon={Phone} title="Telefone" lines={["(11) 9 9999-0000"]} link="tel:+5511999990000" />
            <Item icon={MessageCircle} title="WhatsApp · reservas" lines={["(11) 9 9999-0000"]} link="https://wa.me/5511999990000" />
            <Item icon={Mail} title="E-mail" lines={["ola@onetwodrink.com.br"]} link="mailto:ola@onetwodrink.com.br" />
            <Item
              icon={Instagram}
              title="Instagram"
              lines={["@onetwodrinkbar"]}
              link="https://www.instagram.com/onetwodrinkbar/"
            />

            <div className="pt-6 border-t border-border">
              <p className="text-eyebrow text-primary mb-4">Horário de funcionamento</p>
              <ul className="space-y-2 text-lg">
                <Row d="Terça – Quinta" h="18h — 00h" />
                <Row d="Sexta – Sábado" h="18h — 02h" />
                <Row d="Domingo" h="17h — 23h" />
                <Row d="Segunda" h="Fechado" muted />
              </ul>
            </div>
          </div>

          <div className="relative h-[600px] lg:h-auto min-h-[500px] border border-border overflow-hidden">
            <iframe
              title="Mapa"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.692%2C-23.560%2C-46.682%2C-23.550&layer=mapnik"
              className="w-full h-full grayscale contrast-125 brightness-75"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-overlay" />
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
  icon: typeof MapPin;
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
