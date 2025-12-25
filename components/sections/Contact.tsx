'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, Globe } from 'lucide-react'

/**
 * Contact/CTA Section
 * Final call-to-action section encouraging users to start their digital credibility journey
 * Displays contact information and primary action button
 */
export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Build the identity people can find, trust, and remember.
        </h2>

        {/* Subheading */}
        <p className="text-xl text-slate-300 mb-12">
          Start your digital credibility journey.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-lg font-semibold px-10 py-7 rounded-lg transition-all duration-300 transform hover:scale-105 mb-12"
          onClick={() => {
            // Open email client
            window.location.href = 'mailto:identity@digitalcredibilitybuilder.com?subject=Start%20My%20Digital%20Credibility%20Journey'
          }}
        >
          Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        {/* Contact information */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
          {/* Website */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <p className="text-slate-400 text-sm mb-2">Website</p>
            <a
              href="https://digitalcredibilitybuilder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-purple-300 transition-colors text-sm"
            >
              digitalcredibilitybuilder.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <p className="text-slate-400 text-sm mb-2">Phone</p>
            <a
              href="tel:+971506347719"
              className="text-white font-semibold hover:text-purple-300 transition-colors text-sm"
            >
              +971 50 634 7719
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-slate-400 text-sm mb-2">Email</p>
            <a
              href="mailto:identity@digitalcredibilitybuilder.com"
              className="text-white font-semibold hover:text-purple-300 transition-colors break-all text-sm"
            >
              identity@digitalcredibilitybuilder.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
