"use client";

import { motion } from "framer-motion";
import {
  Utensils,
  Users,
  Heart,
  Briefcase,
  Crown,
  Truck,
} from "lucide-react";
import { Card, Section } from "@/components/ui";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Utensils,
  Users,
  Heart,
  Briefcase,
  Crown,
  Truck,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function ServicesSection() {
  return (
    <Section id="services">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            From intimate dining to grand celebrations, we offer comprehensive
            services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <Card
                  hover
                  className="h-full space-y-4 group"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-gold-100 to-cream-100 group-hover:from-gold-200 group-hover:to-cream-200 transition-all">
                    {Icon && <Icon className="h-7 w-7 text-gold-600" />}
                  </div>

                  <h3 className="font-serif text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="text-charcoal-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-4">
                    <a
                      href="#booking"
                      className="inline-flex text-gold-600 font-medium hover:text-gold-700 transition-colors group-hover:translate-x-1 transition-transform"
                    >
                      Learn More →
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
