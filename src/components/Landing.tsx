import { useState } from 'react'
import { ChevronDown, MapPin, Clock, Users, Heart, Shield, Zap } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="font-bold text-lg text-foreground">Babiol</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition">How it Works</a>
          <a href="#features" className="text-foreground hover:text-primary transition">Features</a>
          <a href="#pricing" className="text-foreground hover:text-primary transition">Cities</a>
        </div>
        <a href="#waitlist" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition font-medium">
          Join Waitlist
        </a>
      </nav>
    </header>
  )
}

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-muted px-4 py-2 rounded-full mb-6">
          <p className="text-sm font-medium text-primary">Launching in Hyderabad & Bangalore</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Trusted Baby Care in Just <span className="text-primary">10 Minutes</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 text-balance">
          Get verified, professional babysitters delivered to your door in 10 minutes. Book for 1-3 hours and reclaim your free time.
        </p>
        <a href="#waitlist" className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition font-semibold text-lg">
          Request Early Access
        </a>
      </div>
    </section>
  )
}

export function Problem() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">The Challenge for Parents</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '⏰', title: 'No Quick Relief', desc: 'Finding trusted care takes weeks of planning, not minutes.' },
            { icon: '😰', title: 'Peace of Mind', desc: 'Hiring babysitters requires extensive vetting and verification.' },
            { icon: '💔', title: 'Life Gets Busy', desc: 'Parents rarely get time for themselves without extensive planning.' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">How Babiol Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: 1, title: 'Open App', desc: 'Tell us when you need care' },
            { step: 2, title: 'Book Instantly', desc: 'See verified caretakers nearby' },
            { step: 3, title: 'Get Care in 10 Min', desc: 'Trusted pro arrives quickly' },
            { step: 4, title: 'Enjoy Peace', desc: 'You relax, we handle it' }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 text-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.desc}</p>
              {i < 3 && <div className="hidden md:block absolute top-6 left-[60px] w-[calc(100%-80px)] h-0.5 bg-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">Why Babiol</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: '10-Minute Delivery', desc: 'Get professional care faster than any competitor' },
            { icon: Shield, title: '100% Verified', desc: 'All caregivers are thoroughly background checked' },
            { icon: Clock, title: '1-3 Hour Slots', desc: 'Book exactly the time you need for flexibility' },
            { icon: Heart, title: 'Trusted Pros', desc: 'Expert caregivers trained in child safety' },
            { icon: Users, title: 'Parent Community', desc: 'Connect with other parents seeking work-life balance' },
            { icon: MapPin, title: 'Growing Coverage', desc: 'Starting in Hyderabad & Bangalore, expanding soon' }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-white p-6 rounded-xl border border-border hover:border-primary transition">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Cities() {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">Where We Operate</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { city: 'Hyderabad', status: 'Live', emoji: '🚀', desc: 'Available now for early adopters' },
            { city: 'Bangalore', status: 'Live', emoji: '🚀', desc: 'Available now for early adopters' }
          ].map((item, i) => (
            <div key={i} className="bg-primary text-white p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <h3 className="text-2xl font-bold">{item.city}</h3>
                  <p className="text-white/80">{item.status}</p>
                </div>
              </div>
              <p className="text-white/90">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/70 mb-4">Interested in other cities?</p>
          <a href="#waitlist" className="text-primary font-semibold hover:underline">Tell us your city →</a>
        </div>
      </div>
    </section>
  )
}

export function Waitlist() {
  const [formData, setFormData] = useState({ name: '', email: '', city: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="waitlist" className="py-16 md:py-24 px-4 bg-muted/50">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Join the Waitlist</h2>
        <p className="text-foreground/70 text-center mb-8">Be first to access Babiol when we launch in your city</p>
        
        {submitted ? (
          <div className="bg-accent/10 border border-accent p-6 rounded-xl text-center">
            <p className="text-accent font-semibold">🎉 Thanks for joining!</p>
            <p className="text-foreground/70 mt-2">We&apos;ll notify you when we launch in your city.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:border-primary"
            />
            <select
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:border-primary"
            >
              <option value="">Select your city</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="bangalore">Bangalore</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="other">Other City</option>
            </select>
            <input
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              Request Early Access
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">What Parents Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Priya M.', role: 'Mother of 2', quote: 'Finally, I get an hour to myself without weeks of planning!' },
            { name: 'Arjun P.', role: 'Father of 1', quote: 'The caretakers are professional and my daughter loves them.' },
            { name: 'Neha S.', role: 'Working Mom', quote: 'Game-changer for my work meetings and personal time.' }
          ].map((item, i) => (
            <div key={i} className="bg-muted p-6 rounded-xl">
              <div className="flex gap-1 mb-4">{'⭐⭐⭐⭐⭐'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
              <p className="text-foreground/80 mb-4 italic">&quot;{item.quote}&quot;</p>
              <p className="font-semibold text-foreground">{item.name}</p>
              <p className="text-sm text-foreground/60">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'How quickly can a caretaker arrive?', a: 'We aim to get a verified caretaker to your door within 10 minutes. Peak hour delivery times may vary slightly.' },
            { q: 'Are all caretakers verified?', a: 'Yes, every caretaker goes through thorough background checks, training, and verification before joining Babiol.' },
            { q: 'What are the available time slots?', a: 'You can book for 1, 2, or 3-hour sessions based on your needs. Choose your preferred slot when booking.' },
            { q: 'How much does it cost?', a: 'Pricing varies by city and time. You&apos;ll see exact rates before confirming your booking.' },
            { q: 'Can I reschedule or cancel?', a: 'Yes, you can reschedule or cancel up to 30 minutes before the scheduled time without charges.' },
            { q: 'Are there age restrictions?', a: 'We provide care for babies and children aged 6 months to 8 years. Caretakers are trained for all age groups.' }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-border rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition"
              >
                <h3 className="font-semibold text-foreground text-left">{item.q}</h3>
                <ChevronDown className={`w-5 h-5 text-primary transition ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 border-t border-border bg-muted/30 text-foreground/80">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-bold">B</span>
              </div>
              <span className="font-bold">Babiol</span>
            </div>
            <p className="text-white/70">On-demand baby care in 10 minutes</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition">Safety</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2025 Babiol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
