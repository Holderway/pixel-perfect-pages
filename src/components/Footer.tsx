const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm font-extrabold text-background tracking-tight">
          appunt<span className="text-primary">o</span>
        </p>
        <p className="mt-2 text-xs text-background/60">
          © {new Date().getFullYear()} Appunto. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
