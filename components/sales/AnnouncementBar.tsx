'use client'

import { useState, useEffect } from 'react'

const DEADLINE_KEY = 'renascer_deadline'
const DURATION_MS = 4 * 60 * 60 * 1000 // 4 horas

function getDeadline(): number {
  if (typeof window === 'undefined') return Date.now() + DURATION_MS
  const stored = localStorage.getItem(DEADLINE_KEY)
  if (stored) {
    const ts = parseInt(stored, 10)
    if (ts > Date.now()) return ts
  }
  const ts = Date.now() + DURATION_MS
  localStorage.setItem(DEADLINE_KEY, String(ts))
  return ts
}

export function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 0, seconds: 0 })
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    const deadline = getDeadline()

    const tick = () => {
      const diff = deadline - Date.now()
      if (diff <= 0) {
        setExpired(true)
        return
      }
      const hours = Math.floor(diff / 3600000)
      const minutes = Math.floor((diff % 3600000) / 60000)
      const seconds = Math.floor((diff % 60000) / 1000)
      setTimeLeft({ hours, minutes, seconds })
    }

    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  if (expired) {
    return (
      <div className="bg-foreground text-background py-2.5 px-4 text-center text-sm font-medium">
        <span className="opacity-90">Oferta encerrada — entre na lista de espera para a próxima turma</span>
      </div>
    )
  }

  return (
    <div className="bg-[var(--color-brand)] text-white py-2.5 px-4 text-center text-sm font-medium">
      <span className="opacity-90">Oferta do programa de 21 dias encerra em</span>{' '}
      <span className="font-bold text-[var(--color-gold)] tabular-nums">
        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
      </span>{' '}
      <span className="opacity-90">·</span>{' '}
      <span className="font-bold text-[var(--color-gold)]">Vagas limitadas</span>{' '}
      <span className="opacity-90">nesta turma</span>
    </div>
  )
}
