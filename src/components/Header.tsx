import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Categories", href: "#categories" },
  { label: "Best Sellers", href: "#bestsellers" },
  { label: "Discounts", href: "#deals" },
  { label: "Contact", href: "#contact" },
  { label: "About Us", href: "#about" },
];

const suggestions = [
  "Dumbbells", "Treadmill", "Resistance Bands", "Kettlebells", "Power Rack", "Bench Press",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cartCount] = useState(3);

  const filtered = searchValue.length > 0
    ? suggestions.filter((s) => s.toLowerCase().includes(searchValue.toLowerCase()))
    : [];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 font-display text-2xl md:text-3xl font-bold tracking-wider text-primary">
          IRON<span className="text-foreground">FORGE</span>
        </a>

        {/* Search - desktop */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6 relative">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
              className="w-full pl-10 pr-4 py-2.5 bg-secondary rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
            <AnimatePresence>
              {searchFocused && filtered.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-card overflow-hidden z-50"
                >
                  {filtered.map((s) => (
                    <button key={s} className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors text-left">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 ml-auto">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            <User className="w-5 h-5" />
            <span>Login</span>
          </button>
          <button className="relative p-2 text-foreground hover:text-primary transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[10px] font-bold rounded-full bg-primary text-primary-foreground">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block border-t border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search equipment..."
                  className="w-full pl-10 pr-4 py-2.5 bg-secondary rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="flex items-center gap-2 w-full px-4 py-3 mt-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors">
                <User className="w-5 h-5" />
                Login / Register
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
