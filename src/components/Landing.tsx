import { useState } from 'react'
import { ChevronDown, MapPin, Clock, Users, Heart, Shield, Zap } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b-2 border-primary z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">♥</span>
          </div>
          <span className="font-bold text-xl text-foreground">Babiol</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground hover:text-primary font-medium transition">How it Works</a>
          <a href="#features" className="text-foreground hover:text-primary font-medium transition">Features</a>
          <a href="#pricing" className="text-foreground hover:text-primary font-medium transition">Cities</a>
        </div>
        <a href="#waitlist" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition font-semibold shadow-md hover:shadow-lg">
          Join Waitlist
        </a>
      </nav>
    </header>
  )
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-4 text-center bg-gradient-to-b from-white to-muted">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-red-50 border-2 border-primary px-4 py-2 rounded-full mb-8">
          <p className="text-sm font-bold text-primary">🚀 Launching in Hyderabad & Bangalore</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 text-balance leading-tight">
          Trusted Baby Care in Just <span className="text-primary relative">10 Minutes</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/75 mb-10 text-balance font-medium">
          Get verified, professional babysitters delivered to your door instantly. Book for 1-3 hours and reclaim your time.
        </p>
        <a href="#waitlist" className="inline-block bg-primary text-white px-10 py-4 rounded-full hover:bg-accent transition font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
          Request Early Access →
        </a>
      </div>
    </section>
  )
}

