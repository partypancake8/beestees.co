"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  dark?: boolean;
}

export default function NewsletterSignup({ dark = false }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <p
          className="text-sm font-medium"
          style={{ color: dark ? "var(--honey)" : "var(--charcoal)" }}
        >
          You&apos;re in. Welcome to the hive.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 text-sm px-4 py-3 rounded-lg outline-none transition-all"
            style={{
              backgroundColor: dark ? "rgba(255,255,255,0.08)" : "var(--white)",
              border: dark
                ? "1px solid rgba(255,255,255,0.15)"
                : "1px solid var(--border)",
              color: dark ? "#fff" : "var(--charcoal)",
            }}
          />
          <button type="submit" className="btn-primary shrink-0">
            Join the hive
          </button>
        </form>
      )}
    </div>
  );
}
