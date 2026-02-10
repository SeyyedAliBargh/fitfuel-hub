import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Mike R.", rating: 5, text: "Best quality dumbbells I've ever owned. The knurling is perfect and the rubber coating is top-notch.", product: "Hex Dumbbells Set" },
  { name: "Sarah L.", rating: 5, text: "The power rack was easy to assemble and feels incredibly sturdy. Great value for money.", product: "Pro Power Rack" },
  { name: "James K.", rating: 4, text: "Fast shipping and everything was well-packaged. The treadmill runs smooth and quiet.", product: "ProRunner X3 Treadmill" },
  { name: "Amanda T.", rating: 5, text: "Customer service was amazing when I had questions. The bench press is commercial quality.", product: "Olympic Bench Press" },
  { name: "David W.", rating: 5, text: "IronForge is my go-to for all gym equipment. Competitive prices and excellent build quality.", product: "Kettlebell Set" },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              WHAT OUR <span className="text-gradient">CUSTOMERS</span> SAY
            </h2>
            <p className="mt-2 text-muted-foreground">Trusted by 10,000+ fitness enthusiasts</p>
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
          {reviews.map((r, i) => (
            <div key={i} className="flex-shrink-0 w-[320px] bg-card border border-border rounded-xl p-6 hover-lift">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < r.rating ? "text-star fill-star" : "text-muted-foreground"}`} />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground text-sm">{r.name}</span>
                <span className="text-xs text-muted-foreground">{r.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
