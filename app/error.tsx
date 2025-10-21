"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-red-500 to-violet-600 opacity-20 blur-xl"></div>
        </div>
        <AlertTriangle className="h-24 w-24 text-red-600 dark:text-red-400" />
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-center mb-4">Une erreur est survenue</h1>

      <p className="text-xl text-muted-foreground text-center max-w-md mb-8">
        Nous sommes désolés, quelque chose s&apos;est mal passé lors du chargement de cette page.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={reset}
          size="lg"
          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Réessayer
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href="/">Retour à l&apos;accueil</Link>
        </Button>
      </div>

      {error.digest && <p className="mt-8 text-sm text-muted-foreground">Code d&apos;erreur: {error.digest}</p>}
    </div>
  )
}
