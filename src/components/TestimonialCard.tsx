interface TestimonialCardProps {
  name: string;
  product?: string;
  rating: number;
  quote: string;
  dark?: boolean;
}

export default function TestimonialCard({
  name,
  product,
  rating,
  quote,
  dark = false,
}: TestimonialCardProps) {
  return (
    <div
      className="rounded-xl p-6 flex flex-col gap-4"
      style={{
        backgroundColor: dark ? "rgba(255,255,255,0.06)" : "var(--white)",
        border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid var(--border)",
        color: dark ? "#fff" : "var(--charcoal)",
      }}
    >
      <div className="stars text-base">{"★".repeat(rating)}</div>
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: dark ? "rgba(255,255,255,0.8)" : "var(--charcoal)" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-sm font-semibold">{name}</p>
        {product && (
          <p className="text-xs mt-0.5" style={{ color: dark ? "rgba(255,255,255,0.4)" : "var(--gray-mid)" }}>
            {product}
          </p>
        )}
      </div>
    </div>
  );
}
