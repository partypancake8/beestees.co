import Link from "next/link";

interface CollectionCardProps {
  name: string;
  description: string;
  slug: string;
}

export default function CollectionCard({ name, description, slug }: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${slug}`}
      className="group block rounded-xl overflow-hidden"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--white)" }}
    >
      {/* Image */}
      <div className="img-placeholder w-full" style={{ aspectRatio: "4/3" }}>
        <span className="text-xs opacity-50">Collection photo</span>
      </div>

      {/* Text */}
      <div className="p-5">
        <p className="font-semibold text-base mb-1.5 group-hover:opacity-70 transition-opacity"
          style={{ color: "var(--charcoal)" }}>
          {name}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--gray-mid)" }}>
          {description}
        </p>
        <span
          className="inline-flex items-center gap-1 text-xs font-semibold mt-4"
          style={{ color: "var(--charcoal)" }}
        >
          View collection
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
