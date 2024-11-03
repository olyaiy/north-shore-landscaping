"use client";

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#004730] text-gray-100 py-12 mt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-montserrat font-bold">North Shore Landscaping</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-white" />
                <p>123 Greenway Lane, North Vancouver, BC</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white" />
                <p>(604) 123-4567</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-white" />
                <p>info@northshorelandscaping.ca</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-montserrat font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'About Us', 'Projects', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors"
                >
                  <Link href="https://www.hightidedigital.ca" target="_blank" rel="noopener noreferrer">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-montserrat font-bold">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Custom Landscape Design',
                'Garden Installation',
                'Hardscaping',
                'Environmental Solutions'
              ].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors"
                >
                  <Link href="https://www.hightidedigital.ca" target="_blank" rel="noopener noreferrer">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-montserrat font-bold">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, name: 'facebook' },
                { Icon: Instagram, name: 'instagram' },
                { Icon: Twitter, name: 'twitter' }
              ].map(({ Icon, name }) => (
                <motion.a
                  key={name}
                  href="https://www.hightidedigital.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-[#005F3A] p-2 rounded-full hover:bg-white hover:text-[#004730] transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
              <p className="text-sm">
                © {currentYear} North Shore Landscaping. All rights reserved.
              </p>
              <p className="text-sm">
                •{" "}
                <Link
                  href="https://www.hightidedigital.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Designed by High Tide Digital
                </Link>
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="https://www.hightidedigital.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="https://www.hightidedigital.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
