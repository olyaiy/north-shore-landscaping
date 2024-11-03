"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceItemProps {
  title: string
  description: string
  icon: React.ReactNode
  delay: number
}

export function ServiceItem({ title, description, icon, delay }: ServiceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full transition-transform duration-300 hover:scale-105">
        <CardHeader>
          <div className="mb-4">{icon}</div>
          <CardTitle className="text-xl font-montserrat text-emerald-800">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 text-base">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
