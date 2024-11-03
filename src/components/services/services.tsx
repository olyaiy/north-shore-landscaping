"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Hammer, Recycle, Flower } from "lucide-react"
import { ServiceItem } from "./service-item"

const services = [
  {
    title: "Custom Landscape Design",
    description: "Bring your vision to life with personalized designs that perfectly complement your home and lifestyle.",
    icon: <Leaf className="w-10 h-10 text-emerald-600" />,
  },
  {
    title: "Garden Installation & Maintenance",
    description: "Enjoy vibrant, healthy gardens year-round with our professional planting and maintenance services.",
    icon: <Flower className="w-10 h-10 text-emerald-600" />,
  },
  {
    title: "Hardscaping & Outdoor Living Spaces",
    description: "Enhance your outdoor experience with patios, walkways, and outdoor kitchens crafted from premium materials.",
    icon: <Hammer className="w-10 h-10 text-emerald-600" />,
  },
  {
    title: "Environmental Solutions",
    description: "Commit to sustainability with eco-friendly practices and native plant selections that support the local ecosystem.",
    icon: <Recycle className="w-10 h-10 text-emerald-600" />,
  },
]

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-montserrat text-emerald-800 mb-4">
            Our Expert Services
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={service.title}
              {...service}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
