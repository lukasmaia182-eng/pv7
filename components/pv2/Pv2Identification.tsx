import Image from 'next/image'

const cards = [
  {
    img: '/images/pv2-explode.png',
    text: '"Eu explodo por qualquer coisa… e odeio isso."',
  },
  {
    img: '/images/pv2-guilt.png',
    text: '"Depois me sinto culpada por dias."',
  },
  {
    img: '/images/pv2-lost.png',
    text: '"Parece que não sou eu nesses dias."',
  },
]

export function Pv2Identification() {
  return (
    <section className="bg-[#fff5f7] py-14 px-5">
      <div className="max-w-lg mx-auto text-center mb-10">
        <p className="text-[#e8637a] font-semibold text-sm uppercase tracking-widest mb-3">
          Você se reconhece aqui?
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#2a1a1f] leading-tight text-balance">
          Todo mês a mesma história.<br />
          <span className="italic font-light text-[#e8637a]">Como se alguém te tomasse por dentro.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-5 max-w-lg mx-auto">
        {cards.map((card, i) => (
          <div key={i} className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3]">
            <Image
              src={card.img}
              alt={card.text}
              fill
              className="object-cover object-top"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            {/* Quote */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-heading text-xl sm:text-2xl text-white italic leading-snug text-balance">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empathy bridge */}
      <div className="mt-10 max-w-lg mx-auto bg-white rounded-2xl p-6 border border-[#f5c6cf] text-center shadow-sm">
        <p className="text-[#2a1a1f] font-semibold text-lg leading-relaxed">
          Se você se reconheceu em qualquer uma dessas frases — isso não é fraqueza. É o seu corpo pedindo socorro.
        </p>
      </div>
    </section>
  )
}
