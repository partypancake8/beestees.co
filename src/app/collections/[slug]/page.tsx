import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import { COLLECTIONS, PRODUCTS, TESTIMONIALS, FAQS } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = COLLECTIONS.find((c) => c.slug === slug);
  if (!collection) return {};
  return {
    title: `${collection.name} — Bee's Tees`,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug } = await params;
  const collection = COLLECTIONS.find((c) => c.slug === slug);
  if (!collection) notFound();

  const products = PRODUCTS.filter((p) => p.collection === slug);

  return (
    <>
      {/* ── Collection Hero ──────────────── */}
      <section
        style={{ backgroundColor: "var(--panel-dark)" }}
        className="py-24"
      >
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "var(--honey)" }}>
              Collection
            </span>
            <h1 className="display-xl mt-3" style={{ color: "#fff" }}>
              {collection.name}
            </h1>
            <p
              className="text-base mt-4 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {collection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Collection hero image strip */}
      <div
        className="img-placeholder w-full"
        style={{ height: "320px", borderRadius: 0 }}
      >
        <span className="text-xs opacity-30">Collection hero photo</span>
      </div>

      {/* ── Supporting Intro Banner ──────── */}
      <section style={{ backgroundColor: "var(--white)" }}>
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow">The curation</span>
              <h2
                className="display-md mt-3"
                style={{ color: "var(--charcoal)" }}
              >
                Thoughtfully curated
              </h2>
              <p
                className="text-sm leading-relaxed mt-4"
                style={{ color: "var(--gray-mid)" }}
              >
                Every piece in this collection was selected for its wearability,
                quality, and connection to the Bee&apos;s Tees mission. These
                aren&apos;t just clothes — they&apos;re the ones you&apos;ll
                reach for first.
              </p>
            </div>
            <div
              className="img-placeholder rounded-2xl"
              style={{ aspectRatio: "5/3" }}
            >
              <span className="text-xs opacity-40">
                Collection detail photo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Grid ─────────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site section-pad">
          <div className="flex items-end justify-between mb-8">
            <h2 className="display-md" style={{ color: "var(--charcoal)" }}>
              Shop
            </h2>
            <p className="text-sm" style={{ color: "var(--gray-mid)" }}>
              {products.length} pieces
            </p>
          </div>
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {products.map((p) => (
                <ProductCard key={p.slug} {...p} />
              ))}
            </div>
          ) : (
            /* Fallback: show all products if collection filter yields nothing */
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {PRODUCTS.slice(0, 6).map((p) => (
                <ProductCard key={p.slug} {...p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Impact Block ─────────────────── */}
      <section style={{ backgroundColor: "var(--white)" }}>
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">Making an impact</span>
              <h2 className="display-md" style={{ color: "var(--charcoal)" }}>
                Every item funds pollinator gardens
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--gray-mid)" }}
              >
                A portion of each purchase from this collection contributes to
                pollinator-positive work through Bee&apos;s Tees giving efforts
                — including urban wildflower corridors and conservation
                partnership programs.
              </p>
              <div
                className="flex items-start gap-3 p-4 rounded-xl mt-2"
                style={{
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-lg"
                  style={{ backgroundColor: "var(--honey)" }}
                >
                  🌼
                </div>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--charcoal)" }}
                >
                  <strong>Transparency note:</strong> We publish our impact
                  figures annually. Sign up for the newsletter to get the latest
                  update.
                </p>
              </div>
            </div>
            <div
              className="img-placeholder rounded-2xl w-full"
              style={{ aspectRatio: "4/5" }}
            >
              <span className="text-xs opacity-40">
                Mission lifestyle photo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }} id="faq">
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="display-md" style={{ color: "var(--charcoal)" }}>
                Questions
              </h2>
              <p className="text-sm mt-3" style={{ color: "var(--gray-mid)" }}>
                Everything you need to know about this collection.
              </p>
            </div>
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────── */}
      <section style={{ backgroundColor: "var(--white)" }}>
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

      {/* ── CTA Banner ───────────────────── */}
      <section
        style={{ backgroundColor: "var(--panel-dark)" }}
        className="py-16"
      >
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="display-md" style={{ color: "#fff" }}>
              Ready to make an impact
            </h2>
            <p
              className="text-sm mt-2 max-w-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Every piece you wear, every purchase you make — it adds up.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/shop" className="btn-primary">
              Shop all
            </Link>
            <Link href="/collections" className="btn-outline-light">
              All collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
