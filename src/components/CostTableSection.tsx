const rows = [
  { concept: "Citas perdidas por no responder a tiempo", value: "$200,000" },
  { concept: "Clientes que no vuelven por mala experiencia", value: "$350,000" },
  { concept: "Tiempo invertido en agendar manualmente", value: "$150,000" },
  { concept: "Total pérdidas mensuales", value: "$700,000", bold: true },
];

const CostTableSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-extrabold text-foreground text-center leading-snug">
          Esto es lo que tu negocio{" "}
          <span className="text-primary">pierde cada mes</span> por no
          responder WhatsApp
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 font-semibold text-muted-foreground">Concepto</th>
                <th className="py-3 font-semibold text-muted-foreground text-right">Costo estimado/mes</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`border-b border-border ${r.bold ? "bg-accent" : ""}`}>
                  <td className={`py-3 ${r.bold ? "font-bold text-foreground" : "text-foreground"}`}>
                    {r.concept}
                  </td>
                  <td className={`py-3 text-right ${r.bold ? "font-bold text-primary text-lg" : "text-foreground"}`}>
                    {r.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-muted-foreground text-xs md:text-sm">
          Basado en un negocio con 15 citas perdidas al mes y un ticket promedio de $40,000 COP.
        </p>
      </div>
    </section>
  );
};

export default CostTableSection;
