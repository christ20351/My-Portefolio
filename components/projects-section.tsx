"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "App de Ecommerce",
      description:
        "Application d'achat en  ligne au pres de vendeurs ,  qui proposent leur produits varies",
      image: "/banner-seachwork.png",
      tags: [
        "Nextjs",
        "Nodejs",
        "Typescript",
        "Prisma ORM",
        "PostgresSQL",
        "Turbo Repo",
      ],
      demo: "https://yarid.cm",
      status: "En cours",
    },
    {
      id: 2,
      title: "Application Mobile de consultation medicale assiste par IA",
      description:
        "Application permettant d'ameliorer la prise de consultation dans les hopitaux, et aussi le suivie medicale des patients par les professionnels de sante avec l'interlligence artificielle",
      image: "",
      tags: [
        "React Native",
        "PostegreSQL",
        "Nodejs",
        "Typescript",
        "Prisma ORM",
        "Turbo Repo",
      ],
      github: "https://github/christ20351/tactac",
      category: "backend",
      status: "Termine",
    },
    {
      id: 3,
      title: "Application Medicale de Gestion de produits Medicaux",
      description:
        "Application permettant aux pharmacien de meiux gerer les stock de produits dans leur pharmacies ,  et d'etre avertit en cas de rupture",
      image: "",
      tags: ["Spring boot", "MySQL", "Java"],
      category: "fullstack",
      github: "https://github/christ20351/Locam",
      status: "Termine",
    },
  ];

  const filteredProjects = projects;

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
    <section
      id="projets"
      className="py-20 relative clip-path-diagonal bg-gradient-to-br from-background via-muted/50 to-background"
    >
      <div className="absolute inset-0 bg-grid opacity-50"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight px-4">
              Mes projets
            </h2>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Découvrez une sélection de mes projets personnels et pour des
            clients, illustrant mon expertise technique et ma capacité à
            résoudre des problèmes complexes.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center">
            {/* <TabsList className="bg-background/50 backdrop-blur-sm border border-border">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                Tous
              </TabsTrigger>
              <TabsTrigger value="frontend" onClick={() => setActiveTab("frontend")}>
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" onClick={() => setActiveTab("backend")}>
                Backend
              </TabsTrigger>
            </TabsList> */}
          </div>

          <TabsContent value="all" className="mt-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="frontend" className="mt-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="backend" className="mt-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 via-accent/10 to-transparent -translate-y-1/2 translate-x-1/2 rounded-full blur-xl"></div>

          <h3 className="text-xl font-bold mb-2 relative inline-block">
            {project.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
          </h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-background/80 hover:bg-background"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            {project.github ? (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-primary/30 hover:border-primary/80 transition-colors"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-primary/30 hover:border-primary/80 transition-colors"
              >
                <div
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  <p className="text-red-500">X</p>
                  <span>Privee</span>
                </div>
              </Button>
            )}
            {project.demo ? (
              <Button
                size="sm"
                asChild
                className="relative overflow-hidden group"
              >
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Démo</span>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                )}
              </Button>
            ) : (
              <div className="">
                <p className="text-red-500 text-center">
                  Aucune Demo disponible
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
