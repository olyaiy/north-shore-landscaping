import { Hero } from "@/components/hero/hero";
import { Services } from "@/components/services/services";
import { AboutUs } from "@/components/about-us/about-us";
import { Testimonials } from "@/components/testimonials/testimonials";
import { CallToAction } from "@/components/call-to-action/call-to-action";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Portfolio } from "@/components/portfolio/portfolio";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "North Shore Landscaping | Premier Landscaping Services in North Vancouver",
  description: "Transform your outdoor space with North Shore Landscaping. Expert landscape design, garden maintenance, and hardscaping services in North Vancouver. Get your free consultation today.",
  keywords: "landscaping North Vancouver, garden design, hardscaping, outdoor living spaces, landscape maintenance, North Shore landscape company",
  openGraph: {
    title: "North Shore Landscaping | Premier Landscaping Services in North Vancouver",
    description: "Transform your outdoor space with North Shore Landscaping. Expert landscape design, garden maintenance, and hardscaping services in North Vancouver.",
    url: "https://northshorelandscaping.ca",
    siteName: "North Shore Landscaping",
    images: [
      {
        url: "/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "North Shore Landscaping Projects",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://northshorelandscaping.ca",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen overflow-hidden">
      <Navbar />
      <main className="max-w-screen overflow-hidden">
        <Hero />
        <section id="services"><Services /></section>
        <section id="about"><AboutUs /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
