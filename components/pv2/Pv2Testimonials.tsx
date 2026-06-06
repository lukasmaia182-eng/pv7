'use client'

import { useState } from 'react'

const testimonials = [
  { name: 'Camila R., 32 anos', text: 'Eu chorava e brigava todo mês sem entender por quê. Com o protocolo, o último ciclo foi completamente diferente. Não é milagre, mas me ajudou demais.' },
  { name: 'Fernanda L., 28 anos', text: 'Sempre achei que era "nervosinha". Descobri que era hormônio mesmo. Em 7 dias já senti diferença na irritação.' },
  { name: 'Juliana M., 41 anos', text: 'Meu marido até perguntou o que tinha acontecido comigo. Finalmente me sinto eu mesma em todo o mês.' },
  { name: 'Patrícia S., 35 anos', text: 'O inchaço já diminuiu bastante e a ansiedade pré-menstrual praticamente sumiu. Recomendo de olhos fechados.' },
  { name: 'Aline C., 29 anos', text: 'Comprei sem muita expectativa e me surpreendi. As receitas são fáceis e o protocolo funciona de verdade.' },
  { name: 'Renata B., 38 anos', text: 'Tinha TPM tão forte que meus filhos ficavam com medo de mim. Hoje consigo me controlar. Isso não tem preço.' },
  { name: 'Mariana T., 33 anos', text: 'Já tentei de tudo. Esse foi o primeiro que explicou o motivo e não só mandou eu "tomar chá". Funciona.' },
  { name: 'Beatriz N., 44 anos', text: 'Achei que TPM era coisa da minha cabeça. Esse método me mostrou que era real e me deu ferramentas de verdade.' },
  { name: 'Larissa F., 26 anos', text: 'Em 3 dias já senti meu humor estabilizar. Parece simples mas fez toda diferença. Muito obrigada.' },
  { name: 'Vanessa O., 37 anos', text: 'Parei de me odiar nesses dias do mês. Ainda tenho TPM mas não sou mais refém dela. Valeu cada centavo.' },
]

// Stars como SVG estático — sem loop de componente pesado
function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrelas">
      {[0,1,2,3,4].map((i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Pv2Testimonials() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? testimonials : testimonials.slice(0, 5)

  return (
    <section className="bg-[#fff5f7] py-16 px-5">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#e8637a] font-semibold text-sm uppercase tracking-widest mb-3">
            Resultados reais
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#2a1a1f] leading-tight text-balance">
            Mulheres que pararam de ser
            <span className="italic font-light text-[#e8637a]"> reféns da TPM</span>
          </h2>
          <div className="flex justify-center gap-8 mt-6">
            {[
              { num: '4.200+', label: 'Mulheres' },
              { num: '4.9/5', label: 'Avaliação' },
              { num: '97%', label: 'Recomendariam' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-2xl font-bold text-[#e8637a]">{s.num}</div>
                <div className="text-[#5a3a42] text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {visible.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-[#f5c6cf]">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-semibold text-[#2a1a1f] text-sm">{t.name}</p>
                  <Stars />
                </div>
                <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-[#5a3a42] text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-6 w-full py-3 border border-[#e8637a] text-[#e8637a] font-semibold rounded-full text-sm"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Ver mais depoimentos
          </button>
        )}
      </div>
    </section>
  )
}
