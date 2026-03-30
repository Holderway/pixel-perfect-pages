import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
            <span className="text-primary">Automatiza</span> la gestión de citas en tu negocio
          </h1>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            Potencia tu barbería, salón de belleza o spa con nuestro asistente virtual inteligente por WhatsApp. Agenda, confirma y recuerda citas. Sin perder clientes, sin esfuerzo.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#precios"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Prueba gratis 14 días
            </a>
            <a
              href="#como-funciona"
              className="border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold text-center hover:bg-muted transition-colors"
            >
              Más información
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="Profesional de salón de belleza atendiendo a una clienta"
            className="rounded-2xl w-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
