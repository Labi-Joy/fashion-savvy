import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import { cn, formatPrice } from "@/lib/utils";
import { Rating } from "./rating";
import { WishlistButton } from "./wishlist-button";

type Variant = "default" | "overlay" | "compact";

export function ProductCard({
  product,
  variant = "default",
  className,
}: {
  product: Product;
  variant?: Variant;
  className?: string;
}) {
  if (variant === "overlay") {
    return (
      <Link
        href={`/product/${product.slug}`}
        className={cn(
          "group relative block rounded-[var(--radius-card)] overflow-hidden bg-white shadow-[var(--shadow-elev-2)] hover:shadow-[var(--shadow-elev-3)] transition-shadow",
          className,
        )}
      >
        <div className="relative aspect-[4/5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <WishlistButton slug={product.slug} className="absolute top-3 right-3" />
          <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 backdrop-blur px-4 py-3 text-center shadow-[var(--shadow-elev-2)]">
            <h3 className="text-indigo-600 font-bold text-base md:text-lg leading-tight">
              {product.name}
            </h3>
            <Rating value={product.rating} className="justify-center mt-1" />
            <p className="text-ink-500 text-xs mt-1">{product.vendor}</p>
            <p className="text-accent-400 font-bold text-sm mt-1">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/product/${product.slug}`}
        className={cn(
          "group relative block rounded-[var(--radius-card)] overflow-hidden",
          className,
        )}
      >
        <div className="relative aspect-square rounded-[var(--radius-card)] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 260px, (min-width: 640px) 40vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <WishlistButton slug={product.slug} className="absolute top-3 right-3" size="sm" />
        </div>
        <div className="pt-3 text-center">
          <h3 className="text-indigo-600 font-bold text-sm md:text-base">
            {product.name}
          </h3>
          <p className="text-accent-400 font-semibold text-sm mt-0.5">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn(
        "group block rounded-[var(--radius-card)] overflow-hidden bg-white shadow-[var(--shadow-elev-1)] hover:shadow-[var(--shadow-elev-3)] transition-shadow",
        className,
      )}
    >
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <WishlistButton slug={product.slug} className="absolute top-3 right-3" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-indigo-600 font-bold text-base leading-tight">{product.name}</h3>
        <Rating value={product.rating} className="justify-center mt-1.5" />
        <p className="text-ink-500 text-xs mt-1.5">{product.vendor}</p>
        <p className="text-accent-400 font-bold text-sm mt-1.5">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
