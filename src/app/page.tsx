'use client'

import { Header, Hero, Problem, HowItWorks, Features, Cities, Waitlist, Testimonials, FAQ, Footer } from '@/components/Landing'

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Cities />
      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  )
}
