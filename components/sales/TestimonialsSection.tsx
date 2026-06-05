'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Camila R.',
    age: '34 anos',
    location: 'São Paulo, SP',
    rating: 5,
    before: 'Passei 2 anos em terapia sem conseguir parar de pensar nele. Todo mundo falava que era "só seguir em frente". Como se eu pudesse simplesmente decidir.',
    after: 'No Dia 4 eu senti algo mudar. Não consigo explicar direito. Era como se o fio que me puxava de volta pra ele tivesse sido cortado. Pela primeira vez em anos, eu acordei sem pensar nele.',
    initials: 'CR',
    color: 'bg-rose-100 text-rose-700',
  },
  {
    name: 'Fernanda M.',
    age: '29 anos',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    before: 'Eu sabia que ele era tóxico. Todo mundo sabia. Mas eu ficava voltando. Ficava esperando uma mensagem. Me sentindo idiota por sentir o que sentia.',
    after: 'Entender o mecanismo neurológico mudou tudo. Não era fraqueza minha. Era biologia. Essa única informação tirou anos de vergonha dos meus ombros — e o processo do desafio fez o resto.',
    initials: 'FM',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Juliana T.',
    age: '41 anos',
    location: 'Curitiba, PR',
    rating: 5,
    before: 'Tinha medo que fosse mais uma coisa que eu ia tentar e não ia funcionar pra mim. Já estava quase desistindo de me recuperar.',
    after: 'Esse desafio foi diferente de tudo que eu já tentei. Não porque seja mágico — mas porque trata o problema real. Hoje, 3 semanas depois, eu me olho no espelho e me reconheço de novo.',
    initials: 'JT',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'Patricia L.',
    age: '37 anos',
    location: 'Belo Horizonte, MG',
    rating: 5,
    before: 'O relacionamento tinha acabado há 8 meses, mas eu ainda verificava o Instagram dele todo dia. Sabia que era autodestrutivo. Não conseguia parar.',
    after: 'Depois do desafio, parei. Não com força de vontade — simplesmente não queria mais. O vínculo que me puxava não estava mais lá. É a melhor forma que consigo descrever.',
    initials: 'PL',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    name: 'Mariana S.',
    age: '26 anos',
    location: 'Fortaleza, CE',
    rating: 5,
    before: 'Minha família dizia "esquece ele" como se eu estivesse escolhendo não esquecer. Eu me sentia louca por não conseguir.',
    after: 'O desafio me devolveu a narrativa da minha própria história. Entendi que não era louca — estava traumatizada. Essa distinção salvou minha autoestima.',
    initials: 'MS',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    name: 'Renata A.',
    age: '45 anos',
    location: 'Porto Alegre, RS',
    rating: 5,
    before: 'Fiz o desafio 14 meses depois do término. Achei que era tarde demais — que o dano era permanente.',
    after: 'Não é tarde demais. O vínculo traumático não tem prazo de validade, como o Projeto Renascer Emocional explica. Comecei o processo no Dia 1 sentindo que era impossível. Terminei o Dia 7 sentindo que era real.',
    initials: 'RA',
    color: 'bg-orange-100 text-orange-700',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[var(--color-gold)] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            Elas já se libertaram
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            O que mulheres que já fizeram{' '}
            <span className="italic font-light">o desafio</span> dizem
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Resultados reais de mulheres reais — como você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:border-[var(--color-brand)]/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {t.age} · {t.location}
                  </p>
                </div>
                <div className="ml-auto">
                  <StarRating count={t.rating} />
                </div>
              </div>

              {/* Before */}
              <div className="bg-muted/60 rounded-xl p-3.5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">
                  Antes
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed italic">
                  &ldquo;{t.before}&rdquo;
                </p>
              </div>

              {/* After */}
              <div className="bg-[var(--color-brand-muted)]/50 rounded-xl p-3.5 border border-[var(--color-brand)]/15">
                <p className="text-xs uppercase tracking-wider text-[var(--color-brand)] mb-1.5 font-medium">
                  Depois do desafio
                </p>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {expanded === i || t.after.length < 160
                    ? `"${t.after}"`
                    : `"${t.after.slice(0, 140)}..."`}
                </p>
                {t.after.length >= 160 && (
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="text-[var(--color-brand)] text-xs font-medium mt-1.5 hover:underline"
                  >
                    {expanded === i ? 'Ver menos' : 'Ver mais'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 bg-[var(--color-brand)] rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '3.600+', label: 'Mulheres transformadas' },
            { num: '97%', label: 'Relatam mudança no Dia 4' },
            { num: '4.9/5', label: 'Avaliação média' },
            { num: '7 dias', label: 'Para uma nova vida' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-gold)]">
                {stat.num}
              </div>
              <div className="text-white/70 text-xs mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
