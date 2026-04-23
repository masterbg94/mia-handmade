'use client';

import Hero from './components/Hero';
import Link from 'next/link';
import { Award, Star, Check, Info, ArrowRight } from 'lucide-react';
import { fabricGuide } from './lib/data';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="bg-zinc-50">
      <Hero />

      {/* Trust Badges */}
      <div className="bg-white py-12 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex items-center space-x-3 text-zinc-400 reveal-on-scroll">
            <Award className="w-8 h-8 text-[#D4AF37]/50" />
            <span className="uppercase tracking-widest text-[10px] font-semibold">20 god. iskustva</span>
          </div>
          <div className="flex items-center space-x-3 text-zinc-400 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <Star className="w-8 h-8 text-[#D4AF37]/50" />
            <span className="uppercase tracking-widest text-[10px] font-semibold">Rucna izrada</span>
          </div>
          <div className="flex items-center space-x-3 text-zinc-400 reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <Check className="w-8 h-8 text-[#D4AF37]/50" />
            <span className="uppercase tracking-widest text-[10px] font-semibold">Samo vrhunski materijali</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative reveal-on-scroll">
            <div className="relative z-10 aspect-[3/4] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover"
                alt="Proces sivenja"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-[#D4AF37]/30 hidden lg:block" />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-zinc-200 -z-10 translate-x-4 translate-y-4" />
          </div>
          <div className="lg:w-1/2 reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h2 className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Umetnost detalja</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-8 leading-tight">
              Gde se tradicija susrece sa <br />
              <span className="italic">savremenim dizajnom</span>.
            </h3>
            <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-lg">
              <p>
                L&apos;Atelier je utociste za one koji cene besprekoran kroj. Verujemo da odeca mora da prati pokret tela,
                a ne samo da ga pokriva. Nas fokus je na anatomskoj preciznosti i taktilnom luksuzu.
              </p>
              <p>
                Od prve skice na papiru do poslednjeg rucno izradjenog rupice za dugme, svaki korak je posvecen vama.
                Specijalizovani smo za venanice koje prkose vremenu i odela koja ulivaju samopouzdanje.
              </p>
            </div>
            <div className="mt-12">
              <Link
                href="/portfolio"
                className="group flex items-center text-zinc-900 font-bold uppercase text-[10px] tracking-widest border-b-2 border-[#D4AF37] pb-2 hover:text-[#D4AF37] transition-all w-fit"
              >
                Istrazite radove
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Guide Section */}
      <section className="py-24 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-serif text-zinc-900 mb-4">Vodic kroz materijale</h2>
            <p className="text-zinc-500 font-light">Osnova svake dobre kreacije je kvalitetna tkanina. Biramo samo najbolje iz Italije i Francuske.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fabricGuide.map((f, i) => (
              <div
                key={i}
                className="bg-white p-10 shadow-sm border-t-2 border-transparent hover:border-[#D4AF37] transition-all duration-500 reveal-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <Info className="w-6 h-6 text-[#D4AF37] mb-6" />
                <h4 className="text-xl font-serif mb-3">{f.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-4">{f.use}</p>
                <p className="text-zinc-600 text-sm font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
          <h2 className="text-4xl font-serif mb-8">Ostanite u toku sa modom</h2>
          <p className="text-zinc-400 mb-10 font-light tracking-wide">
            Prijavite se na nas newsletter za savete o stilu i ekskluzivne termine za konsultacije.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Vasa email adresa"
              className="flex-grow bg-zinc-900 border border-zinc-800 px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-colors text-white"
            />
            <button className="bg-[#D4AF37] text-zinc-950 px-8 py-4 uppercase text-[10px] font-bold tracking-widest hover:bg-white transition-all">
              Prijavi se
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
