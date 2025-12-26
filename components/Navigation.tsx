'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from "next/image";

/**
 * Navigation Component
 * Responsive navigation bar with mobile menu support
 * Includes smooth scrolling to sections and contact CTA
 */
export function Navigation() {
  // State to track if mobile menu is open
  const [isOpen, setIsOpen] = useState(false)

  // Navigation links configuration
  const navLinks = [
    { label: 'What We Deliver', href: '#what-we-deliver' },
    { label: 'Our Method', href: '#method' },
    { label: 'Why It Matters', href: '#why-matters' },
    { label: 'Who This Is For', href: '#who-for' },
  ]

  // Handle smooth scrolling to sections
  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          {/* <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-white font-bold text-xl">DCB</span>
            </a>
          </div> */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2">
                <Image
                  src="/newlogo.jpg"
                  alt="DCB Logo"
                  width={75}
                  height={72}
                />
              </a>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.href)}
                  className="text-slate-300 hover:text-white transition-colors text-sm font-medium text-left px-4 py-2 hover:bg-slate-800 rounded"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 mx-4"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  setIsOpen(false)
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
