'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'

/**
 * Hero Section Component
 * Displays the main headline, tagline, and call-to-action buttons
 * Features the core value proposition of Digital Credibility Builder
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-8">
      {/* Animated background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content container with relative positioning to appear above background */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Own Your Identity.
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Control the Narrative.
          </span>
          <br />
          Become Unmissable.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Credibility in the digital world is not discovered by chance. It is created with a clear, consistent identity that people recognize immediately.
        </p>

        {/* Description paragraph */}
        <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          We help you define a <span className="text-purple-300 font-semibold">Unique Digital Identity Phrase</span> that reflects who you are and what you stand for. Then we align your digital presence so your brand is easily found, understood, and trusted.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-base font-semibold px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400/10 text-base font-semibold px-8 py-6 rounded-lg transition-all duration-300"
            onClick={() => document.getElementById('what-we-deliver')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-slate-300 text-sm">
          <a href="tel:+971506347719" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Phone className="w-4 h-4" />
            +971 50 634 7719
          </a>
          <a href="mailto:identity@digitalcredibilitybuilder.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Mail className="w-4 h-4" />
            identity@digitalcredibilitybuilder.com
          </a>
        </div>
      </div>
    </section>
  )
}
