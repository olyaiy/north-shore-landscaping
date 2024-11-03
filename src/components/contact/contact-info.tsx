"use client"

import { motion } from "framer-motion"
import { Phone, Clock, ArrowRight, Mail, MapPin } from "lucide-react"

export function ContactInfo() {
  const handlePhoneClick = () => {
    window.location.href = "https://www.hightidedigital.ca"
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-[95%] sm:w-full lg:w-[90%] max-w-none mx-auto px-4 sm:px-0"
    >
      <div className="rounded-2xl bg-white p-4 sm:p-8 shadow-lg max-w-full">
        <div className="mb-8 space-y-5">
          <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-emerald-950">
            Why Choose North Shore Landscaping?
          </h3>
          <ul className="space-y-4 sm:space-y-5">
            <li className="flex items-start gap-3 sm:gap-4">
              <ArrowRight className="mt-1.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-emerald-600" />
              <p className="text-base sm:text-lg text-gray-600">
                <span className="font-semibold text-emerald-950">20+ Years of Excellence:</span>{" "}
                Trusted by North Vancouver homeowners since 2003
              </p>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <ArrowRight className="mt-1.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
              <p className="text-gray-600">
                <span className="font-semibold text-emerald-950">Local Expertise:</span>{" "}
                Deep understanding of North Shore's unique climate and conditions
              </p>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <ArrowRight className="mt-1.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
              <p className="text-gray-600">
                <span className="font-semibold text-emerald-950">Sustainable Practices:</span>{" "}
                Eco-friendly solutions that protect our beautiful environment
              </p>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <ArrowRight className="mt-1.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
              <p className="text-gray-600">
                <span className="font-semibold text-emerald-950">Award-Winning Design:</span>{" "}
                Multiple Best of North Vancouver awards recipient
              </p>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <ArrowRight className="mt-1.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
              <p className="text-gray-600">
                <span className="font-semibold text-emerald-950">Full-Service Solutions:</span>{" "}
                From design to maintenance, we handle every aspect
              </p>
            </li>
          </ul>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div 
            onClick={handlePhoneClick}
            className="flex cursor-pointer items-center gap-4 rounded-xl bg-emerald-50 p-4 sm:p-5 hover:bg-emerald-100 transition-colors"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-600 flex-shrink-0">
              <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-montserrat text-sm sm:text-base font-semibold uppercase tracking-wider text-emerald-800">
                Call Us Today
              </p>
              <span className="text-base sm:text-xl font-semibold text-emerald-950 hover:text-emerald-700 break-words">
                (604) 123-4567
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl bg-emerald-50 p-4 sm:p-5">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-600 flex-shrink-0">
              <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-montserrat text-sm sm:text-base font-semibold uppercase tracking-wider text-emerald-800">
                Email Us
              </p>
              <span className="text-base sm:text-xl font-semibold text-emerald-950 break-words">
                info@northshorelandscaping.ca
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl bg-emerald-50 p-4 sm:p-5">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-600 flex-shrink-0">
              <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-montserrat text-sm sm:text-base font-semibold uppercase tracking-wider text-emerald-800">
                Business Hours
              </p>
              <span className="text-base sm:text-xl font-semibold text-emerald-950 break-words">
                Mon-Fri: 8am-6pm
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
