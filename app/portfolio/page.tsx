'use client';

import Link from 'next/link';
import { portfolioProjects } from '../lib/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PortfolioPage() {
  useScrollReveal();

  return (
    <div className="bg-zinc-50 pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 reveal-on-scroll">
          <h1 className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Arhiva radova</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-zinc-900">Nase Kolekcije</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioProjects.map((project, idx) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group cursor-pointer reveal-on-scroll"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-zinc-200 mb-6 shadow-md relative">
                <img
                  src={project.coverImg}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white uppercase text-[10px] tracking-widest font-bold border border-white px-6 py-3">
                    Pogledaj detalje
                  </span>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-2">{project.category}</p>
              <h3 className="text-2xl font-serif text-zinc-900 mb-2">{project.title}</h3>
              <p className="text-zinc-500 font-light text-sm line-clamp-2">{project.shortDesc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
