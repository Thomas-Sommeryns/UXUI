"use client"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-blue-600 text-center py-4 text-sm text-black-600">
      <div className="mb-2">
        &copy; {currentYear} De Gisteren. Alle rechten voorbehouden.
      </div>
      <div className="flex justify-center space-x-4">
        <Link href="/terms-of-agreement" className="underline hover:text-gray-800">
          Gebruikersvoorwaarden
        </Link>
        <Link href="/copyright-regulations" className="underline hover:text-gray-800">
          Copyright Regulations
        </Link>
        <Link href="/cookie-settings" className="underline hover:text-gray-800">
          Cookiebeleid  
        </Link>
      </div>
    </footer>
  )
}
