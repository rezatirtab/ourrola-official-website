import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "About — OURROLA",
  description:
    "OURROLA is a BPOM-approved, skincare-infused lip treatment brand — built on barrier-repair technology and accessible pricing for Gen Z and young professionals.",
};
const values = [
  {
    title: "Safe",
    description: "BPOM-approved, clinically-minded formulas you can trust for daily use.",
  },
  {
    title: "Effective",
    description: "Barrier-repair technology paired with an instant, visible plump effect.",
  },
  {
    title: "Accessible",
    description: "High-quality active ingredients at a price that doesn't feel like a luxury tax.",
  },
  {
    title: "Honest",
    description: "Transparent about our formula — structural improvement, not just a filter.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface py-20 md:py-24">
        <Container className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            About Us
          </span>
          <h1 className="max-w-xl text-[36px] font-semibold leading-tight text-text-primary sm:text-[48px]">
            The Story Behind OURROLA
          </h1>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/gallery/ourrola-049.jpg"
              alt="OURROLA story"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Our Story
            </span>
            <h2 className="text-[28px] font-semibold leading-tight text-text-primary sm:text-[36px]">
              Lip Care That Doesn’t Choose Between Beauty and Health
            </h2>
            <p className="text-base leading-[1.8] text-text-secondary">
              OURROLA started with a simple frustration: most plumping lip products trade
              comfort for results — burning sensations, dryness, or effects that fade as fast
              as they appear. We set out to build a hybrid formula that treats the lips while
              it enhances them, using active ingredients like Ceramide and Hyaluronic Acid
              usually reserved for high-end lip care, at a price that stays within reach.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <Container className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-white p-10">
            <h3 className="text-xl font-semibold text-text-primary">Mission</h3>
            <p className="text-base leading-[1.8] text-text-secondary">
              To make clinically-minded, BPOM-approved lip care accessible to Gen Z and young
              professionals — premium ingredient science without the premium price barrier.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-white p-10">
            <h3 className="text-xl font-semibold text-text-primary">Vision</h3>
            <p className="text-base leading-[1.8] text-text-secondary">
              To be known for sustainable lip health improvement paired with aesthetic
              enhancement — one system, not a trade-off between the two.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="flex flex-col gap-14">
          <SectionTitle eyebrow="Brand Values" title="What We Stand For" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-8 text-center"
              >
                <h4 className="text-base font-semibold text-text-primary">{value.title}</h4>
                <p className="text-sm leading-[1.8] text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}