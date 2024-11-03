"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SocialProof } from "./social-proof"
import { motion } from "framer-motion"
import { Leaf, Shield, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-20 sm:min-h-[90vh] sm:pt-16">
      {/* Decorative Elements - Adjusted size for mobile */}
      <div className="absolute left-0 top-0 -z-10 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rotate-180 transform opacity-20">
        <Image
          src="/images/leaf-pattern.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Luxurious garden landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content Container - Improved padding and spacing */}
      <div className="relative z-20 mx-auto flex min-h-[100svh] sm:min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl space-y-4 sm:space-y-8 text-center"
        >
          {/* Badges - Improved mobile layout */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Badge 
              variant="secondary" 
              className="bg-emerald-600/80 px-3 py-0.5 sm:px-4 sm:py-1 text-sm sm:text-base text-white backdrop-blur-md hover:bg-emerald-500/90 border border-emerald-400/30"
            >
              <Leaf className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4" /> Eco-Friendly
            </Badge>
            <Badge 
              variant="secondary" 
              className="bg-emerald-600/80 px-4 py-1 text-white backdrop-blur-md hover:bg-emerald-500/90 border border-emerald-400/30"
            >
              <Shield className="mr-2 h-4 w-4" /> Licensed & Insured
            </Badge>
            <Badge 
              variant="secondary" 
              className="bg-emerald-600/80 px-4 py-1 text-white backdrop-blur-md hover:bg-emerald-500/90 border border-emerald-400/30"
            >
              <Award className="mr-2 h-4 w-4" /> Award-Winning
            </Badge>
          </div>

          {/* Main Headline - Adjusted mobile typography and centering */}
          <h1 className="font-montserrat text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white px-2">
            Transform Your <span className="text-emerald-400">North Vancouver</span> Landscape
            <span className="block text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light normal-case mt-2">
              into a Personal Paradise
            </span>
          </h1>

          {/* Subheadline - Adjusted spacing and size */}
          <p className="font-lato text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 px-4 sm:px-0">
            Expertly crafting stunning outdoor spaces that reflect your vision and enhance your lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-center w-full">
            <Button
              size="lg"
              className="w-auto sm:w-auto bg-white/10 text-base sm:text-lg font-semibold text-white backdrop-blur-md hover:bg-white/20 border border-white/20 transition-all"
              onClick={() => {
                const elementId = 'portfolio';
                const element = document.getElementById(elementId);
                if (element) {
                  const navbarHeight = 64;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              View Our Projects
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-emerald-600 text-base sm:text-lg font-semibold text-white transition-all hover:bg-emerald-500"
              onClick={() => {
                const elementId = 'contact';
                const element = document.getElementById(elementId);
                if (element) {
                  const navbarHeight = 64;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Get Your Free Consultation
            </Button>
          </div>

          {/* Social Proof */}
          <SocialProof />
          
        </motion.div>
      </div>

      {/* Bottom Gradient - Updated with lower z-index */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#005F3A]/80 to-transparent z-10" />
    </section>
  )
}
