'use client'

import { useState } from 'react'
import { ChevronDown, MapPin, Clock, Heart, Shield, Zap, CheckCircle } from 'lucide-react'

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Safety', href: '#safety' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Cities', href: '#cities' },
]

const caretakerCards = [
  { name: 'Ananya R.', rating: '4.9', tag: 'Infant trained', eta: '8 min', price: '₹249/hr' },
  { name: 'Meera S.', rating: '5.0', tag: 'Toddler specialist', eta: '10 min', price: '₹299/hr' },
  { name: 'Fatima K.', rating: '4.8', tag: 'First-aid certified', eta: '7 min', price: '₹279/hr' },
]

const productItems = [
  { name: 'Premium Diapers', detail: 'Size S-XL, express top-up', price: 'From ₹199' },
  { name: 'Baby Wipes & Cream', detail: 'Dermatologist-safe essentials', price: 'From ₹99' },
  { name: 'Woodward’s Gripe Water', detail: 'Emergency baby-care shelf item', price: 'Fast delivery' },
  { name: 'Feeding & Hygiene Kit', detail: 'Bottles, bibs, sanitizer, tissues', price: 'Curated pack' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-white/85 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Babiol home">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 shadow-xl shadow-rose-500/20">
            <Heart className="h-6 w-6 fill-rose-400 text-rose-400" />
          </div>
          <div>
            <p className="text-xl font-black tracking-tight text-slate-950">Babiol</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-rose-500">Care in minutes</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-slate-600 transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#pitch" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 transition hover:border-slate-950 hover:text-slate-950">
            View pitch
          </a>
          <a href="#waitlist" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-rose-600">
            Join waitlist
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-800 md:hidden"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="#waitlist" onClick={() => setMobileMenuOpen(false)} className="rounded-2xl bg-slate-950 px-5 py-3 text-center font-black text-white">
              Join waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#ffe4e6_0,transparent_38%),linear-gradient(135deg,#fff7ed_0%,#ffffff_45%,#f8fafc_100%)] px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44">
      <div className="absolute right-[-120px] top-24 h-96 w-96 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute bottom-12 left-[-120px] h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-rose-200 bg-white/80 px-4 py-2 shadow-sm">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            <p className="text-sm font-black text-slate-700">Zepto-style baby care for Hyderabad and Bangalore parents</p>
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-slate-950 md:text-7xl xl:text-8xl">
            Book a verified baby caretaker in <span className="text-rose-600">10 minutes.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-slate-600 md:text-xl">
            Babiol gives city parents an instant, trusted way to take a short break, attend meetings, run errands, or simply recharge. Choose 1-hour, 2-hour, or custom care sessions and add baby essentials in the same flow.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#waitlist" className="group inline-flex items-center justify-center gap-3 rounded-full bg-rose-600 px-8 py-4 text-base font-black text-white shadow-2xl shadow-rose-600/25 transition hover:-translate-y-1 hover:bg-slate-950">
              Get early access
              <Zap className="h-5 w-5 transition group-hover:rotate-12" />
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-black text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-slate-950">
              See the experience
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ['10 min', 'target arrival'],
              ['1-3 hrs', 'flexible slots'],
              ['2 cities', 'launch wedge'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white bg-white/75 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-black text-slate-950 md:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-8 top-16 z-10 hidden rounded-3xl border border-slate-100 bg-white p-4 shadow-2xl shadow-slate-950/10 md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-black text-slate-950">Caretaker confirmed</p>
                <p className="text-sm font-semibold text-slate-500">Arriving in 8 minutes</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-950 p-3 shadow-[0_35px_90px_rgba(15,23,42,0.28)]">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div className="bg-gradient-to-br from-rose-600 to-orange-500 px-6 pb-8 pt-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-white/75">Babiol now</p>
                    <h2 className="mt-2 text-3xl font-black tracking-tight">Care near you</h2>
                  </div>
                  <div className="rounded-2xl bg-white/20 px-3 py-2 text-sm font-black backdrop-blur">HYD</div>
                </div>
                <div className="mt-6 rounded-3xl bg-white/15 p-4 backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-white/75">Book for</p>
                      <p className="text-2xl font-black">2 hours</p>
                    </div>
                    <div className="h-12 w-px bg-white/25" />
                    <div>
                      <p className="text-sm font-bold text-white/75">Starts</p>
                      <p className="text-2xl font-black">Now</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-5">
                {caretakerCards.map((card) => (
                  <div key={card.name} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-rose-600 shadow-sm">
                          {card.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-black text-slate-950">{card.name}</p>
                          <p className="text-sm font-semibold text-slate-500">{card.tag}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-slate-950">{card.price}</p>
                        <p className="text-sm font-bold text-emerald-600">{card.eta}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-600">
                      <span>Rating {card.rating}/5</span>
                      <span className="text-rose-600">View profile</span>
                    </div>
                  </div>
                ))}
                <button className="w-full rounded-3xl bg-slate-950 py-4 font-black text-white">Confirm booking</button>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 bottom-12 hidden rounded-3xl border border-slate-100 bg-white p-4 shadow-2xl shadow-slate-950/10 md:block">
            <p className="text-xs font-black uppercase tracking-wider text-slate-400">Add-on delivery</p>
            <p className="mt-1 font-black text-slate-950">Diapers + wipes in 12 min</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Problem() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">The parent pain point</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Childcare is still planned in days. Parent emergencies happen in minutes.</h2>
          </div>
          <p className="text-lg font-medium leading-8 text-slate-600">
            Urban parents often need short, reliable coverage: a work call, doctor visit, grocery run, gym session, salon appointment, or an hour of rest. Existing daycare and nanny models are designed for long-term care, not instant, hyperlocal, short-duration support.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: Clock, title: 'No quick relief', desc: 'Parents cannot wait days to interview a nanny when they only need one or two hours.' },
            { icon: Shield, title: 'Trust is the bottleneck', desc: 'Safety, identity verification, training, and live accountability must be visible before booking.' },
            { icon: Heart, title: 'Burnout is real', desc: 'Small breaks can improve family routines, mental health, and productivity for working parents.' },
          ].map((item) => (
            <div key={item.title} className="group rounded-[2rem] border border-slate-100 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-slate-950 hover:shadow-2xl hover:shadow-slate-950/15">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:bg-white/10">
                <item.icon className="h-7 w-7 text-rose-600 group-hover:text-white" />
              </div>
              <h3 className="mt-7 text-2xl font-black text-slate-950 group-hover:text-white">{item.title}</h3>
              <p className="mt-3 text-base font-medium leading-7 text-slate-600 group-hover:text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-950 px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-300">How the service works</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">A Zepto-like flow, redesigned for baby care trust.</h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-4">
          {[
            { step: '01', title: 'Select need', desc: 'Choose child age, location, start time, and required duration.' },
            { step: '02', title: 'Match nearby', desc: 'See verified caretakers with ETA, ratings, skills, and hourly pricing.' },
            { step: '03', title: 'Track arrival', desc: 'Live ETA, identity card, parent instructions, and emergency contacts.' },
            { step: '04', title: 'Add products', desc: 'Order diapers, wipes, gripe water, formula support items, and care kits.' },
          ].map((item, index) => (
            <div key={item.step} className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-5xl font-black text-white/10">{item.step}</p>
              <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
              <p className="mt-3 text-base font-medium leading-7 text-white/65">{item.desc}</p>
              {index < 3 && <div className="absolute right-[-14px] top-1/2 hidden h-px w-7 bg-gradient-to-r from-rose-400 to-transparent md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Safety() {
  return (
    <section id="safety" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-rose-50 to-orange-50 p-8 md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">Trust layer</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Safety is not a feature. It is the product.</h2>
          <p className="mt-6 text-lg font-medium leading-8 text-slate-600">
            For incubation and pilot conversations, Babiol is positioned as a trust-first marketplace: every booking experience should clearly show verification, training, availability, escalation, and parent control.
          </p>
          <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <Shield className="mt-1 h-7 w-7 text-rose-600" />
              <div>
                <p className="text-xl font-black text-slate-950">Proposed verification stack</p>
                <p className="mt-2 font-medium leading-7 text-slate-600">Government ID checks, police/background verification, practical childcare screening, first-aid orientation, parent ratings, repeat monitoring, and issue escalation workflow.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            'Verified caretaker profiles with photo, ID, skills, and language preferences',
            'Live ETA and booking timer so parents know exactly when help arrives',
            'In-app instructions for feeding, sleep, allergies, screen rules, and emergency contacts',
            'Short-duration slots that reduce commitment risk and improve quality control',
            'Post-session feedback loop for caretaker quality, punctuality, and child comfort',
            'City cluster model for faster dispatch density and more predictable operations',
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
              <CheckCircle className="h-6 w-6 text-emerald-600" />
              <p className="mt-4 font-bold leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Marketplace() {
  return (
    <section id="marketplace" className="bg-slate-50 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">Baby commerce layer</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Caretakers plus baby essentials in one quick-commerce basket.</h2>
          </div>
          <p className="text-lg font-medium leading-8 text-slate-600">
            Babiol can expand beyond service fees into repeat commerce by bundling urgent baby essentials with the booking flow. This makes the product more useful for parents and creates an additional revenue line for the business model.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {productItems.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50">
                <Heart className="h-7 w-7 text-rose-600" />
              </div>
              <h3 className="mt-6 text-xl font-black text-slate-950">{item.name}</h3>
              <p className="mt-2 min-h-14 font-medium leading-7 text-slate-600">{item.detail}</p>
              <p className="mt-6 rounded-full bg-slate-950 px-4 py-2 text-center text-sm font-black text-white">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pitch() {
  return (
    <section id="pitch" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 p-6 text-white md:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-300">Incubation-ready thesis</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">A high-frequency trust marketplace for modern parents.</h2>
            <p className="mt-6 text-lg font-medium leading-8 text-white/65">
              The wedge is instant short-duration care in dense urban clusters. The expansion is subscription care credits, corporate parent benefits, vetted caregiver supply, and baby quick-commerce.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Target users', 'Working parents with children from 6 months to 8 years in metro neighborhoods.'],
              ['Primary use cases', 'Meetings, errands, appointments, fitness, rest, emergency support, and short events.'],
              ['Revenue model', 'Hourly service margin, booking fee, product margin, subscriptions, and B2B benefits.'],
              ['Launch strategy', 'Start with high-density Hyderabad and Bangalore micro-markets before expanding city-wide.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                <p className="text-lg font-black">{title}</p>
                <p className="mt-3 font-medium leading-7 text-white/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Cities() {
  return (
    <section id="cities" className="bg-slate-50 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">Launch focus</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Built for dense parent neighborhoods.</h2>
          <p className="mt-6 text-lg font-medium leading-8 text-slate-600">The first pilots should focus on clusters where caretaker supply can be positioned within a 10-minute radius.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            { city: 'Hyderabad', areas: 'Gachibowli, Kondapur, Hitec City, Jubilee Hills', status: 'Pilot-ready cluster' },
            { city: 'Bangalore', areas: 'Indiranagar, Koramangala, Whitefield, HSR Layout', status: 'Pilot-ready cluster' },
          ].map((item) => (
            <div key={item.city} className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {item.status}
                  </div>
                  <h3 className="text-4xl font-black tracking-tight text-slate-950">{item.city}</h3>
                  <p className="mt-4 text-lg font-medium leading-8 text-slate-600">Suggested early zones: {item.areas}.</p>
                </div>
                <MapPin className="h-10 w-10 text-rose-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">Parent scenarios</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Designed around real breaks parents need.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { title: 'The meeting saver', quote: 'I need two uninterrupted hours for an important client call while my toddler is safely engaged at home.' },
            { title: 'The emergency errand', quote: 'I need to step out for a hospital visit or urgent paperwork without dragging my baby across the city.' },
            { title: 'The recharge hour', quote: 'I just need a short, guilt-free break to rest, exercise, or reset before the evening routine.' },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8">
              <div className="mb-6 flex gap-1 text-rose-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg">★</span>
                ))}
              </div>
              <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-4 text-lg font-medium leading-8 text-slate-600">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Waitlist() {
  const [formData, setFormData] = useState({ name: '', email: '', city: '', phone: '', role: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4500)
  }

  return (
    <section id="waitlist" className="relative overflow-hidden bg-[radial-gradient(circle_at_bottom_right,#fecdd3_0,transparent_34%),linear-gradient(135deg,#fff7ed_0%,#ffffff_55%,#f8fafc_100%)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">Early access</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Join the Babiol pilot waitlist.</h2>
          <p className="mt-6 text-lg font-medium leading-8 text-slate-600">
            Use this site for incubation conversations, early parent validation, caretaker recruitment, and pilot interest collection. The current form shows an on-page success state and can later be connected to a CRM or database.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Parents seeking short breaks', 'Caretakers interested in earning', 'Incubators evaluating the idea', 'Partners for baby products'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/80 p-4 font-bold text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-950/10 md:p-8">
          {submitted ? (
            <div className="rounded-[1.5rem] bg-emerald-50 p-10 text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-emerald-600" />
              <p className="mt-5 text-3xl font-black text-slate-950">You are on the list.</p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-600">Thanks for your interest. Babiol will use pilot feedback to shape the first launch clusters.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-500 focus:bg-white"
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-500 focus:bg-white"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-bold text-slate-900 outline-none transition focus:border-rose-500 focus:bg-white"
                >
                  <option value="">City</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi NCR</option>
                  <option value="pune">Pune</option>
                  <option value="other">Other</option>
                </select>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-bold text-slate-900 outline-none transition focus:border-rose-500 focus:bg-white"
                >
                  <option value="">I am a</option>
                  <option value="parent">Parent</option>
                  <option value="caretaker">Caretaker</option>
                  <option value="investor">Incubator / investor</option>
                  <option value="partner">Partner</option>
                </select>
              </div>
              <input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-500 focus:bg-white"
              />
              <button type="submit" className="w-full rounded-2xl bg-rose-600 py-4 text-lg font-black text-white shadow-xl shadow-rose-600/20 transition hover:-translate-y-0.5 hover:bg-slate-950">
                Request pilot access
              </button>
              <p className="text-center text-sm font-medium leading-6 text-slate-500">No spam. This is an early validation form for the Babiol pilot concept.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { q: 'Is Babiol already operational?', a: 'This website is designed as an incubation-ready concept and pilot validation page. It presents the proposed service model, trust layer, launch cities, and waitlist flow.' },
    { q: 'What makes this different from a regular nanny service?', a: 'The core difference is instant, short-duration, hyperlocal care. Parents book for one or two hours instead of committing to a monthly nanny or daycare arrangement.' },
    { q: 'How will safety be handled?', a: 'The proposed model prioritizes caretaker verification, identity checks, background screening, training, live ETA, parent instructions, ratings, and escalation workflows.' },
    { q: 'Why add baby products?', a: 'Baby essentials such as diapers, wipes, creams, feeding items, and gripe water turn Babiol into a richer parent convenience platform and create a commerce revenue stream.' },
    { q: 'Which cities are the first target markets?', a: 'Hyderabad and Bangalore are the suggested launch markets because of dense working-parent clusters, apartment communities, and strong quick-commerce behavior.' },
  ]

  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">Questions</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">FAQ for early conversations.</h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => (
            <div key={item.q} className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left">
                <span className="text-lg font-black text-slate-950">{item.q}</span>
                <ChevronDown className={`h-6 w-6 flex-shrink-0 text-rose-600 transition ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && <div className="border-t border-slate-100 bg-white px-6 py-5 text-base font-medium leading-8 text-slate-600">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-14 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-600">
                <Heart className="h-6 w-6 fill-white text-white" />
              </div>
              <div>
                <p className="text-xl font-black">Babiol</p>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">Baby care now</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-base font-medium leading-7 text-white/60">An incubation-ready concept for instant verified baby caretakers and baby essentials in dense Indian cities.</p>
          </div>
          <div>
            <h4 className="font-black">Product</h4>
            <div className="mt-5 space-y-3 text-sm font-bold text-white/55">
              <a className="block hover:text-white" href="#how-it-works">How it works</a>
              <a className="block hover:text-white" href="#safety">Safety</a>
              <a className="block hover:text-white" href="#marketplace">Marketplace</a>
            </div>
          </div>
          <div>
            <h4 className="font-black">Launch</h4>
            <div className="mt-5 space-y-3 text-sm font-bold text-white/55">
              <a className="block hover:text-white" href="#cities">Hyderabad</a>
              <a className="block hover:text-white" href="#cities">Bangalore</a>
              <a className="block hover:text-white" href="#waitlist">Pilot access</a>
            </div>
          </div>
          <div>
            <h4 className="font-black">For incubation</h4>
            <div className="mt-5 space-y-3 text-sm font-bold text-white/55">
              <a className="block hover:text-white" href="#pitch">Business thesis</a>
              <a className="block hover:text-white" href="#waitlist">Validation form</a>
              <a className="block hover:text-white" href="mailto:hello@babiol.in">Contact</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-sm font-medium text-white/45">
          © 2026 Babiol. Concept landing page for pilot and incubation discussions.
        </div>
      </div>
    </footer>
  )
}

export function Landing() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <Safety />
      <Marketplace />
      <Pitch />
      <Cities />
      <Testimonials />
      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  )
}

export default Landing
