'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Scissors } from 'lucide-react';

// This need to be fixed as soon as posible, dont need SVG , want real better alternative!
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
// This need to be fixed as soon as posible, dont need SVG , want real better alternative!
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
// This need to be fixed as soon as posible, dont need SVG , want real better alternative!
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const navLinks = [
  { href: '/', label: 'Atelje' },
  { href: '/portfolio', label: 'Kolekcije' },
  { href: '/pricing', label: 'Cenovnik' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-zinc-950/95 backdrop-blur-md py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center cursor-pointer group">
            <div className="relative flex items-center justify-center w-10 h-10 border border-[#D4AF37] rounded-full mr-3 group-hover:bg-[#D4AF37] transition-colors duration-500">
              <Scissors className="w-5 h-5 text-[#D4AF37] group-hover:text-zinc-950 transition-colors" />
            </div>
            <span className="font-serif text-2xl tracking-[0.2em] uppercase text-white">Mia Handmade</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative uppercase text-[10px] tracking-[0.2em] transition-colors duration-300 font-medium ${
                  pathname === link.href ? 'text-[#D4AF37]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 w-full h-px bg-[#D4AF37] transition-transform duration-500 ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[110] relative text-white focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-zinc-950 z-[90] transition-all duration-500 flex flex-col items-center justify-center space-y-10 px-6 ${
          isOpen ? 'opacity-100 pointer-events-auto h-fit py-6' : 'opacity-0 pointer-events-none translate-y-10'
        }`}
      >
        {navLinks.map((link, idx) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: `${idx * 100}ms` }}
            className={`font-serif text-3xl tracking-widest uppercase transition-all duration-500 ${
              pathname === link.href ? 'text-[#D4AF37]' : 'text-zinc-500'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-10 flex space-x-6 border-t border-zinc-900 w-full justify-center">
          <InstagramIcon className="text-zinc-500 w-6 h-6" />
          <FacebookIcon className="text-zinc-500 w-6 h-6" />
          <LinkedinIcon className="text-zinc-500 w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
