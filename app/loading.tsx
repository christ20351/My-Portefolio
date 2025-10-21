import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-[60vh]">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-emerald-500 to-violet-600 opacity-20 blur-xl animate-pulse"></div>
        </div>
        <Loader2 className="h-16 w-16 animate-spin text-emerald-600 dark:text-emerald-400" />
      </div>
      <h2 className="mt-8 text-2xl font-bold tracking-tight text-center">
        Chargement en cours...
      </h2>
      <p className="mt-2 text-muted-foreground text-center max-w-md">
        Préparation du contenu pour une expérience optimale
      </p>
    </div>
  )
}
