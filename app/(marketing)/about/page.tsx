import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, RevealGroup } from "@/components/common/reveal";
import { Testimonials } from "@/components/landing/testimonials";
import { CtaBanner } from "@/components/landing/cta-banner";
import { team } from "@/lib/data";

export const metadata = { title: "About us — FashionSavvy" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary-400">
        <Container className="py-16 md:py-24 text-center max-w-3xl">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-indigo-600">About Us</h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-indigo-600">
              Empowering Small Fashion Businesses For Digital Success!
            </h2>
            <p className="mt-6 text-indigo-900/80 leading-relaxed">
              FashionSavvy is the ultimate solution for small fashion enterprises,
              revolutionizing online business management. We simplify customer interactions,
              streamline invoicing, offer a diverse style catalogue, ensure quality assurance,
              and integrate seamless logistics. Empower your business with FashionSavvy and
              elevate your online presence effortlessly.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Our vision" title="Reach every fashion enterprise, in every city." align="left" />
            <p className="mt-6 text-ink-500 leading-relaxed">
              To help small fashion businesses tackle their challenges in managing customer
              details, measurements, and paperwork. Our platform makes it easy for you to
              keep track of everything, from booking orders to generating invoices. With our
              catalogue of outfit sketches and easy payment options, your customers will love
              shopping with you. Plus, we make sure orders are right and offer a feedback
              system to keep improving. Partnering with a delivery company means your clothes
              get to your customers hassle-free.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] rounded-2xl bg-primary-400 overflow-hidden">
              <Image src="/team/map.png" alt="Global reach" fill sizes="(min-width:1024px) 520px, 90vw" className="object-contain p-6" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-primary-50">
        <Container>
          <SectionHeading eyebrow="Our team" title="Meet the humans behind FashionSavvy" />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05} className="text-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-[var(--shadow-elev-2)]">
                  <Image src={m.image} alt={m.name} fill sizes="(min-width:1024px) 260px, 45vw" className="object-cover" />
                </div>
                <p className="mt-4 text-ink-500 text-xs uppercase tracking-widest">{m.role}</p>
                <p className="mt-1 text-indigo-600 font-bold text-lg">{m.name}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
