"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Experience = {
  id: number;
  title: string;
  company: string;
  location?: string;
  period: string;
  type: "work" | "education";
  description: string;
  skills: string[];
  link?: string;
  expanded?: boolean;
};

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      title: "Developpeur Backend",
      company: "Yarid Company",
      location: "Remote, Yaoundé",
      period: "Mai 2025 - Present",
      type: "work",
      description:
        "J'ai eu a developper en Equipe et j'y suis toujours d'ailleurs une application de Ecommerce, pour permettre a des vendeurs de proposser leurs  produits varies et recevoir des commandes de leurs clients.",
      skills: ["MindSet", "Esprit d'Equipe"],
    },
    {
      id: 1,
      title: "Support Technique",
      company: "Sliim Technologies",
      location: "Remote, Yaoundé",
      period: "Janvier 2025 - Mars 2025",
      type: "work",
      description:
        "Support d'aide aux preocupations des clients sur le produit `Cristal5`'. Formation des clients a la prise en main du logiciel.",
      skills: ["Pedagogie", "Art oratoire"],
    },
    {
      id: 1,
      title: "Blue Teamer",
      company: "HackTheBox",
      location: "En ligne",
      period: "22 Septembre 2025 - 26 Septembre 2025",
      type: "work",
      description:
        "Cote Cyber j'ai eu a participe au HOLMES CTF 2025 , premier evenement en ligne blue Team organise par la plateforme de hacking ethique hackTheBox , et a la fin de cette Evenement j'ai obtenue un certificat de participation.",
      skills: ["MindSet", "Perseverance", "Concentration", "Esprit d'equipe"],
    },
    {
      id: 1,
      title: "Red Teamer",
      company: "HackTheBox",
      location: "En ligne",
      period: "01 Aout 2025 - 03 Aout 2025",
      type: "work",
      description:
        "Cote Cyber j'ai eu a participe au MEETUP AMBASSADOR CTF , evenement en ligne organise par la plateforme de hacking ethique hackTheBox , et a la fin de cette Evenement j'ai obtenue un certificat de participation.",
      skills: ["MindSet", "Perseverance", "Concentration", "Esprit d'equipe"],
    },
    {
      id: 8,
      title: "Baccalauréat Scientifique",
      company: "Lycée Bilingue d'Ekounou",
      location: "Yaounde, Cameroun",
      period: "2022 - 2023",
      type: "education",
      description:
        "Spécialisation en mathématiques et sciences physiques. Participation à des formations de programmation et projets scientifiques. Obtention du diplôme avec mention.",
      skills: ["Mathématiques", "Physique", "Informatique de base", "Chimie"],
    },
  ]);

  const toggleExpand = (id: number) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, expanded: !exp.expanded } : exp
      )
    );
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-30"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight px-4">
              Mon Parcours
            </h2>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Découvrez mon parcours professionnel et académique, les compétences
            que j'ai acquises et les projets sur lesquels j'ai travaillé.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-secondary md:-translate-x-px"
          ></motion.div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
                toggleExpand={toggleExpand}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  experience,
  index,
  toggleExpand,
}: {
  experience: Experience;
  index: number;
  toggleExpand: (id: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px 0px -100px 0px",
    amount: 0.4,
    once: false,
  });

  const controls = useAnimation();
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const cardVariants: Variants = {
    hidden: (isEven) => ({
      opacity: 0,
      x: isEven ? -50 : 50,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const markerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      custom={isEven}
      className="relative"
    >
      <div
        className={cn(
          "grid grid-cols-[40px_1fr] md:grid-cols-[1fr_auto_1fr]",
          "gap-4 md:gap-8"
        )}
      >
        {/* Left side (hidden on mobile) */}
        <motion.div
          variants={cardVariants}
          custom={true}
          className={cn(
            "hidden md:block",
            isEven ? "order-1" : "order-1 md:text-right"
          )}
        >
          {isEven && (
            <div className="h-full">
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <TimelineCardContent
                    experience={experience}
                    toggleExpand={toggleExpand}
                  />
                </CardContent>
              </Card>
            </div>
          )}
        </motion.div>

        {/* Timeline marker */}
        <motion.div
          variants={markerVariants}
          className={cn(
            "relative flex items-start justify-center",
            "order-1 md:order-2"
          )}
        >
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center z-10",
                "bg-gradient-to-br from-primary to-accent shadow-md",
                "border-4 border-background"
              )}
            >
              {experience.type === "work" ? (
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              ) : (
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              )}
            </div>
            <div className="h-full w-px bg-border"></div>
          </div>
        </motion.div>

        {/* Right side (or mobile full width) */}
        <motion.div
          variants={cardVariants}
          custom={false}
          className={cn(
            "order-2 md:order-3",
            !isEven ? "md:block" : "md:hidden"
          )}
        >
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <CardContent className="p-6 relative">
              <TimelineCardContent
                experience={experience}
                toggleExpand={toggleExpand}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

function TimelineCardContent({
  experience,
  toggleExpand,
}: {
  experience: Experience;
  toggleExpand: (id: number) => void;
}) {
  return (
    <>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 via-accent/10 to-transparent -translate-y-1/2 translate-x-1/2 rounded-full blur-xl"></div>

      <h3 className="text-xl font-bold mb-1 relative inline-block">
        {experience.title}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
      </h3>

      <h4 className="text-lg font-medium text-accent mb-3">
        {experience.company}
      </h4>

      <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{experience.location}</span>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300 overflow-hidden",
          experience.expanded
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        )}
      >
        <p className="text-muted-foreground mb-4">{experience.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {experience.skills.map((skill, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="bg-background/80 border-primary/20"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {experience.link && (
          <Button variant="link" className="p-0 h-auto" asChild>
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary"
            >
              <span>Voir plus</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="mt-2 w-full border-t border-border"
        onClick={() => toggleExpand(experience.id)}
      >
        <span className="sr-only">
          {experience.expanded ? "Réduire" : "Développer"}
        </span>
        {experience.expanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </Button>
    </>
  );
}
