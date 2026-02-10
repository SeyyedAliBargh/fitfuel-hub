import { Dumbbell, Bike, Timer, Armchair, Layers, Footprints } from "lucide-react";

const categories = [
  { icon: Dumbbell, name: "Free Weights", count: 124 },
  { icon: Bike, name: "Cardio", count: 86 },
  { icon: Layers, name: "Power Racks", count: 45 },
  { icon: Armchair, name: "Benches", count: 62 },
  { icon: Timer, name: "Accessories", count: 210 },
  { icon: Footprints, name: "Flooring", count: 38 },
];

export default function Categories() {
  return (
    <section id="categories" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
          SHOP BY <span className="text-gradient">CATEGORY</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Find exactly what you need</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="group flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover-lift transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-medium text-foreground text-sm">{cat.name}</span>
              <span className="text-xs text-muted-foreground">{cat.count} items</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
