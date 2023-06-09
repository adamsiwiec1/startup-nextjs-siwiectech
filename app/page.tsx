import MentorshipSectionTwo from "@/components/Mentorship/MentorshipSectionOne";
import MentorshipSectionOne from "@/components/Mentorship/MentorshipSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
    {/* a section here  */}
      <Brands />
      <Testimonials />
      <Contact />
    </>
  );
}
