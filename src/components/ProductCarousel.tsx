import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: "sale" | "new";
}

interface Props {
  title: string;
  subtitle?: string;
  products: Product[];
}

export default function ProductCarousel({ title, subtitle, products }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{title}</h2>
            {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll(1)} className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
