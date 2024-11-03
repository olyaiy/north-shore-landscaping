import { Hero } from "@/components/hero/hero";
import { Services } from "@/components/services/services";
import { AboutUs } from "@/components/about-us/about-us";
import { Testimonials } from "@/components/testimonials/testimonials";
import { CallToAction } from "@/components/call-to-action/call-to-action";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Portfolio } from "@/components/portfolio/portfolio";

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
