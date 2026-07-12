"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Badge, Button, Card, Section } from "@/components/ui";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

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

export function PricingSection() {
  return (
    <Section id="pricing">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Pricing Plans</h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Choose the perfect dining experience for any occasion.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div key={plan.id} variants={fadeInUp}>
              <Card
                padding="lg"
                className={cn(
                  "h-full flex flex-col transition-all duration-300",
                  plan.popular && "-translate-y-4 ring-2 ring-gold-500 shadow-xl"
                )}
              >
                {/* Header */}
                <div className="space-y-4 mb-8">
                  {plan.popular && (
                    <Badge variant="accent" size="sm" className="w-fit">
                      Most Popular
                    </Badge>
                  )}

                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-charcoal-600 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-4xl font-bold text-gold-600">
                      {plan.price}
                    </span>
                    <p className="text-charcoal-600 text-sm">{plan.period}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-4 mb-8 border-t border-charcoal-100 pt-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  size="md"
                  className="w-full"
                  onClick={() => {
                    const bookingSection = document.getElementById("booking");
                    bookingSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center space-y-4 pt-8 border-t border-charcoal-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-charcoal-600">
            Have questions? <span className="font-medium">Contact our team</span> for
            custom packages and special arrangements.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
