import Image from "next/image";
import { Container } from "@/components/ui/container";

export function ShopHero() {
  return (
    <section className="bg-primary-400 overflow-hidden">
      <Container className="grid gap-6 md:grid-cols-2 items-center py-10 md:py-16">
        <div className="relative aspect-[4/3] md:aspect-[4/3.4]">
          <Image
            src="/shop/shopheroimg.png"
            alt="Model shopping"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-600 leading-tight">
            Shop your style with ease!
          </h1>
          <p className="mt-4 text-indigo-900/70 max-w-lg md:mx-0 mx-auto">
            Discover Your Perfect Style: Easy Shopping, Unlimited Style Choices! Explore
            Fashion that Fits You Perfectly.
          </p>
        </div>
      </Container>
    </section>
  );
}
