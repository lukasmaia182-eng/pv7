import Image from 'next/image'

export function Pv2FinalCTA() {
  return (
    <section className="relative min-h-[85vh] flex flex-col">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pv2-after.png"
          alt="Mulher feliz e leve após o Método Silêncio Hormonal"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#5c1a2a]/90 via-[#5c1a2a]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto px-5 pb-12 max-w-lg mx-auto w-full text-center">
        <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-white leading-tight text-balance mb-4">
          Você merece atravessar o mês inteiro sendo você mesma.
        </h2>

        <p className="text-white/80 text-lg leading-relaxed mb-8">
          Mais de 4.200 mulheres já pararam de ser reféns da TPM.<br />
          Agora é a sua vez.
        </p>

        <a
          href="#oferta"
          className="inline-flex items-center justify-center gap-2 bg-[#e8637a] hover:bg-[#d45269] text-white font-bold rounded-full px-8 py-4 text-lg transition-all btn-pulse shadow-lg w-full max-w-sm mb-4"
        >
          Quero viver uma TPM mais leve
        </a>

        <p className="text-white/50 text-xs">
          De R$97 por <strong className="text-white">R$37</strong> · Garantia de 7 dias · Acesso imediato
        </p>

        {/* Final note */}
        <div className="mt-10 border-t border-white/20 pt-8">
          <p className="text-white/60 text-sm italic leading-relaxed">
            &ldquo;Você não vai se sentir assim para sempre. Mas só muda se você fizer algo diferente desta vez.&rdquo;
          </p>
          <p className="text-white/30 text-xs mt-2">— Método Silêncio Hormonal</p>
        </div>
      </div>
    </section>
  )
}
