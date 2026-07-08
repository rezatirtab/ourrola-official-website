import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { brand } from "@/data/brand";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/images/banner/cta-banner.jpg"
        alt="OURROLA campaign"
        fill
        sizes="100vw"
        className="object-cover object-[center_70%]"
      />
      <div className="absolute inset-0 bg-[#2B2B2B]/55" />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl text-[32px] font-semibold leading-tight text-white sm:text-[40px]">
          Elevate Your Lip Care Routine with OURROLA
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={brand.marketplace.tokopedia} target="_blank">
            Shop Now</Button>
          <Button
            href={brand.marketplace.whatsapp}
            variant="secondary"
            target="_blank"
            className="!border-white !text-white hover:!bg-white hover:!text-text-primary"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
