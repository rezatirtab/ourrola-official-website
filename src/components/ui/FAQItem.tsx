"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-base font-medium text-text-primary">{question}</span>
        <ChevronDown
          size={20}
          strokeWidth={2}
          className={`shrink-0 text-primary transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-[1.8] text-text-secondary">{answer}</p>
        </div>
      </div>
    </div>
  );
}
