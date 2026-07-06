import Hero from "@/sections/home/Hero";
import WhyOurrola from "@/sections/home/WhyOurrola";
import FeaturedProducts from "@/sections/home/FeaturedProducts";
import Gallery from "@/sections/home/Gallery";
import Ingredients from "@/sections/home/Ingredients";
import FAQ from "@/sections/home/FAQ";
import CTABanner from "@/components/ui/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyOurrola />
      <FeaturedProducts />
      <Gallery />
      <Ingredients />
      <FAQ />
      <CTABanner />
    </>
  );
}
