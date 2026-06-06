import { CTAButton } from './CTAButton'

const days = [
  {
    day: 'Dia 1',
    title: 'Identificando o Ciclo Narcisista',
    desc: 'Você finalmente entende o mecanismo completo do que foi feito com você. Não para ficar presa no passado — para parar de repetir sem saber por quê. Esse dia sozinho já muda a forma como você vê tudo.',
    highlight: false,
  },
  {
    day: 'Dia 2',
    title: 'A Manipulação Psicológica',
    desc: 'Gaslighting. Hoovering. Erosão de identidade. Você aprende a nomear cada ferramenta que foi usada contra você. E nomear é o começo de tirar o poder delas.',
    highlight: false,
  },
  {
    day: 'Dia 3',
    title: 'O Vínculo Traumático',
    desc: 'A explicação neurológica e emocional de por que você não consegue esquecer. Por que sente falta. Por que ainda pensa nele. E por que força de vontade nunca foi — e nunca será — suficiente.',
    highlight: false,
  },
  {
    day: 'Dia 4',
    title: 'Quebrando o Vínculo',
    desc: 'O coração do desafio. O processo prático e específico de desativar o vínculo traumático no nível onde ele realmente existe — não na cabeça, no sistema nervoso. Esse é o dia que 97% das participantes descrevem como "a virada" — o momento em que algo realmente muda.',
    highlight: true,
  },
  {
    day: 'Dia 5',
    title: 'Reconstrução da Identidade',
    desc: 'O narcisista não roubou só o relacionamento. Roubou quem você era. Nesse dia você começa o processo de escavação — removendo as camadas de dúvida, culpa e confusão que foram colocadas em cima de quem você sempre foi.',
    highlight: false,
  },
  {
    day: 'Dia 6',
    title: 'Autoestima, Corpo e Prosperidade',
    desc: 'Seu corpo carrega o peso desse relacionamento. Sua autoestima foi destruída sistematicamente. Nesse dia você trabalha a reconexão com o próprio corpo e a reconstrução da autoestima real.',
    highlight: false,
  },
  {
    day: 'Dia 7',
    title: 'Renascimento Emocional',
    desc: 'Não é final. É começo. Você sai desse dia com clareza de quem você é, do que aconteceu com você, e de onde vai a partir de agora — com uma versão de você que não carrega mais esse relacionamento como identidade principal.',
    highlight: false,
  },
]

export function ScheduleSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            Como funciona
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            7 dias que podem{' '}
            <span className="italic font-light">mudar tudo</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-3">
            Encontros online ao vivo · Método estruturado · Suporte em cada etapa
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-[var(--color-brand)]/20 hidden sm:block" />

          <div className="space-y-4">
            {days.map((item, i) => (
              <div key={i} className={`relative flex gap-4 sm:gap-6 group`}>
                {/* Day dot */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center z-10 font-bold text-xs transition-all ${
                      item.highlight
                        ? 'bg-[var(--color-brand)] text-[var(--color-brand-foreground)] shadow-lg shadow-[var(--color-brand)]/30'
                        : 'bg-[var(--color-brand-muted)] text-[var(--color-brand)] border border-[var(--color-brand)]/20'
                    }`}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 rounded-2xl p-5 mb-2 transition-all ${
                    item.highlight
                      ? 'bg-[var(--color-brand)] text-[var(--color-brand-foreground)] shadow-lg shadow-[var(--color-brand)]/20'
                      : 'bg-muted/60 border border-border hover:border-[var(--color-brand)]/30'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-medium uppercase tracking-wider ${
                        item.highlight
                          ? 'text-[var(--color-brand-foreground)]/70'
                          : 'text-[var(--color-brand)]'
                      }`}
                    >
                      {item.day}
                    </span>
                    {item.highlight && (
                      <span className="bg-[var(--color-gold)] text-[var(--color-gold-foreground)] text-xs font-bold px-2 py-0.5 rounded-full">
                        O dia da virada
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-heading text-xl sm:text-2xl font-semibold mb-2 ${
                      item.highlight
                        ? 'text-[var(--color-brand-foreground)]'
                        : 'text-foreground'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      item.highlight
                        ? 'text-[var(--color-brand-foreground)]/80'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="mt-14 text-center bg-[var(--color-brand-muted)]/50 border border-[var(--color-brand)]/15 rounded-2xl p-8">
          <p className="text-foreground font-semibold text-lg mb-1">
            Pronta para começar essa jornada?
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Acesso imediato assim que o pagamento for confirmado
          </p>
          <CTAButton size="lg" />
          <p className="text-muted-foreground text-xs mt-3">
            De <span className="line-through">R$197</span> por{' '}
            <span className="text-[var(--color-brand)] font-bold">R$44</span>
            {' '}· Garantia de 7 dias · Vagas limitadas
          </p>
        </div>
      </div>
    </section>
  )
}
