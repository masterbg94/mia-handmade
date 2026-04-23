import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen bg-zinc-950 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-30 animate-slow-zoom"
          alt="Atelje Enterijer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-20">
        <div className="max-w-3xl reveal-on-scroll">
          <span className="inline-block text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 border-b border-[#D4AF37] pb-2">
            Premium Tailoring Beograd
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1] transition-all">
            Vasa vizija, <br />
            nasa <span className="italic text-zinc-400">igla</span>.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 font-light leading-relaxed max-w-xl">
            Ekskluzivno sivenje po meri koje spaja beogradsku tradiciju i evropski stil.
            Stvaramo besprekorne siluete za vase najvaznije trenutke.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/contact"
              className="px-10 py-5 bg-[#D4AF37] text-zinc-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500 flex items-center justify-center"
            >
              Zakazite termin
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-5 border border-zinc-700 text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:border-[#D4AF37] transition-all duration-500"
            >
              Pogledaj radove
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
