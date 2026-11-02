import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/data';
import ImageGuard from '@/components/ImageGuard';
import LeadModal from '@/components/LeadModal';
import BackToTop from '@/components/BackToTop';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], style: ['normal', 'italic'], variable: '--font-display', display: 'swap' });
const sans = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans', display: 'swap' });

const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3100';
const description =
  'Cursos, imersões e especializações em harmonização orofacial, ortodontia, implantodontia e odontologia hospitalar em Manaus, Fortaleza, Porto Velho e São Paulo. Conheça o Instituto Sharon — Educação e Saúde.';

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: 'Instituto Sharon — Educação e Saúde | Cursos na área da saúde em Manaus', template: '%s | Instituto Sharon' },
  description,
  keywords: ['Instituto Sharon Manaus', 'Instituto Sharon Educação e Saúde', 'cursos na área da saúde em Manaus', 'formação profissional em saúde', 'especializações na área da saúde', 'capacitação profissional em Manaus', 'harmonização orofacial Manaus'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'pt_BR', siteName: site.name, title: 'Instituto Sharon — Educação e Saúde', description, images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Instituto Sharon — Educação e Saúde' }] },
  twitter: { card: 'summary_large_image', title: 'Instituto Sharon — Educação e Saúde', description, images: ['/og.jpg'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#fbf8f1', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: site.name,
  legalName: site.legal,
  description,
  foundingDate: String(site.since),
  email: site.email,
  telephone: site.phones[0].tel,
  logo: `${base}/img/logo-h.png`,
  image: `${base}/og.jpg`,
  sameAs: [site.instagram],
  address: { '@type': 'PostalAddress', streetAddress: 'Av. Torquato Tapajós, 19, Letra B — Flores', addressLocality: 'Manaus', addressRegion: 'AM', postalCode: '69058-830', addressCountry: 'BR' },
  areaServed: ['Manaus', 'Fortaleza', 'Porto Velho', 'São Paulo'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Ir para o conteúdo</a>
        {children}
        <ImageGuard />
        <LeadModal />
        <BackToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
