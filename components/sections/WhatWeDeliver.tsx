'use client'

import { Card } from '@/components/ui/card'
import { Lightbulb, Zap, Compass, Trophy } from 'lucide-react'

export function WhatWeDeliver() {
  const pillars = [
    {
      number: '1',
      title: 'Clarity',
      description:
        'A precise phrase that communicates who you are in seconds — not paragraphs.',
      icon: Lightbulb,
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '2',
      title: 'Consistency',
      description:
        'Your identity aligned across all digital platforms, touchpoints, and search engines.',
      icon: Zap,
      color: 'from-pink-500 to-pink-600',
    },
    {
      number: '3',
      title: 'Discoverability',
      description:
        'Your content, website, and profiles engineered so people find you naturally when they search for your identity.',
      icon: Compass,
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '4',
      title: 'Recognition',
      description:
        'Your identity becomes a reference point in your category — the phrase people associate with you.',
      icon: Trophy,
      color: 'from-amber-500 to-amber-600',
    },
  ]

  return (
    <section
      id="what-we-deliver"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            What We Deliver
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A complete identity and digital visibility system built around your{' '}
            <span className="font-semibold text-slate-900">
              Unique Digital Identity Phrase
            </span>{' '}
            — the phrase that defines you, positions you, and makes you instantly memorable.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Card
                key={pillar.number}
                className="relative overflow-hidden group bg-white border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Card content */}
                <div className="relative p-8">
                  {/* Number badge */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} text-white mb-6`}
                  >
                    <span className="text-xl font-bold">{pillar.number}</span>
                  </div>

                  {/* Icon */}
                  <Icon className="w-8 h-8 mb-4 text-slate-600 group-hover:text-slate-900 transition-colors" />

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
