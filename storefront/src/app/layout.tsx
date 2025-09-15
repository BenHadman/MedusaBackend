import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

const domine = Domine({ subsets: ["latin"], variable: "--font-sans" })
const mona  = Mona_Sans({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
