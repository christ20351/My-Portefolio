"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      content:
        "Christ est une personne de tres pragmatique et reactif à la tache. sa passion pour le code ne fait aucun doute",
      author: "Tagne Miguel",
      position: "CTO, Escrutin",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    // {
    //   id: 2,
    //   content:
    //     "J'ai eu le plaisir d'encadrer Christ pendant quelques temps. Son envie et sa determination associé à sa curiosité l'ameneront à tres loin .",
    //   author: "Joel Feubi",
    //   position: "CEO Sliim Technologies",
    //   avatar: "/placeholder.svg?height=100&width=100",
    // },
    {
      id: 3,
      content:
        "En tant que Encadreur Academique de Faha Fosso Christ, je pense qu'il a encore beaucoup de choses à apprendre mais il s'en sort plutot pas mal",
      author: "Wambo Jeremy",
      position: "Enseignant, IAI Cameroun",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="temoignages" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Témoignages</h2>
          <div className="w-20 h-1 bg-primary mb-6 rounded-full" />
          <p className="max-w-2xl text-muted-foreground">
            Découvrez ce que mes clients, collaborateurs et mentors disent de mon travail et de ma façon d&apos;aborder
            les projets.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-around gap-10"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={item}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-primary mb-4">
                    <Quote className="h-8 w-8" />
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow w-[450px]">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
