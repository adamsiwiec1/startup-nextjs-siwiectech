import MentorshipSectionTwo from "@/components/Mentorship/MentorshipSectionOne";
import MentorshipSectionOne from "@/components/Mentorship/MentorshipSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <MentorshipSectionOne />
      <MentorshipSectionTwo />
      <Testimonials />
      <Contact />
    </>
  );
}
