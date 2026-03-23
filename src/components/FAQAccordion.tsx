"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  dark?: boolean;
}

export default function FAQAccordion({
  items,
  dark = false,
}: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: dark
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid var(--border)",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
            style={{ color: dark ? "#fff" : "var(--charcoal)" }}
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold">{item.q}</span>
            <span
              className="shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0)" }}
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          {open === i && (
            <p
              className="text-sm leading-relaxed pb-5 pr-8"
              style={{
                color: dark ? "rgba(255,255,255,0.65)" : "var(--gray-mid)",
              }}
            >
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
