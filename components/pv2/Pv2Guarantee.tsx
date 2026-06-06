export function Pv2Guarantee() {
  return (
    <section className="bg-[#fff5f7] py-14 px-5">
      <div className="max-w-lg mx-auto text-center">
        {/* Shield icon */}
        <div className="w-20 h-20 rounded-full bg-[#e8637a] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#e8637a]/30">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#2a1a1f] mb-4 text-balance">
          Garantia Incondicional de 7 Dias
        </h2>

        <div className="bg-white border border-[#f5c6cf] rounded-2xl p-6 text-left shadow-sm">
          <p className="text-[#5a3a42] leading-relaxed mb-3">
            Se em até 7 dias você não sentir nenhuma diferença — por qualquer razão, sem precisar explicar nada — <strong className="text-[#2a1a1f]">devolvemos 100% do seu dinheiro.</strong>
          </p>
          <p className="text-[#5a3a42] leading-relaxed mb-4">
            Sem perguntas. Sem formulário complicado. Sem julgamento.
          </p>
          <div className="bg-[#fff5f7] border border-[#f5c6cf] rounded-xl p-4">
            <p className="text-[#2a1a1f] font-semibold text-sm text-center">
              O risco é completamente nosso. Você não perde nada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
