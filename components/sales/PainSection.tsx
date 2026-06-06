export function PainSection() {
  const painPoints = [
    {
      text: 'Você acordou hoje pensando nele antes de lembrar que estava acordada.',
    },
    {
      text: 'Você ainda ensaia mentalmente a conversa onde ele finalmente pede desculpas — sabendo que ela nunca vai acontecer.',
    },
    {
      text: 'Uma música toca, uma rua aparece, um cheiro passa — e em segundos o chão some embaixo dos seus pés.',
    },
    {
      text: 'Você tentou academia, dieta, terapia, viagem, força de vontade. Nada funcionou direito, porque você estava tratando o sintoma enquanto a causa continuava intacta dentro de você.',
    },
    {
      text: 'Você olha no espelho e não reconhece mais quem está do outro lado. Não só o corpo. O olhar. O brilho que sumiu tão aos poucos que você nem percebeu quando foi embora.',
    },
    {
      text: 'Você está exausta. Não o cansaço de não ter dormido. O cansaço que não vai embora independente de quantas horas você dorme.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section intro */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            Isso é sobre você?
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            Você saiu do relacionamento.<br />
            <span className="text-[var(--color-brand)]">Mas ele não saiu de você.</span>
          </h2>

          {/* Storytelling hook — John Carlton style */}
          <div className="mt-8 max-w-2xl mx-auto text-left bg-[var(--color-brand-muted)]/50 border border-[var(--color-brand)]/15 rounded-2xl p-6 sm:p-8">
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              Você conhece a sensação de acordar às 3 da manhã com o coração acelerado, pensando nele — sendo que você já <em>sabe</em> que não deveria estar pensando.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              Você já ouviu &ldquo;se cuida&rdquo;, &ldquo;vai pra frente&rdquo;, &ldquo;ele não merece seu choro&rdquo; — de pessoas que te amam mas não fazem ideia do que realmente está acontecendo dentro de você.
            </p>
            <p className="text-foreground font-semibold text-lg leading-relaxed">
              O que está acontecendo <em>não é fraqueza</em>. Não é falta de amor próprio. Tem um nome clínico, uma explicação neurológica — e uma saída real. Mas primeiro, você precisa se reconhecer aqui embaixo:
            </p>
          </div>
        </div>

        {/* Pain cards */}
        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-2xl bg-[var(--color-brand-muted)]/40 border border-[var(--color-brand)]/10 group"
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[var(--color-brand)]/40 flex items-center justify-center mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand)]/60 group-hover:bg-[var(--color-brand)] transition-colors" />
              </div>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge — Eugene Schwartz: nomeia a dor, cria desejo pela solução */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-[var(--color-brand)] text-white rounded-2xl px-6 py-6 max-w-xl text-left">
            <p className="font-heading text-xl sm:text-2xl font-semibold text-[var(--color-gold)] mb-3">
              &ldquo;Por que eu não consigo simplesmente parar de pensar nele?&rdquo;
            </p>
            <p className="text-white/85 text-base leading-relaxed mb-3">
              Porque a resposta não está no amor próprio. Está no seu sistema nervoso.
              Você foi condicionada por um ciclo de abuso que criou uma <strong className="text-white">dependência neurológica real</strong> — o mesmo mecanismo do vício.
            </p>
            <p className="text-white/85 text-base leading-relaxed">
              E dependência neurológica não se cura com força de vontade. Se cura com o processo certo. Esse desafio existe para te dar exatamente esse processo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
