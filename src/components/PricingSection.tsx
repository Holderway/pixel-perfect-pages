import { Check } from "lucide-react";

const features = [
  "Prueba gratis por 14 días para probarlo sin riesgo",
  "Si te gusta lo que ves, sigue. Si no, cancela sin preguntas",
  "Sin contratos de permanencia",
  "Sin costos de instalación",
  "Soporte por WhatsApp",
];

const PricingSection = () => {
  return (
    <section id="precios" className="bg-muted py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          Empieza <span className="text-primary">gratis</span>, decide después
        </h2>
        <div className="mt-10 bg-background rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-4xl md:text-5xl font-extrabold text-foreground">
            $49,000 <span className="text-muted-foreground text-lg font-medium">COP / mes</span>
          </p>
          <p className="text-muted-foreground text-sm mt-2">Después de tu prueba gratuita de 14 días</p>
          <ul className="mt-8 space-y-4 text-left max-w-md mx-auto">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-8 inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Quiero mi prueba gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
