import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { PRODUCTS, TESTIMONIALS } from "@/lib/data";

const STATS = [
  { value: "$127K", label: "Donated to pollinators" },
  { value: "8,400+", label: "Orders supporting bees" },
  { value: "12", label: "Community initiatives" },
  { value: "6", label: "Partner programs" },
];

const CATEGORIES = [
  { label: "Tees & tops", sub: "Everyday essentials", href: "/shop?category=tees" },
  { label: "Hoodies", sub: "Season-spanning layering", href: "/shop?category=hoodies" },
  { label: "Hats & extras", sub: "Finishing touches", href: "/shop?category=hats" },
  { label: "Gift ideas", sub: "For the people you like", href: "/shop?category=accessories" },
];

const essentials = PRODUCTS.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────── */}
      <section
        style={{ backgroundColor: "var(--cream)" }}
        className="overflow-hidden"
      >
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6 max-w-lg">
              <span className="eyebrow">New drop — The Hive Drop</span>
              <h1 className="display-xl" style={{ color: "var(--charcoal)" }}>
                Wear something that matters
              </h1>
              <p className="text-base leading-relaxed" style={{ color: "var(--gray-mid)" }}>
                Bee-inspired apparel designed to look good, wear well, and
                support pollinator-positive impact. No lectures, just good
                clothes with a reason behind them.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/shop" className="btn-primary">
                  Shop now
                </Link>
                <Link href="/collections" className="btn-outline">
                  View collections
                </Link>
              </div>
            </div>

            {/* Right — hero image */}
            <div className="relative">
              <div
                className="img-placeholder rounded-2xl w-full"
                style={{ aspectRatio: "4/5", minHeight: "420px" }}
              >
                <span className="text-xs opacity-40">Hero lifestyle photo</span>
              </div>
              {/* Floating tag */}
              <div
                className="absolute bottom-6 left-6 rounded-xl px-4 py-3 shadow-lg"
                style={{ backgroundColor: "var(--white)", border: "1px solid var(--border)" }}
              >
                <p className="text-xs font-semibold" style={{ color: "var(--charcoal)" }}>
                  Worker Bee Heavyweight Tee
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--gray-mid)" }}>
                  $55 — The Hive Drop
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Drop ────────────────── */}
      <section style={{ backgroundColor: "var(--white)" }}>
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="flex flex-col gap-5">
              <span className="eyebrow">Latest release</span>
              <h2 className="display-md" style={{ color: "var(--charcoal)" }}>
                The Hive Drop is here
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray-mid)" }}>
                A thoughtful everyday collection inspired by worker bees,
                structure, and utility. Built for the everyday — and for
                something a little larger than that.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Premium cotton", "Relaxed fit", "Mission-backed"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "var(--cream)",
                      color: "var(--charcoal)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/collections/the-hive-drop"
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--charcoal)" }}
              >
                Shop the drop
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div
              className="img-placeholder rounded-2xl w-full"
              style={{ aspectRatio: "5/4" }}
            >
              <span className="text-xs opacity-40">Drop lifestyle photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Essentials Grid ──────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site section-pad">
          <div className="flex items-end justify-between mb-8">
            <h2 className="display-md" style={{ color: "var(--charcoal)" }}>
              Essentials
            </h2>
            <Link
              href="/shop"
              className="text-sm font-semibold hover:opacity-60 transition-opacity hidden sm:flex items-center gap-1"
              style={{ color: "var(--charcoal)" }}
            >
              View all
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {essentials.map((p) => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ─────────────────── */}
      <section style={{ backgroundColor: "var(--panel-dark)" }} className="section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="eyebrow" style={{ color: "var(--honey)" }}>
                Real impact
              </span>
              <h2
                className="display-md mt-3"
                style={{ color: "#fff" }}
              >
                Real support for real change
              </h2>
              <p className="text-sm leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                Every purchase contributes to pollinator-positive work. Here&apos;s
                what the hive has made possible so far.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p
                    className="text-3xl font-bold tracking-tight"
                    style={{ color: "var(--honey)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-sm mt-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Credibility ────────────── */}
      <section style={{ backgroundColor: "var(--white)" }}>
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div
              className="img-placeholder rounded-2xl w-full order-2 md:order-1"
              style={{ aspectRatio: "1/1", minHeight: "380px" }}
            >
              <span className="text-xs opacity-40">Brand lifestyle photo</span>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-5 order-1 md:order-2">
              <h2 className="display-md" style={{ color: "var(--charcoal)" }}>
                Built for bees, worn by humans
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray-mid)" }}>
                We started Bee&apos;s Tees because we wanted something that looked
                good and meant something. Turns out a lot of people feel the same
                way. Premium fabrics, thoughtful design, and a piece of every
                sale going toward the pollinators that keep things alive.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                {["B Corp Pending", "1% for the Planet", "Printed in the USA"].map((b) => (
                  <div
                    key={b}
                    className="text-xs font-medium px-3 py-2 rounded-lg"
                    style={{
                      backgroundColor: "var(--cream)",
                      color: "var(--charcoal)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Finder ──────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site section-pad">
          <h2 className="display-md mb-8" style={{ color: "var(--charcoal)" }}>
            Find your fit
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative overflow-hidden rounded-xl"
                style={{ aspectRatio: "3/4" }}
              >
                <div className="img-placeholder absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <span className="text-xs opacity-30">Category photo</span>
                </div>
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                  }}
                >
                  <p className="text-sm font-semibold text-white leading-snug">
                    {cat.label}
                  </p>
                  <p className="text-xs text-white/60 mt-0.5">{cat.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder/Story ────────────────── */}
      <section style={{ backgroundColor: "var(--white)" }}>
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="flex flex-col gap-5">
              <span className="eyebrow">Our story</span>
              <h2 className="display-md" style={{ color: "var(--charcoal)" }}>
                Wear it like you mean it
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray-mid)" }}>
                Bee&apos;s Tees is an apparel brand built on a simple idea: clothing
                should look great and do something useful. We design pieces
                people actually wear — and put a real portion of every sale
                toward supporting the pollinators that the natural world
                depends on.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray-mid)" }}>
                No corporate greenwashing. No over-the-top bee puns. Just
                well-made clothes with a reason behind them.
              </p>
              <Link href="#about" className="btn-dark self-start mt-2">
                About Bee&apos;s Tees
              </Link>
            </div>

            {/* Portrait */}
            <div
              className="img-placeholder rounded-2xl w-full"
              style={{ aspectRatio: "4/5" }}
            >
              <span className="text-xs opacity-40">Founder portrait</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }} id="reviews">
        <div className="container-site section-pad">
          <h2 className="display-md mb-8" style={{ color: "var(--charcoal)" }}>
            Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────── */}
      <section style={{ backgroundColor: "var(--panel-dark)" }} id="newsletter">
        <div className="container-site section-pad">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <span className="eyebrow" style={{ color: "var(--honey)" }}>
              Stay in the loop
            </span>
            <h2 className="display-md" style={{ color: "#fff" }}>
              Join the hive
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Get early access to drops, impact updates, and the occasional
              field note from the team. No spam, ever.
            </p>
            <NewsletterSignup dark />
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* ── Community Gallery ────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site section-pad">
          <h2 className="display-md mb-8" style={{ color: "var(--charcoal)" }}>
            Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="img-placeholder rounded-xl overflow-hidden"
                style={{ aspectRatio: "1/1" }}
              >
                <span className="text-xs opacity-30">UGC photo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
