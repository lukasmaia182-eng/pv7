'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = () => {
    isDragging.current = true
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }
  const onMouseUp = () => {
    isDragging.current = false
  }

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-ew-resize select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
    >
      {/* DEPOIS — imagem de fundo (full) */}
      <div className="absolute inset-0">
        <Image
          src="/images/after.png"
          alt="Depois do Desafio Desapego Narcisista — liberdade emocional"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Label DEPOIS */}
        <div className="absolute bottom-4 right-4 bg-[var(--color-brand)] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
          Depois
        </div>
      </div>

      {/* ANTES — clipado à esquerda do divisor */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src="/images/before.png"
          alt="Antes do Desafio Desapego Narcisista — dor emocional"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Overlay escuro sutil para reforçar o contraste do "antes" */}
        <div className="absolute inset-0 bg-[oklch(0.15_0.01_30)]/20" />
        {/* Label ANTES */}
        <div className="absolute bottom-4 left-4 bg-foreground text-background text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
          Antes
        </div>
      </div>

      {/* Linha divisória */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]"
        style={{ left: `${position}%` }}
      >
        {/* Handle circular */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-[var(--color-brand)] flex items-center justify-center gap-0.5">
          <svg className="w-3 h-3 text-[var(--color-brand)]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <svg className="w-3 h-3 text-[var(--color-brand)]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Dica de arrastar (some após 2s via CSS) */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full pointer-events-none animate-[fadeout_2s_2s_forwards]">
        Arraste para comparar
      </div>
    </div>
  )
}
