import { FrioBar } from '@/components/frio/FrioBar'
import { FrioHero } from '@/components/frio/FrioHero'
import { FrioProof } from '@/components/frio/FrioProof'
import { FrioPain } from '@/components/frio/FrioPain'
import { FrioOffer } from '@/components/frio/FrioOffer'
import { FrioGuarantee } from '@/components/frio/FrioGuarantee'
import { FrioFinalCTA } from '@/components/frio/FrioFinalCTA'
import { Footer } from '@/components/sales/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Você não consegue parar de pensar nele? Tem explicação — e saída. | Projeto Renascer Emocional',
  description:
    'Se você saiu do relacionamento mas ainda sofre, pensa nele todo dia, e não consegue se libertar — isso não é fraqueza. É neurologia. Em 21 dias dá pra mudar.',
  robots: { index: false, follow: false },
}

export default function FrioPage() {
  return (
    <main>
      <FrioBar />
      <FrioHero />
      <FrioProof />
      <FrioPain />
      <FrioOffer />
      <FrioGuarantee />
      <FrioFinalCTA />
      <Footer />
    </main>
  )
}
