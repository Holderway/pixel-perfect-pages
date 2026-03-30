import { MessageCircleX, Clock, UserX } from "lucide-react";

const problems = [
  {
    icon: MessageCircleX,
    text: "Tus clientes te escriben por WhatsApp para agendar, pero no siempre puedes responder.",
  },
  {
    icon: Clock,
    text: "Te pierdes citas porque estás ocupado atendiendo y no ves los mensajes a tiempo.",
  },
  {
    icon: UserX,
    text: "Pierdes clientes que se van con la competencia porque no les respondiste rápido.",
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
              <p className="text-foreground text-sm md:text-base">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-background rounded-xl p-5 shadow-sm">
          <p className="text-muted-foreground text-sm italic">
            Cada mensaje no respondido a tiempo es una cita perdida y dinero que se va.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
