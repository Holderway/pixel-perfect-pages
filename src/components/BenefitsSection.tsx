import { TrendingUp, Clock, Smile, CalendarCheck, Shield, Zap } from "lucide-react";

const benefits = [
  { icon: TrendingUp, text: "Más citas confirmadas = más ingresos" },
  { icon: Clock, text: "Ahorra horas de gestión manual" },
  { icon: Smile, text: "Tus clientes reciben atención al instante" },
  { icon: CalendarCheck, text: "Reduce cancelaciones con recordatorios" },
  { icon: Shield, text: "Tu agenda siempre organizada y al día" },
  { icon: Zap, text: "Respuesta inmediata 24/7" },
];

const BenefitsSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          Lo que ganas <span className="text-primary">desde el primer día</span>
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="bg-accent rounded-xl p-6 text-left flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
