import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    image: hero1,
    title: "UNLEASH YOUR STRENGTH",
    subtitle: "Premium dumbbells & free weights for every level",
    cta: "Shop Now",
  },
  {
    image: hero2,
    title: "CARDIO REVOLUTION",
    subtitle: "Commercial-grade treadmills & ellipticals",
    cta: "View Products",
  },
  {
    image: hero3,
    title: "FUNCTIONAL FITNESS",
    subtitle: "Kettlebells, bands & accessories for total body training",
    cta: "Explore",
  },
  {
    image: hero4,
    title: "BUILD YOUR HOME GYM",
    subtitle: "Power racks, benches & complete gym packages",
    cta: "Shop Packages",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-background">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
            <div className="max-w-lg">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground"
              >
                {slides[current].title.split(" ").map((word, i) => (
                  <span key={i}>
                    {i === slides[current].title.split(" ").length - 1 ? (
                      <span className="text-gradient">{word}</span>
                    ) : (
                      word + " "
                    )}
                  </span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4 text-lg md:text-xl text-muted-foreground"
              >
                {slides[current].subtitle}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 px-8 py-3 gradient-primary text-primary-foreground font-display font-semibold text-lg tracking-wide rounded-lg hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                {slides[current].cta}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/60 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/60 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
