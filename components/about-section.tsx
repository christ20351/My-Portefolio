"use client";

import { motion } from "framer-motion";
import { Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaRust,
} from "react-icons/fa";
import { SiHtml5, SiCss3 } from "react-icons/si";
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
    { name: "JavaScript", icon: <FaJs className="h-5 w-5" /> },
    { name: "TypeScript", icon: <SiHtml5 className="h-5 w-5" /> },
    { name: "Java", icon: <FaJava className="h-5 w-5" /> },
    { name: "Python", icon: <FaPython className="h-5 w-5" /> },
    { name: "Rust", icon: <FaRust className="h-5 w-5" /> },
    { name: "SQL", icon: <Database className="h-5 w-5" /> },
    { name: "React Native", icon: <RiReactjsFill className="h-5 w-5" /> },
    { name: "React", icon: <RiReactjsLine className="h-5 w-5" /> },
    { name: "Next.js", icon: <RiNextjsLine className="h-5 w-5" /> },
    { name: "Node.js", icon: <FaNodeJs className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="h-5 w-5" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
            Passionné par la tech et l&apos;IT, j&apos;utilise ma curiosité et mon inventivité
            pour résoudre des problèmes concrets et créer de la valeur.
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
              Étudiant en 3e année filière Systèmes et Réseaux à l&apos;IAI Cameroun,
              je me forme activement en développement web, cybersécurité (pentesting web)
              et data science. J&apos;ai découvert des frameworks modernes comme React et Next.js,
              ainsi que des langages exigeants comme Rust.
            </p>
            <p className="text-muted-foreground">
              En parallèle de mes études, je travaille comme développeur Backend freelance
              chez Yarid Company. Ces expériences m&apos;ont confronté aux réalités du terrain :
              deadlines, rigueur et travail d&apos;équipe.
            </p>
            <p className="text-muted-foreground">
              Je me forme également au pentesting web et je m&apos;intéresse de près à
              l&apos;intelligence artificielle, un domaine qui sera déterminant dans les années à venir.
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
                "Enthousiasme",
                "Autonomie",
                "Esprit d'équipe",
                "Adaptabilité",
                "Persévérance",
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
