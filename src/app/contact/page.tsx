import type { Metadata } from "next";
import { MessageCircle, Music2, Mail } from "lucide-react";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import Container from "@/components/ui/Container";
import { social } from "@/data/social";

export const metadata: Metadata = {
  title: "Contact — OURROLA",
  description:
    "Get in touch with OURROLA via WhatsApp, Instagram, TikTok, or email for questions, shade consultations, or partnership inquiries.",
};

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat directly with our team",
    href: social.whatsapp,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@ourrola.id",
    href: social.instagram,
  },
  {
    icon: Music2,
    label: "TikTok",
    value: "@ourrola.id",
    href: social.tiktok,
  },
  {
    icon: Mail,
    label: "Email",
    value: social.email,
    href: `mailto:${social.email}`,
  },
];

export default function ContactPage() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container className="flex flex-col items-center gap-4 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Contact
        </span>
        <h1 className="max-w-xl text-[36px] font-semibold leading-tight text-text-primary sm:text-[48px]">
          We’re Here to Help
        </h1>
        <p className="max-w-md text-base leading-[1.8] text-text-secondary">
          Reach out through any of the channels below for questions, shade consultations, or
          partnership inquiries.
        </p>
      </Container>

      <Container className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target="_blank"
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-white p-8 text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-accent">
              <channel.icon size={22} strokeWidth={2} />
            </div>
            <h3 className="text-base font-semibold text-text-primary">{channel.label}</h3>
            <p className="text-sm text-text-secondary">{channel.value}</p>
          </a>
        ))}
      </Container>
    </section>
  );
}
