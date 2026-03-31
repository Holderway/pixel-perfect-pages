const CostTableSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-extrabold text-foreground text-center leading-snug mb-10">
          Esto es lo que tu negocio{" "}
          <span className="text-primary">pierde cada mes</span> por no
          responder WhatsApp
        </h2>

        {/* SIN APPUNTO */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
          <div className="bg-[hsl(350,80%,95%)] text-center py-2">
            <span className="text-sm font-bold tracking-wide" style={{ color: "hsl(350, 70%, 50%)" }}>SIN APPUNTO</span>
          </div>
          <div className="bg-background px-6 py-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-foreground text-sm">Citas perdidas</span>
              <span className="text-sm font-semibold" style={{ color: "hsl(350, 70%, 50%)" }}>-$150.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground text-sm">Inasistencias</span>
              <span className="text-sm font-semibold" style={{ color: "hsl(350, 70%, 50%)" }}>-$200.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground text-sm">Tiempo perdido coordinando</span>
              <span className="text-sm font-semibold" style={{ color: "hsl(350, 70%, 50%)" }}>-$180.000</span>
            </div>
            <div className="border-t border-border pt-4 flex justify-between items-center">
              <span className="text-foreground text-sm font-bold">Total perdido mensual</span>
              <span className="text-lg font-bold" style={{ color: "hsl(350, 70%, 50%)" }}>-$530.000</span>
            </div>
          </div>
        </div>

        {/* CON APPUNTO */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <div className="bg-[hsl(160,60%,92%)] text-center py-2">
            <span className="text-sm font-bold tracking-wide text-primary">CON APPUNTO</span>
          </div>
          <div className="bg-background px-6 py-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-foreground text-sm">Inversión mensual</span>
              <span className="text-sm font-semibold text-foreground">$49.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground text-sm">Citas recuperadas</span>
              <span className="text-sm font-semibold text-primary">+$350.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground text-sm">Tiempo recuperado</span>
              <span className="text-sm font-semibold text-primary">+$180.000</span>
            </div>
            <div className="border-t border-border pt-4 flex justify-between items-center">
              <span className="text-foreground text-sm font-bold">Beneficio percibido mensual</span>
              <span className="text-lg font-bold text-primary">+$480.000</span>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm md:text-base font-medium">
          Ganas casi 10 veces lo que inviertes cada mes
        </p>
      </div>
    </section>
  );
};

export default CostTableSection;
