"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui";
import { Accordion } from "@/components/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function FAQSection() {
  const accordionItems = FAQ_ITEMS.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  return (
    <Section id="faq">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and dining
            experiences.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="mx-auto max-w-3xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Accordion items={accordionItems} allowMultiple />
        </motion.div>

        {/* Additional Help */}
        <motion.div
          className="text-center space-y-4 rounded-2xl bg-charcoal-50 p-8 border border-charcoal-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="font-serif text-xl font-semibold">Can&apos;t find your answer?</h3>
          <p className="text-charcoal-600 mb-4">
            Our team is here to help. Contact us for any additional questions.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-gold-500 px-8 py-3 font-medium text-white hover:bg-gold-600 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
