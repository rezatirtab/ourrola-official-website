import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductGrid from "@/components/product/ProductGrid";
import Button from "@/components/ui/Button";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionTitle
          eyebrow="Featured Products"
          title="OURROLA Best Sellers"
          description="Our most-loved shades, formulated for an instant plump and lasting lip health."
        />

        <ProductGrid products={products} />

        <div className="flex justify-center">
          <Button href="/products" variant="secondary">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}