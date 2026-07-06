"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { brand } from "@/data/brand";

// Add/change images here to update the slide background.
// To use a video loop later, just swap the <Image> below for
// <video autoPlay loop muted playsInline src="..." /> for that slide.
const slides = ["/images/hero/slider-1.jpg", "/images/hero/slider-2.jpg"];

const SLIDE_DURATION = 6000; // ms — how long each slide shows before transitioning (slow)

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-[92vh] min-h-[560px] w-full items-center overflow-hidden">
      {/* Background slides (crossfade) */}
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
        <Image
            src={src}
            alt="OURROLA hero"
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-[center_58%]"
          />
        </div>
      ))}

      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-md rounded-xl bg-white/75 p-8 backdrop-blur-md sm:p-10">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            {brand.tagline}
          </span>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.2] text-text-primary sm:text-[42px]">
            Defined by Us, Perfected by Your Aura
          </h1>
          <p className="mt-4 text-base leading-[1.8] text-text-secondary">
            {brand.description}
          </p>
          <div className="mt-6">
            <Button href="/products">Explore</Button>
          </div>
        </div>
      </Container>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-primary" : "w-1.5 bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}