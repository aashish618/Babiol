'use client'

import { useState } from 'react'
import { ChevronDown, MapPin, Clock, Users, Heart, Shield, Zap, CheckCircle } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-100 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="font-bold text-2xl text-foreground">Babiol</span>
        </div>
        <a href="#waitlist" className="bg-primary text-white px-7 py-3 rounded-lg hover:bg-accent transition font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
          Join Waitlist
        </a>
      </nav>
    </header>
  )
}

export function Hero() {
  return (
    <section className="pt-40 pb-32 md:pt-56 md:pb-48 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-8 border border-primary/30">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <p className="text-sm font-semibold text-primary">Launching Now in 2 Cities</p>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 leading-tight tracking-tight">
          Baby Care in <span className="text-primary">10 Minutes</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 mb-12 font-medium max-w-3xl mx-auto">
          Get verified, professional babysitters at your doorstep in just 10 minutes. Book for 1-3 hours and reclaim your time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#waitlist" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg hover:bg-accent transition font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
            Get Early Access
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto bg-gray-100 text-foreground px-8 py-4 rounded-lg hover:bg-gray-200 transition font-bold text-lg">
            See How It Works
          </a>
        </div>
      </div>
    </section>
  )
}

export function Problem() {
  return (
    <section className="py-32 md:py-48 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary font-bold text-sm tracking-widest mb-4">THE PROBLEM</p>
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">Why Parents Need Babiol</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Most parents struggle to find trusted, immediate baby care. Let's fix that.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: Clock, title: 'Limited Time', desc: 'No quick relief when you need a few hours to yourself or handle emergencies' },
            { icon: Shield, title: 'Safety Concerns', desc: 'Finding verified babysitters requires extensive research and weeks of planning' },
            { icon: Heart, title: 'Parent Burnout', desc: 'Constant childcare with no breaks leads to exhaustion and stress' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-lg transition">
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-foreground/70 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 md:py-48 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary font-bold text-sm tracking-widest mb-4">HOW IT WORKS</p>
          <h2 className="text-5xl md:text-6xl font-black text-foreground">4 Simple Steps</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: 1, title: 'Open the App', desc: 'Tell us when you need care and for how long' },
            { step: 2, title: 'See Caretakers', desc: 'Browse verified professionals near you' },
            { step: 3, title: 'Instant Arrival', desc: 'Get a pro at your door in 10 minutes' },
            { step: 4, title: 'Enjoy Your Time', desc: 'Focus on what matters most' }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="bg-primary text-white w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl mb-8 shadow-lg">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-lg">{item.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-10 left-[120px] w-[calc(100%-140px)] h-1 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section id="features" className="py-32 md:py-48 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary font-bold text-sm tracking-widest mb-4">WHY BABIOL</p>
          <h2 className="text-5xl md:text-6xl font-black text-foreground">Built for Parents</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: Zap, title: '10-Minute Delivery', desc: 'Faster than ordering food. Get care when you need it most.' },
            { icon: Shield, title: '100% Verified', desc: 'Every caretaker is background checked and thoroughly trained.' },
            { icon: Clock, title: 'Flexible Booking', desc: 'Book 1, 2, or 3-hour sessions. Your schedule, your rules.' },
            { icon: Heart, title: 'Trusted Pros', desc: 'Expert caregivers trained in child safety and development.' },
            { icon: Users, title: 'Parent Community', desc: 'Connect with other parents who get the struggle.' },
            { icon: MapPin, title: 'Growing Fast', desc: 'Starting in Hyderabad & Bangalore, expanding nationwide.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-r from-primary to-red-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Get Your Time Back?</h2>
        <p className="text-xl text-white/90 mb-10">Join thousands of parents who've already discovered the freedom of Babiol.</p>
        <a href="#waitlist" className="inline-block bg-white text-primary px-10 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
          Join the Waitlist Now
        </a>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="py-32 md:py-48 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary font-bold text-sm tracking-widest mb-4">TESTIMONIALS</p>
          <h2 className="text-5xl md:text-6xl font-black text-foreground">Loved by Parents</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: 'Priya Sharma', role: 'Mother of 2, Bangalore', quote: 'Finally I can take a yoga class without guilt. This has been a game changer!' },
            { name: 'Arjun Patel', role: 'Father of 1, Hyderabad', quote: 'The professionalism and speed blew me away. My daughter had the best time with her caretaker.' },
            { name: 'Neha Kapoor', role: 'Working Mom, Bangalore', quote: 'I was skeptical about leaving my toddler with someone new, but the verification process gave me complete peace of mind.' }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 p-10 rounded-2xl hover:shadow-lg transition">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-lg text-foreground/80 mb-8 italic leading-relaxed">{`"${item.quote}"`}</p>
              <div>
                <p className="font-bold text-foreground text-lg">{item.name}</p>
                <p className="text-foreground/60 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Cities() {
  return (
    <section className="py-32 md:py-48 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary font-bold text-sm tracking-widest mb-4">AVAILABILITY</p>
          <h2 className="text-5xl md:text-6xl font-black text-foreground">Where We Operate</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto mb-12">
          {[
            { city: 'Hyderabad', emoji: '🚀', status: 'Available Now' },
            { city: 'Bangalore', emoji: '🚀', status: 'Available Now' }
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-primary to-red-500 text-white p-12 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <div className="text-5xl mb-6">{item.emoji}</div>
              <h3 className="text-4xl font-black mb-2">{item.city}</h3>
              <p className="text-white/90 font-semibold text-lg">{item.status}</p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-10 text-center">
          <p className="text-lg text-foreground font-semibold mb-4">Interested in other cities?</p>
          <a href="#waitlist" className="text-primary font-bold hover:underline text-lg">Tell us your city preference →</a>
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
    <section id="waitlist" className="py-32 md:py-48 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-4">Join Our Waitlist</h2>
          <p className="text-xl text-foreground/70">Be first to get instant baby care in your city</p>
        </div>
        
        {submitted ? (
          <div className="bg-green-50 border-2 border-green-500 p-12 rounded-2xl text-center">
            <div className="mb-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            </div>
            <p className="text-2xl font-bold text-foreground mb-2">Thank you!</p>
            <p className="text-foreground/70 text-lg">We'll notify you as soon as we launch in your city.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition font-medium text-lg"
            />
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition font-medium text-lg"
            />
            <select
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition font-medium text-lg"
            >
              <option value="">Which city are you in?</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="bangalore">Bangalore</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="pune">Pune</option>
              <option value="other">Other City</option>
            </select>
            <input
              type="tel"
              placeholder="+91 Your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition font-medium text-lg"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-lg hover:bg-accent transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Early Access
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 md:py-48 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-widest mb-4">COMMON QUESTIONS</p>
          <h2 className="text-5xl md:text-6xl font-black text-foreground">FAQ</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: 'How quickly can a caretaker arrive?', a: 'We guarantee a verified caretaker at your door within 10 minutes or less. That\'s our promise.' },
            { q: 'Are all caretakers verified?', a: 'Yes, 100%. Every caretaker undergoes thorough background checks, training, and verification before joining Babiol.' },
            { q: 'What time slots are available?', a: 'You can book 1, 2, or 3-hour sessions anytime from 6 AM to 11 PM. Book exactly what you need.' },
            { q: 'How much does it cost?', a: 'Pricing varies by city and time of day. You\'ll see all rates clearly before confirming your booking.' },
            { q: 'Can I cancel or reschedule?', a: 'Yes, you can cancel or reschedule up to 30 minutes before your booking without any charges.' },
            { q: 'What age children can we book for?', a: 'We provide care for babies and children from 6 months to 8 years. All caretakers are specially trained.' }
          ].map((item, i) => (
            <div key={i} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h3 className="font-bold text-foreground text-left text-lg">{item.q}</h3>
                <ChevronDown className={`w-6 h-6 text-primary flex-shrink-0 transition ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-8 py-6 border-t-2 border-gray-200 bg-gray-50 text-foreground/80 text-lg">
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
    <footer className="bg-foreground text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 fill-white" />
              </div>
              <span className="font-bold text-xl">Babiol</span>
            </div>
            <p className="text-white/70 text-lg">Baby care in 10 minutes.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition font-medium">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Safety</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition font-medium">About Us</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Blog</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition font-medium">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Follow Us</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition font-medium">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition font-medium">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-10 text-center text-white/60">
          <p className="font-medium">&copy; 2025 Babiol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Landing() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <CTA />
      <Testimonials />
      <Cities />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  )
}
