### BACKUP
```typescript
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, Phone, Mail, Scissors, Ruler, Star, Clock, 
  ArrowLeft, ChevronDown, ChevronUp, Quote, Check, Instagram, 
  Facebook, Linkedin, ArrowRight, Info, Award
} from 'lucide-react';

// --- CUSTOM HOOK ZA SCROLL ANIMACIJE ---
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// --- PROŠIRENI PODACI ZA SEO I SADRŽAJ ---

const fabricGuide = [
  { 
    name: "Prirodna Svila", 
    use: "Venčanice i svečane haljine", 
    desc: "Najluksuzniji materijal koji diše. Koristimo Mulberry svilu visokog kvaliteta za neprevaziđen pad." 
  },
  { 
    name: "Italijanski Štof", 
    use: "Odela i kaputi", 
    desc: "Vuna Super 120s i 150s od renomiranih proizvođača. Idealno za poslovnu eleganciju." 
  },
  { 
    name: "Francuska Čipka", 
    use: "Detalji i gornji delovi", 
    desc: "Ručno rađena čipka sa vezom i perlama koja svakoj kreaciji daje unikatan pečat." 
  }
];

const expandedFaq = [
  { q: "Da li radite prepravke odeće koja nije kupljena kod vas?", a: "Naravno. Naš atelje nudi usluge premium prepravki za sve komade odeće, od skraćivanja farmerki do kompleksnog sužavanja sakoa i kaputa." },
  { q: "Koja je cena konsultacije?", a: "Prva konsultacija u trajanju od 30 minuta je potpuno besplatna. Tokom nje analiziramo vašu ideju, uzimamo preliminarne mere i dajemo procenu troškova." },
  { q: "Koji su načini plaćanja?", a: "Plaćanje je moguće gotovinom, platnim karticama ili preko računa firme. Za šivenje po meri praktikujemo avans od 50% pre početka radova." },
  { q: "Kako da održavam odeću šivenu po meri?", a: "Preporučujemo isključivo hemijsko čišćenje kod proverenih servisa. Uz svaki komad dobijate detaljno uputstvo o održavanju specifičnog materijala." }
];

const portfolioProjects = [
  {
    id: "smaragd-svila",
    category: "Svečane haljine",
    title: "Smaragdna Senka",
    shortDesc: "Izrada elegantne večernje haljine od prirodne svile sa dubokim šlicem.",
    coverImg: "https://images.unsplash.com/photo-1566160980482-fa825c35b8bd?auto=format&fit=crop&q=80&w=1200",
    client: "Ana M.",
    duration: "3 nedelje",
    fabric: "100% Prirodna svila",
    process: [
      { step: "Konsultacije", desc: "Odabir nijanse smaragda i definisanje kroja koji laska figuri." },
      { step: "Bela Proba", desc: "Fiting na pamučnom modelu radi provere udobnosti pri kretanju." },
      { step: "Realizacija", desc: "Precizno sečenje svile i ručno opšivanje rubova." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1572804013309-84a8fbb233bd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "vencanica-satine",
    category: "Venčanice",
    title: "Biser i Saten",
    shortDesc: "Moderna minimalistička venčanica od teškog italijanskog satena.",
    coverImg: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&q=80&w=1200",
    client: "Jelena K.",
    duration: "2 meseca",
    fabric: "Duchess Saten",
    process: [
      { step: "Dizajn", desc: "Arhitektonski kroj sa fokusom na čiste linije bez suvišnih ukrasa." },
      { step: "Konstrukcija", desc: "Izrada unutrašnjeg korseta sa 12 čeličnih ojačanja." },
      { step: "Završnica", desc: "Ručno apliciranje bisera na tanke bretele." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546804784-896d8f1bfcb5?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "power-suit",
    category: "Odela",
    title: "Ponoćno Odelo",
    shortDesc: "Bespoke žensko odelo po meri, sako sa oštrim naramenicama.",
    coverImg: "https://images.unsplash.com/photo-1594938298596-eb5fd3f6b492?auto=format&fit=crop&q=80&w=1200",
    client: "Marija S.",
    duration: "4 nedelje",
    fabric: "Super 120s Vuna",
    process: [
      { step: "Mere", desc: "Uzimanje 25 anatomskih mera za savršen balans." },
      { step: "Krojenje", desc: "Tradicionalna metoda 'full canvas' izrade." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

// --- KOMPONENTE ---

const Navbar = ({ currentPage, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Atelje' },
    { id: 'portfolio', label: 'Kolekcije' },
    { id: 'pricing', label: 'Cenovnik' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-zinc-950/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer group" onClick={() => { navigate('home'); setIsOpen(false); }}>
              <div className="relative flex items-center justify-center w-10 h-10 border border-[#D4AF37] rounded-full mr-3 group-hover:bg-[#D4AF37] transition-colors duration-500">
                <Scissors className={`w-5 h-5 ${scrolled || currentPage !== 'home' ? 'text-[#D4AF37]' : 'text-white'} group-hover:text-zinc-950 transition-colors`} />
              </div>
              <span className="font-serif text-2xl tracking-[0.2em] uppercase text-white">L'Atelier</span>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => navigate(link.id)}
                  className={`relative uppercase text-[10px] tracking-[0.2em] transition-colors duration-300 font-medium ${
                    currentPage === link.id || (currentPage === 'project' && link.id === 'portfolio')
                      ? 'text-[#D4AF37]' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-[#D4AF37] transition-transform duration-500 ${currentPage === link.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </button>
              ))}
            </div>

            {/* Hamburger button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden z-[110] relative text-white focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Fixed positioning logic to prevent it being stuck open */}
      <div 
        className={`fixed inset-0 bg-zinc-950 z-[90] transition-all duration-500 flex flex-col items-center justify-center space-y-10 px-6 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-10'
        }`}
      >
        {navLinks.map((link, idx) => (
          <button
            key={link.id}
            onClick={() => { navigate(link.id); setIsOpen(false); }}
            className={`font-serif text-3xl tracking-widest uppercase transition-all duration-500 delay-[${idx * 100}ms] ${
              currentPage === link.id ? 'text-[#D4AF37]' : 'text-zinc-500'
            }`}
          >
            {link.label}
          </button>
        ))}
        <div className="pt-10 flex space-x-6 border-t border-zinc-900 w-full justify-center">
            <Instagram className="text-zinc-500 w-6 h-6" />
            <Facebook className="text-zinc-500 w-6 h-6" />
        </div>
      </div>
    </>
  );
};

