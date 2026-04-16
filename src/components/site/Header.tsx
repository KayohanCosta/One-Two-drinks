import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/drinks", label: "Drinks" },
  { to: "/sobre", label: "Sobre" },
  { to: "/galeria", label: "Galeria" },
  { to: "/eventos", label: "Eventos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1 group" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-tight">One</span>
          <span className="font-display text-2xl italic text-primary group-hover:ember-glow transition">Two</span>
          <span className="font-display text-2xl tracking-tight">Drink</span>
          <span className="text-eyebrow text-muted-foreground ml-2 hidden sm:inline">/ Bar</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-eyebrow text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-eyebrow text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/eventos"
          className="hidden lg:inline-flex items-center px-5 py-2.5 border border-primary text-primary text-eyebrow hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Reservar
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-background border-t border-border px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-foreground hover:text-primary transition-colors"
              activeProps={{ className: "font-display text-3xl text-primary italic" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
