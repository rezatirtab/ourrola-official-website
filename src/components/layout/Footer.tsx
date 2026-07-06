import Link from "next/link";
import { MessageCircle, Music2, Mail } from "lucide-react";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { social } from "@/data/social";
import { brand } from "@/data/brand";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-10 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <span className="font-heading text-2xl font-semibold tracking-[0.15em] text-text-primary">
              {brand.name}
            </span>
            <p className="mt-4 text-sm leading-[1.8] text-text-secondary">
              {brand.description}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-text-primary">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-secondary hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-text-primary">
                Social
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={social.instagram}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary"
                  >
                    <InstagramIcon size={16} className="shrink-0" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={social.tiktok}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary"
                  >
                    <Music2 size={16} strokeWidth={2} /> TikTok
                  </a>
                </li>
                <li>
                  <a
                    href={social.whatsapp}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary"
                  >
                    <MessageCircle size={16} strokeWidth={2} /> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${social.email}`}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary"
                  >
                    <Mail size={16} strokeWidth={2} /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-xs text-text-secondary">
          © {year} {brand.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
