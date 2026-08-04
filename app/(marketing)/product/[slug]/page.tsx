import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ProductGallery } from "@/components/product/gallery";
import { AddToCart } from "@/components/product/add-to-cart";
import { Rating } from "@/components/product/rating";
import { ReviewCard } from "@/components/product/review-card";
import { ProductCard } from "@/components/product/product-card";
import {
  getProduct,
  getRelatedProducts,
  getReviewsForProduct,
  products,
} from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const reviews = getReviewsForProduct(slug);
  const related = getRelatedProducts(slug, 4);

  return (
    <div className="py-8 md:py-12">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          {product.breadcrumbs.map((crumb, i) => (
            <span key={crumb} className="flex items-center gap-2">
              <Link
                href="/shop"
                className="text-indigo-600 font-semibold hover:text-primary-500"
              >
                {crumb}
              </Link>
              {i < product.breadcrumbs.length - 1 && (
                <ChevronRight className="h-4 w-4 text-ink-400" />
              )}
            </span>
          ))}
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.gallery} alt={product.name} />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-indigo-600">
              {product.name}
            </h1>
            <div className="mt-3">
              <Rating value={product.rating} count={product.ratingCount} size="md" showCount />
            </div>
            <div className="mt-6">
              <AddToCart product={product} />
            </div>
          </div>
        </div>

        <section className="mt-16 md:mt-24">
          <SectionHeading title="Style Info" align="left" />
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
            <p className="text-ink-500 leading-relaxed">
              {product.description} Fits true to size. If you are between sizes, we
              recommend sizing up for a more relaxed fit. Available in a range of colours
              and made to order in Lagos.
            </p>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-primary-50">
              <Image
                src="/product/womensizeguide.png"
                alt="Women size guide"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </section>

        {reviews.length > 0 && (
          <section className="mt-16 md:mt-24">
            <SectionHeading title={`Reviews (${reviews.length})`} align="left" />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <SectionHeading title="You may also like" align="left" />
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((r) => (
                <ProductCard key={r.slug} product={r} variant="compact" />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
