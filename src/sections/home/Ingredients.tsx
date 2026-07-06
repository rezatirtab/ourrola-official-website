import { Leaf } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ingredients } from "@/data/ingredients";

export default function Ingredients() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionTitle
          eyebrow="Ingredients"
          title="Active Ingredients, By Design"
          description="Every OURROLA formula is built around ingredients that are safe, effective, and dermatologically-minded."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-white p-8 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-accent">
                <Leaf size={22} strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-text-primary">{ingredient.name}</h3>
              <p className="text-sm leading-[1.8] text-text-secondary">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}