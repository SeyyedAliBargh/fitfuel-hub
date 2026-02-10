import { Star, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

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

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative bg-card rounded-xl border border-border overflow-hidden hover-lift shadow-card flex-shrink-0 w-[260px] md:w-[280px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {product.badge === "sale" && (
        <span className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold rounded bg-badge-sale text-foreground">
          -{discount}%
        </span>
      )}
      {product.badge === "new" && (
        <span className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold rounded bg-badge-new text-foreground">
          NEW
        </span>
      )}

      {/* Image */}
      <div className="relative h-56 bg-secondary/50 flex items-center justify-center overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {/* Quick view overlay */}
        <div className={`absolute inset-0 bg-background/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="p-3 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity" title="Add to Cart">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-full bg-secondary text-foreground hover:bg-muted transition-colors" title="Quick View">
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-medium text-foreground text-sm line-clamp-2 mb-2">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "text-star fill-star" : "text-muted-foreground"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
