'use client'

import { Card } from '@/components/ui/card'
import { Lightbulb, Zap, Compass, Trophy } from 'lucide-react'

/**
 * What We Deliver Section
 * Showcases the four core pillars of the Digital Credibility Builder service:
 * Clarity, Consistency, Discoverability, and Recognition
 */
export function WhatWeDeliver() {
  // Array of service pillars with icons and descriptions
  const pillars = [
    {
      number: '1',
      title: 'Clarity',
      description: 'A precise, memorable phrase that communicates your identity in seconds.',
      icon: Lightbulb,
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '2',
      title: 'Consistency',
      description: 'Alignment across search engines, social platforms, and digital touchpoints.',
      icon: Zap,
      color: 'from-pink-500 to-pink-600',
    },
    {
      number: '3',
      title: 'Discoverability',
      description: 'Your brand becomes the natural result when people search for the phrase that defines you.',
      icon: Compass,
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '4',
      title: 'Recognition',
      description: 'Your identity becomes a reference point in your category.',
      icon: Trophy,
      color: 'from-amber-500 to-amber-600',
    },
  ]

  return (
    <section id="what-we-deliver" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            What We Deliver
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A complete identity and digital visibility framework built around your <span className="block">Unique Digital Identity Phrase</span>.
          </p>
        </div>

        {/* Grid of service pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Card
                key={pillar.number}
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Card content */}
                <div className="relative p-8">
                  {/* Number badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} text-white mb-4`}>
                    <span className="text-xl font-bold">{pillar.number}</span>
                  </div>

                  {/* Icon */}
                  <Icon className={`w-8 h-8 mb-4 text-slate-600 group-hover:text-slate-900 transition-colors`} />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
