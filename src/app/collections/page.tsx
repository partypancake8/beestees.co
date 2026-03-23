import Link from "next/link";
import CollectionCard from "@/components/CollectionCard";
import { COLLECTIONS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections — Bee's Tees",
  description:
    "Curated drops and collections from Bee's Tees. Seasonal releases with purpose.",
};

const HIGHLIGHTS = [
  {
    title: "Limited-run drops",
    desc: "Each collection is produced in limited quantities — when it's gone, it's gone.",
  },
  {
    title: "Premium materials",
    desc: "Heavyweight cotton, midweight fleece, and durable canvas built to outlast trends.",
  },
  {
    title: "Exclusive graphics",
    desc: "Original artwork and hand-drawn motifs you won't find anywhere else.",
  },
  {
    title: "Mission-backed",
    desc: "Every collection funds a specific pollinator initiative. See the impact page for details.",
  },
];

export default function CollectionsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────── */}
      <section
        style={{ backgroundColor: "var(--panel-dark)" }}
        className="py-20"
      >
        <div className="container-site flex flex-col items-center text-center gap-4">
          <span className="eyebrow" style={{ color: "var(--honey)" }}>
            Seasonal releases
          </span>
          <h1 className="display-xl" style={{ color: "#fff" }}>
            Curated drops &amp; collections
          </h1>
          <p
            className="text-base max-w-md"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Thoughtful pieces, limited quantities, and a portion of every sale
            going back to the field.
          </p>
        </div>
      </section>

      {/* ── Featured Collections Row ─────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site section-pad">
          <h2 className="display-md mb-8" style={{ color: "var(--charcoal)" }}>
            Current drops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COLLECTIONS.map((c) => (
              <CollectionCard key={c.slug} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Drops That Matter ────────────── */}
      <section style={{ backgroundColor: "var(--white)" }}>
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: text cards */}
            <div className="flex flex-col gap-4">
              <h2
                className="display-md mb-2"
                style={{ color: "var(--charcoal)" }}
              >
                Drops that mean something
              </h2>
              {COLLECTIONS.map((c) => (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  className="group flex items-center gap-4 p-4 rounded-xl transition-all hover:shadow-md"
                  style={{
                    backgroundColor: "var(--cream)",
                    border: "1px solid var(--border)",
                    color: "var(--charcoal)",
                  }}
                >
                  <div
                    className="img-placeholder rounded-lg shrink-0"
                    style={{ width: 64, height: 64 }}
                  >
                    <span className="text-[10px] opacity-40">Photo</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold group-hover:opacity-70 transition-opacity">
                      {c.name}
                    </p>
                    <p
                      className="text-xs mt-0.5 leading-relaxed truncate"
                      style={{ color: "var(--gray-mid)" }}
                    >
                      {c.description}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="shrink-0 opacity-40"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Right: large image */}
            <div
              className="img-placeholder rounded-2xl w-full sticky top-24"
              style={{ aspectRatio: "4/5" }}
            >
              <span className="text-xs opacity-40">
                Collection lifestyle photo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What makes them unique ───────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div
              className="img-placeholder rounded-2xl w-full"
              style={{ aspectRatio: "1/1" }}
            >
              <span className="text-xs opacity-40">Impact lifestyle photo</span>
            </div>
            {/* Highlights */}
            <div className="flex flex-col gap-6">
              <span className="eyebrow">What makes each drop different</span>
              <h2 className="display-md" style={{ color: "var(--charcoal)" }}>
                Every collection funds conservation
              </h2>
              <div className="flex flex-col gap-4 mt-2">
                {HIGHLIGHTS.map((h) => (
                  <div key={h.title} className="flex gap-3 items-start">
                    <div
                      className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ backgroundColor: "var(--honey)" }}
                    >
                      <svg
                        width="10"
                        height="10"
                        fill="none"
                        stroke="var(--charcoal)"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {h.title}
                      </p>
                      <p
                        className="text-sm mt-0.5 leading-relaxed"
                        style={{ color: "var(--gray-mid)" }}
                      >
                        {h.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────── */}
      <section
        style={{ backgroundColor: "var(--panel-dark)" }}
        className="py-16"
      >
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="display-md" style={{ color: "#fff" }}>
              Shop the latest drop
            </h2>
            <p
              className="text-sm mt-2 max-w-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              The Hive Drop is live. Limited units — once it&apos;s out,
              it&apos;s out.
            </p>
          </div>
          <Link
            href="/collections/the-hive-drop"
            className="btn-primary shrink-0"
          >
            Shop the drop
          </Link>
        </div>
      </section>

      {/* ── In the Wild Gallery ──────────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site section-pad">
          <h2 className="display-md mb-8" style={{ color: "var(--charcoal)" }}>
            In the wild
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="img-placeholder rounded-xl"
                style={{ aspectRatio: "1/1" }}
              >
                <span className="text-xs opacity-30">Lifestyle photo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
