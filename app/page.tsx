import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <h1 className="text-7xl font-bold tracking-tighter mb-4">
            CHRIST
          </h1>
          <p className="text-2xl text-red-500">DEVELOPPEUR FULL-STACK &amp; CYBERSECURITE</p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
            Passionné par l'innovation technologique et la cybersécurité, je crée des solutions robustes qui allient performance et élégance. 
            De VIGIL, mon outil de surveillance avancé, aux interfaces intuitives, je transforme des idées complexes en expériences digitales premium.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Projets</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* VIGIL */}
            <div className="bg-zinc-900 border border-red-500/20 rounded-3xl p-8 hover:border-red-500 transition-all group">
              <h3 className="text-3xl font-bold mb-4 text-red-500">VIGIL</h3>
              <p className="text-gray-400 mb-6">Outil de surveillance avancé multi-plateforme avec dashboard en temps réel.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-red-500/10 text-red-400 text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-red-500/10 text-red-400 text-sm rounded-full">React</span>
              </div>
              <a href="https://github.com/christ20351/VIGIL" className="mt-6 inline-block text-red-500 hover:underline">Voir le repo →</a>
            </div>
            {/* Autres projets */}
          </div>
        </div>
      </section>
    </div>
  );
}