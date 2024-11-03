"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function SocialProof() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="rounded-xl p-6"
    >
      <div className="space-y-3">
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-7 w-7 fill-[#FFCC33] text-[#FFCC33]"
              strokeWidth={1}
            />
          ))}
        </div>
        <p className="text-lg font-medium text-white">
          Rated 5 Stars by Over 250 Satisfied North Shore Clients
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {['HomeStars', 'Google Reviews', 'BBB A+ Rating'].map((platform) => (
            <span 
              key={platform}
              className="rounded-full bg-white/20 px-4 py-1 text-sm text-white"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
