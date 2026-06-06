'use client'

import Image from 'next/image'

export function Pv2Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pv2-hero.png"
          alt="Mulher sobrecarregada emocionalmente com TPM"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient overlay — bottom heavy para texto legível */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto px-5 pb-10 max-w-lg mx-auto w-full text-center">
        {/* Tag */}
        <span className="inline-block bg-[#e8637a] text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Método Silêncio Hormonal
        </span>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white leading-tight text-balance mb-4">
          Você também vira outra pessoa na TPM?
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-lg leading-relaxed mb-8">
          Irritação, ansiedade e culpa toda vez…<br />
          até eu descobrir o que realmente estava<br />
          acontecendo com meu corpo.
        </p>

        {/* CTA */}
        <a
          href="#oferta"
          className="inline-flex items-center justify-center gap-2 bg-[#e8637a] hover:bg-[#d45269] text-white font-bold rounded-full px-8 py-4 text-lg transition-all btn-pulse shadow-lg shadow-[#e8637a]/40 w-full max-w-sm"
        >
          Quero recuperar meu controle
        </a>

        {/* Micro-copy */}
        <p className="text-white/40 text-xs mt-4">
          Garantia de 7 dias · Acesso imediato
        </p>
      </div>
    </section>
  )
}
