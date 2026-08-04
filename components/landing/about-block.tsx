import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";
import { ArrowRight } from "lucide-react";

export function AboutBlock() {
  return (
    <section id="about" className="py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_1.4fr] lg:items-center">
        <Reveal>
          <div className="relative rounded-[var(--radius-card)] bg-primary-50 p-8 md:p-12 grid place-items-center aspect-[4/3.4]">
            <Image
              src="/brand/logo.png"
              alt="FashionSavvy"
              width={220}
              height={220}
              className="h-32 md:h-40 w-auto"
            />
            <ButtonLink href="#services" variant="ghost" size="sm" className="absolute bottom-4 left-4">
              Read More <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase">
            About Us
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-indigo-600 leading-tight">
            FashionSavvy helps make business easier!
          </h2>
          <p className="mt-6 text-ink-500 leading-relaxed max-w-2xl">
            Seamlessly manage customer information, effortlessly track measurements, promptly
            address order inquiries, and efficiently handle administrative tasks — improving
            customer satisfaction, reducing costs, and increasing profitability.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { stat: "12k+", label: "Happy buyers" },
              { stat: "850+", label: "Verified sellers" },
              { stat: "36", label: "States delivered" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-indigo-600 font-bold text-2xl md:text-3xl">{s.stat}</p>
                <p className="text-ink-500 text-xs md:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
