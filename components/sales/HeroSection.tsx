import Image from 'next/image'
import { CTAButton } from './CTAButton'

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[var(--color-brand-muted)] overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-woman.png"
          alt="Mulher encontrando sua liberdade emocional"
          fill
          className="object-cover object-center opacity-15"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-muted)]/80 via-[var(--color-brand-muted)]/50 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-muted)]/90 via-transparent to-[var(--color-brand-muted)]/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] inline-block" />
          <span className="text-[var(--color-brand)] text-sm font-medium tracking-wide uppercase">
            +3.600 mulheres já se libertaram
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading text-foreground text-balance mb-6">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Você sobreviveu a ele.
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic leading-tight mt-1">
            Agora é hora de sobreviver
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mt-1 text-[var(--color-brand)]">
            ao vínculo que ele deixou.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-foreground/70 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed mb-10">
          Em{' '}
          <strong className="text-foreground font-semibold">
            7 dias
          </strong>
          , você entende o que foi feito com você, quebra o vínculo traumático no nível onde ele realmente existe — no seu sistema nervoso — e começa a voltar a ser quem você era{' '}
          <em>antes</em> dele.
        </p>

        {/* Social proof strip */}
        <div className="flex flex-wrap gap-6 mb-10">
          {[
            { num: '3.600+', label: 'Mulheres transformadas' },
            { num: '7 dias', label: 'Processo completo' },
            { num: '100%', label: 'Garantia incondicional' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-brand)]">
                {item.num}
              </div>
              <div className="text-foreground/50 text-xs uppercase tracking-wider mt-0.5">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <CTAButton size="lg" className="btn-pulse" />
          <div className="text-foreground/60 text-sm">
            <span className="line-through mr-1 text-foreground/30">R$197</span>
            <span className="text-[var(--color-brand)] font-semibold text-base">
              por apenas R$44
            </span>
            {' '}— pagamento único
          </div>
        </div>

        {/* Security badges */}
        <div className="flex flex-wrap items-center gap-4 mt-8 text-foreground/40 text-xs">
          {['Pagamento 100% seguro', 'Acesso imediato', 'Garantia de 7 dias', 'Pix · Cartão · Boleto'].map((b) => (
            <span key={b} className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[var(--color-brand)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
