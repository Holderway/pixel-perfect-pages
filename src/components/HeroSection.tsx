import appuntoLogo from "@/assets/appunto-logo.png";

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center gap-8">
        <img
          src={appuntoLogo}
          alt="Appunto logo"
          className="h-10 md:h-14 w-auto"
        />
        <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg">
          <video
            src="https://holderway.s3.us-east-2.amazonaws.com/Appunto/Video_landing_Appunto.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full object-cover"
          />
        </div>
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
            <span className="text-primary">Automatiza</span> la gestión de citas en tu negocio
          </h1>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            Mientras tú cortas cabello o prestas tus servicios, nuestro asistente virtual <span className="font-bold">responde mensajes, confirma citas y llena tu agenda</span>. Sin perder clientes, sin esfuerzo.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://appunto.com.co/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Prueba gratis 14 días
            </a>
            <a
              href="https://appunto.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold text-center hover:bg-muted transition-colors"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
