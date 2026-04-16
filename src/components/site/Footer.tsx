import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-display text-4xl">
            One <span className="italic text-primary">Two</span> Drink
          </h3>
          <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
            Coquetelaria autoral em ambiente intimista. Onde cada drink conta uma história e cada noite vira lembrança.
          </p>
          <a
            href="https://www.instagram.com/onetwodrinkbar/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-eyebrow text-muted-foreground hover:text-primary transition"
          >
            <Instagram size={16} /> @onetwodrinkbar
          </a>
        </div>

        <div>
          <p className="text-eyebrow text-primary mb-4">Visite</p>
          <p className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
            <MapPin size={16} className="mt-1 text-primary shrink-0" />
            Rua das Noites, 12<br />Vila Madalena · São Paulo
          </p>
          <p className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <Phone size={16} className="text-primary" /> (11) 9 9999-0000
          </p>
        </div>

        <div>
          <p className="text-eyebrow text-primary mb-4">Horário</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>Ter – Qui · 18h – 00h</li>
            <li>Sex – Sáb · 18h – 02h</li>
            <li>Dom · 17h – 23h</li>
            <li>Seg · Fechado</li>
          </ul>
          <Link
            to="/eventos"
            className="inline-block mt-6 text-eyebrow text-primary hover:underline"
          >
            Reservar mesa →
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} One Two Drink Bar. Todos os direitos reservados.</p>
          <p className="italic font-display text-base">Beba com responsabilidade.</p>
        </div>
      </div>
    </footer>
  );
}
