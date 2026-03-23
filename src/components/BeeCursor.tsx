"use client";

import { useEffect, useRef, useState } from "react";

export default function BeeCursor() {
  const beeRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const target = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only activate on non-touch devices
    if ("ontouchstart" in window) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    // Add cursor-none class to body
    document.body.classList.add("bee-cursor-active");

    // Smooth lag loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12);

      if (beeRef.current) {
        beeRef.current.style.left = `${pos.current.x}px`;
        beeRef.current.style.top = `${pos.current.y}px`;

        // Tilt bee based on horizontal movement direction
        const dx = target.current.x - pos.current.x;
        const tilt = Math.max(-25, Math.min(25, dx * 1.5));
        beeRef.current.style.transform = `translate(-50%, -50%) rotate(${tilt}deg)`;
      }

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.body.classList.remove("bee-cursor-active");
      cancelAnimationFrame(raf.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      id="bee-cursor"
      ref={beeRef}
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left wing — flaps */}
        <ellipse
          cx="7"
          cy="14"
          rx="6"
          ry="3.4"
          fill="white"
          fillOpacity="0.78"
          style={{
            transformOrigin: "13px 14px",
            animation: "wingFlap 0.28s ease-in-out infinite",
          }}
        />
        {/* Right wing — flaps opposite */}
        <ellipse
          cx="25"
          cy="14"
          rx="6"
          ry="3.4"
          fill="white"
          fillOpacity="0.78"
          style={{
            transformOrigin: "19px 14px",
            animation: "wingFlapR 0.28s ease-in-out infinite 0.14s",
          }}
        />
        {/* Body */}
        <ellipse cx="16" cy="21" rx="5" ry="6.5" fill="#1D1D1B" />
        {/* Stripes */}
        <rect x="11" y="18.5" width="10" height="2.2" rx="1.1" fill="#E3B93C" />
        <rect x="12" y="22.2" width="8" height="1.8" rx="0.9" fill="#E3B93C" />
        {/* Head */}
        <circle cx="16" cy="11.5" r="3.8" fill="#1D1D1B" />
        {/* Antennae */}
        <line x1="14.2" y1="8.2" x2="11.5" y2="4.5" stroke="#1D1D1B" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="17.8" y1="8.2" x2="20.5" y2="4.5" stroke="#1D1D1B" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="11" cy="4" r="1.3" fill="#E3B93C" />
        <circle cx="21" cy="4" r="1.3" fill="#E3B93C" />
        {/* Eyes */}
        <circle cx="14.5" cy="11" r="0.9" fill="white" />
        <circle cx="17.5" cy="11" r="0.9" fill="white" />
      </svg>
    </div>
  );
}
