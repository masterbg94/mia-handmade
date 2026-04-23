import Link from 'next/link';
import { portfolioProjects } from '../../lib/data';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ id: p.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = portfolioProjects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/portfolio"
          className="flex items-center text-zinc-400 hover:text-[#D4AF37] mb-12 uppercase text-[10px] tracking-widest font-bold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Nazad na galeriju
        </Link>

        <h1 className="text-5xl font-serif text-zinc-900 mb-6 italic">{project.title}</h1>
        <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-12">{project.category}</p>

        <img
          src={project.coverImg}
          className="w-full aspect-video object-cover mb-16 shadow-2xl"
          alt={project.title}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-xl font-serif mb-6 border-b border-zinc-200 pb-2">O projektu</h3>
            <p className="text-zinc-600 font-light leading-relaxed">{project.shortDesc}</p>
            <div className="mt-8 space-y-4">
              <div className="flex justify-between border-b border-zinc-100 py-2">
                <span className="text-[10px] uppercase font-bold">Materijal</span>
                <span className="font-light">{project.fabric}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 py-2">
                <span className="text-[10px] uppercase font-bold">Vreme izrade</span>
                <span className="font-light">{project.duration}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 py-2">
                <span className="text-[10px] uppercase font-bold">Klijent</span>
                <span className="font-light">{project.client}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6 border-b border-zinc-200 pb-2">Proces rada</h3>
            <ul className="space-y-6">
              {project.process.map((step, sidx) => (
                <li key={sidx} className="flex space-x-4">
                  <span className="text-[#D4AF37] font-serif italic">{sidx + 1}.</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-1">{step.step}</h4>
                    <p className="text-xs text-zinc-500 font-light">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.gallery.length > 0 && (
          <div>
            <h3 className="text-xl font-serif mb-8 border-b border-zinc-200 pb-2">Galerija</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, gidx) => (
                <img
                  key={gidx}
                  src={img}
                  className="w-full aspect-square object-cover shadow-md"
                  alt={`${project.title} - ${gidx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
