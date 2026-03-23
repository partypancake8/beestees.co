import { notFound } from "next/navigation";
import ProductPurchaseBlock from "@/components/ProductPurchaseBlock";
import TestimonialCard from "@/components/TestimonialCard";
import ProductCard from "@/components/ProductCard";
import FAQAccordion from "@/components/FAQAccordion";
import { PRODUCTS, TESTIMONIALS } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Bee's Tees`,
    description: product.description,
  };
}

const PRODUCT_DETAILS = {
  features: [
    "280gsm heavyweight cotton jersey",
    "Relaxed, unisex fit — true to size",
    "Hand-drawn bee graphic, screen printed",
    "Ribbed crewneck collar",
    "Double-needle stitching at hem and sleeves",
  ],
  materials: [
    "100% US-grown organic cotton",
    "Water-based, non-toxic screen printing inks",
    "GOTS certified fabric",
  ],
  care: [
    "Machine wash cold, inside out",
    "Tumble dry low",
    "Do not bleach or dry clean",
    "Iron on low if needed — avoid graphic",
  ],
  shipping: [
    "Standard shipping: 4–7 business days",
    "Expedited shipping: 2–3 business days",
    "Orders ship within 1–2 business days",
    "Free returns within 30 days of receipt",
  ],
};

const BENEFIT_SECTIONS = [
  {
    heading: "Built to wear and built to last",
    body: "We use 280gsm heavyweight cotton that holds its shape and gets better with every wash. Not thin. Not disposable.",
  },
  {
    heading: "Single-ply organic cotton jersey",
    body: "Sourced from USA-grown certified organic fields. No synthetic blends, no compromises.",
  },
  {
    heading: "True to size with relaxed body fit",
    body: "Designed for all bodies. Size up if you want more oversized. Size down if you want it fitted.",
  },
  {
    heading: "Wash cold, dry low, wear forever",
    body: "Machine washable. The graphic stays crisp because we print with high-quality water-based inks.",
  },
  {
    heading: "Works with everything, stands on its own",
    body: "Pair it with shorts, layer it under a jacket, wear it to the farmers market or to a show. It works.",
  },
  {
    heading: "We stand behind every tee we make",
    body: "If something goes wrong — a print error, a quality issue — reach out. We'll make it right.",
  },
];

const ACCORDION_ITEMS = [
  { q: "Features", a: PRODUCT_DETAILS.features.join(" · ") },
  { q: "Materials", a: PRODUCT_DETAILS.materials.join(" · ") },
  { q: "Fit & sizing", a: "True to size with a relaxed body. Measure your chest and compare to the size chart before ordering." },
  { q: "Care instructions", a: PRODUCT_DETAILS.care.join(" · ") },
  { q: "Shipping & returns", a: PRODUCT_DETAILS.shipping.join(" · ") },
];

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 6);

  return (
    <>
      {/* ── Product Header ───────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image gallery */}
            <div className="flex flex-col gap-3">
              {/* Main image */}
              <div
                className="img-placeholder rounded-2xl w-full"
                style={{ aspectRatio: "4/5" }}
              >
                <span className="text-xs opacity-40">Product photo</span>
              </div>
              {/* Thumbnail row */}
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="img-placeholder rounded-lg cursor-pointer"
                    style={{
                      aspectRatio: "1/1",
                      border: i === 0 ? "2px solid var(--charcoal)" : "2px solid transparent",
                    }}
                  >
                    <span className="text-[9px] opacity-30">Photo</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase block */}
            <div className="sticky top-24">
              <ProductPurchaseBlock
                name={product.name}
                price={product.price}
                description={product.description}
              />

              {/* Product detail accordions */}
              <div className="mt-8">
                <FAQAccordion items={ACCORDION_ITEMS} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefit Sections ─────────────── */}
      <section style={{ backgroundColor: "var(--white)" }}>
        <div className="container-site section-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BENEFIT_SECTIONS.map((b, i) => (
              <div
                key={i}
                className="flex gap-5 items-start p-5 rounded-xl"
                style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border)" }}
              >
                <div
                  className="img-placeholder rounded-lg shrink-0"
                  style={{ width: 72, height: 72 }}
                >
                  <span className="text-[10px] opacity-30">Photo</span>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--charcoal)" }}>
                    {b.heading}
                  </p>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--gray-mid)" }}>
                    {b.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-site section-pad">
          <div className="flex items-end justify-between mb-8">
            <h2 className="display-md" style={{ color: "var(--charcoal)" }}>
              Real reviews
            </h2>
            <div className="flex items-center gap-1.5">
              <span className="stars text-sm">★★★★★</span>
              <span className="text-sm font-semibold" style={{ color: "var(--charcoal)" }}>5.0</span>
              <span className="text-xs" style={{ color: "var(--gray-mid)" }}>(48 reviews)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Products ─────────────── */}
      <section style={{ backgroundColor: "var(--white)" }}>
        <div className="container-site section-pad">
          <h2 className="display-md mb-8" style={{ color: "var(--charcoal)" }}>
            Explore
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
