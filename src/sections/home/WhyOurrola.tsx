import { ShieldCheck, Layers, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";

const benefits = [
  {
    icon: ShieldCheck,
    title: "BPOM-Approved Formula",
    description:
      "Clinically-minded and BPOM-registered, so you get guaranteed safety and formula stability with every use.",
  },
  {
    icon: Layers,
    title: "Barrier-Repair Technology",
    description:
      "Powered by a Ceramide Complex that strengthens the lip barrier — a structural improvement, not just a cosmetic effect.",
  },
  {
    icon: Sparkles,
    title: "Instant Plump, No Sting",
    description:
      "Plumpgasm Heat + Ice Technology with Hyaluronic Acid gives lips a look up to 70% plumper, instantly — with a cooling sensation and no burning.",
  },
];

export default function WhyOurrola() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Text - left */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Why OURROLA
          </span>
          <h2 className="text-[32px] font-semibold leading-tight text-text-primary sm:text-[40px]">
            Skincare-Infused, Not Just Makeup
          </h2>
          <p className="text-base leading-[1.8] text-text-secondary">
            OURROLA is a hybrid lip treatment and aesthetic enhancer — built to deliver an
            instant, glossy plump while genuinely improving lip health over time.
          </p>

          <div className="mt-4 flex flex-col gap-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                  <benefit.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">{benefit.title}</h3>
                  <p className="text-sm leading-[1.7] text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video - right */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-[var(--shadow-card)]">
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
            <source src="/images/video/campaign.mp4" type="video/mp4" />
          </video>
        </div>
      </Container>
    </section>
  );
}