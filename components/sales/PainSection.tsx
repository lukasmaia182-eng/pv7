export function PainSection() {
  const painPoints = [
    'Você terminou o relacionamento — mas não consegue parar de pensar nele.',
    'Você sabe que ele era tóxico. E ainda assim sente falta.',
    'Uma música, um cheiro, uma rua — e em segundos o chão some.',
    'Você já tentou terapia, academia, viagem, força de vontade. Nada funcionou de verdade.',
    'Você acorda às 3 da manhã com o coração acelerado pensando nele — de novo.',
    'Você está exausta de uma forma que nenhum descanso resolve.',
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Headline da seção */}
        <div className="text-center mb-10">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            Reconhece isso em você?
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            Você saiu do relacionamento.<br />
            <span className="text-[var(--color-brand)]">Mas ele não saiu de você.</span>
          </h2>
        </div>

        {/* Checklist da dor — visual, rápido, mobile-first */}
        <div className="space-y-3 mb-10">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-brand-muted)]/40 border border-[var(--color-brand)]/10"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-brand)]/20 border border-[var(--color-brand)]/40 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[var(--color-brand)]" />
              </div>
              <p className="text-foreground/80 text-base leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        {/* Bloco de empatia + bridge */}
        <div className="bg-[var(--color-brand)] rounded-2xl p-6 sm:p-8 text-left">
          <p className="font-heading text-xl sm:text-2xl font-semibold text-[var(--color-gold)] mb-3">
            &ldquo;Por que eu simplesmente não consigo esquecer?&rdquo;
          </p>
          <p className="text-white/85 text-base leading-relaxed mb-3">
            Porque a resposta não está na sua forca de vontade. Está no seu sistema nervoso.
            Você foi condicionada por um ciclo de abuso que criou uma <strong className="text-white">dependência neurológica real</strong> — o mesmo mecanismo do vício.
          </p>
          <p className="text-white/85 text-base leading-relaxed">
            E dependência neurológica não se cura com força de vontade. Se cura com o processo certo. O <strong className="text-white">Desafio 21 Dias Para Se Libertar de um Narcisista</strong> existe para te dar exatamente esse processo.
          </p>
        </div>
      </div>
    </section>
  )
}
