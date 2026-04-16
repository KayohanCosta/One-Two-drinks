import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Calendar, Music, Sparkles } from "lucide-react";
import gallery from "@/assets/gallery-music.jpg";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos & Reservas — One Two Drink Bar" },
      { name: "description", content: "Reserve sua mesa, confira a agenda de noites de vinil, masterclasses de coquetelaria e eventos privados." },
      { property: "og:title", content: "Eventos & Reservas — One Two Drink Bar" },
      { property: "og:description", content: "Reservas, vinil, masterclasses e eventos privados." },
      { property: "og:image", content: gallery },
    ],
  }),
  component: EventsPage,
});

const events = [
  { date: "QUI · 18 ABR", title: "Vinil Night · Soul Edition", icon: Music, desc: "DJ residente toca soul dos anos 70 em vinil. Sem couvert." },
  { date: "SEX · 26 ABR", title: "Masterclass: Mezcal", icon: Sparkles, desc: "Aula degustação com nosso head bartender. Vagas limitadas — R$ 180." },
  { date: "SÁB · 04 MAI", title: "Carta Sazonal · Outono", icon: Calendar, desc: "Lançamento da nova carta com cinco drinks autorais inéditos." },
  { date: "QUI · 16 MAI", title: "Vinil Night · MPB Raiz", icon: Music, desc: "Uma noite só com clássicos brasileiros tocados em vinil." },
];

function EventsPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <PageHero
        eyebrow="Eventos & reservas"
        title="Garanta seu"
        italic="lugar no balcão."
        description="Reservamos mesas com até 30 dias de antecedência. Para grupos acima de 8 pessoas, fale conosco direto pelo WhatsApp."
      />

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-primary mb-4">Reservar mesa</p>
            <h2 className="text-4xl md:text-5xl mb-10">Conta pra gente <span className="italic">quando.</span></h2>

            {sent ? (
              <div className="border border-primary p-10 bg-primary/5">
                <p className="font-display text-3xl text-primary">Reserva recebida ✺</p>
                <p className="text-muted-foreground mt-3">
                  Vamos confirmar por e-mail ou WhatsApp em até 2 horas.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Nome" name="name" required />
                  <Field label="Telefone" name="phone" type="tel" required />
                </div>
                <Field label="E-mail" name="email" type="email" required />
                <div className="grid sm:grid-cols-3 gap-6">
                  <Field label="Data" name="date" type="date" required />
                  <Field label="Horário" name="time" type="time" required />
                  <Field label="Pessoas" name="people" type="number" defaultValue={2} required />
                </div>
                <div>
                  <label className="text-eyebrow text-muted-foreground block mb-3">Observação</label>
                  <textarea
                    name="note"
                    rows={3}
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-10 py-4 text-eyebrow hover:shadow-ember transition-shadow"
                >
                  Confirmar reserva
                </button>
              </form>
            )}
          </div>

          {/* Agenda */}
          <div className="lg:col-span-5">
            <p className="text-eyebrow text-primary mb-4">Agenda</p>
            <h2 className="text-4xl md:text-5xl mb-10">Próximas <span className="italic">noites.</span></h2>
            <ul className="space-y-2">
              {events.map((e) => (
                <li key={e.title} className="border-b border-border py-6 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <e.icon size={20} className="text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-eyebrow text-muted-foreground">{e.date}</p>
                      <h3 className="font-display text-2xl mt-1 group-hover:text-primary transition-colors">{e.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string | number;
}) {
  return (
    <div>
      <label className="text-eyebrow text-muted-foreground block mb-3">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
      />
    </div>
  );
}
