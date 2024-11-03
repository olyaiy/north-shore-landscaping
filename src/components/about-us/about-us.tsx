"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award } from "lucide-react"
import Image from "next/image"

interface StatProps {
  icon: React.ReactNode
  value: string
  label: string
}

function Stat({ icon, value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center group">
      <div className="p-3 rounded-xl bg-emerald-700/30 text-white mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600/50">
        {icon}
      </div>
      <span className="text-3xl font-bold text-white mb-1 font-montserrat">{value}</span>
      <span className="text-sm text-emerald-100/80 text-center font-lato">{label}</span>
    </div>
  )
}

export function AboutUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900" id="about">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-6 text-emerald-100 border-emerald-100 px-4 py-1.5 text-sm uppercase tracking-wider">
              About Us
            </Badge>
            <h2 className="text-5xl font-bold text-white mb-8 font-montserrat leading-tight">
              Your Trusted North Vancouver Landscapers
            </h2>
            <p className="text-lg text-emerald-100/90 leading-relaxed mb-12 font-lato">
              For over 20 years, North Shore Landscaping has been transforming ordinary yards 
              into extraordinary outdoor spaces. As a family-owned business rooted in North 
              Vancouver, we combine local expertise with personalized service to deliver 
              exceptional results.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <Stat 
                icon={<Calendar className="w-6 h-6" />}
                value="20+"
                label="Years of Experience"
              />
              <Stat 
                icon={<Users className="w-6 h-6" />}
                value="250+"
                label="Happy Clients"
              />
              <Stat 
                icon={<Award className="w-6 h-6" />}
                value="15+"
                label="Industry Awards"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-emerald-900/80 to-emerald-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl border-none backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,100,80,0.3)]">
                <h3 className="text-xl font-semibold text-white mb-4 font-montserrat">
                  Local Expertise
                </h3>
                <p className="text-emerald-100/80 leading-relaxed">
                  Our deep understanding of North Vancouver's unique climate and soil conditions 
                  ensures that we create sustainable, thriving landscapes.
                </p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-emerald-900/80 to-emerald-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl border-none backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,100,80,0.3)]">
                <h3 className="text-xl font-semibold text-white mb-4 font-montserrat">
                  Sustainable Practices
                </h3>
                <p className="text-emerald-100/80 leading-relaxed">
                  We're committed to eco-friendly landscaping methods, using native plants and 
                  sustainable materials to create beautiful spaces.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Right Images Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative grid grid-rows-2 gap-6 h-[600px] lg:h-[800px]"
          >
            {/* Main Large Image */}
            <div className="relative row-span-1 overflow-hidden rounded-2xl shadow-xl shadow-emerald-900/20">
              <Image
                src="/images/detail-1.jpg"
                alt="Beautiful North Vancouver landscape"
                fill
                quality={95}
                loading="eager"
                className="object-cover transition-all duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Bottom Two Images */}
            <div className="grid grid-cols-2 gap-6 row-span-1">
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-emerald-900/20">
                <Image
                  src="/images/detail-2.jpg"
                  alt="Landscaping detail"
                  fill
                  quality={90}
                  className="object-cover transition-all duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-emerald-900/20">
                <Image
                  src="/images/detail-3.jpg"
                  alt="Garden close-up"
                  fill
                  quality={90}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
