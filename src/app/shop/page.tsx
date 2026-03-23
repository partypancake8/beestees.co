import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { PRODUCTS, TESTIMONIALS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All — Bee's Tees",
  description: "Browse the full Bee's Tees lineup — tees, hoodies, hats, and accessories built for everyday wear.",
};

const FILTERS = ["All", "Tees", "Hoodies", "Hats", "Accessories"];
const SORTS = ["Best sellers", "New arrivals", "Price: low–high", "Price: high–low"];

export default function ShopAllPage() {
  return (
    <>
      {/* ── Hero Banner ──────────────────── */}
      <section style={{ backgroundColor: "var(--panel-dark)" }} className="py-20">
        <div className="container-site text-center flex flex-col items-center gap-4">
          <span className="eyebrow" style={{ color: "var(--honey)" }}>
            Bee&apos;s Tees store
          </span>
          <h1 className="display-xl" style={{ color: "#fff" }}>
            Shop all
          </h1>
          <p className="text-base max-w-md" style={{ color: "rgba(255,255,255,0.5)" }}>
            Everything we make — designed to wear well and built with purpose.
          </p>
        </div>
      </section>

      {/* ── Filter + Sort Bar ─────────────── */}
      <section style={{ backgroundColor: "var(--cream)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors"
                style={{
                  backgroundColor: f === "All" ? "var(--charcoal)" : "transparent",
                  color: f === "All" ? "#fff" : "var(--gray-mid)",
                  border: "1px solid",
                  borderColor: f === "All" ? "var(--charcoal)" : "var(--border)",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            className="text-xs font-medium px-3 py-1.5 rounded-lg cursor-pointer outline-none"
            style={{
              backgroundColor: "var(--white)",
              border: "1px solid var(--border)",
              color: "var(--charcoal)",
            }}
            defaultValue="Best sellers"
          >
            {SORTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </section>

      {/* ── Intro label ──────────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site pt-10 pb-2">
          <h2 className="heading-lg" style={{ color: "var(--charcoal)" }}>
            Everything
          </h2>
          <p className="text-sm mt-1" style={{ color: "var(--gray-mid)" }}>
            {PRODUCTS.length} products
          </p>
        </div>
      </section>

      {/* ── Product Grid ─────────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site pt-6 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ─────────────────── */}
      <section style={{ backgroundColor: "var(--panel-dark)" }} className="py-16">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="eyebrow" style={{ color: "var(--honey)" }}>
              Curated drop
            </span>
            <h2 className="display-md mt-2" style={{ color: "#fff" }}>
              Explore the Native Bloom
            </h2>
            <p className="text-sm mt-2 max-w-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Softly saturated tones and botanical motifs from the wildflower
              fields we&apos;re fighting to protect.
            </p>
          </div>
          <Link href="/collections/native-bloom" className="btn-primary shrink-0">
            View collection
          </Link>
        </div>
      </section>

      {/* ── Reviews ──────────────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site section-pad">
          <h2 className="display-md mb-8" style={{ color: "var(--charcoal)" }}>
            What people say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────── */}
      <section style={{ backgroundColor: "var(--white)" }}>
        <div className="container-site section-pad">
          <div className="max-w-lg flex flex-col gap-4">
            <span className="eyebrow">Join the hive</span>
            <h2 className="display-md" style={{ color: "var(--charcoal)" }}>
              Get new drops first
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--gray-mid)" }}>
              Sign up and be the first to know about new releases, limited
              drops, and impact updates.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* ── Brand Image Block ────────────── */}
      <section style={{ backgroundColor: "var(--charcoal)" }}>
        <div
          className="img-placeholder w-full"
          style={{ minHeight: "300px", aspectRatio: "21/6" }}
        >
          <span className="text-xs opacity-30">Brand banner photo</span>
        </div>
      </section>
    </>
  );
}
