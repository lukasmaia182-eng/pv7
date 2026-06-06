// Server Component
import Image from 'next/image'

const items = [
  { title: 'Protocolo de 7 dias', desc: 'Passo a passo diário para equilibrar os hormônios antes da TPM' },
  { title: 'Receitas calmantes hormonais', desc: 'Alimentos simples que reduzem inflamação e irritabilidade' },
  { title: 'Rotina anti-irritação', desc: 'Hábitos de manhã e noite que regulam seu sistema nervoso' },
  { title: 'Checklist da TPM leve', desc: 'Seus sinais de alerta personalizados e como responder a cada um' },
]

export function Pv2Offer() {
  return (
    <section id="oferta" className="bg-white py-16 px-5">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#e8637a] font-semibold text-sm uppercase tracking-widest mb-3">
            O que você recebe
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#2a1a1f] leading-tight text-balance">
            Tudo que você precisa para
            <span className="italic font-light text-[#e8637a]"> silenciar a TPM de vez</span>
          </h2>
        </div>

        {/* Mockup — lazy + tamanho limitado */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-8 shadow-xl">
          <Image
            src="/images/pv2-mockup.png"
            alt="Mockup do Método Silêncio Hormonal"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, 512px"
            quality={75}
          />
        </div>

        <div className="flex flex-col gap-3 mb-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[#fff5f7] border border-[#f5c6cf] rounded-xl p-4">
              <div className="w-6 h-6 rounded-full bg-[#e8637a] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#2a1a1f] text-sm">{item.title}</p>
                <p className="text-[#5a3a42] text-xs leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Price box */}
        <div className="bg-[#2a1a1f] rounded-3xl p-7 text-center">
          <p className="text-white/60 text-sm mb-1">Acesso completo por apenas</p>
          <div className="flex items-end justify-center gap-2 mb-1">
            <span className="text-white/40 line-through text-lg">R$97</span>
            <span className="font-heading text-5xl font-bold text-[#e8637a]">R$37</span>
          </div>
          <p className="text-white/50 text-xs mb-6">pagamento único · acesso imediato</p>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-[#e8637a] text-white font-bold rounded-full px-8 py-4 text-lg shadow-lg w-full btn-pulse"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Quero recuperar meu controle
          </a>

          <p className="text-white/40 text-xs mt-4">
            Garantia incondicional de 7 dias · Pix, Cartão ou Boleto
          </p>
        </div>
      </div>
    </section>
  )
}
