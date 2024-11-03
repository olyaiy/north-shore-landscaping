"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TestimonialGrid } from "./testimonial-grid";
import { testimonials } from "./testimonials-data";
import { Award, Leaf, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 3;

const awards = [
  {
    title: "Best of HomeStars",
    year: "2023",
    icon: Trophy
  },
  {
    title: "Top Rated on Houzz",
    year: "2023",
    icon: Award
  },
  {
    title: "Environmental Excellence",
    year: "2023",
    icon: Leaf
  }
];

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const currentTestimonials = testimonials.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-emerald-800 to-emerald-900">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted by North Vancouver <br />Homeowners
          </h2>
          
          {/* Combined Rating and Awards Section */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium text-white">5.0</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-300">250+ Reviews</span>
            </div>

            {/* Awards */}
            {awards.map((award) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full"
              >
                <award.icon className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">{award.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <TestimonialGrid testimonials={currentTestimonials} />

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevPage}
            className="bg-white/10 hover:bg-white/20 text-white border-none"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <span className="text-white">
            {currentPage + 1} of {totalPages}
          </span>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextPage}
            className="bg-white/10 hover:bg-white/20 text-white border-none"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
