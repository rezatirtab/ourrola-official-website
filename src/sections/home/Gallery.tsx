import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { gallery } from "@/data/gallery";

const spanClass: Record<string, string> = {
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  normal: "",
};

export default function Gallery() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionTitle eyebrow="Gallery" title="Product, Packaging & Lifestyle" />

        <div className="grid grid-cols-2 auto-rows-[180px] gap-4 sm:grid-cols-4 sm:auto-rows-[220px]">
          {gallery.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-xl ${spanClass[item.span ?? "normal"]}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={
                  item.span === "wide"
                    ? "(max-width: 640px) 100vw, 50vw"
                    : "(max-width: 640px) 50vw, 25vw"
                }
                className={`object-cover transition-transform duration-500 hover:scale-105 ${
                  item.position ?? ""
                }`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}