"use client"

import { useEffect } from "react"
import { AlertOctagon, RefreshCw } from "lucide-react"

export default function GlobalError({
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
    <html lang="fr">
      <body className="bg-background">
        <div className="flex flex-col items-center justify-center min-h-screen px-6">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-red-500 to-violet-600 opacity-20 blur-xl"></div>
            </div>
            <AlertOctagon className="h-24 w-24 text-red-600" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-center mb-4 text-foreground">Erreur critique</h1>

          <p className="text-xl text-muted-foreground text-center max-w-md mb-8">
            Une erreur critique est survenue. Nous nous excusons pour ce désagrément.
          </p>

          <button
            onClick={reset}
            className="px-6 py-3 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium flex items-center"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Réessayer
          </button>

          {error.digest && <p className="mt-8 text-sm text-muted-foreground">Code d&apos;erreur: {error.digest}</p>}
        </div>
      </body>
    </html>
  )
}
