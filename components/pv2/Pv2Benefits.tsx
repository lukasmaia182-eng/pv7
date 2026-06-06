const benefits = [
  { icon: '🌸', title: 'Menos irritação', desc: 'Reduza as explosões emocionais nos dias antes da menstruação' },
  { icon: '🧘', title: 'Mais controle emocional', desc: 'Pare de se sentir tomada por outra pessoa todo mês' },
  { icon: '💧', title: 'Menos inchaço', desc: 'Reduza a retenção de líquidos que pesa no corpo e na autoestima' },
  { icon: '☀️', title: 'Mais leveza no dia a dia', desc: 'Acorde com energia e atravesse o mês sem dread da TPM' },
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
            Imagine atravessar o mês<br />
            <span className="italic font-light text-[#e8637a]">sem medo de si mesma.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-[#fff5f7] border border-[#f5c6cf] rounded-2xl p-5 flex flex-col gap-2"
            >
              <span className="text-3xl">{b.icon}</span>
              <h3 className="font-heading text-xl font-semibold text-[#2a1a1f]">{b.title}</h3>
              <p className="text-[#5a3a42] text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
