'use client';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { shots, site } from '@/lib/data';
import Reveal from './Reveal';

export default function Experience() {
  const [i, setI] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const last = useRef<HTMLElement | null>(null);
  const go = useCallback((d: number) => setI((v) => (v === null ? v : (v + d + shots.length) % shots.length)), []);

  useEffect(() => {
    if (i === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setI(null);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', k);
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', k); last.current?.focus(); };
  }, [i === null, go]); // eslint-disable-line react-hooks/exhaustive-deps

  const s = i === null ? null : shots[i];
  return (
    <section id="experiencia" className="section-y bg-ink text-white">
      <div className="container-x">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <p className="eyebrow !text-gold-300 before:!bg-gold-300">Experiência Sharon</p>
            <h2 className="mt-6 text-[clamp(2.3rem,4.6vw,4rem)]">Imersões, meetings e residências que aproximam quem ensina de quem aprende.</h2>
          </div>
          <p className="text-[1.05rem] text-white/65">Alguns momentos da nossa comunidade. Toque em uma imagem para ampliar.</p>
        </Reveal>

        <ul className="mt-16 grid auto-rows-[minmax(0,auto)] grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {shots.map((x, n) => (
            <li key={x.src} className={`${n === 0 ? 'col-span-2' : ''}`}>
              <Reveal delay={(n % 4) * 70}>
                <button type="button" onClick={(e) => { last.current = e.currentTarget; setI(n); }} aria-label={`Ampliar: ${x.caption}`} className="group relative block w-full overflow-hidden rounded-[20px] border border-white/10 text-left">
                  <Image src={`/img/${x.src}.webp`} alt={x.alt} width={x.w} height={x.h} sizes="(min-width:1024px) 300px, 46vw" loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${n === 0 ? 'aspect-[16/9] sm:aspect-[2/1]' : 'aspect-[9/16]'}`} />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-[0.78rem] font-medium tracking-wide opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">{x.caption}</span>
                </button>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={280}>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="group flex aspect-[9/16] w-full flex-col items-start justify-between rounded-[20px] border border-gold-300/50 p-6 transition hover:border-gold-300 hover:bg-white/5">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-300">Reels e bastidores</span>
                <span className="font-display text-[1.7rem] leading-tight">Acompanhe o dia a dia no Instagram.</span>
                <span className="inline-flex items-center gap-2 border-b border-gold-300 pb-1 text-[0.8rem] font-semibold tracking-wide">{site.instagramHandle} <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </a>
            </Reveal>
          </li>
        </ul>

      </div>

      {s && i !== null && (
        <div role="dialog" aria-modal="true" aria-label={s.caption} className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4" onClick={() => setI(null)}>
          <button ref={closeRef} type="button" onClick={() => setI(null)} aria-label="Fechar" className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-black/40 text-white"><X /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Anterior" className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/40"><ChevronLeft /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Próxima" className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/40"><ChevronRight /></button>
          <figure className="max-h-full max-w-[min(92vw,520px)]" onClick={(e) => e.stopPropagation()}>
            <Image src={`/img/${s.src}.webp`} alt={s.alt} width={s.w} height={s.h} sizes="520px" className="max-h-[80svh] w-auto rounded-2xl object-contain" />
            <figcaption className="mt-4 text-center text-sm text-white/80">{s.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
