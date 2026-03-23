"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Shop all", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div
        style={{ backgroundColor: "var(--charcoal)", color: "var(--honey)" }}
        className="text-center text-xs font-medium tracking-wide py-2 px-4"
      >
        Free shipping on orders over $75 &nbsp;·&nbsp; Every tee supports
        pollinator-positive impact
      </div>

      {/* Header */}
      <header
        style={{
          backgroundColor: "var(--cream)",
          borderBottom: "1px solid var(--border)",
        }}
        className="sticky top-0 z-50"
      >
        <div className="container-site flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            style={{ color: "var(--charcoal)" }}
            className="font-bold text-xl tracking-tight hover:opacity-75 transition-opacity"
          >
            Bee&apos;s Tees
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ color: "var(--charcoal)" }}
                className="text-sm font-medium hover:opacity-60 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Utility icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              aria-label="Search"
              style={{ color: "var(--charcoal)" }}
              className="hidden md:flex hover:opacity-60 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Account */}
            <button
              aria-label="Account"
              style={{ color: "var(--charcoal)" }}
              className="hidden md:flex hover:opacity-60 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              style={{ color: "var(--charcoal)" }}
              className="relative hover:opacity-60 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span
                style={{
                  backgroundColor: "var(--honey)",
                  color: "var(--charcoal)",
                }}
                className="absolute -top-1.5 -right-1.5 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none"
              >
                0
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "var(--charcoal)" }}
              className="md:hidden hover:opacity-60 transition-opacity"
            >
              {menuOpen ? (
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: "var(--cream)",
              borderTop: "1px solid var(--border)",
            }}
            className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ color: "var(--charcoal)" }}
                className="text-base font-medium hover:opacity-60 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
