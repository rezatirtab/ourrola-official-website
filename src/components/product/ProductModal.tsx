"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/types/product";
import { formatIDR } from "@/utils/format";
import Button from "@/components/ui/Button";
import { brand } from "@/data/brand";

// Shared across every product — not shade-specific, so they live here once
// instead of being repeated in every product's data entry.
const sharedImages = {
  hero: "/images/products/shared-hero.png",
  swatchComparison: "/images/products/shared-swatch-comparison.png",
  ingredients: "/images/products/shared-ingredients.png",
  certifications: "/images/products/shared-certifications.png",
};

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  // Carousel order, designed as a mini story:
  // 1. Brand/hero shot -> 2. Aspirational close-up (shade-specific) ->
  // 3. Product detail -> 4. Shade comparison across skin tones ->
  // 5. Before/after application (shade-specific) -> 6. Swatch -> 7. Lifestyle ->
  // 8. Ingredients -> 9. Certifications (trust closer)
  const images = [
    sharedImages.hero,
    product.closeupImage,
    product.image,
    sharedImages.swatchComparison,
    product.applyImage,
    product.swatchImage,
    product.lifestyleImage,
    sharedImages.ingredients,
    sharedImages.certifications,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(index);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-xl bg-white shadow-[var(--shadow-card)] md:grid-cols-2"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-text-primary transition-colors hover:bg-primary hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="relative aspect-square w-full bg-surface md:aspect-auto">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="scrollbar-hide flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
          >
            {images.map((src, i) => (
              <div key={i} className="relative h-full w-full shrink-0 snap-center">
                <Image
                  src={src}
                  alt={`${product.name} photo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2 text-text-primary transition-colors hover:bg-white md:flex"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(activeIndex + 1, images.length - 1))}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2 text-text-primary transition-colors hover:bg-white md:flex"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 p-8">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Premium Lip Care
          </span>
          <h2 className="text-2xl font-semibold text-text-primary">{product.name}</h2>
          <p className="text-sm italic text-text-secondary">{product.shade}</p>
          <p className="text-sm leading-[1.8] text-text-secondary">{product.description}</p>

          <div className="text-xs leading-[1.8] text-text-secondary">
            <strong className="mb-1 block text-text-primary">Full Ingredients:</strong>
            {product.ingredients}
          </div>

          <p className="text-lg font-medium text-accent">{formatIDR(product.price)}</p>

          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white">
                Best Deal
              </span>
              <span className="text-xs text-text-secondary">Lowest price, official store</span>
            </div>
            <Button href={brand.marketplace.tokopedia} target="_blank" className="w-full">
              Buy on Tokopedia
            </Button>
            <div className="flex gap-2">
              <Button
                href={brand.marketplace.shopee}
                target="_blank"
                variant="secondary"
                className="flex-1"
              >
                Shopee
              </Button>
              <Button
                href={brand.marketplace.tiktokShop}
                target="_blank"
                variant="secondary"
                className="flex-1"
              >
                TikTok Shop
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}