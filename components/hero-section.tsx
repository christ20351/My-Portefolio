"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 5
      }deg) rotateX(${-y * 5}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "/cv/mon CV.pdf.jpg";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "CV-Christ-Fosso.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="accueil"
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh-pattern opacity-30"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-40 left-[10%] w-8 h-8 bg-primary/30 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{
          duration: 1.3,
          delay: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-60 right-[15%] w-6 h-6 bg-accent/30 rotate-45"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-sm font-medium border border-primary/20"
              >
                <span className="text-gradient">Développeur Full-Stack & Cybersécurité</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl space-y-1.5 font-bold tracking-tight"
              >
                <span className="relative">Christ</span>{" "}
                <span className="text-gradient">Fosso</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground mt-4"
              >
                Je transforme vos idées en{" "}
                <span className="text-primary font-semibold">solutions numériques</span>{" "}
                robustes et élégantes
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-muted-foreground max-w-md"
            >
              Étudiant en 3e année Systèmes et Réseaux à l&apos;Institut Africain d&apos;Informatique (IAI),
              développeur web junior passionné par le développement full-stack, le pentesting web
              et l&apos;intelligence artificielle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group relative overflow-hidden" asChild>
                <a href="#contact">
                  <span className="relative z-10 flex items-center">
                    Me contacter
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary/80 transition-colors"
                onClick={handleDownloadCV}
              >
                Télécharger mon CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href="https://github.com/christ20351"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/Christ-fosso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto md:ml-auto transition-transform duration-200 ease-out"
          >
            <div className="absolute inset-0 blob bg-gradient-to-tr from-primary/20 via-accent/20 to-secondary/20 animate-pulse"></div>
            <div className="relative h-full w-full blob overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/photo.jpg"
                alt="Christ Fosso"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/30 rounded-full blur-md animate-float"></div>
            <div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/30 rounded-full blur-md animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
