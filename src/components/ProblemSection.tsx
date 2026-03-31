import { MessageCircleX, Clock, UserX, Smartphone, DollarSign } from "lucide-react";

const problems = [
  {
    icon: MessageCircleX,
    bold: "Te escriben todo el día por WhatsApp para agendar",
    rest: " mientras estás atendiendo clientes",
  },
  {
    icon: Clock,
    bold: "Pierdes citas",
    rest: " porque no alcanzas a responder",
  },
  {
    icon: UserX,
    bold: "Te preguntan siempre lo mismo:",
    rest: " precios, horarios, disponibilidad",
  },
  {
    icon: Smartphone,
    bold: "Estás más pendiente del celular",
    rest: " que del servicio",
  },
  {
    icon: DollarSign,
    bold: "Pierdes dinero",
    rest: " sin darte cuenta",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="bg-muted py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          ¿Te pasa esto en tu{" "}
          <span className="text-primary">barbería</span> o{" "}
          <span className="text-primary">spa</span>?
        </h2>
        <div className="mt-10 space-y-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-background rounded-xl p-5 text-left shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground text-sm md:text-base"><span className="font-bold">{p.bold}</span>{p.rest}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-background rounded-xl p-5 shadow-sm">
          <p className="text-muted-foreground text-sm italic font-bold">
            Cada mensaje no respondido a tiempo es una cita perdida y dinero que se va.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
