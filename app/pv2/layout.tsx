/**
 * Layout dedicado à /pv2.
 * Injeta <link rel="preload"> da imagem hero para maximizar LCP.
 * Herda fontes e CSS do RootLayout.
 */
export default function Pv2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Preload da imagem hero — instrui o browser a baixar antes de tudo */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/pv2-hero.png"
          fetchPriority="high"
        />
      </head>
      {children}
    </>
  )
}
