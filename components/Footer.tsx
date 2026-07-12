import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { RESTAURANT_DATA } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Main Footer */}
      <div className="border-b border-charcoal-800 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500">
                  <span className="font-serif font-bold">L</span>
                </div>
                <span className="font-serif text-xl font-bold">
                  {RESTAURANT_DATA.name}
                </span>
              </div>
              <p className="text-cream-200">
                Premium fine dining experience with award-winning cuisine and
                service.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href={RESTAURANT_DATA.social.instagram}
                  className="rounded-lg bg-gold-500 p-2 hover:bg-gold-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={RESTAURANT_DATA.social.facebook}
                  className="rounded-lg bg-gold-500 p-2 hover:bg-gold-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={RESTAURANT_DATA.social.twitter}
                  className="rounded-lg bg-gold-500 p-2 hover:bg-gold-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={RESTAURANT_DATA.social.linkedIn}
                  className="rounded-lg bg-gold-500 p-2 hover:bg-gold-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "#hero" },
                  { label: "About", href: "#about" },
                  { label: "Menu", href: "#menu" },
                  { label: "Reservations", href: "#booking" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream-200 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold">Contact</h4>
              <div className="space-y-3">
                <a
                  href={`tel:${RESTAURANT_DATA.phone}`}
                  className="flex items-center gap-3 text-cream-200 hover:text-gold-400 transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  {RESTAURANT_DATA.phone}
                </a>
                <a
                  href={`mailto:${RESTAURANT_DATA.email}`}
                  className="flex items-center gap-3 text-cream-200 hover:text-gold-400 transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  {RESTAURANT_DATA.email}
                </a>
                <div className="flex items-start gap-3 text-cream-200">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>{RESTAURANT_DATA.address}</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold">Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-cream-200">
                  <span>Mon:</span>
                  <span>{RESTAURANT_DATA.hours.monday}</span>
                </div>
                <div className="flex justify-between text-cream-200">
                  <span>Tue - Thu:</span>
                  <span>{RESTAURANT_DATA.hours.tuesday}</span>
                </div>
                <div className="flex justify-between text-cream-200">
                  <span>Fri:</span>
                  <span>{RESTAURANT_DATA.hours.friday}</span>
                </div>
                <div className="flex justify-between text-cream-200">
                  <span>Sat:</span>
                  <span>{RESTAURANT_DATA.hours.saturday}</span>
                </div>
                <div className="flex justify-between text-cream-200">
                  <span>Sun:</span>
                  <span>{RESTAURANT_DATA.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-cream-300">
              © {currentYear} {RESTAURANT_DATA.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-cream-300">
              <Link href="#" className="hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-gold-400 transition-colors">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
