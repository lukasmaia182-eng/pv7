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
        <div className="text-center mb-14">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            Você reconhece isso?
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            Você terminou. Saiu.<br />
            <span className="italic font-light">Fez o que todo mundo dizia pra fazer.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            E ainda assim, ele continua lá. Dentro de você.
          </p>
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

        {/* Bridge */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-[var(--color-brand)] text-white rounded-2xl px-6 py-5 max-w-lg">
            <p className="font-heading text-xl sm:text-2xl font-semibold italic text-[var(--color-gold)] mb-2">
              &ldquo;Quando eu vou conseguir me libertar disso?&rdquo;
            </p>
            <p className="text-white/80 text-sm">
              Se você respondeu sim para qualquer item acima, mesmo que em silêncio — esse desafio foi criado especificamente para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
