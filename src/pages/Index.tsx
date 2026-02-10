import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import TrustBar from "@/components/TrustBar";
import Categories from "@/components/Categories";
import ProductCarousel from "@/components/ProductCarousel";
import FlashSale from "@/components/FlashSale";
import PromoBanner from "@/components/PromoBanner";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { featuredProducts, bestSellers, newArrivals } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <TrustBar />
        <ProductCarousel
          title="FEATURED PRODUCTS"
          subtitle="Hand-picked equipment for every fitness goal"
          products={featuredProducts}
        />
        <Categories />
        <FlashSale />
        <PromoBanner />
        <ProductCarousel
          title="BEST SELLERS"
          subtitle="Our most popular equipment"
          products={bestSellers}
        />
        <ProductCarousel
          title="NEW ARRIVALS"
          subtitle="Fresh gear just landed"
          products={newArrivals}
        />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
