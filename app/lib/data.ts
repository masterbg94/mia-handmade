export const fabricGuide = [
  {
    name: 'Prirodna Svila',
    use: 'Venchanice i svecane haljine',
    desc: 'Najluksuzniji materijal koji dise. Koristimo Mulberry svilu visokog kvaliteta za neprevazidjen pad.',
  },
  {
    name: 'Italijanski Stof',
    use: 'Odela i kaputi',
    desc: 'Vuna Super 120s i 150s od renomiranih proizvodjaca. Idealno za poslovnu eleganciju.',
  },
  {
    name: 'Francuska Cipka',
    use: 'Detalji i gornji delovi',
    desc: 'Rucno radjena cipka sa vezom i perlama koja svakoj kreaciji daje unikatan pecat.',
  },
];

export const expandedFaq = [
  {
    q: 'Da li radite prepravke odece koja nije kupljena kod vas?',
    a: 'Naravno. Nas atelje nudi usluge premium prepravki za sve komade odece, od skracivanja farmerki do kompleksnog suzavanja sakoa i kaputa.',
  },
  {
    q: 'Koja je cena konsultacije?',
    a: 'Prva konsultacija u trajanju od 30 minuta je potpuno besplatna. Tokom nje analiziramo vasu ideju, uzimamo preliminarne mere i dajemo procenu troskova.',
  },
  {
    q: 'Koji su nacini placanja?',
    a: 'Placanje je moguce gotovinom, platnim karticama ili preko racuna firme. Za sivenje po meri praktikujemo avans od 50% pre pocetka radova.',
  },
  {
    q: 'Kako da odrzavam odecu sivenu po meri?',
    a: 'Preporucujemo iskljucivo hemijsko ciscenje kod proverenih servisa. Uz svaki komad dobijate detaljno uputstvo o odrzavanju specificnog materijala.',
  },
];

export const portfolioProjects = [
  {
    id: 'smaragd-svila',
    category: 'Svecane haljine',
    title: 'Smaragdna Senka',
    shortDesc: 'Izrada elegantne vecernje haljine od prirodne svile sa dubokim licem.',
    coverImg: 'https://images.unsplash.com/photo-1566160980482-fa825c35b8bd?auto=format&fit=crop&q=80&w=1200',
    client: 'Ana M.',
    duration: '3 nedelje',
    fabric: '100% Prirodna svila',
    process: [
      { step: 'Konsultacije', desc: 'Odabir nijanse smaragda i definisanje kroja koji laska figuri.' },
      { step: 'Bela Proba', desc: 'Fiting na pamucnom modelu radi provere udobnosti pri kretanju.' },
      { step: 'Realizacija', desc: 'Precizno secenje svile i rucno opasivanje rubova.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1572804013309-84a8fbb233bd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'vencanica-satine',
    category: 'Vencanice',
    title: 'Biser i Saten',
    shortDesc: 'Moderna minimalisticka vencanica od teskog italijanskog satena.',
    coverImg: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&q=80&w=1200',
    client: 'Jelena K.',
    duration: '2 meseca',
    fabric: 'Duchess Saten',
    process: [
      { step: 'Dizajn', desc: 'Arhitektonski kroj sa fokusom na ciste linije bez suvisnih ukrasa.' },
      { step: 'Konstrukcija', desc: 'Izrada unutrasnjeg korseta sa 12 celicnih ojacanja.' },
      { step: 'Zavrsnica', desc: 'Rucno apliciranje bisera na tanke bretele.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1546804784-896d8f1bfcb5?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: 'power-suit',
    category: 'Odela',
    title: 'Ponocno Odelo',
    shortDesc: 'Bespoke zensko odelo po meri, sako sa ostrim naramenicama.',
    coverImg: 'https://images.unsplash.com/photo-1594938298596-eb5fd3f6b492?auto=format&fit=crop&q=80&w=1200',
    client: 'Marija S.',
    duration: '4 nedelje',
    fabric: 'Super 120s Vuna',
    process: [
      { step: 'Mere', desc: 'Uzimanje 25 anatomskih mera za savrsen balans.' },
      { step: 'Krojenje', desc: 'Tradicionalna metoda full canvas izrade.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?auto=format&fit=crop&q=80&w=800',
    ],
  },
];

export const pricingPlans = [
  {
    title: 'Prepravke',
    price: '800',
    features: ['Skracivanje pantalona', 'Zamena rajsferlusa', 'Suzavanje struka', 'Hitne prepravke 24h'],
    popular: false,
  },
  {
    title: 'Sivenje po meri',
    price: '8.000',
    features: ['Haljine za svaki dan', 'Suknje i koulje', 'Poslovna odela', 'Besplatne konsultacije'],
    popular: true,
  },
  {
    title: 'Haute Couture',
    price: '50.000',
    features: ['Vencanice', 'Balske haljine', 'Rucni vez i perle', 'Arhitektonski krojevi'],
    popular: false,
  },
];
