import Image from 'next/image'
import { CTAButton } from './CTAButton'

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-32 bg-[var(--color-dark)] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/transformation.png"
          alt="Transformação emocional"
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/70 to-[var(--color-dark)]/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Two paths */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold text-[var(--color-dark-foreground)]/60 mb-3">
              Sem o desafio
            </h3>
            <ul className="space-y-2 text-[var(--color-dark-foreground)]/40 text-sm leading-relaxed">
              {[
                'O mesmo loop noturno de pensamentos',
                'O mesmo peso que não vai embora',
                'A mesma exaustão sem explicação',
                'O vínculo consumindo sua energia',
                'A mesma você daqui a 7 dias',
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/30 rounded-2xl p-6 text-left">
            <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold text-[var(--color-dark-foreground)] mb-3">
              Em 7 dias
            </h3>
            <ul className="space-y-2 text-[var(--color-dark-foreground)]/70 text-sm leading-relaxed">
              {[
                'Clareza de tudo que aconteceu com você',
                'Vínculo traumático perdendo a carga',
                'Sistema nervoso começando a se regular',
                'Autoestima e identidade se reconstruindo',
                'Você de volta ao papel principal da sua vida',
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <svg className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main message */}
        <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-[var(--color-dark-foreground)] font-light leading-relaxed mb-6 text-balance">
          A diferença entre esses dois lugares é{' '}
          <strong className="font-semibold">uma decisão.</strong>
          <br />
          <span className="italic text-[var(--color-gold)]">Essa decisão. Agora.</span>
        </p>

        <p className="text-[var(--color-dark-foreground)]/60 text-base mb-10 max-w-lg mx-auto">
          Mais de 3.600 mulheres já tomaram essa decisão. Todas elas hesitaram antes de clicar. Todas elas agradecem por ter clicado.
        </p>

        <div className="flex flex-col items-center gap-4">
          <CTAButton size="xl" className="btn-pulse" />
          <p className="text-[var(--color-dark-foreground)]/40 text-sm">
            De <span className="line-through">R$197</span> por apenas{' '}
            <span className="text-[var(--color-gold)] font-semibold">R$44</span>
            {' '}· Vagas limitadas · Garantia de 7 dias
          </p>
        </div>

        {/* Final note */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-[var(--color-dark-foreground)]/50 text-sm sm:text-base italic leading-relaxed max-w-lg mx-auto">
            &ldquo;Você chegou até aqui por uma razão. Honra essa razão. O vínculo que te prende está lutando para você não clicar. Não deixa ele ganhar mais esse dia.&rdquo;
          </p>
          <p className="text-[var(--color-dark-foreground)]/30 text-xs mt-3">— Dra. Jane Hansen</p>
        </div>
      </div>
    </section>
  )
}
