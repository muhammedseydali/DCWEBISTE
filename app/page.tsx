import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { WhatWeDeliver } from '@/components/sections/WhatWeDeliver'
import { Method } from '@/components/sections/Method'
import { WhyItMatters } from '@/components/sections/WhyItMatters'
import { WhoThisIsFor } from '@/components/sections/WhoThisIsFor'
import { Contact } from '@/components/sections/Contact'

/**
 * Home Page Component
 * Main landing page for Digital Credibility Builder
 * Combines all sections into a cohesive, responsive website
 * 
 * Sections included:
 * 1. Navigation - Fixed header with smooth scrolling
 * 2. Hero - Main headline and value proposition
 * 3. What We Deliver - Four core pillars (Clarity, Consistency, Discoverability, Recognition)
 * 4. Method - Three-phase methodology
 * 5. Why It Matters - Benefits and importance of digital credibility
 * 6. Who This Is For - Target audience personas
 * 7. Contact - Call-to-action and contact information
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Navigation Bar */}
      <Navigation />

      {/* Hero Section - Main headline and value proposition */}
      <Hero />

      {/* What We Deliver Section - Four core pillars */}
      <WhatWeDeliver />

      {/* Method Section - Three-phase approach */}
      <div id="method">
        <Method />
      </div>

      {/* Why It Matters Section - Benefits and importance */}
      <div id="why-matters">
        <WhyItMatters />
      </div>

      {/* Who This Is For Section - Target audience */}
      <div id="who-for">
        <WhoThisIsFor />
      </div>

      {/* Contact/CTA Section */}
      <Contact />
    </main>
  )
}
