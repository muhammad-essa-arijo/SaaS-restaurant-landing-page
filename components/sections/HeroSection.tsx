"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button, Section } from "@/components/ui";
import { smoothScroll } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-20"
      container={false}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1504674900968-3cc9f4dd0992?w=1400&h=900&fit=crop")',
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-2 text-sm font-medium text-gold-700"
            >
              <Sparkles className="h-4 w-4" />
              Award-Winning Excellence
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl font-bold leading-tight text-charcoal-900 md:text-6xl lg:text-7xl"
            >
              Experience Culinary
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">
                {" "}
                Excellence
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-lg leading-relaxed text-charcoal-600 md:text-xl"
            >
              Indulge in premium fine dining with our award-winning chef, exquisite
              menu, and impeccable service. Every dish tells a story of passion
              and perfection.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-8 pt-4"
            >
              {[
                { value: "15+", label: "Years" },
                { value: "2★", label: "Michelin" },
                { value: "10K+", label: "Guests" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-serif text-3xl font-bold text-gold-600">
                    {stat.value}
                  </p>
                  <p className="text-sm text-charcoal-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-8"
            >
              <Button
                size="lg"
                variant="primary"
                onClick={() => smoothScroll("booking")}
              >
                Book Your Table
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => smoothScroll("menu")}
              >
                Explore Menu
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => smoothScroll("about")}
          className="flex flex-col items-center gap-2 text-charcoal-900 hover:text-gold-500 transition-colors"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute right-10 top-1/3 hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="h-48 w-48 rounded-full bg-gradient-to-br from-gold-200 to-gold-100 blur-3xl opacity-30"></div>
      </motion.div>

      <motion.div
        className="absolute left-0 bottom-0 hidden lg:block"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-gold-100 to-cream-100 blur-3xl opacity-20"></div>
      </motion.div>
    </Section>
  );
}
