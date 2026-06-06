const pains = [
  'Você ainda checa o perfil dele nas redes sociais, mesmo sabendo que não deveria',
  'Você compara toda nova pessoa com ele — e ninguém passa no teste',
  'Você acorda às 3 da manhã com o coração acelerado pensando nele',
  'Você se sente burra por ainda sofrer por alguém que te fez tão mal',
  'Você já tentou "seguir em frente" mas a saudade volta em ondas sem aviso',
  'Uma música, um cheiro, um lugar — e todo o sofrimento volta em segundos',
]

export function FrioPain() {
  return (
    <section className="bg-[var(--color-brand-muted)]/30 py-10 px-4 sm:px-6 border-t border-border">
      <div className="max-w-2xl mx-auto">

        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground text-balance leading-tight mb-2 text-center">
          Isso ainda está acontecendo com você?
        </h2>
        <p className="text-muted-foreground text-sm text-center mb-6">
          Se você reconhecer pelo menos 2 itens abaixo, esse programa foi feito para você.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {pains.map((pain, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border shadow-sm">
              <div className="w-5 h-5 rounded-full bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[var(--color-brand)]" />
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">{pain}</p>
            </div>
          ))}
        </div>

        {/* Explicacao do mecanismo — curta */}
        <div className="bg-[var(--color-brand)] rounded-2xl p-5 text-white text-center">
          <p className="font-heading text-lg sm:text-xl font-semibold text-[var(--color-gold)] mb-2">
            Isso não é falta de amor próprio.
          </p>
          <p className="text-white/85 text-sm leading-relaxed">
            É o vínculo traumático agindo no seu sistema nervoso. O mesmo mecanismo do vício.
            E vício não se cura com força de vontade — se cura com o processo certo.
          </p>
        </div>

      </div>
    </section>
  )
}
