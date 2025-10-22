"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Mail, MapPin, Phone, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Sen } from "next/font/google"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // const emailInvit = SendInviteMail({
    //   email: formData.email,
    //   name: formData.name,
    //   object: formData.subject,
    //   description: formData.message,
    // })
    // console.log("emailInvit: " , emailInvit)
    // Logique d'envoi du formulaire
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Afficher un message de succès
    alert("Message envoyé avec succès !")
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "haurushaurus48@gmail.com",
      link: "haurushaurus48@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Téléphone",
      value: "+237 657 93 68 06",
      link: "tel:+237657936806",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Adresse",
      value: "Yaoundé, Cameroun",
      link: "https://maps.google.com/?q=Yaounde,Cameroun",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4"> Me contacter </h2>
          <div className="w-20 h-1 bg-primary mb-6 rounded-full" />
          <p className="max-w-2xl text-muted-foreground">
            Vous avez un projet en tête ou une question ? N&apos;hésitez pas à me contacter, je vous répondrai dans les
            plus brefs délais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Informations de contact</h3>
            <p className="text-muted-foreground">
              N&apos;hésitez pas à me contacter
            </p>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-6">
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Prendre rendez-vous</span>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sujet de votre message"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" onClick={handleSubmit}>
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
