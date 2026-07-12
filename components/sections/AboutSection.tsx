"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Heart } from "lucide-react";
import { Section } from "@/components/ui";

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

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to the highest standards in every dish",
    },
    {
      icon: Users,
      title: "Hospitality",
      description: "Warmth and personalized service for every guest",
    },
    {
      icon: Clock,
      title: "Tradition",
      description: "15 years of refined culinary expertise and passion",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Love for cooking and creating unforgettable moments",
    },
  ];

  return (
    <Section id="about">
      <div className="space-y-16">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Founded 15 years ago with a passion for exceptional cuisine and
            hospitality, Luxe Restaurant has become a destination for those who
            appreciate fine dining at its finest.
          </p>
        </motion.div>

        {/* Chef Introduction */}
        <div className="grid gap-12 items-center md:grid-cols-2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-200 to-cream-200 rounded-2xl blur-xl opacity-40"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
              alt="Chef"
              className="relative w-full rounded-2xl shadow-soft-xl"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold mb-2">Chef Antoine Beaumont</h3>
              <p className="text-gold-600 font-semibold">Executive Chef</p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-charcoal-600 leading-relaxed"
            >
              With over 25 years of culinary experience across Europe and beyond,
              Chef Beaumont brings innovation and tradition to every plate. His
              dedication to sourcing the finest ingredients ensures an
              unforgettable dining experience.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3">
              {[
                "Trained at Le Cordon Bleu, Paris",
                "2 Michelin Stars for 5 consecutive years",
                "Featured in leading culinary publications",
                "Mentors the next generation of chefs",
              ].map((item, i) => (
                <p key={i} className="flex items-center gap-3 text-charcoal-600">
                  <span className="h-2 w-2 rounded-full bg-gold-500"></span>
                  {item}
                </p>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-12 border-t border-charcoal-100"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center space-y-3"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100">
                  <Icon className="h-6 w-6 text-gold-600" />
                </div>
                <h4 className="font-serif text-lg font-semibold">
                  {value.title}
                </h4>
                <p className="text-sm text-charcoal-600">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
