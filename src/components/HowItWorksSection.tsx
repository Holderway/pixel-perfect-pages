const steps = [
  {
    num: "1",
    title: "El cliente escribe por WhatsApp",
    desc: '"Hola, quiero agendar una cita"',
  },
  {
    num: "2",
    title: "El asistente responde automáticamente",
    desc: "Pregunta servicio, día y hora disponibles",
  },
  {
    num: "3",
    title: "Cita confirmada",
    desc: "El cliente queda agendado sin que tú hagas nada",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-muted py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          ¿Cómo <span className="text-primary">funciona</span>?
        </h2>
        <p className="mt-3 text-muted-foreground text-sm md:text-base">
          Es más simple de lo que te imaginas
        </p>
        <div className="mt-12 space-y-6 max-w-md mx-auto">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-background rounded-xl p-6 text-center shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {s.num}
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base">{s.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-foreground font-bold text-base md:text-lg">
          Tú solo te enfocas en atender. El asistente se encarga del resto.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
