"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { Badge, Card, Section } from "@/components/ui";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

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

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredItems =
    selectedCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <Section id="menu">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Featured Menu</h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of exquisite dishes crafted
            with the finest ingredients.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full px-6 py-2 font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-gold-500 text-white shadow-lg"
                  : "bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          layout
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                hover
                padding="none"
                className="overflow-hidden flex flex-col h-full group"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-charcoal-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.popular && (
                      <Badge variant="accent" size="sm">
                        Popular
                      </Badge>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-4 right-4 rounded-full bg-white/90 p-2 hover:bg-white transition-all shadow-lg"
                  >
                    <Heart
                      className={cn(
                        "h-5 w-5 transition-colors",
                        favorites.includes(item.id)
                          ? "fill-red-500 text-red-500"
                          : "text-charcoal-900"
                      )}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 p-6">
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-charcoal-500">{item.category}</p>
                  </div>

                  <p className="text-charcoal-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Rating & Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-charcoal-100">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < Math.floor(item.rating)
                              ? "fill-gold-500 text-gold-500"
                              : "text-charcoal-300"
                          )}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-charcoal-700">
                        {item.rating}
                      </span>
                    </div>
                    <span className="font-serif text-lg font-bold text-gold-600">
                      {item.price}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
