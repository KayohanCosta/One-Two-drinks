import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Calendar as CalendarIcon, Music, Sparkles } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import gallery from "@/assets/gallery-music.jpg";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos & Orçamentos — One Two Drink" },
      { name: "description", content: "Solicite um orçamento para o seu evento. Levamos a melhor coquetelaria para casamentos, corporativos e festas particulares." },
      { property: "og:title", content: "Eventos & Orçamentos — One Two Drink" },
      { property: "og:description", content: "Solicite seu orçamento para coquetelaria em eventos." },
      { property: "og:image", content: gallery },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [sent, setSent] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const phone = "5585981815287";
    const text = `Olá One Two Drink! Gostaria de um orçamento para meu evento:
- Nome: ${data.name}
- Evento: ${data.type}
- Data: ${data.date || "Não informada"}
- Local: ${data.location}
- Convidados: ${data.people}
- E-mail: ${data.email}
- WhatsApp: ${data.phone}
- Observações: ${data.note || "Nenhuma"}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSent(true);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Planeje sua celebração"
        title="O bar onde"
        italic="você quiser."
        description="Transformamos seu evento com uma operação de bar completa, técnica refinada e hospitalidade de excelência. Peça seu orçamento abaixo."
      />

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-primary mb-4">Solicitar orçamento</p>
            <h2 className="text-4xl md:text-5xl mb-10">Conte sobre seu <span className="italic">evento.</span></h2>

            {sent ? (
              <div className="border border-primary p-10 bg-primary/5">
                <p className="font-display text-3xl text-primary">Solicitação enviada ✺</p>
                <p className="text-muted-foreground mt-3">
                  Você foi redirecionado para o nosso WhatsApp. Caso a conversa não tenha aberto automaticamente, clique no botão para falar conosco.
                </p>
                <button
                  onClick={() => handleSubmit(null as any)}
                  className="mt-6 inline-flex items-center gap-3 border border-primary text-primary px-6 py-3 text-eyebrow hover:bg-primary hover:text-primary-foreground transition"
                >
                  Abrir WhatsApp novamente
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Nome" name="name" required />
                  <Field label="WhatsApp / Telefone" name="phone" type="tel" required />
                </div>
                <Field label="E-mail" name="email" type="email" required />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-eyebrow text-muted-foreground block mb-3">Data do Evento</label>
                    <input type="hidden" name="date" value={date ? format(date, "dd/MM/yyyy") : ""} />
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors text-left"
                        >
                          <span className={!date ? "text-muted-foreground/30" : ""}>
                            {date ? format(date, "PPP", { locale: ptBR }) : "Selecione a data"}
                          </span>
                          <CalendarIcon className="h-4 w-4 text-primary" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-background border-border" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          locale={ptBR}
                          className="p-4"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Field label="Tipo de Evento" name="type" placeholder="Ex: Casamento, Corporativo..." required />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Local / Cidade" name="location" required />
                  <Field label="Número de Convidados" name="people" type="number" defaultValue={50} required />
                </div>
                <div>
                  <label className="text-eyebrow text-muted-foreground block mb-3">Mensagem / Observações</label>
                  <textarea
                    name="note"
                    rows={3}
                    placeholder="Conte-nos mais sobre o que você imagina para o bar..."
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-10 py-4 text-eyebrow hover:shadow-ember transition-shadow"
                >
                  Enviar para WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* How it works */}
          <div className="lg:col-span-5">
            <p className="text-eyebrow text-primary mb-4">Como trabalhamos</p>
            <h2 className="text-4xl md:text-5xl mb-10">O que <span className="italic">entregamos.</span></h2>
            <ul className="space-y-8">
              {[
                { title: "Personalização", desc: "Criamos uma carta de drinks exclusiva para o seu evento, considerando o perfil dos convidados e o estilo da festa.", icon: Sparkles },
                { title: "Estrutura Completa", desc: "Levamos o balcão, insumos frescos, gelo translúcido, copos de cristal e toda a equipe necessária.", icon: CalendarIcon },
                { title: "Equipe Especializada", desc: "Nossos bartenders são treinados na cultura de bar de alta coquetelaria, garantindo rapidez e elegância.", icon: Music },
              ].map((item) => (
                <li key={item.title} className="group">
                  <div className="flex items-start gap-4">
                    <item.icon size={20} className="text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-display text-2xl group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
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
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string | number;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-eyebrow text-muted-foreground block mb-3">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors placeholder:text-muted-foreground/30"
      />
    </div>
  );
}
