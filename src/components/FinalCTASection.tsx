const FinalCTASection = () => {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground">
          Empieza a agendar citas en automático
        </h2>
        <p className="mt-4 text-primary-foreground/80 text-sm md:text-base max-w-xl mx-auto">
          Configura tu negocio en minutos. Sin contratos. Sin riesgos. Prueba gratis por 14 días.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex bg-primary-foreground text-primary px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Activar mi prueba gratis
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
