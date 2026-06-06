const testimonials = [
  {
    name: 'Camila R.',
    time: 'Após a Semana 1',
    text: 'Eu já sabia que o relacionamento era tóxico. Mas mesmo assim não conseguia parar de checar o WhatsApp dele. Depois do método entendi por que — e pela primeira vez em meses dormi a noite toda sem sonhar com ele.',
  },
  {
    name: 'Fernanda M.',
    time: 'Após a Semana 2',
    text: 'Na Semana 2 senti algo que não sentia há dois anos: indiferença. Não raiva, não saudade. Indiferença. É a sensação mais libertadora do mundo.',
  },
  {
    name: 'Juliana T.',
    time: 'Após os 21 dias',
    text: 'Fiz terapia por 1 ano e nunca cheguei nem perto do que aconteceu em 21 dias. Não é magia — é método. Recomendo para qualquer mulher que ainda está presa em relacionamento que já acabou.',
  },
]

export function FrioProof() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 border-t border-border">
      <div className="max-w-2xl mx-auto">

        <p className="text-center text-xs uppercase tracking-widest text-[var(--color-brand)] font-medium mb-6">
          Resultados reais · Mulheres reais
        </p>

        <div className="flex flex-col gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[var(--color-brand-muted)]/40 border border-[var(--color-brand)]/15 rounded-2xl p-5">
              {/* Estrelas */}
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-sm">{t.name}</span>
                <span className="text-xs text-[var(--color-brand)] font-medium bg-[var(--color-brand)]/10 px-2.5 py-1 rounded-full">
                  {t.time}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
