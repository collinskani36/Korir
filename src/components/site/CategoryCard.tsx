"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";

// Unsplash images — grayscale treatment applied via CSS
const categoryImages: Record<string, string> = {
  Household:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", // sofa / living room
  "Food & Groceries":
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80", // fresh produce
  "Electronics & Technology":
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80", // electronics flat lay
  "Business & Office":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", // clean desk
  "Hardware & Supplies":
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80", // tools
  "Personal & Shopping":
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80", // clothing
  Other:
    "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800&q=80", // abstract texture
};

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

interface CategoryCardProps {
  title: string;
  body: string;
  index: number;
}

export function CategoryCard({ title, body, index }: CategoryCardProps) {
  const [flipped, setFlipped] = useState(false);
  const image = categoryImages[title];
  const slug = slugify(title);

  const backCopy =
    title === "Other"
      ? "Not sure which category? Just describe what you need."
      : `Need something from ${title.toLowerCase()}? We'll source, collect and deliver.`;

  return (
    <li
      className="border-border border-r border-b"
      style={{ perspective: "1000px" }}
    >
      {/* Flip container */}
      <div
        className="relative h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "260px",
        }}
      >
        {/* FRONT */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          className="absolute inset-0 w-full text-left overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          aria-label={`${title} — tap to learn more`}
        >
          {/* Background image */}
          {image && (
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                filter: "grayscale(100%) contrast(1.05)",
              }}
            />
          )}

          {/* Gradient overlay — bottom-heavy */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.18) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative flex h-full flex-col justify-between p-8">
            <span
              className="text-white/40 font-mono text-xs tracking-widest"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="font-display text-white text-xl font-medium tracking-[-0.01em] uppercase">
                {title}
              </h3>
              <p className="text-white/60 mt-2 text-sm leading-relaxed">{body}</p>
              {/* Tap hint */}
              <p className="text-white/35 mt-5 text-[0.625rem] tracking-[0.2em] uppercase">
                Tap to request →
              </p>
            </div>
          </div>
        </button>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-foreground text-background flex flex-col justify-between p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setFlipped(false)}
            className="self-end text-background/40 hover:text-background transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>

          <div>
            <p className="text-background/40 text-[0.625rem] tracking-[0.2em] uppercase">
              {title}
            </p>
            <p className="mt-4 text-base leading-relaxed">{backCopy}</p>

            <Link
              to="/request"
              search={{ category: slug }}
              className="mt-8 inline-flex items-center gap-3 bg-background text-foreground px-6 py-3 text-xs font-medium tracking-[0.16em] uppercase transition-opacity hover:opacity-85 group"
            >
              Request Something
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
