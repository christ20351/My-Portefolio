"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaAngular,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaRust,
} from "react-icons/fa";
import { SiHtml5, SiTypescript, SiCss3 } from "react-icons/si";
import {
  RiTailwindCssFill,
  RiNextjsLine,
  RiReactjsLine,
  RiReactjsFill,
} from "react-icons/ri";

export default function AboutSection() {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 className="h-5 w-5" /> },
    { name: "CSS3", icon: <SiCss3 className="h-5 w-5" /> },
    { name: "Javascript", icon: <FaJs className="h-5 w-5" /> },
    { name: "Java", icon: <FaJava className="h-5 w-5" /> },
    { name: "Python", icon: <FaPython className="h-5 w-5" /> },
    { name: "Rust", icon: <FaRust className="h-5 w-5" /> },
    { name: "SQL", icon: <Database className="h-5 w-5" /> },
    { name: "React Native", icon: <RiReactjsFill className="h-5 w-5" /> },
    { name: "ReactJs", icon: <RiReactjsLine className="h-5 w-5" /> },
    { name: "Next.js", icon: <RiNextjsLine className="h-5 w-5" /> },
    { name: "Nodejs", icon: <FaNodeJs className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="h-5 w-5" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="a-propos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>

      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center py-6 mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight px-4">
              À propos de moi
            </h2>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Passionné par le monde de la tech et l&apos;IT, je me sert de ma
            curiosite et de mon inventivité pour repondre aux besoins de mon
            entourage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative">
              <h3 className="text-2xl font-bold inline-block">
                Mon parcours
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></span>
              </h3>
            </div>
            <p className="text-muted-foreground">
              Presentement étudiant en 3e année filiere Systemes et Reseaux à
              l&apos;IAI Cameroun, je restes neanmoins dubitatif entre le
              développement web,la cybersecurité(pentesting Web) et la
              datascience. Oui je suis tres dubitatif 😅. Qu'a cela ne tienne je
              suis en perpetuelle quete de savoir, et dans cette quete j'ai deja
              fait la decouverte de quelques frameworks comme React, Nex.js et
              aussi de language complexe comme Rust.
            </p>
            <p className="text-muted-foreground">
              En plus de mon parcours académique, je suis également en pleine
              insertion professionnelle. Je travaille en tant que développeur
              Backend Freelance chez Yarid Company. Ces expériences m&apos;ont
              permis de toucher du bout des doigts la realité de ce monde
              impitoyable. Entre deadline serrés et rigueur à la tache,
              j'apprends tous les jours
            </p>
            <p className="text-muted-foreground">
              En parallèle de mes études, je m'interesse fortement au pentesting
              Web ou je me formes d'ailleurs actuellement et aux prouesses de
              l'intelligence artificielle et qui sera tres important et
              representera un veritable atout dans la communaute technologique
              du monde de demain , à l'age de l'AGI.
            </p>
            <div className="relative pt-4">
              <h3 className="text-2xl font-bold inline-block">
                Soft Skills
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></span>
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {[
                "Leadership",
                "Enthousiaste",
                "Autonomie",
                "Esprit d'équipe",
                "Adaptabilite"
              ].map((value, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary group-hover:text-accent transition-colors duration-300">
                        {skill.icon}
                      </div>
                    </div>
                    <h4 className="font-medium">{skill.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
