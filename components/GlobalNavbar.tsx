"use client"

import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Hamburger menu icon button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
        onClick={() => setIsSidebarOpen(true)}
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* SidebarSlider component */}
      <SidebarSlider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <nav className="flex flex-col space-y-4">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/page1" className="hover:underline">AI-slop en sociale media</a>
          <a href="/page2" className="hover:underline">Vibecoding</a>
          <a href="/page3" className="hover:underline">Dario Amodei tegen minister Hegseth</a>
        </nav>
      </SidebarSlider>
    </>
  )
}
