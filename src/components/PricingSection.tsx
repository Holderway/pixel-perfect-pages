import { Check, Sparkles } from "lucide-react";

const features = [
  "Tu propia página de reservas",
  "Asistente que responde WhatsApp 24/7",
  "Agenda automática sin errores",
  "Recordatorios que reducen inasistencias",
  "Panel para ver y controlar tus citas",
  "Soporte disponible",
  "Mejoras constantes sin pagar más",
  "Citas ilimitadas (sin costos ocultos)",
];

const PricingSection = () => {
  return (
    <section id="precios" className="bg-muted py-16 md:py-24">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          Empieza <span className="text-primary">gratis,</span> decide después
        </h2>
        <p className="mt-4 text-muted-foreground text-sm md:text-base">
          Prueba Appunto gratis por 14 días.<br />
          Si te genera más citas, sigues.<br />
          Si no, lo cancelas.
        </p>

        <div className="mt-10 bg-background rounded-2xl shadow-lg border border-border p-6 md:p-10 text-left">
          {/* Plan badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-sm font-medium text-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              Plan profesional
            </span>
          </div>

          {/* Price */}
          <div className="text-center mb-2">
            <p className="text-3xl md:text-4xl font-extrabold text-foreground">
              $49.000 <span className="text-muted-foreground text-base font-medium">COP / mes</span>
            </p>
            <p className="text-muted-foreground text-sm mt-1">Lo recuperas con 1 sola cita</p>
          </div>

          {/* Trial banner */}
          <div className="mt-6 bg-muted rounded-xl p-4 text-center">
            <Sparkles className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-sm font-bold text-foreground">
              <span className="text-primary">14 días gratis</span> para probarlo en tu negocio
            </p>
            <p className="text-xs text-muted-foreground mt-1">Sin tarjeta · Cancela cuando quieras</p>
          </div>

          {/* Features */}
          <ul className="mt-8 space-y-4">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://appunto.com.co/onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full bg-primary text-primary-foreground text-center px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Quiero mi prueba gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
