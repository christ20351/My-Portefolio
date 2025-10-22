import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import ExperienceSection from "@/components/experience-section"

export const metadata: Metadata = {
  title: "2FC",
  description:
    "Portfolio de Faha Fosso  , Développeur Fullstack et Pentester Web en devenir",
  icons: {
    icon: "/photo.jpg", // Chemin relatif à /public
  },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
       <TestimonialsSection/> 
       <ContactSection /> 
    </main>
  )
}
