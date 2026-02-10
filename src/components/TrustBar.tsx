import { Shield, Truck, RotateCcw, Award, Percent } from "lucide-react";

const badges = [
  { icon: Shield, label: "100% Original Products" },
  { icon: Award, label: "2 Year Warranty" },
  { icon: Truck, label: "Free Delivery Over $99" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Percent, label: "Up to 40% Off" },
];

export default function TrustBar() {
  return (
    <section className="bg-secondary/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex overflow-x-auto scrollbar-hide gap-6 md:gap-0 md:justify-between">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-3 flex-shrink-0 px-2">
            <b.icon className="w-6 h-6 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground whitespace-nowrap">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
