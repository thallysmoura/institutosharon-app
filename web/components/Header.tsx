'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav, site } from '@/lib/data';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${solid || open ? 'border-b border-line bg-ivory/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container-x flex h-[76px] items-center justify-between gap-4 sm:h-[88px] xl:gap-6">
        <a href="#top" aria-label="Instituto Sharon — início" className="shrink-0">
          <Image src="/img/logo-h.png" alt="Instituto Sharon — Educação e Saúde" width={1127} height={215} priority className="h-9 w-auto sm:h-11" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-5 xl:gap-9 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[0.75rem] font-medium uppercase tracking-[0.12em] xl:text-[0.82rem] xl:tracking-[0.16em] text-ink/75 transition hover:text-gold-600">
              {n.label}
            </a>
          ))}
        </nav>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-[46px] hidden shrink-0 !px-5 !text-[0.8rem] lg:inline-flex xl:!px-6">
          <span className="xl:hidden">Fale conosco</span><span className="hidden xl:inline">Fale com nossa equipe</span>
        </a>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-m" aria-label={open ? 'Fechar menu' : 'Abrir menu'} className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 lg:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav id="menu-m" aria-label="Menu móvel" className="container-x flex flex-col gap-1 pb-8 pt-2 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-line py-4 font-display text-2xl">
              {n.label}
            </a>
          ))}
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-6">Fale com nossa equipe</a>
        </nav>
      )}
    </header>
  );
}
