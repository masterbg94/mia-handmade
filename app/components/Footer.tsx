import Link from 'next/link';
import { Scissors } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-500 py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center text-white mb-8">
            <Scissors className="text-[#D4AF37] w-6 h-6 mr-3" />
            <span className="font-serif text-xl tracking-widest uppercase">Mia Handmade</span>
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
            <InstagramIcon className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <FacebookIcon className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <LinkedinIcon className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
          </div>
          <p className="text-xs font-light">Radnim danima 10h - 19h<br />Vikendom na zakazivanje.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-10 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Mia Handmade Beograd. Sva prava zadrzana.</p>
        <p className="mt-4 md:mt-0">Premium Tailoring Experience</p>
      </div>
    </footer>
  );
}
