import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "101Migrate | Premium EB-2 NIW & EB-1A Green Card Support",
  description:
    "Your one-stop gateway to U.S. immigration success. Expert EB-2 NIW and EB-1A green card support with strategic consultation, petition drafting, and personalized guidance.",
  keywords:
    "EB-2 NIW, EB-1A, green card, immigration, national interest waiver, extraordinary ability, US visa, immigration consulting, 101Migrate",
  openGraph: {
    title: "101Migrate | Premium Immigration Support",
    description: "Expert EB-2 NIW and EB-1A green card support services",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
