"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Product } from "@/types/product";
import { formatIDR } from "@/utils/format";
import Button from "@/components/ui/Button";
import { brand } from "@/data/brand";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [hover, setHover] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock background scroll while modal is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-[var(--shadow-card)] md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-text-primary transition-colors hover:bg-primary hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Image - hover to see swatch */}
        <div
          className="relative aspect-square w-full bg-surface md:aspect-auto"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-500 ${
              hover ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={product.swatchImage}
            alt={`Swatch ${product.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-500 ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          />
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white">
            Hover to see swatch
          </span>
        </div>

        {/* Product info */}
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

          <Button href={brand.marketplace.shopee} target="_blank" className="mt-2 w-full">
            Buy on Shopee
          </Button>
        </div>
      </div>
    </div>
  );
}