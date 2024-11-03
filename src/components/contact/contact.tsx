"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Clock, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

export function Contact() {
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

  const handlePhoneClick = () => {
    window.location.href = "https://www.hightidedigital.ca"
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="relative bg-gradient-to-b from-white to-emerald-50 py-12 sm:py-24" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 text-center"
        >
          <h2 className="font-montserrat mb-4 sm:mb-6 text-3xl sm:text-5xl font-bold tracking-tight text-emerald-950">
            Let's Create Your Dream Landscape
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600">
            Transform your outdoor space into a stunning sanctuary. Our award-winning team 
            is ready to bring your vision to life with sustainable, beautiful design.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-[1400px] mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg h-full"
          >
            <div className="mb-8 space-y-5">
              <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-emerald-950">
                Why Choose North Shore Landscaping?
              </h3>
              {/* Benefits List */}
              <ul className="space-y-4">
                {[
                  ["20+ Years of Excellence:", "Trusted by North Vancouver homeowners since 2003"],
                  ["Local Expertise:", "Deep understanding of North Shore's unique climate"],
                  ["Sustainable Practices:", "Eco-friendly solutions that protect our environment"],
                  ["Award-Winning Design:", "Multiple Best of North Vancouver awards recipient"],
                  ["Full-Service Solutions:", "From design to maintenance, we handle everything"],
                ].map(([title, desc], index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <ArrowRight className="mt-1.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <p className="text-gray-600">
                      <span className="font-semibold text-emerald-950">{title}</span>{" "}
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  title: "Call Us Today",
                  content: "(604) 123-4567",
                  onClick: handlePhoneClick,
                  clickable: true,
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "info@northshorelandscaping.ca",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Mon-Fri: 8am-6pm",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={item.clickable ? item.onClick : undefined}
                  className={`flex items-center gap-4 rounded-xl bg-emerald-50 p-4 sm:p-5 
                    ${item.clickable ? "cursor-pointer hover:bg-emerald-100" : ""} 
                    transition-colors`}
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-600 flex-shrink-0">
                    <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-montserrat text-sm sm:text-base font-semibold uppercase tracking-wider text-emerald-800">
                      {item.title}
                    </p>
                    <span className="text-base sm:text-xl font-semibold text-emerald-950 break-words">
                      {item.content}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg h-full"
          >
            <h3 className="font-montserrat mb-6 text-xl sm:text-2xl font-bold text-emerald-950">
              Start Your Transformation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-gray-200 h-12"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-200 h-12"
                  required
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border-gray-200 h-12"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  name="projectType"
                  placeholder="Project Type"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="border-gray-200 h-12"
                  required
                />
                <Input
                  name="budget"
                  placeholder="Estimated Budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="border-gray-200 h-12"
                />
              </div>
              <Input
                name="timeline"
                placeholder="Desired Timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="border-gray-200 h-12"
              />
              <Textarea
                name="message"
                placeholder="Tell us about your project... What's your vision? Any specific features or challenges we should know about?"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[200px] border-gray-200 resize-none"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-emerald-600 text-base font-semibold text-white hover:bg-emerald-700 h-14"
              >
                Schedule Your Free Consultation
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
