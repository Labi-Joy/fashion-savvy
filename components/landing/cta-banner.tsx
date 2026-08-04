import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";

export function CtaBanner() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] bg-indigo-600 text-white relative overflow-hidden grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to grow your fashion business?
              </h2>
              <p className="mt-4 text-white/70 max-w-lg">
                Join hundreds of tailors, designers and stylists using FashionSavvy to run a
                calmer, more profitable business.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/dashboard/seller" variant="primary" size="lg">
                  Start selling
                </ButtonLink>
                <ButtonLink href="/shop" variant="outlined" size="lg" className="border-white text-white hover:bg-white/10">
                  Browse marketplace
                </ButtonLink>
              </div>
            </div>
            <div className="relative h-56 md:h-full min-h-[280px]">
              <Image
                src="/landing/ctaimg.png"
                alt="Fashion CTA"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
