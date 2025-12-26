'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Brand title */}
        <p className="text-sm tracking-widest text-purple-300 font-semibold mb-4">
          DIGITAL CREDIBILITY BUILDER
        </p>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
          Own Your Identity.
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Shape Perception.
          </span>
          <br />
          Become Unmissable.
        </h1>

        {/* Philosophy */}
        <div className="max-w-3xl mx-auto text-slate-300 text-lg sm:text-xl leading-relaxed space-y-4 mb-10">
          <p>
            People don’t remember the best brands —
            <span className="text-white font-medium"> they remember the clearest ones.</span>
          </p>
          <p>
            You don’t rise by shouting louder.
            <span className="text-white font-medium">
              {' '}You rise by becoming the easiest person to describe, find, and trust.
            </span>
          </p>
        </div>

        {/* Value proposition */}
        <p className="max-w-3xl mx-auto text-slate-400 text-base sm:text-lg mb-10">
          We engineer a <span className="text-purple-300 font-semibold">Unique Digital Identity Phrase</span> that defines who you are — and align your entire digital presence so your market sees you exactly the way you want to be seen.
        </p>

        {/* Authority statement */}
        <p className="text-lg sm:text-xl font-semibold text-white mb-12">
          This is not branding.
          <br />
          <span className="text-purple-400">This is Digital Perception Engineering.</span>
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-base sm:text-lg font-semibold px-10 py-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Identity Clarity Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

      </div>
    </section>
  )
}