const Hero = ({ navigate }) => (
  <section className="relative h-screen bg-zinc-950 flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30 animate-slow-zoom" alt="Atelje Enterijer" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-20">
      <div className="max-w-3xl reveal-on-scroll">
        <span className="inline-block text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 border-b border-[#D4AF37] pb-2">Premium Tailoring Beograd</span>
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1] transition-all">
          Vaša vizija, <br/> naša <span className="italic text-zinc-400">igla</span>.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-12 font-light leading-relaxed max-w-xl">
          Ekskluzivno šivenje po meri koje spaja beogradsku tradiciju i evropski stil. Stvaramo besprekorne siluete za vaše najvažnije trenutke.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button onClick={() => navigate('contact')} className="px-10 py-5 bg-[#D4AF37] text-zinc-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500 flex items-center justify-center">
            Zakažite termin <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button onClick={() => navigate('portfolio')} className="px-10 py-5 border border-zinc-700 text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:border-[#D4AF37] transition-all duration-500">
            Pogledaj radove
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Home = ({ navigate }) => {
  useScrollReveal();
  return (
    <div className="bg-zinc-50">
      <Hero navigate={navigate} />

      {/* Trust Badges */}
      <div className="bg-white py-12 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex items-center space-x-3 text-zinc-400 reveal-on-scroll">
            <Award className="w-8 h-8 text-[#D4AF37]/50" />
            <span className="uppercase tracking-widest text-[10px] font-semibold">20 god. iskustva</span>
          </div>
          <div className="flex items-center space-x-3 text-zinc-400 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <Star className="w-8 h-8 text-[#D4AF37]/50" />
            <span className="uppercase tracking-widest text-[10px] font-semibold">Ručna izrada</span>
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
              <img src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Proces šivenja" />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-[#D4AF37]/30 hidden lg:block"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-zinc-200 -z-10 translate-x-4 translate-y-4"></div>
          </div>
          <div className="lg:w-1/2 reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h2 className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Umetnost detalja</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-8 leading-tight">
              Gde se tradicija susreće sa <br/> <span className="italic">savremenim dizajnom</span>.
            </h3>
            <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-lg">
              <p>
                L'Atelier je utočište za one koji cene besprekoran kroj. Verujemo da odeća mora da prati pokret tela, a ne samo da ga pokriva. Naš fokus je na anatomskoj preciznosti i taktilnom luksuzu.
              </p>
              <p>
                Od prve skice na papiru do poslednjeg ručno izrađenog rupice za dugme, svaki korak je posvećen vama. Specijalizovani smo za venčanice koje prkose vremenu i odela koja ulivaju samopouzdanje.
              </p>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <button onClick={() => navigate('portfolio')} className="group flex items-center text-zinc-900 font-bold uppercase text-[10px] tracking-widest border-b-2 border-[#D4AF37] pb-2 hover:text-[#D4AF37] transition-all">
                Istražite radove <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Material Guide Section */}
      <section className="py-24 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-serif text-zinc-900 mb-4">Vodič kroz materijale</h2>
            <p className="text-zinc-500 font-light">Osnova svake dobre kreacije je kvalitetna tkanina. Biramo samo najbolje iz Italije i Francuske.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fabricGuide.map((f, i) => (
              <div key={i} className="bg-white p-10 shadow-sm border-t-2 border-transparent hover:border-[#D4AF37] transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <Info className="w-6 h-6 text-[#D4AF37] mb-6" />
                <h4 className="text-xl font-serif mb-3">{f.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-4">{f.use}</p>
                <p className="text-zinc-600 text-sm font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
          <h2 className="text-4xl font-serif mb-8">Ostanite u toku sa modom</h2>
          <p className="text-zinc-400 mb-10 font-light tracking-wide">Prijavite se na naš newsletter za savete o stilu i ekskluzivne termine za konsultacije.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Vaša email adresa" className="flex-grow bg-zinc-900 border border-zinc-800 px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-colors" />
            <button className="bg-[#D4AF37] text-zinc-950 px-8 py-4 uppercase text-[10px] font-bold tracking-widest hover:bg-white transition-all">Prijavi se</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const Pricing = () => {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-zinc-50 pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 reveal-on-scroll">
          <h1 className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Investicija u dugovečnost</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-zinc-900 mb-6 italic">Cenovnik Usluga</h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mb-10"></div>
          <p className="text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            Svaki zahtev je individualan. Cene zavise od kompleksnosti dizajna i dragocenosti materijala. Prikazane cene su osnova za rad.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {[
            { 
              title: "Prepravke", 
              price: "800", 
              features: ["Skraćivanje pantalona", "Zamena rajsferšlusa", "Sužavanje struka", "Hitne prepravke (24h)"]
            },
            { 
              title: "Šivenje po meri", 
              price: "8.000", 
              popular: true,
              features: ["Haljine za svaki dan", "Suknje i košulje", "Poslovna odela", "Besplatne konsultacije"]
            },
            { 
              title: "Haute Couture", 
              price: "50.000", 
              features: ["Venčanice", "Balske haljine", "Ručni vez i perle", "Arhitektonski krojevi"]
            }
          ].map((card, i) => (
            <div key={i} className={`bg-white p-10 border shadow-sm flex flex-col items-center text-center reveal-on-scroll ${card.popular ? 'border-[#D4AF37] scale-105 shadow-xl relative z-10' : 'border-zinc-100'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              {card.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-zinc-950 text-[8px] uppercase font-bold px-4 py-1 tracking-widest">Najtraženije</span>}
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
              <button className="mt-auto w-full py-4 border border-zinc-900 text-zinc-900 text-[10px] uppercase font-bold tracking-widest hover:bg-zinc-900 hover:text-white transition-all">Detaljan upit</button>
            </div>
          ))}
        </div>

        {/* FAQ - SEO Power */}
        <div className="reveal-on-scroll">
          <h3 className="text-3xl font-serif text-zinc-900 mb-12 text-center">Česta Pitanja (FAQ)</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {expandedFaq.map((faq, idx) => (
              <div key={idx} className="border-b border-zinc-200 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="text-lg text-zinc-800 font-medium group-hover:text-[#D4AF37] transition-colors">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="text-[#D4AF37]" /> : <ChevronDown className="text-zinc-400" />}
                </button>
                <div className={`transition-all duration-500 ${openFaq === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-zinc-500 font-light leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ navigate }) => {
  useScrollReveal();
  return (
    <div className="bg-zinc-50 pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 reveal-on-scroll">
          <h1 className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Arhiva radova</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-zinc-900">Naše Kolekcije</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="group cursor-pointer reveal-on-scroll" 
              onClick={() => navigate('project', project.id)}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-zinc-200 mb-6 shadow-md relative">
                <img src={project.coverImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={project.title} />
                <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white uppercase text-[10px] tracking-widest font-bold border border-white px-6 py-3">Pogledaj detalje</span>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-2">{project.category}</p>
              <h3 className="text-2xl font-serif text-zinc-900 mb-2">{project.title}</h3>
              <p className="text-zinc-500 font-light text-sm line-clamp-2">{project.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  useScrollReveal();
  return (
    <div className="bg-zinc-50 pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="reveal-on-scroll">
          <h1 className="text-sm text-[#D4AF37] uppercase tracking-[0.4em] font-bold mb-6">Rezervišite termin</h1>
          <h2 className="text-5xl font-serif text-zinc-900 mb-8 leading-tight italic">Počnimo razgovor <br/>o vašem stilu.</h2>
          <p className="text-zinc-600 font-light text-lg mb-12 leading-relaxed">
            Nalazimo se u istorijskom jezgru Beograda. Naš atelje je mesto gde uz kafu i skice oživljavamo vaše snove. Konsultacije su isključivo uz prethodno zakazivanje.
          </p>
          <div className="space-y-8">
            <div className="flex items-start">
                <MapPin className="text-[#D4AF37] w-6 h-6 mr-4 mt-1" />
                <div>
                    <h4 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-1">Lokacija</h4>
                    <p className="text-zinc-500 font-light">Knez Mihailova 10, Stari Grad<br/>11000 Beograd, Srbija</p>
                </div>
            </div>
            <div className="flex items-start">
                <Phone className="text-[#D4AF37] w-6 h-6 mr-4 mt-1" />
                <div>
                    <h4 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-1">Telefon</h4>
                    <p className="text-zinc-500 font-light">+381 11 345 6789<br/>+381 60 123 4567 (Viber/WA)</p>
                </div>
            </div>
            <div className="flex items-start">
                <Clock className="text-[#D4AF37] w-6 h-6 mr-4 mt-1" />
                <div>
                    <h4 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-1">Radno Vreme</h4>
                    <p className="text-zinc-500 font-light">Pon - Pet: 10:00 - 19:00<br/>Subota: 10:00 - 15:00</p>
                </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-10 md:p-16 shadow-2xl reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Vaš upit je uspešno poslat!'); }}>
            <div className="relative group">
              <input required type="text" className="peer w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-[#D4AF37] transition-all text-zinc-900 placeholder-transparent" placeholder="Ime" />
              <label className="absolute left-0 -top-3.5 text-zinc-400 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#D4AF37] peer-focus:text-[10px]">Vaše Ime</label>
            </div>
            <div className="relative group">
              <input required type="email" className="peer w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-[#D4AF37] transition-all text-zinc-900 placeholder-transparent" placeholder="Email" />
              <label className="absolute left-0 -top-3.5 text-zinc-400 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#D4AF37] peer-focus:text-[10px]">Email Adresa</label>
            </div>
            <div className="relative group">
              <textarea rows="4" className="peer w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-[#D4AF37] transition-all text-zinc-900 placeholder-transparent" placeholder="Poruka"></textarea>
              <label className="absolute left-0 -top-3.5 text-zinc-400 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#D4AF37] peer-focus:text-[10px]">Opišite Vašu ideju</label>
            </div>
            <button className="w-full bg-zinc-950 text-white py-5 uppercase text-[10px] font-bold tracking-widest hover:bg-[#D4AF37] hover:text-zinc-950 transition-all duration-500">Pošalji poruku</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ navigate }) => (
  <footer className="bg-zinc-950 text-zinc-500 py-20 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
      <div className="md:col-span-1">
        <div className="flex items-center text-white mb-8">
            <Scissors className="text-[#D4AF37] w-6 h-6 mr-3" />
            <span className="font-serif text-xl tracking-widest uppercase">L'Atelier</span>
        </div>
        <p className="text-sm font-light leading-relaxed">
          Premium krojački atelje u Beogradu. Posvećeni smo očuvanju zanata kroz moderan pristup luksuzu i eleganciji.
        </p>
      </div>
      <div>
        <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Navigacija</h4>
        <ul className="space-y-4 text-xs tracking-widest uppercase">
          <li><button onClick={() => navigate('home')} className="hover:text-[#D4AF37] transition-colors">Početna</button></li>
          <li><button onClick={() => navigate('portfolio')} className="hover:text-[#D4AF37] transition-colors">Kolekcije</button></li>
          <li><button onClick={() => navigate('pricing')} className="hover:text-[#D4AF37] transition-colors">Cenovnik</button></li>
          <li><button onClick={() => navigate('contact')} className="hover:text-[#D4AF37] transition-colors">Kontakt</button></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Usluge</h4>
        <ul className="space-y-4 text-xs tracking-widest uppercase">
          <li>Šivenje venčanica</li>
          <li>Ženska odela</li>
          <li>Svečane haljine</li>
          <li>Premium prepravke</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Pratite nas</h4>
        <div className="flex space-x-6">
          <Instagram className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
          <Facebook className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
          <Linkedin className="hover:text-[#D4AF37] cursor-pointer transition-colors" />
        </div>
        <p className="mt-8 text-xs font-light">Radnim danima: 10h - 19h<br/>Vikendom na zakazivanje.</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-10 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center text-zinc-600">
      <p>&copy; {new Date().getFullYear()} L'Atelier Beograd. Sva prava zadržana.</p>
      <p className="mt-4 md:mt-0">Premium Tailoring Experience</p>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const navigate = (page, id = null) => {
    setCurrentPage(page);
    if (id) setSelectedProjectId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} />;
      case 'pricing': return <Pricing />;
      case 'portfolio': return <Portfolio navigate={navigate} />;
      case 'contact': return <Contact />;
      case 'project': return (
        <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            <button onClick={() => navigate('portfolio')} className="flex items-center text-zinc-400 hover:text-[#D4AF37] mb-12 uppercase text-[10px] tracking-widest font-bold">
              <ArrowLeft className="w-4 h-4 mr-2" /> Nazad na galeriju
            </button>
            {portfolioProjects.filter(p => p.id === selectedProjectId).map(project => (
              <div key={project.id}>
                <h1 className="text-5xl font-serif text-zinc-900 mb-6 italic">{project.title}</h1>
                <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-12">{project.category}</p>
                <img src={project.coverImg} className="w-full aspect-video object-cover mb-16 shadow-2xl" alt={project.title} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                  <div>
                    <h3 className="text-xl font-serif mb-6 border-b border-zinc-200 pb-2">O projektu</h3>
                    <p className="text-zinc-600 font-light leading-relaxed">{project.shortDesc}</p>
                    <div className="mt-8 space-y-4">
                        <div className="flex justify-between border-b border-zinc-100 py-2"><span className="text-[10px] uppercase font-bold">Materijal</span> <span className="font-light">{project.fabric}</span></div>
                        <div className="flex justify-between border-b border-zinc-100 py-2"><span className="text-[10px] uppercase font-bold">Vreme izrade</span> <span className="font-light">{project.duration}</span></div>
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
              </div>
            ))}
          </div>
        </div>
      );
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-[#D4AF37] selection:text-zinc-950">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap');

        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Montserrat', sans-serif;
        }

        body { font-family: var(--font-sans); }
        .font-serif { font-family: var(--font-serif); }

        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slowZoom 20s infinite alternate ease-in-out;
        }

        /* Nav menu fix for mobile visibility */
        .mobile-menu-active {
            overflow: hidden;
        }
      `}} />
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="transition-opacity duration-500">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

```