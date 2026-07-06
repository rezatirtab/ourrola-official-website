import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProductGrid from "@/components/product/ProductGrid";
import CTABanner from "@/components/ui/CTABanner";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products — OURROLA",
  description:
    "Shop OURROLA Lip Bomber — BPOM-approved lip treatment with Plumpgasm Heat + Ice Technology and Hyaluronic Acid for an instant, glossy plump. Available in Venus (Pink Nude) and Saturn (Brick Red).",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-surface py-20 md:py-24">
        <Container className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Products
          </span>
          <h1 className="max-w-xl text-[36px] font-semibold leading-tight text-text-primary sm:text-[48px]">
            The Full OURROLA Collection
          </h1>
          <p className="max-w-md text-base leading-[1.8] text-text-secondary">
            Find the formula and shade that’s right for you.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <ProductGrid products={products} />
        </Container>
      </section>

      <CTABanner />
    </>
  );
}