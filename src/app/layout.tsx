import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import './globals.css'
import { Alert } from '@/components/alert'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dona Getta',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className={inter.className}>
        <Alert />
        <Header />
        <div className="mx-auto flex min-h-screen w-full max-w-[1024px] flex-col px-4 lg:px-0">
          <main className="pb-8 pt-4">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
