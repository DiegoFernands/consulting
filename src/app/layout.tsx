import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import './globals.css'

const sara = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'TechGamer Consulting',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={sara.className}>{children}</body>
    </html>
  )
}
