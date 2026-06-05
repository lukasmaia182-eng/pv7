import Image from 'next/image'

export function AuthoritySection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-brand-muted)]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-[var(--color-brand)]/10 translate-x-3 translate-y-3" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-[var(--color-brand)]/20 shadow-2xl">
                <Image
                  src="/images/dr-jane.png"
                  alt="Dra. Jane Hansen — especialista em trauma narcisista"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Credential card */}
            <div className="absolute -bottom-6 -right-2 md:right-0 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] border border-border">
              <div className="font-heading text-3xl font-bold text-[var(--color-brand)]">3.600+</div>
              <div className="text-xs text-muted-foreground leading-tight mt-1">
                mulheres que chegaram destruídas e saíram do outro lado
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 md:order-2">
            <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
              Quem vai guiar você
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight mb-6">
              Dra. Jane Hansen
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                A Dra. Jane passou anos percebendo que as abordagens convencionais não foram criadas para esse tipo de ferida.
              </p>
              <p>
                Terapia convencional trata dor emocional comum.{' '}
                <strong className="text-foreground">
                  Trauma narcisista não é dor emocional comum.
                </strong>{' '}
                É uma reprogramação sistemática da sua identidade, da sua percepção da realidade e do seu sistema nervoso.
              </p>
              <p>
                Por isso ela desenvolveu um método específico — testado, estruturado e refinado com mais de 3.600 mulheres — que vai ao nível onde o vínculo realmente vive.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 border-l-4 border-[var(--color-brand)] pl-5">
              <p className="font-heading text-xl md:text-2xl italic text-foreground font-medium leading-snug">
                &ldquo;Eu não digo que você vai ficar bem. Eu te mostro o caminho de como chegar lá.&rdquo;
              </p>
              <p className="text-muted-foreground text-sm mt-2">— Dra. Jane Hansen</p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Especialista em Trauma Narcisista',
                'Método próprio e testado',
                'Mais de 3.600 vidas transformadas',
                'Encontros online ao vivo',
              ].map((c) => (
                <span
                  key={c}
                  className="text-xs bg-[var(--color-brand)]/10 text-[var(--color-brand)] border border-[var(--color-brand)]/20 rounded-full px-3 py-1.5 font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
