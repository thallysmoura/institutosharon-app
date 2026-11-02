import Image from 'next/image';
import { nav, site } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0a06] py-14 text-white/70">
      <div className="container-x grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image src="/img/logo-h.png" alt="Instituto Sharon — Educação e Saúde" width={1127} height={215} loading="lazy" className="h-11 w-auto" />
          <p className="mt-5 max-w-sm text-sm">Cursos, imersões e especializações para profissionais da saúde. Manaus · Fortaleza · Porto Velho · São Paulo.</p>
        </div>
        <nav aria-label="Rodapé">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-300">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">{nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-gold-300">{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-300">Canais oficiais</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">WhatsApp</a></li>
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">Instagram {site.instagramHandle}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-gold-300">{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
        © {new Date().getFullYear()} {site.legal} · CNPJ {site.cnpj}
      </div>
    </footer>
  );
}
