'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2, Search, Lightbulb, Target } from 'lucide-react'

/**
 * The Digital Credibility Builder Method Section
 * Displays the three-phase methodology:
 * Phase 1: Brand Intelligence
 * Phase 2: Creation of Unique Digital Identity Phrase
 * Phase 3: Digital Visibility Alignment
 */
export function Method() {
  // Array of phases with details and outcomes
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Brand Intelligence',
      icon: Search,
      description: 'We begin by understanding how your brand is currently perceived online and what opportunities exist to differentiate you.',
      includes: [
        'Digital presence assessment',
        'Competitor analysis',
        'Identity and messaging audit',
        'Market and audience identity mapping',
      ],
      outcome: 'A clear understanding of the identity space you can own.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      phase: 'Phase 2',
      title: 'Creation of Your Unique Digital Identity Phrase',
      icon: Lightbulb,
      description: 'We craft three strong digital identity options that define your identity with clarity and authority.',
      includes: [
        'Three phrase options',
        'Search and platform visibility simulations',
        'Identity implications for each option',
        'A full presentation delivered within seven working days',
      ],
      outcome: 'A clear, compelling identity phrase you can confidently adopt.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      phase: 'Phase 3',
      title: 'Digital Visibility Alignment',
      icon: Target,
      description: 'We help you align your digital presence so your identity becomes easy to discover and consistent across platforms.',
      includes: [
        'LinkedIn headline and profile direction',
        'Website messaging structure',
        'Content themes and communication angles',
        'Suggested brand collateral concepts',
        'Your visibility roadmap for the next 90 days, built to generate long-term digital equity.',
      ],
      outcome: 'When people search for your identity phrase, your brand becomes the obvious result they find.',
      color: 'from-blue-500 to-blue-600',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            The Digital Credibility Builder Method
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A structured three-phase approach to building your digital credibility and identity.
          </p>
        </div>

        {/* Phases grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phaseData, index) => {
            const Icon = phaseData.icon
            return (
              <div key={index} className="relative flex flex-col h-full">
                {/* Connector line between phases (hidden on mobile) */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                )}

                <Card className="flex flex-col h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-slate-100">
                  {/* Phase header with gradient background - Fixed height */}
                  <div className={`bg-gradient-to-br ${phaseData.color} p-6 text-white min-h-[140px] flex flex-col justify-center`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-semibold opacity-90 mb-1">{phaseData.phase}</p>
                        <h3 className="text-xl font-bold leading-tight">{phaseData.title}</h3>
                      </div>
                      <Icon className="w-8 h-8 opacity-80 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Phase content - Flex grow to fill remaining space */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Description */}
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {phaseData.description}
                    </p>

                    {/* Includes section */}
                    <div className="mb-6 flex-grow">
                      <p className="text-sm font-semibold text-slate-900 mb-3">This includes:</p>
                      <ul className="space-y-2">
                        {phaseData.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome - Fixed height at bottom */}
                    <div className={`bg-gradient-to-br ${phaseData.color} bg-opacity-10 rounded-lg p-4 border-l-4 border-purple-500 mt-auto h-[120px] flex flex-col justify-center`}>
                      <p className="text-sm font-semibold text-slate-900 mb-1">Outcome:</p>
                      <p className="text-slate-700 text-sm">{phaseData.outcome}</p>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
