'use client';

import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { pricingPlans, expandedFaq } from '../lib/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PricingPage() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-zinc-50 pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 reveal-on-scroll">
          <h1 className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Investicija u dugovenost</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-zinc-900 mb-6 italic">Cenovnik Usluga</h2>
          <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-10" />
          <p className="text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            Svaki zahtev je individualan. Cene zavise od kompleksnosti dizajna i dragocenosti materijala.
            Prikazane cene su osnova za razgovor.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {pricingPlans.map((card, i) => (
            <div
              key={i}
              className={`bg-white p-10 border shadow-sm flex flex-col items-center text-center reveal-on-scroll relative ${
                card.popular
                  ? 'border-[#D4AF37] scale-105 shadow-xl z-10'
                  : 'border-zinc-100'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {card.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-zinc-950 text-[8px] uppercase font-bold px-4 py-1 tracking-widest">
                  Najtrazenije
                </span>
              )}
              <h4 className="text-xl font-serif mb-6">{card.title}</h4>
              <div className="mb-8">
                <span className="text-zinc-400 text-sm">od</span>
                <span className="text-4xl font-serif text-zinc-900 mx-1">{card.price}</span>
                <span className="text-zinc-400 text-xs uppercase tracking-tighter">RSD</span>
              </div>
              <ul className="space-y-4 mb-10 text-sm font-light text-zinc-500 w-full">
                {card.features.map((f, j) => (
                  <li key={j} className="flex items-center justify-center space-x-2">
                    <Check className="w-3 h-3 text-[#D4AF37]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full py-4 border border-zinc-900 text-zinc-900 text-[10px] uppercase font-bold tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
                Detaljan upit
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="reveal-on-scroll">
          <h3 className="text-3xl font-serif text-zinc-900 mb-12 text-center">Cesta Pitanja (FAQ)</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {expandedFaq.map((faq, idx) => (
              <div key={idx} className="border-b border-zinc-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="text-lg text-zinc-800 font-medium group-hover:text-[#D4AF37] transition-colors">
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="text-[#D4AF37]" />
                  ) : (
                    <ChevronDown className="text-zinc-400" />
                  )}
                </button>
                <div
                  className={`transition-all duration-500 ${
                    openFaq === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-zinc-500 font-light leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
