import Image from "next/image";
import type { Product } from "@/types/product";
import { formatIDR } from "@/utils/format";

export default function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white text-left shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
        <Image
          src={product.shadeImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.bestSeller && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
            Best Seller
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-lg font-semibold text-text-primary">{product.name}</h3>
        <p className="text-sm text-text-secondary">{product.shade}</p>
        <p className="mt-1 text-base font-medium text-accent">{formatIDR(product.price)}</p>

        <span className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary underline-offset-4 group-hover:underline">
          View Details
        </span>
      </div>
    </button>
  );
}