import Link from "next/link"
import { FileQuestion } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page introuvable",
 }
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-[70vh] px-6">
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-emerald-500 to-violet-600 opacity-20 blur-xl"></div>
        </div>
        <div className="relative flex items-center justify-center">
          <FileQuestion className="h-24 w-24 text-emerald-600 dark:text-emerald-400" />
          <span className="absolute text-5xl font-bold text-foreground">404</span>
        </div>
      </div>
      
      <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
        Page introuvable
      </h1>
      
      <p className="text-xl text-muted-foreground text-center max-w-md mb-8">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
          <Link href="/">
            Retour à l&apos;accueil
          </Link>
        </Button> 
      </div>
    </div>
  )
}
