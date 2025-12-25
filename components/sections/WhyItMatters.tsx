'use client'

import { Card } from '@/components/ui/card'
import { Eye, Brain, Zap, Shield, TrendingUp, Users } from 'lucide-react'

/**
 * Why Digital Credibility Matters Section
 * Explains the importance of digital credibility and its benefits
 * Showcases key benefits with icons and descriptions
 */
export function WhyItMatters() {
  // Key principles that make digital credibility important
  const principles = [
    {
      text: 'People make decisions quickly.',
      icon: Zap,
    },
    {
      text: 'They trust what they understand.',
      icon: Shield,
    },
    {
      text: 'And they remember what is simple and clear.',
      icon: Brain,
    },
  ]

  // Benefits of a strong identity phrase
  const benefits = [
    {
      title: 'Faster Recognition',
      description: 'Your brand is immediately identifiable in a crowded market',
      icon: Eye,
    },
    {
      title: 'Stronger Recall',
      description: 'People remember you more easily and accurately',
      icon: Brain,
    },
    {
      title: 'Better Differentiation',
      description: 'Stand out clearly from your competitors',
      icon: TrendingUp,
    },
    {
      title: 'Higher Trust in Your Expertise',
      description: 'Clear identity builds confidence in your capabilities',
      icon: Shield,
    },
    {
      title: 'More Visibility in Your Category',
      description: 'Become the obvious choice when people search for your identity',
      icon: Eye,
    },
    {
      title: 'Better Introductions',
      description: 'People introduce you more accurately to others',
      icon: Users,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Digital Credibility Matters
          </h2>

          {/* Three core principles */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-slate-200 font-semibold">{principle.text}</p>
                </div>
              )
            })}
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>
        </div>

        {/* Benefits grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            A strong identity phrase ensures:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-8 text-center">
          <p className="text-xl text-slate-100 leading-relaxed">
            When people understand who you are, they find you more easily, introduce you more accurately, and choose you more confidently.
          </p>
        </div>
      </div>
    </section>
  )
}
