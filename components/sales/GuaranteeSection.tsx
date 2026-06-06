export function GuaranteeSection() {
  return (
    <section className="py-20 md:py-24 bg-[var(--color-brand-muted)]/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Shield icon */}
        <div className="w-20 h-20 rounded-full bg-[var(--color-brand)]/10 border-2 border-[var(--color-brand)]/20 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-[var(--color-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>

        <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
          Sem risco algum
        </p>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight mb-4">
          Garantia Incondicional{' '}
          <span className="italic font-light text-[var(--color-brand)]">de 7 Dias</span>
        </h2>

        <p className="font-heading text-xl sm:text-2xl text-foreground/75 italic mb-8 max-w-lg mx-auto">
          &ldquo;Você não arrisca nada. O risco é completamente nosso.&rdquo;
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 text-left max-w-xl mx-auto">
          <p className="text-foreground/80 leading-relaxed mb-4">
            Se em qualquer momento durante os 7 dias você sentir que o desafio não é para você — por qualquer razão, sem precisar explicar absolutamente nada — você recebe{' '}
            <strong className="text-foreground">100% do seu investimento de volta.</strong>
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Sem perguntas. Sem formulário. Sem espera. Direto para sua conta.
          </p>
          <div className="bg-[var(--color-brand)]/8 border border-[var(--color-brand)]/15 rounded-xl p-4 mb-4">
            <p className="text-foreground font-medium text-sm leading-relaxed">
              Pense desta forma: você pode entrar, assistir os 7 dias inteiros, aplicar o método — e se não sentir absolutamente nada mudar, pedir o reembolso. Você não perde nada. E tem tudo a ganhar.
            </p>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            O único risco real é <em>não entrar</em> — e daqui a 7 dias estar exatamente onde está agora.
          </p>
        </div>
      </div>
    </section>
  )
}
