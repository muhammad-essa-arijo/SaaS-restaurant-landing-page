"use client";

import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { Section } from "@/components/ui";

const galleryImages = [
  {
    id: 1,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCOFooTAiOibQ5Ctg0nOowmlkBTVKpMBOIVkmh02aAP03mLSlV8Ln7og&s=10",
    alt: "Premium plating",
  },
  {
    id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OAojSCTCAHyuzsOl4bkhKqK26TL4AFuR2kJu7WRX5w&s=10",
    alt: "Seared steak",
  },
  {
    id: 3,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYhYUjAHM6gFB20dHiUZSfk-cdSJiuT0Msn9sZ4CYONWzaIscAofoR_dI&s=10",
    alt: "Dining room",
  },
  {
    id: 4,
    src: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-06/Fine%20Dining%20Plating%2012%20Essentials%20That%20Elevate%20Every%20Dish.jpg",
    alt: "Dessert presentation",
  },
  {
    id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebS0AYcPMyjKz0BdaVOYEFdcLzHyViocTpFQ1REsf7g&s=10",
    alt: "Wine collection",
  },
  {
    id: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UR3KZjwzG2-V1uIELjz1vuJzLETQmyuB2LrzdCn1IQ&s=10",
    alt: "Kitchen view",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export function GallerySection() {
  return (
    <Section id="gallery">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Gallery</h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Explore the artistry and elegance of our culinary creations and
            dining spaces.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-max"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl bg-charcoal-100 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300"
            >
              <div className="relative h-96">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="rounded-full bg-white/20 backdrop-blur-sm p-3 hover:bg-white/30 transition-all">
                    <ZoomIn className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
