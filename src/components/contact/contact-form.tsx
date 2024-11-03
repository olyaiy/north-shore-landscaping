"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = "https://www.hightidedigital.ca"
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-[95%] sm:w-full lg:w-[90%] max-w-none mx-auto px-4 sm:px-0"
    >
      <div className="rounded-2xl bg-white p-4 sm:p-8 shadow-lg h-full flex flex-col">
        <h3 className="font-montserrat mb-6 text-xl sm:text-2xl font-bold text-emerald-950">
          Start Your Transformation
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 flex-1 flex flex-col">
          <div className="space-y-4 sm:space-y-6 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border-gray-200 h-12 text-base px-4"
                required
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border-gray-200 h-12 text-base px-4"
                required
              />
            </div>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-200 h-12 text-base px-4"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Input
                name="projectType"
                placeholder="Project Type"
                value={formData.projectType}
                onChange={handleChange}
                className="border-gray-200 h-12 text-base px-4"
                required
              />
              <Input
                name="budget"
                placeholder="Estimated Budget"
                value={formData.budget}
                onChange={handleChange}
                className="border-gray-200 h-12 text-base px-4"
              />
            </div>
            <Input
              name="timeline"
              placeholder="Desired Timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="border-gray-200 h-12 text-base px-4"
            />
            <Textarea
              name="message"
              placeholder="Tell us about your project... What's your vision? Any specific features or challenges we should know about?"
              value={formData.message}
              onChange={handleChange}
              className="flex-1 min-h-[200px] sm:min-h-[250px] border-gray-200 resize-none p-4 text-base"
              required
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-emerald-600 text-base font-semibold text-white transition-colors hover:bg-emerald-700 h-14 mt-4"
          >
            Schedule Your Free Consultation
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
