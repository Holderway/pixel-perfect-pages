const FinalCTASection = () => {
  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          Empieza a agendar citas en{" "}
          <span className="text-primary">automático</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-sm md:text-base">
          Configuración rápida · Sin contratos · Sin riesgo
        </p>
        <a
          href="https://appunto.com.co/onboarding"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Quiero mi prueba gratis
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
