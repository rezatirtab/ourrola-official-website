"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import { brand } from "@/data/brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const pastThreshold = currentY > 80; // don't hide while still near the top of the page

      if (open) {
        setHidden(false);
      } else {
        setHidden(scrollingDown && pastThreshold);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold tracking-[0.15em] text-text-primary"
        >
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-text-primary transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={brand.marketplace.tokopedia} target="_blank">
  Buy Now
</Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium uppercase tracking-[0.15em] text-text-primary hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <Button href={brand.marketplace.tokopedia} target="_blank">
  Buy Now
</Button>
          </Container>
        </div>
      )}
    </header>
  );
}