export function Problem() {
  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-16 text-center">The Challenge for Parents</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '⏰', title: 'No Quick Relief', desc: 'Finding trusted care takes weeks of planning, not minutes.' },
            { icon: '😰', title: 'Safety Concerns', desc: 'Hiring babysitters requires extensive vetting and verification.' },
            { icon: '💔', title: 'No Personal Time', desc: 'Parents rarely get breathing room without extensive planning.' }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-red-50 rounded-2xl border-2 border-primary/20 hover:border-primary transition">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-4 bg-gradient-to-r from-primary via-red-400 to-primary text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-20 text-center">How Babiol Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: 1, title: 'Open App', desc: 'Tell us when you need care' },
            { step: 2, title: 'Book Instantly', desc: 'See verified caretakers nearby' },
            { step: 3, title: 'Get Care in 10 Min', desc: 'Trusted pro arrives quickly' },
            { step: 4, title: 'Enjoy Peace', desc: 'You relax, we handle it' }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="bg-white text-primary w-14 h-14 rounded-full flex items-center justify-center font-black mb-6 text-xl shadow-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/90">{item.desc}</p>
              {i < 3 && <div className="hidden md:block absolute top-7 left-[60px] w-[calc(100%-80px)] h-1 bg-white/30" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-20 text-center">Why Choose Babiol</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: '10-Minute Delivery', desc: 'Get professional care faster than any competitor' },
            { icon: Shield, title: '100% Verified', desc: 'All caregivers are thoroughly background checked' },
            { icon: Clock, title: '1-3 Hour Slots', desc: 'Book exactly the time you need for flexibility' },
            { icon: Heart, title: 'Trusted Professionals', desc: 'Expert caregivers trained in child safety' },
            { icon: Users, title: 'Parent Community', desc: 'Connect with other parents seeking work-life balance' },
            { icon: MapPin, title: 'Growing Across Cities', desc: 'Starting in Hyderabad & Bangalore, expanding soon' }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-white p-8 rounded-2xl border-2 border-primary/20 hover:border-primary hover:shadow-xl transition transform hover:scale-105">
                <div className="bg-red-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70 font-medium">{item.desc}</p>
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
    <section id="pricing" className="py-20 md:py-28 px-4 bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-20 text-center">Where We Operate</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            { city: 'Hyderabad', status: '✓ Live', emoji: '🚀', desc: 'Available now for early adopters' },
            { city: 'Bangalore', status: '✓ Live', emoji: '🚀', desc: 'Available now for early adopters' }
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-r from-primary to-red-500 text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{item.emoji}</span>
                <div>
                  <h3 className="text-3xl font-black">{item.city}</h3>
                  <p className="text-white/90 font-bold">{item.status}</p>
                </div>
              </div>
              <p className="text-white/95 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border-2 border-primary rounded-2xl p-8 text-center">
          <p className="text-lg text-foreground mb-4 font-bold">Interested in other cities?</p>
          <a href="#waitlist" className="inline-block text-primary font-bold hover:text-accent transition">Tell us your city preference →</a>
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
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="waitlist" className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-muted">
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl font-black text-foreground mb-4 text-center">Join the Waitlist</h2>
        <p className="text-foreground/70 text-center mb-10 font-medium">Be among the first to access Babiol when we launch in your city</p>
        
        {submitted ? (
          <div className="bg-primary/10 border-2 border-primary p-8 rounded-2xl text-center">
            <p className="text-2xl font-bold text-primary">🎉 Thank you!</p>
            <p className="text-foreground/70 mt-3 font-medium">We&apos;ll notify you when we launch in your city.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-4 bg-white border-2 border-border rounded-xl focus:outline-none focus:border-primary font-medium"
            />
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 bg-white border-2 border-border rounded-xl focus:outline-none focus:border-primary font-medium"
            />
            <select
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-5 py-4 bg-white border-2 border-border rounded-xl focus:outline-none focus:border-primary font-medium"
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
              className="w-full px-5 py-4 bg-white border-2 border-border rounded-xl focus:outline-none focus:border-primary font-medium"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl hover:bg-accent transition font-black text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
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
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-20 text-center">What Parents Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Priya M.', role: 'Mother of 2', quote: 'Finally, I get an hour to myself without weeks of planning!' },
            { name: 'Arjun P.', role: 'Father of 1', quote: 'The caretakers are professional and my daughter loves them.' },
            { name: 'Neha S.', role: 'Working Mom', quote: 'Game-changer for my work meetings and personal time.' }
          ].map((item, i) => (
            <div key={i} className="bg-red-50 border-2 border-primary/20 p-8 rounded-2xl hover:border-primary transition">
              <div className="flex gap-1 mb-6">{'⭐⭐⭐⭐⭐'.split('').map((s, i) => <span key={i} className="text-lg">{s}</span>)}</div>
              <p className="text-foreground/80 mb-6 italic text-lg font-medium">&quot;{item.quote}&quot;</p>
              <p className="font-bold text-foreground text-lg">{item.name}</p>
              <p className="text-sm text-foreground/70 font-medium">{item.role}</p>
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
    <section className="py-20 md:py-28 px-4 bg-muted">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'How quickly can a caretaker arrive?', a: 'We aim to get a verified caretaker to your door within 10 minutes. Peak hour delivery times may vary slightly.' },
            { q: 'Are all caretakers verified?', a: 'Yes, every caretaker goes through thorough background checks, training, and verification before joining Babiol.' },
            { q: 'What are the available time slots?', a: 'You can book for 1, 2, or 3-hour sessions based on your needs. Choose your preferred slot when booking.' },
            { q: 'How much does it cost?', a: 'Pricing varies by city and time. You&apos;ll see exact rates before confirming your booking.' },
            { q: 'Can I reschedule or cancel?', a: 'Yes, you can reschedule or cancel up to 30 minutes before the scheduled time without charges.' },
            { q: 'Are there age restrictions?', a: 'We provide care for babies and children aged 6 months to 8 years. Caretakers are trained for all age groups.' }
          ].map((item, i) => (
            <div key={i} className="bg-white border-2 border-primary/20 rounded-xl hover:border-primary transition">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-5 flex items-center justify-between hover:bg-red-50 transition"
              >
                <h3 className="font-bold text-foreground text-left text-lg">{item.q}</h3>
                <ChevronDown className={`w-6 h-6 text-primary flex-shrink-0 transition ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-8 py-5 border-t-2 border-primary/20 bg-red-50 text-foreground/80 font-medium">
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
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="font-bold text-lg">♥</span>
              </div>
              <span className="font-bold text-xl">Babiol</span>
            </div>
            <p className="text-white/70 font-medium">On-demand baby care in 10 minutes</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition font-medium">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Safety</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition font-medium">About</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Blog</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition font-medium">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Terms</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60 font-medium">
          <p>&copy; 2025 Babiol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
