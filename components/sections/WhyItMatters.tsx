'use client'

import { Card } from '@/components/ui/card'
import { Eye, Brain, Zap, Shield, TrendingUp, Users } from 'lucide-react'

/**
 * Why Digital Credibility Matters Section
 * Explains the importance of digital credibility and its benefits
 */
export function WhyItMatters() {
  // Core principles
  const principles = [
    {
      text: 'People trust what they understand immediately.',
      icon: Zap,
    },
    {
      text: 'They buy what they can explain to others.',
      icon: Shield,
    },
    {
      text: 'They remember what is simple, sharp, and consistent.',
      icon: Brain,
    },
  ]

  // Benefits
  const benefits = [
    {
      title: 'Faster Recognition',
      description: 'Your brand is immediately identifiable in crowded markets',
      icon: Eye,
    },
    {
      title: 'Clear Recall',
      description: 'People remember you accurately and easily',
      icon: Brain,
    },
    {
      title: 'Strong Differentiation',
      description: 'Stand out clearly against competitors',
      icon: TrendingUp,
    },
    {
      title: 'Higher Trust in Expertise',
      description: 'A clear identity builds confidence in your capabilities',
      icon: Shield,
    },
    {
      title: 'Better Positioning',
      description: 'Your brand is recognized as the obvious choice in your category',
      icon: Eye,
    },
    {
      title: 'Controlled Narrative',
      description: 'You shape how others perceive and introduce you',
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

          {/* Core principles */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-slate-200 font-semibold text-center">{principle.text}</p>
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
            A strong digital identity gives you:
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
            When people know exactly who you are, they search for you, recommend you accurately, and choose you confidently.
          </p>
        </div>
      </div>
    </section>
  )
}
