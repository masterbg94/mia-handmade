import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "L'Atelier - Premium Krojacki Atelje Beograd",
  description:
    'Ekskluzivno sivenje po meri u Beogradu. Venanice, odela i svecane haljine. Spajamo beogradsku tradiciju i evropski stil.',
  keywords: 'atelje, sivenje po meri, venanice, Beograd, krojac, odela, haljine',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-zinc-50 font-sans">
        <Navbar />
        <main className="transition-opacity duration-500">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
