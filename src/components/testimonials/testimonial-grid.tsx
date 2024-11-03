"use client";

import { motion } from "framer-motion";
import { TestimonialItem } from "./testimonial-item";
import { TestimonialType } from "./testimonials-data";

interface TestimonialGridProps {
  testimonials: TestimonialType[];
}

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TestimonialItem {...testimonial} />
        </motion.div>
      ))}
    </div>
  );
} 