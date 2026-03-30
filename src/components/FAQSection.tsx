import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Necesito instalar alguna aplicación o software adicional?",
    a: "No. Appunto funciona directamente con tu WhatsApp Business. No necesitas instalar nada adicional.",
  },
  {
    q: "¿Qué pasa si quiero cancelar?",
    a: "Puedes cancelar en cualquier momento, sin preguntas y sin penalidades. Sin contratos de permanencia.",
  },
  {
    q: "¿Los clientes saben que están hablando con un bot?",
    a: "No necesariamente. El asistente responde de forma natural y personalizada, como si fuera una persona real.",
  },
  {
    q: "¿Es compatible con mi tipo de negocio?",
    a: "Sí. Appunto está diseñado para barberías, salones de belleza, spas, consultorios y cualquier negocio que maneje citas.",
  },
  {
    q: "¿Puedo personalizar los mensajes y el flujo de atención?",
    a: "¡Claro! Puedes personalizar los mensajes, horarios disponibles y servicios según tu negocio.",
  },
  {
    q: "¿Funciona solo con WhatsApp?",
    a: "Por ahora sí. WhatsApp es el canal más utilizado por los clientes en Latinoamérica para agendar citas.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-muted py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground text-center">
          Seguramente te estás{" "}
          <span className="text-primary">preguntando...</span>
        </h2>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border-none shadow-sm px-5">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
