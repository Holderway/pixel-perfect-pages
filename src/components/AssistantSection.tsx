import { Bot, MessageCircle, Calendar, Clock } from "lucide-react";

const stats = [
  { value: "+10.000", label: "Citas gestionadas", icon: Calendar },
  { value: "98%", label: "Tasa de respuesta", icon: MessageCircle },
  { value: "+500", label: "Negocios activos", icon: Bot },
  { value: "24/7", label: "Disponibilidad total", icon: Clock },
];

const AssistantSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          Aquí es donde entra tu{" "}
          <span className="text-primary">asistente virtual</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Atiende a tus clientes por WhatsApp como si fuera parte de tu equipo, pero trabaja 24/7 y nunca se cansa.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-accent rounded-xl p-6 text-center">
              <s.icon className="w-6 h-6 mx-auto text-primary mb-2" />
              <p className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssistantSection;
