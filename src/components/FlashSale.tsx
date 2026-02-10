import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import ProductCard from "./ProductCard";
import { flashSaleProducts } from "@/data/products";

function useCountdown(hours: number) {
  const [time, setTime] = useState(hours * 3600);
  useEffect(() => {
    const t = setInterval(() => setTime((p) => (p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;
  return { h, m, s };
}

export default function FlashSale() {
  const { h, m, s } = useCountdown(8);

  return (
    <section id="deals" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-primary fill-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">FLASH SALE</h2>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-sm text-muted-foreground mr-2">Ends in:</span>
            {[
              { val: h, label: "HRS" },
              { val: m, label: "MIN" },
              { val: s, label: "SEC" },
            ].map((t, i) => (
              <div key={t.label} className="flex items-center gap-2">
                <div className="bg-primary text-primary-foreground font-display font-bold text-xl px-3 py-1.5 rounded-lg min-w-[48px] text-center">
                  {String(t.val).padStart(2, "0")}
                </div>
                <span className="text-xs text-muted-foreground">{t.label}</span>
                {i < 2 && <span className="text-primary font-bold mx-1">:</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          {flashSaleProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
