import { CTAButton } from './CTAButton'
import { BeforeAfterSlider } from './BeforeAfterSlider'

export function HeroSection() {
  return (
    <section className="relative bg-[var(--color-brand-muted)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen py-16 md:py-20">

          {/* Left — copy */}
          <div className="relative z-10 order-2 md:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] inline-block" />
              <span className="text-[var(--color-brand)] text-sm font-medium tracking-wide uppercase">
                +3.600 mulheres já se libertaram
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-foreground text-balance mb-6">
              <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Você sobreviveu a ele.
              </span>
              <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-light italic leading-tight mt-1">
                Agora é hora de sobreviver
              </span>
              <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold leading-tight mt-1 text-[var(--color-brand)]">
                ao vínculo que ele deixou.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-foreground/70 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
              Em{' '}
              <strong className="text-foreground font-semibold">7 dias</strong>
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

          {/* Right — antes/depois slider */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-none">
              {/* Decorative shape behind slider */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-[var(--color-brand)]/20 translate-x-4 translate-y-4" />
              <BeforeAfterSlider />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border z-10">
                <div className="font-heading text-2xl font-bold text-[var(--color-brand)]">7 dias</div>
                <div className="text-xs text-muted-foreground leading-tight mt-0.5">para uma nova você</div>
              </div>
              {/* Gold accent dot */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[var(--color-gold)] opacity-80 blur-sm z-10" />
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-gold)] z-10" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
