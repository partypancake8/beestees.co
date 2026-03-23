"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface AnimateInProps {
  children: ReactNode;
  anim?: "fade-up" | "fade-left" | "fade-right" | "scale-in";
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  className?: string;
  as?: ElementType;
}

export default function AnimateIn({
  children,
  anim = "fade-up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      data-anim={anim}
      className={`animate-in ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
