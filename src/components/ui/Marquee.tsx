import { marqueeItems } from "@/data/marquee";

// Digandakan 2x supaya animasinya seamless (loop tanpa jeda)
const items = [...marqueeItems, ...marqueeItems];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-[#2B2B2B] py-2">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/90"
          >
            <span className="text-primary">✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}