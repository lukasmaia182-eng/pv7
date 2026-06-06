'use client'

import { useState, useEffect } from 'react'

const DEADLINE_KEY = 'renascer_frio_deadline'
const DURATION_MS = 4 * 60 * 60 * 1000

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

export function FrioBar() {
  const [time, setTime] = useState({ h: 4, m: 0, s: 0 })
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    const deadline = getDeadline()
    const tick = () => {
      const diff = deadline - Date.now()
      if (diff <= 0) { setExpired(true); return }
      setTime({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])

  const p = (n: number) => String(n).padStart(2, '0')

  if (expired) return null

  return (
    <div className="bg-[var(--color-dark)] text-white text-center py-2 px-4 text-xs sm:text-sm font-medium">
      Oferta encerra em{' '}
      <span className="font-bold text-[var(--color-gold)] tabular-nums">
        {p(time.h)}:{p(time.m)}:{p(time.s)}
      </span>
      {' '}— vagas limitadas nesta turma
    </div>
  )
}
