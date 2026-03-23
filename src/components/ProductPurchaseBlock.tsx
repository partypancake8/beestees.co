"use client";

import { useState } from "react";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const COLORS = [
  { name: "Cream", hex: "#F5F1E8" },
  { name: "Charcoal", hex: "#3A3835" },
  { name: "Honey", hex: "#E3B93C" },
];

interface ProductPurchaseBlockProps {
  name: string;
  price: number;
  description: string;
}

export default function ProductPurchaseBlock({
  name,
  price,
  description,
}: ProductPurchaseBlockProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState("Cream");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title + price */}
      <div>
        <h1 className="display-md" style={{ color: "var(--charcoal)" }}>
          {name}
        </h1>
        <p className="text-xl font-semibold mt-1" style={{ color: "var(--charcoal)" }}>
          ${price}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--gray-mid)" }}>
        {description}
      </p>

      {/* Color */}
      <div>
        <p className="text-xs font-semibold mb-2.5 tracking-wide uppercase"
          style={{ color: "var(--charcoal)" }}>
          Color — <span className="normal-case font-normal" style={{ color: "var(--gray-mid)" }}>{selectedColor}</span>
        </p>
        <div className="flex gap-2">
          {COLORS.map((c) => (
            <button
              key={c.name}
              aria-label={c.name}
              onClick={() => setSelectedColor(c.name)}
              className="w-8 h-8 rounded-full transition-all"
              style={{
                backgroundColor: c.hex,
                border:
                  selectedColor === c.name
                    ? "2.5px solid var(--charcoal)"
                    : "1.5px solid var(--border)",
                outline:
                  selectedColor === c.name
                    ? "2px solid var(--cream)"
                    : "none",
                outlineOffset: "1px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-xs font-semibold tracking-wide uppercase"
            style={{ color: "var(--charcoal)" }}>
            Size
          </p>
          <button className="text-xs underline" style={{ color: "var(--gray-mid)" }}>
            Size guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className="w-12 h-10 text-xs font-semibold rounded-lg transition-all"
              style={{
                backgroundColor:
                  selectedSize === s ? "var(--charcoal)" : "transparent",
                color: selectedSize === s ? "#fff" : "var(--charcoal)",
                border: `1.5px solid ${selectedSize === s ? "var(--charcoal)" : "var(--border)"}`,
              }}
            >
              {s}
            </button>
          ))}
        </div>
        {!selectedSize && (
          <p className="text-xs mt-1.5" style={{ color: "var(--gray-mid)" }}>
            Please select a size
          </p>
        )}
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--charcoal)" }}>
          Qty
        </p>
        <div
          className="flex items-center rounded-lg overflow-hidden"
          style={{ border: "1.5px solid var(--border)" }}
        >
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
            style={{ color: "var(--charcoal)" }}
          >
            −
          </button>
          <span
            className="w-10 text-center text-sm font-semibold"
            style={{ color: "var(--charcoal)" }}
          >
            {qty}
          </span>
          <button
            onClick={() => setQty(qty + 1)}
            className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
            style={{ color: "var(--charcoal)" }}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        disabled={!selectedSize}
        className="btn-primary w-full py-4 text-base"
        style={{ opacity: selectedSize ? 1 : 0.5, cursor: selectedSize ? "pointer" : "not-allowed" }}
      >
        {added ? "Added to cart ✓" : "Add to cart"}
      </button>

      {/* Shipping note */}
      <p className="text-xs text-center" style={{ color: "var(--gray-mid)" }}>
        Free shipping on orders over $75 · Easy returns within 30 days
      </p>

      {/* Mission block */}
      <div
        className="rounded-xl p-4 flex gap-3 items-start mt-1"
        style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border)" }}
      >
        <span className="text-lg shrink-0">🌿</span>
        <div>
          <p className="text-xs font-semibold" style={{ color: "var(--charcoal)" }}>
            This purchase supports pollinator-positive impact
          </p>
          <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--gray-mid)" }}>
            A portion of every order contributes to bee and pollinator support
            through Bee&apos;s Tees impact initiatives.
          </p>
        </div>
      </div>
    </div>
  );
}
