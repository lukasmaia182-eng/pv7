import Image from 'next/image'

export function Pv2Mechanism() {
  return (
    <section className="relative min-h-[85vh] flex flex-col">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pv2-discovery.png"
          alt="Mulher descobrindo a causa real da TPM intensa"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0f]/90 via-[#1a0a0f]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto px-5 pb-12 max-w-lg mx-auto w-full text-center">
        <span className="inline-block bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-white/20">
          A causa real
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white leading-tight text-balance mb-5">
          Isso não é falta de controle.
        </h2>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left">
          <p className="text-white font-semibold text-lg mb-3">
            Existem gatilhos hormonais silenciosos que intensificam sua TPM.
          </p>
          <p className="text-white/75 leading-relaxed">
            Na fase pré-menstrual, seu corpo produz menos progesterona — o hormônio calmante. Quando ele cai e você tem esses gatilhos ativos (alimentação, estresse, sono), sua amígdala cerebral entra em modo de alarme constante.
          </p>
          <p className="text-white/75 leading-relaxed mt-3">
            Resultado: irritação extrema, choro sem motivo, ansiedade. <strong className="text-white">Não é você. É biologia.</strong>
          </p>
          <p className="text-white font-semibold mt-4">
            E biologia tem solução. Com o protocolo certo.
          </p>
        </div>
      </div>
    </section>
  )
}
