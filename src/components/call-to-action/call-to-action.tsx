"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="relative bg-emerald-950/5 py-24">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#005F3A_12%,transparent_12.5%,transparent_87%,#005F3A_87.5%,#005F3A_100%)] bg-[length:20px_20px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="font-montserrat mb-6 text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl">
            Ready to Elevate Your Outdoor Living?
          </h2>
          
          <p className="mb-8 max-w-2xl text-lg text-gray-600">
            Contact us today to start planning your dream outdoor space. Whether it's a complete 
            redesign or regular maintenance, we're here to help.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-[#FFCC33] text-gray-900 hover:bg-[#E6B82E] hover:text-gray-900"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
