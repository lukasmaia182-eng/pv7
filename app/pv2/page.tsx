import type { Metadata } from 'next'
import { Pv2Hero } from '@/components/pv2/Pv2Hero'
import { Pv2Identification } from '@/components/pv2/Pv2Identification'
import { Pv2Mechanism } from '@/components/pv2/Pv2Mechanism'
import { Pv2Method } from '@/components/pv2/Pv2Method'
import { Pv2Benefits } from '@/components/pv2/Pv2Benefits'
import { Pv2Testimonials } from '@/components/pv2/Pv2Testimonials'
import { Pv2Offer } from '@/components/pv2/Pv2Offer'
import { Pv2Guarantee } from '@/components/pv2/Pv2Guarantee'
import { Pv2FinalCTA } from '@/components/pv2/Pv2FinalCTA'

export const metadata: Metadata = {
  title: 'Método Silêncio Hormonal — Chega de TPM intensa',
  description:
    'Um protocolo simples para acalmar seu corpo antes da TPM chegar. Menos irritação, mais controle emocional, mais leveza no dia a dia.',
}

export default function Pv2Page() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Pv2Hero />
      <Pv2Identification />
      <Pv2Mechanism />
      <Pv2Method />
      <Pv2Benefits />
      <Pv2Testimonials />
      <Pv2Offer />
      <Pv2Guarantee />
      <Pv2FinalCTA />
    </main>
  )
}
