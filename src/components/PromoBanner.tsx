export default function PromoBanner() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 md:p-12 flex flex-col justify-center min-h-[240px]">
          <span className="text-sm font-medium text-primary mb-2 tracking-wider">LIMITED OFFER</span>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Save 25% on All<br />Power Racks
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">Use code POWER25 at checkout</p>
          <button className="self-start px-6 py-2.5 gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
            Shop Racks
          </button>
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-card border border-border p-8 md:p-12 flex flex-col justify-center min-h-[240px]">
          <span className="text-sm font-medium text-green-glow mb-2 tracking-wider">NEW ARRIVALS</span>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            2026 Collection<br />Just Dropped
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">Cutting-edge fitness technology</p>
          <button className="self-start px-6 py-2.5 border border-foreground/20 text-foreground font-semibold rounded-lg hover:bg-foreground/10 transition-colors text-sm">
            Explore New
          </button>
        </div>
      </div>
    </section>
  );
}
