export function ScienceSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-brand-muted)]/40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[var(--color-brand)] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--color-gold)] blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            O que realmente está acontecendo com você
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            Tem nome. E{' '}
            <span className="italic font-light text-[var(--color-brand)]">
              não é fraqueza.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Explicação */}
          <div className="space-y-5">
            <p className="text-foreground/80 leading-relaxed text-lg">
              O que você sente tem uma explicação clínica e neurológica precisa. Não é falta de amor próprio. Não é ser fraca. Tem nome:
            </p>
            <div className="border-l-2 border-[var(--color-brand)] pl-5">
              <p className="font-heading text-2xl font-bold text-[var(--color-brand)] mb-1">
                Vínculo Traumático
              </p>
              <p className="text-foreground/70 text-base leading-relaxed">
                Ele não mora no relacionamento. Mora no seu sistema nervoso.
              </p>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Durante meses ou anos, seu cérebro foi condicionado por um ciclo brutal de idealização e destruição, afeto e crueldade, promessas e traições.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Esse ciclo criou uma{' '}
              <strong className="text-foreground">dependência neurológica real</strong>
              {' '}— o mesmo mecanismo do vício químico.
            </p>
          </div>

          {/* Consequências */}
          <div className="space-y-3">
            <p className="text-foreground/50 text-xs uppercase tracking-wider mb-4 font-medium">
              Por isso não adianta só querer esquecer
            </p>
            {[
              { title: 'Por isso você sabe que ele era terrível.', sub: 'E ainda assim sente falta.' },
              { title: 'Por isso a força de vontade nunca foi suficiente.', sub: 'Não é falha sua — é biologia.' },
              { title: 'Por isso terapia convencional não resolveu.', sub: 'Trauma narcisista exige método específico.' },
              { title: 'Por isso o tempo não curou.', sub: 'Vínculo traumático não enfraquece com o tempo.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/70 border border-[var(--color-brand)]/15 rounded-xl p-4">
                <p className="text-foreground font-medium text-sm leading-tight">{item.title}</p>
                <p className="text-muted-foreground text-sm mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bridge para o método */}
        <div className="max-w-2xl mx-auto">
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-center text-foreground font-light italic leading-relaxed text-balance mb-8">
            Não é falta de amor próprio.<br />
            Não é fraqueza.<br />
            <span className="text-[var(--color-brand)] font-semibold not-italic">
              É biologia sendo usada contra você.
            </span>
          </p>

          <div className="bg-white border border-[var(--color-brand)]/20 rounded-2xl p-6 shadow-sm">
            <p className="text-foreground font-semibold text-lg mb-2">
              Então qual é o processo certo?
            </p>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Em <strong className="text-foreground">21 dias estruturados em 3 semanas</strong>, você vai trabalhar o vínculo traumático em três níveis simultâneos: cognitivo, emocional e neurológico. Veja como funciona:
            </p>
            <div className="flex items-center gap-2 text-[var(--color-brand)] font-medium text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              Veja o método completo dos 21 dias abaixo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
