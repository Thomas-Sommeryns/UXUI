import { AppToaster } from "@/components/ui/toast"
import GlobalNavbar from "@/components/GlobalNavbar"
import Footer from "@/components/Footer"
import Link from 'next/link' // Importeer Link voor de titel-klik

import "./globals.css"

export const metadata = {
  title: "Mijn Digitale Krant",
  description: "Artikelen over AI en Technologie",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        {/* De Header Sectie */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Titel van de site - klikbaar naar Home */}
            <Link href="/" className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
              De <span className="text-blue-600">Gisteren</span>
            </Link>

            {/* Je bestaande Navbar (menu-links) */}
            <GlobalNavbar />
          </div>
        </header>

        {/* De Content van de pagina's */}
        <main className="flex-grow max-w-5xl mx-auto w-full p-8 md:p-20 mt-4">
          {children}
        </main>

        {/* Footer Sectie */}
        <footer className="border-t border-gray-200 bg-white">
          <Footer />
        </footer>

        <AppToaster />
      </body>
    </html>
  )
}