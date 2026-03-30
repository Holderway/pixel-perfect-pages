const steps = [
  {
    num: "1",
    title: "El cliente escribe por WhatsApp",
    desc: "Tu cliente te escribe como siempre, por WhatsApp, pidiendo una cita.",
  },
  {
    num: "2",
    title: "El asistente responde al instante",
    desc: "Nuestro asistente virtual responde automáticamente, de forma natural y personalizada.",
  },
  {
    num: "3",
    title: "Cita confirmada",
    desc: "El cliente elige fecha y hora disponible. El asistente confirma la cita automáticamente.",
  },
  {
    num: "4",
    title: "Recordatorio automático",
    desc: "Tu cliente recibe un recordatorio antes de su cita para que no se le olvide asistir.",
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
        <div className="mt-12 space-y-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex items-start gap-5 bg-background rounded-xl p-5 text-left shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {s.num}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm md:text-base">{s.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
