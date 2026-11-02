import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';
import { site } from '@/lib/data';

const links = [
  ['Cursos', '#cursos'],
  ['Sobre', '#instituto'],
  ['Unidades', '#unidades'],
  ['Contato', site.whatsapp],
];
const FB = 'https://www.facebook.com/profile.php?id=61552648051132';
const WA_ICON = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';

export default function Footer() {
  const icon = 'grid h-10 w-10 place-items-center rounded-full text-white/90 transition hover:text-[#e0aa3e]';
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#1a1309] via-[#241a0c] to-[#1a1309] text-white/80">
      <Image src="/img/emblem.png" alt="" width={300} height={450} aria-hidden className="pointer-events-none absolute -right-8 top-1/2 h-[130%] w-auto -translate-y-1/2 opacity-[0.07]" />
      <div className="container-x relative z-10 py-8 sm:py-9">
        <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto_auto] lg:gap-10">
          <a href="#top" aria-label="Instituto Sharon — início" className="justify-self-start">
            <Image src="/img/logo-h.png" alt="Instituto Sharon — Educação e Saúde" width={1127} height={215} loading="lazy" className="h-10 w-auto sm:h-12" />
          </a>
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[0.92rem] lg:justify-center lg:gap-x-12">
              {links.map(([l, h]) => <li key={h}><a href={h} className="transition hover:text-[#e0aa3e]">{l}</a></li>)}
            </ul>
          </nav>
          <span aria-hidden className="hidden h-12 w-px bg-[#e0aa3e]/50 lg:block" />
          <div className="-ml-2 flex items-center gap-1 lg:ml-0">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={icon}><Instagram size={22} /></a>
            <a href={FB} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={icon}><Facebook size={22} /></a>
            <a href={site.whatsapp} aria-label="WhatsApp" className={icon}><svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current" aria-hidden><path d={WA_ICON} /></svg></a>
          </div>
        </div>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#e0aa3e]/60 to-transparent" />
        <div className="mt-5 flex flex-col gap-2 text-[0.8rem] text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Instituto Sharon. Todos os direitos reservados. <span className="whitespace-nowrap text-white/45">CNPJ {site.cnpj}</span></p>
          <p>Fortaleza • São Paulo • Porto Velho • Manaus</p>
        </div>
      </div>
    </footer>
  );
}
