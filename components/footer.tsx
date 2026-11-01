import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative flex items-center justify-center h-10 w-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-secondary opacity-80 rotate-45 transform-gpu"></div>
                <span className="relative text-xl font-bold text-primary-foreground">
                  CF
                </span>
              </div>
              <span className="font-bold">Christ Fosso</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Développeur full-stack et passionné de cybersécurité. Je transforme
              des idées en solutions digitales performantes.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://github.com/christ20351"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/Christ-fosso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:haurushaurus48@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#accueil" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#a-propos" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Expérience
                </Link>
              </li>
              <li>
                <Link href="#projets" className="text-muted-foreground hover:text-primary transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Christ Fosso. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
