import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import ExperienceSection from "@/components/experience-section"

export const metadata: Metadata = {
  title: "Kengne Ronny Calin | Développeur Fullstack en Devenir",
  description:
    "Portfolio de Kengne Ronny , développeur fullstack en Devenir React Next.js et Angular",
}

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
