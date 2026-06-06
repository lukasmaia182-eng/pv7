// Server Component
import Image from 'next/image'

export function Pv2Method() {
  return (
    <section className="relative min-h-[85vh] flex flex-col">
      <div className="absolute inset-0">
        <Image
          src="/images/pv2-calm.png"
          alt="Mulher tranquila e serena após o Método Silêncio Hormonal"
          fill
          className="object-cover object-top"
          loading="lazy"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#5c1a2a]/85 via-[#5c1a2a]/30 to-transparent" />
      </div>

      <div className="relative z-10 mt-auto px-5 pb-12 max-w-lg mx-auto w-full text-center">
        <span className="inline-block bg-[#e8637a] text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          A solução
        </span>

        <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-white leading-tight text-balance mb-4">
          Método Silêncio Hormonal
        </h2>

        <p className="text-white/85 text-xl leading-relaxed mb-6">
          Um protocolo simples para acalmar seu corpo <em>antes</em> da TPM chegar — e viver cada mês com mais leveza e controle.
        </p>

        <a
          href="#oferta"
          className="inline-flex items-center justify-center gap-2 bg-[#e8637a] text-white font-bold rounded-full px-8 py-4 text-lg shadow-lg w-full max-w-sm"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          Quero conhecer o método
        </a>
      </div>
    </section>
  )
}
