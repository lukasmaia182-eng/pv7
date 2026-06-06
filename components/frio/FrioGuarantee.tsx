export function FrioGuarantee() {
  return (
    <section className="bg-[var(--color-brand-muted)]/30 py-10 px-4 sm:px-6 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">

        {/* Icone de escudo */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-[var(--color-brand)]/20 shadow-md mb-4">
          <svg className="w-8 h-8 text-[var(--color-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-3">
          Garantia Incondicional de 7 Dias
        </h2>
        <p className="font-heading text-lg italic text-[var(--color-brand)] mb-5">
          &ldquo;O risco é completamente nosso.&rdquo;
        </p>

        <div className="bg-white border border-border rounded-2xl p-5 text-left shadow-sm">
          <p className="text-foreground/80 text-sm leading-relaxed mb-3">
            Se em qualquer momento nos primeiros 7 dias você sentir que o programa não é para você —
            por qualquer razão, sem precisar explicar nada —
            você recebe <strong className="text-foreground">100% do seu dinheiro de volta.</strong>
          </p>
          <p className="text-foreground/80 text-sm leading-relaxed mb-3">
            Sem perguntas. Sem formulário. Direto na sua conta.
          </p>
          <p className="text-foreground font-medium text-sm border-t border-border pt-3 mt-3">
            O único risco real é não entrar — e daqui a 21 dias estar exatamente onde está agora.
          </p>
        </div>

      </div>
    </section>
  )
}
