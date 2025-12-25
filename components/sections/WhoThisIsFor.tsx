'use client'

import { Card } from '@/components/ui/card'
import { Briefcase, Users, Rocket, TrendingUp, Target, Zap } from 'lucide-react'

/**
 * Who This Is For Section
 * Displays the ideal audience for Digital Credibility Builder services
 * Shows different professional personas that benefit from the service
 */
export function WhoThisIsFor() {
  // Array of ideal customer personas
  const personas = [
    {
      title: 'Founders',
      description: 'Build your personal brand as you scale your venture',
      icon: Rocket,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'CEOs',
      description: 'Establish thought leadership and industry authority',
      icon: TrendingUp,
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Entrepreneurs',
      description: 'Create a distinctive identity in competitive markets',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Consultants & Advisors',
      description: 'Position yourself as the go-to expert in your field',
      icon: Briefcase,
      color: 'from-amber-500 to-amber-600',
    },
    {
      title: 'High Growth SMEs',
      description: 'Scale your business with a clear, recognizable brand',
      icon: Users,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Personal Brands',
      description: 'Enter competitive markets with a strong identity',
      icon: Target,
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Who This Is For
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Designed for leaders who want to be recognized for what they stand for.
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-semibold">
            Ideal for:
          </p>
        </div>

        {/* Personas grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {personas.map((persona, index) => {
            const Icon = persona.icon
            return (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-slate-100 border-0"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Card content */}
                <div className="relative p-8">
                  {/* Icon container */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${persona.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {persona.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Call to action statement */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-8 text-center">
          <p className="text-xl text-slate-900 font-semibold leading-relaxed">
            If you want to communicate your identity clearly and be discovered for it, this is for you.
          </p>
        </div>
      </div>
    </section>
  )
}
