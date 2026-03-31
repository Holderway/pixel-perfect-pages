import { Clock, CheckCheck, XCircle, Smile, PiggyBank } from "lucide-react";

const benefits = [
  { icon: Clock, text: "Más tiempo para atender clientes" },
  { icon: CheckCheck, text: "Más citas confirmadas" },
  { icon: XCircle, text: "Menos cancelaciones" },
  { icon: Smile, text: "Menos estrés" },
  { icon: PiggyBank, text: "Más ingresos sin contratar personal" },
];

const BenefitsSection = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="max-w-xl mx-auto px-4">
        <div className="space-y-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl px-5 py-4 flex items-center gap-4 shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-bold text-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
