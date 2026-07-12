"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <Section id="testimonials" dark>
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Guest Stories</h2>
          <p className="text-lg text-cream-200 max-w-2xl mx-auto">
            Hear from our valued guests about their dining experiences.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl"
            >
              <Card
                padding="lg"
                className="border-gold-500/30 bg-charcoal-800/50 backdrop-blur-sm space-y-6"
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl leading-relaxed text-cream-100">
                  &ldquo;{current.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-charcoal-700">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{current.name}</p>
                    <p className="text-sm text-cream-300">{current.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={prev}
              className="rounded-full bg-gold-500 p-3 hover:bg-gold-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 bg-gold-500"
                      : "w-2 bg-charcoal-600 hover:bg-charcoal-500"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="rounded-full bg-gold-500 p-3 hover:bg-gold-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Counter */}
          <div className="mt-6 text-center text-sm text-cream-300">
            {currentIndex + 1} / {TESTIMONIALS.length}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
