import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FAQItem from "@/components/ui/FAQItem";
import { faq } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />

        <div className="mx-auto w-full max-w-2xl">
          {faq.map((item) => (
            <FAQItem key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
}
