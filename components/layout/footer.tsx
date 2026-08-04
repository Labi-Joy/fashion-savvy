import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { brand, footerNav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-24 bg-indigo-600 text-white">
      <div className="container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 bg-white rounded-xl px-3 py-2">
            <Image src="/brand/logo.png" alt={brand.name} width={48} height={48} className="h-10 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            {brand.name} helps buyers and sellers of African-inspired fashion do business
            beautifully — from discovery to delivery.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { icon: Instagram, href: brand.socials.instagram, label: "Instagram" },
              { icon: Twitter, href: brand.socials.twitter, label: "Twitter" },
              { icon: Facebook, href: brand.socials.facebook, label: "Facebook" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-primary-400 hover:text-indigo-900 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Shop", links: footerNav.shop },
          { title: "Company", links: footerNav.company },
          { title: "Sell with us", links: footerNav.seller },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>Handmade with love in Lagos.</p>
        </div>
      </div>
    </footer>
  );
}
