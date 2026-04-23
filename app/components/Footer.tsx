import Link from 'next/link';
import { Scissors, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-500 py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center text-white mb-8">
            <Scissors className="text-[#D4AF37] w-6 h-6 mr-3" />
            <span className="font-serif text-xl tracking-widest uppercase">L&apos;Atelier</span>
          </div>
          <p className="text-sm font-light leading-relaxed">
            Premium krojacki atelje u Beogradu. Posveceni smo ocuvanju zanata kroz moderan pristup luksuzu i eleganciji.
          </p>
        </div>

        <div>
          <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Navigacija</h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase">
            <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Pocetna</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#D4AF37] transition-colors">Kolekcije</Link></li>
            <li><Link href="/pricing" className="hover:text-[#D4AF37] transition-colors">Cenovnik</Link></li>
            <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Usluge</h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase">
            <li>Sivenje vencanice</li>
            <li>Zenska odela</li>
            <li>Svecane haljine</li>
            <li>Premium prepravke</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Pratite nas</h4>
          <div className="flex space-x-6 mb-8">
            <Instagram className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <Facebook className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <Linkedin className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
          </div>
          <p className="text-xs font-light">Radnim danima 10h - 19h<br />Vikendom na zakazivanje.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-10 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center text-zinc-600">
        <p>&copy; {new Date().getFullYear()} L&apos;Atelier Beograd. Sva prava zadrzana.</p>
        <p className="mt-4 md:mt-0">Premium Tailoring Experience</p>
      </div>
    </footer>
  );
}
