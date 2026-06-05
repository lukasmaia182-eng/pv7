export function ScienceSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-brand-muted)]/40 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[var(--color-brand)] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--color-gold)] blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            O que está acontecendo com você
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            Tem nome. E{' '}
            <span className="italic font-light text-[var(--color-brand)]">
              não é fraqueza.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Left — explanation */}
          <div className="space-y-5">
            <p className="text-foreground/80 leading-relaxed text-lg">
              O que você sente — essa incapacidade de esquecer, esse peso que não vai embora, essa exaustão que nenhum descanso resolve — tem uma explicação psicológica e neurológica precisa.
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
              Durante meses ou anos, seu cérebro foi condicionado por um ciclo brutal de recompensa e punição — idealização e destruição, afeto e crueldade, promessas e traições.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Esse ciclo criou uma{' '}
              <strong className="text-foreground">
                dependência neurológica real
              </strong>
              {' '}— o mesmo mecanismo do vício químico.
            </p>
          </div>

          {/* Right — consequences */}
          <div className="space-y-4">
            <p className="text-foreground/50 text-sm uppercase tracking-wider mb-5">
              Por isso não adianta só querer esquecer
            </p>
            {[
              {
                title: 'Por isso você sabe racionalmente que ele era terrível.',
                sub: 'E ainda assim sente falta.',
              },
              {
                title: 'Por isso força de vontade nunca foi suficiente.',
                sub: 'Não é falha sua — é biologia.',
              },
              {
                title: 'Por isso terapia convencional não resolveu.',
                sub: 'Trauma narcisista exige método específico.',
              },
              {
                title: 'Por isso o tempo não curou.',
                sub: 'Vínculo traumático não enfraquece com o tempo.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 border border-[var(--color-brand)]/15 rounded-xl p-4"
              >
                <p className="text-foreground font-medium text-sm leading-tight">
                  {item.title}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion statement */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground font-light italic leading-relaxed text-balance">
            Não é falta de amor próprio.<br />
            Não é fraqueza.<br />
            <span className="text-[var(--color-brand)] font-semibold not-italic">
              É biologia sendo usada contra você.
            </span>
          </p>
          <p className="text-muted-foreground mt-4 text-base">
            E biologia tem solução. Com o processo certo.
          </p>
        </div>
      </div>
    </section>
  )
}
