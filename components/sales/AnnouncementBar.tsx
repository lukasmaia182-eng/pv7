'use client'

import { useState, useEffect } from 'react'

export function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 37, seconds: 18 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        seconds -= 1
        if (seconds < 0) { seconds = 59; minutes -= 1 }
        if (minutes < 0) { minutes = 59; hours -= 1 }
        if (hours < 0) { return { hours: 4, minutes: 37, seconds: 18 } }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="bg-[var(--color-brand)] text-white py-2.5 px-4 text-center text-sm font-medium">
      <span className="opacity-90">Oferta por tempo limitado — encerra em</span>{' '}
      <span className="font-bold text-[var(--color-gold)] tabular-nums">
        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
      </span>{' '}
      <span className="opacity-90">· Apenas</span>{' '}
      <span className="font-bold text-[var(--color-gold)]">47 vagas</span>{' '}
      <span className="opacity-90">restantes</span>
    </div>
  )
}
