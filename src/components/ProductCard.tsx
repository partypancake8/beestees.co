import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: number;
  slug: string;
  badge?: string | null;
}

export default function ProductCard({
  name,
  price,
  slug,
  badge,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block"
      style={{ color: "var(--charcoal)" }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden rounded-lg mb-3"
        style={{ aspectRatio: "3/4" }}
      >
        <div
          className="img-placeholder w-full h-full transition-transform duration-500 group-hover:scale-105"
          style={{ aspectRatio: "3/4" }}
        >
          <span className="text-xs opacity-50">Product photo</span>
        </div>
        {badge && (
          <span
            className="absolute top-3 left-3 text-xs font-semibold tracking-wide px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "var(--honey)",
              color: "var(--charcoal)",
            }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium leading-snug group-hover:opacity-70 transition-opacity">
          {name}
        </p>
        <p className="text-sm font-semibold shrink-0">${price}</p>
      </div>
    </Link>
  );
}
