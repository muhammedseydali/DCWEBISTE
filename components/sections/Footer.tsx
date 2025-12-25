'use client'

import { Separator } from '@/components/ui/separator'

/**
 * Footer Component
 * Displays copyright information and navigation links
 * Provides consistent branding across the bottom of the page
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Digital Credibility Builder</h3>
            <p className="text-sm text-slate-500">
              Digital Perception Engineering for leaders who want to be recognized for what they stand for.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-we-deliver" className="hover:text-purple-400 transition-colors">
                  What We Deliver
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Our Method
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+971506347719" className="hover:text-purple-400 transition-colors">
                  +971 50 634 7719
                </a>
              </li>
              <li>
                <a href="mailto:identity@digitalcredibilitybuilder.com" className="hover:text-purple-400 transition-colors">
                  identity@digitalcredibilitybuilder.com
                </a>
              </li>
              <li>
                <a href="https://digitalcredibilitybuilder.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  digitalcredibilitybuilder.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <Separator className="bg-slate-800 mb-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-slate-500">
          <p>&copy; {currentYear} Digital Credibility Builder. All rights reserved.</p>
          <p className="mt-2">
            Helping leaders build the identity people can find, trust, and remember.
          </p>
        </div>
      </div>
    </footer>
  )
}
