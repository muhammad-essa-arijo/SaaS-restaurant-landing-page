"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { RESTAURANT_DATA, NAVIGATION } from "@/lib/constants";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active link based on scroll position
      const sections = NAVIGATION.map((nav) => nav.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.getBoundingClientRect().top <= 100 &&
          element.getBoundingClientRect().bottom >= 100
        ) {
          setActiveLink(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const sectionId = href.slice(1);
    setActiveLink(sectionId);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-soft-lg backdrop-blur-md"
          : "bg-white/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500 text-white font-serif font-bold">
              L
            </div>
            <span className="font-serif text-xl font-bold text-charcoal-900">
              {RESTAURANT_DATA.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {NAVIGATION.map((nav) => {
              const sectionId = nav.href.slice(1);
              const isActive = activeLink === sectionId;
              return (
                <Link
                  key={nav.href}
                  href={nav.href}
                  onClick={() => handleNavClick(nav.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-gold-600"
                      : "text-charcoal-700 hover:text-gold-500"
                  )}
                >
                  {nav.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-500"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="rounded-lg p-2 hover:bg-charcoal-100 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gold-500" />
              ) : (
                <Moon className="h-5 w-5 text-charcoal-900" />
              )}
            </button>

            {/* Book Table Button */}
            <Link href="#booking">
              <Button
                size="sm"
                variant="primary"
                className="hidden sm:inline-flex"
              >
                Book Table
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-lg p-2 hover:bg-charcoal-100"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-charcoal-100 py-4 md:hidden">
            <div className="space-y-2">
              {NAVIGATION.map((nav) => (
                <Link
                  key={nav.href}
                  href={nav.href}
                  onClick={() => handleNavClick(nav.href)}
                  className="block px-4 py-2 text-charcoal-700 hover:bg-charcoal-50 rounded-lg transition-colors"
                >
                  {nav.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-charcoal-100">
                <Link href="#booking" onClick={() => handleNavClick("#booking")}>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    Book Table
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
