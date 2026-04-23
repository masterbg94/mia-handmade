'use client';

import { MapPin, Phone, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactPage() {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto reveal-on-scroll">
          <p className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-6">Kontakt</p>
          <h1 className="text-6xl md:text-8xl font-serif font-light tracking-widest mb-8">
            Rezervišite
          </h1>
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-400 mb-12">
            termin
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Nalazimo se u istorijskom jezgru Beograda. Naš atelje je mesto gde uz kafu i skice oživljavamo vaše snove.
            Konsultacije su isključivo uz prethodno zakazivanje.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">

            {/* Left - Contact Info */}
            <div className="reveal-on-scroll">
              <h2 className="text-4xl font-serif text-zinc-900 mb-6">
                Počnimo razgovor<br />o vašem stilu.
              </h2>
              <p className="text-zinc-500 mb-12 leading-relaxed">
                Svaki komad koji napravimo je jedinstven. Razgovarajmo o vašoj viziji.
              </p>

              <div className="space-y-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 mb-1">Lokacija</h3>
                    <p className="text-zinc-500">Knez Mihailova 10, Stari Grad</p>
                    <p className="text-zinc-500">11000 Beograd, Srbija</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 mb-1">Telefon</h3>
                    <p className="text-zinc-500">+381 11 345 6789</p>
                    <p className="text-zinc-500">+381 60 123 4567 (Viber/WA)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 mb-1">Radno Vreme</h3>
                    <p className="text-zinc-500">Pon - Pet: 10:00 - 19:00</p>
                    <p className="text-zinc-500">Subota: 10:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="reveal-on-scroll">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Vaš upit je uspešno poslat!');
                }}
                className="space-y-8"
              >
                <div className="relative">
                  <input
                    required
                    type="text"
                    id="name"
                    className="peer w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-[#D4AF37] transition-all text-zinc-900 placeholder-transparent"
                    placeholder="Ime"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-3 text-zinc-400 text-sm transition-all peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[#D4AF37] peer-focus:text-xs"
                  >
                    Vaše Ime
                  </label>
                </div>

                <div className="relative">
                  <input
                    required
                    type="email"
                    id="email"
                    className="peer w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-[#D4AF37] transition-all text-zinc-900 placeholder-transparent"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-3 text-zinc-400 text-sm transition-all peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[#D4AF37] peer-focus:text-xs"
                  >
                    Email Adresa
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    required
                    id="message"
                    rows={6}
                    className="peer w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-[#D4AF37] transition-all text-zinc-900 placeholder-transparent resize-none"
                    placeholder="Poruka"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-3 text-zinc-400 text-sm transition-all peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[#D4AF37] peer-focus:text-xs"
                  >
                    Opišite Vašu ideju
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full py-4 border border-zinc-900 text-zinc-900 text-[10px] uppercase font-bold tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300"
                >
                  Pošalji poruku
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
