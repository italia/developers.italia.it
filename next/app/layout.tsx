'use client'

import { Titillium_Web, Lora, Roboto_Mono } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import classNames from 'classnames'
import '@/app/globals.css'
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css'

const titilliumWeb = Titillium_Web({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin-ext'],
  variable: '--titillium-web'
})

const lora = Lora({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
  variable: '--lora'
})

const robotoMono = Roboto_Mono({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
  variable: '--roboto-mono'
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={classNames(
          titilliumWeb.variable,
          lora.variable,
          robotoMono.variable,
          'font-titillium-web m-0 min-h-screen w-full p-0'
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
