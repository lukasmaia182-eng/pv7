// Server Component — emojis substituídos por SVGs inline (mais leves e sem carregamento de fonte emoji)
const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e8637a" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Menos irritação',
    desc: 'Reduza as explosões emocionais nos dias antes da menstruação',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e8637a" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m14.24-5.66-.7.7M7.1 16.9l-.7.7m12.02 0-.7-.7M7.1 7.1l-.7-.7M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    title: 'Mais controle emocional',
    desc: 'Pare de se sentir tomada por outra pessoa todo mês',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e8637a" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Menos inchaço',
    desc: 'Reduza a retenção de líquidos que pesa no corpo e na autoestima',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e8637a" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.06-.03-.12-.03-.18-.03-.34 0-.67.03-1 .07" />
      </svg>
    ),
    title: 'Mais leveza no dia a dia',
    desc: 'Acorde com energia e atravesse o mês sem dread da TPM',
  },
]

export function Pv2Benefits() {
  return (
    <section className="bg-white py-16 px-5">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#e8637a] font-semibold text-sm uppercase tracking-widest mb-3">
            O que você vai sentir
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#2a1a1f] leading-tight text-balance">
            Imagine atravessar o mês inteiro<br />
            <span className="italic font-light text-[#e8637a]">sem medo de si mesma.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-[#fff5f7] border border-[#f5c6cf] rounded-2xl p-5 flex flex-col gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-[#f5c6cf] flex items-center justify-center">
                {b.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#2a1a1f]">{b.title}</h3>
              <p className="text-[#5a3a42] text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
