// Server Component — sem 'use client', zero JS extra no bundle
import Image from 'next/image'

export function Pv2Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col">
      {/* Full-bleed background image — priority + eager = LCP otimizado */}
      <div className="absolute inset-0">
        <Image
          src="/images/pv2-hero.png"
          alt="Mulher sobrecarregada emocionalmente com TPM"
          fill
          className="object-cover object-top"
          priority
          loading="eager"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto px-5 pb-10 max-w-lg mx-auto w-full text-center">
        <span className="inline-block bg-[#e8637a] text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Método Silêncio Hormonal
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white leading-tight text-balance mb-4">
          Você também vira outra pessoa na TPM?
        </h1>

        <p className="text-white/80 text-lg leading-relaxed mb-8">
          Irritação, ansiedade e culpa toda vez…<br />
          até eu descobrir o que realmente estava<br />
          acontecendo com meu corpo.
        </p>

        {/* CTA — CSS-only pulse, sem JS */}
        <a
          href="#oferta"
          className="inline-flex items-center justify-center gap-2 bg-[#e8637a] text-white font-bold rounded-full px-8 py-4 text-lg shadow-lg shadow-[#e8637a]/40 w-full max-w-sm btn-pulse"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          Quero recuperar meu controle
        </a>

        <p className="text-white/40 text-xs mt-4">
          Garantia de 7 dias · Acesso imediato
        </p>
      </div>
    </section>
  )
}
