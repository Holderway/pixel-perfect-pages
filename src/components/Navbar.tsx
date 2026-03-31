import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold text-foreground tracking-tight">
          appunt<span className="text-primary">o</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#problema" className="hover:text-foreground transition-colors">Problema</a>
          <a href="#como-funciona" className="hover:text-foreground transition-colors">Cómo funciona</a>
          <a href="#precios" className="hover:text-foreground transition-colors">Precios</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
        <a
          href="https://appunto.com.co/onboarding"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Prueba gratis 14 días
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border px-4 py-4 flex flex-col gap-3 text-sm font-medium">
          <a href="#problema" onClick={() => setOpen(false)}>Problema</a>
          <a href="#como-funciona" onClick={() => setOpen(false)}>Cómo funciona</a>
          <a href="#precios" onClick={() => setOpen(false)}>Precios</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#precios" className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-center font-semibold" onClick={() => setOpen(false)}>
            Prueba gratis 14 días
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
