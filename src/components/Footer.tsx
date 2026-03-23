import Link from "next/link";

const SHOP_LINKS = [
  { label: "Shop all", href: "/shop" },
  { label: "Tees & tops", href: "/shop?category=tees" },
  { label: "Hoodies", href: "/shop?category=hoodies" },
  { label: "Hats", href: "/shop?category=hats" },
  { label: "Accessories", href: "/shop?category=accessories" },
];

const CUSTOMER_LINKS = [
  { label: "Collections", href: "/collections" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Shipping & returns", href: "#shipping" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Pinterest", href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--charcoal)", color: "#fff" }}
      className="pt-16 pb-8"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-bold text-xl tracking-tight text-white hover:opacity-75 transition-opacity"
            >
              Bee&apos;s Tees
            </Link>
            <p style={{ color: "rgba(255,255,255,0.5)" }} className="text-sm mt-3 leading-relaxed max-w-56">
              Apparel designed to look good, wear well, and support
              pollinator-positive impact.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}>
              Shop
            </p>
            <ul className="flex flex-col gap-2.5">
              {SHOP_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}>
              Help
            </p>
            <ul className="flex flex-col gap-2.5">
              {CUSTOMER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}>
              Connect
            </p>
            <ul className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-6">
          <p style={{ color: "rgba(255,255,255,0.35)" }} className="text-xs">
            © {new Date().getFullYear()} Bee&apos;s Tees. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms", "Accessibility"].map((t) => (
              <a
                key={t}
                href="#"
                style={{ color: "rgba(255,255,255,0.35)" }}
                className="text-xs hover:text-white transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
