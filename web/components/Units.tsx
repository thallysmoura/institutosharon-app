'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, Copy, MapPin, X } from 'lucide-react';
import { site, units } from '@/lib/data';
import Reveal from './Reveal';

type Unit = (typeof units)[number];

const extra: Record<string, { img: string; q: string; dir: string }> = {
  Manaus: { img: 'manaus', q: 'Av. Torquato Tapajós, 19, Flores, Manaus - AM, 69058-830', dir: site.mapsDirections },
  Fortaleza: { img: 'fortaleza', q: 'Av. Antônio Sales, 2371, Fortaleza - CE, 60135-203', dir: '' },
  'Porto Velho': { img: 'porto-velho', q: 'Porto Velho, RO', dir: 'https://www.google.com/maps/search/?api=1&query=Porto+Velho+RO' },
  'São Paulo': { img: 'sao-paulo', q: 'São Paulo, SP', dir: 'https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Paulo+SP' },
};
const order = ['Fortaleza', 'São Paulo', 'Porto Velho', 'Manaus'];
const hasAddr = (u: Unit) => !!u.line && !u.line.startsWith('Turmas');
const list = order.map((c) => units.find((u) => u.city === c)!);


function Pin({ id }: { id: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 32" className="h-[26px] w-5 drop-shadow-[0_3px_4px_rgba(0,0,0,.5)] sm:h-[30px] sm:w-[22px]">
      <defs>
        <linearGradient id={`pin-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6d98a" />
          <stop offset=".55" stopColor="#e0aa3e" />
          <stop offset="1" stopColor="#b9831f" />
        </linearGradient>
      </defs>
      <path d="M12 0C5.4 0 0 5.3 0 11.8 0 20.3 12 32 12 32s12-11.7 12-20.2C24 5.3 18.6 0 12 0Z" fill={`url(#pin-${id})`} />
      <circle cx="12" cy="11.8" r="4.4" fill="#fff3cf" fillOpacity=".92" />
    </svg>
  );
}

export default function Units() {
  const [sel, setSel] = useState<Unit | null>(null);
  const [copied, setCopied] = useState(false);
  const copy = async (t: string) => {
    try { await navigator.clipboard.writeText(t); } catch { const a = document.createElement('textarea'); a.value = t; document.body.appendChild(a); a.select(); document.execCommand('copy'); a.remove(); }
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  };

  useEffect(() => {
    if (!sel) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [sel]);

  const x = sel ? extra[sel.city] : null;
  const dir = x ? x.dir || sel?.maps || '' : '';

  return (
    <section id="unidades" className="relative overflow-hidden bg-gradient-to-r from-[#3a2b12] via-[#2c2110] to-[#3a2b12] text-white">
      <svg aria-hidden viewBox="0 0 1440 28" preserveAspectRatio="none" className="absolute -top-px left-0 h-3 w-full fill-ivory sm:h-5"><path d="M0 0H1440V10C1200 26 960 22 720 12C480 2 240 0 0 14Z" /></svg>
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_90%_at_88%_15%,rgba(224,170,62,.07),transparent_70%),radial-gradient(40%_60%_at_5%_100%,rgba(224,170,62,.04),transparent_70%)]" />
      <Image src="/img/emblem.png" alt="" width={300} height={450} aria-hidden className="pointer-events-none absolute -right-16 top-1/2 h-[110%] w-auto -translate-y-1/2 opacity-[0.035] sm:-right-10" />
      <svg aria-hidden viewBox="0 0 400 120" preserveAspectRatio="none" fill="none" className="pointer-events-none absolute bottom-0 left-0 h-12 w-full text-[#e0aa3e] sm:h-16">
        <path d="M0 70C70 40 130 40 200 66S330 100 400 56" stroke="currentColor" strokeWidth="1" opacity=".1" vectorEffect="non-scaling-stroke" />
        <path d="M0 86C80 58 140 58 210 82S335 112 400 74" stroke="currentColor" strokeWidth="1" opacity=".06" vectorEffect="non-scaling-stroke" />
        <path d="M0 102C90 78 150 78 220 98S340 122 400 92" stroke="currentColor" strokeWidth="1" opacity=".035" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="container-x relative z-10 grid items-center gap-8 py-12 sm:py-14 lg:grid-cols-[.62fr_1.38fr] lg:gap-12">
        <Reveal>
          <p className="eyebrow !text-[#e0aa3e]">Nossas unidades</p>
          <h2 className="mt-3 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.05]">Mais perto de você.</h2>
          <p className="mt-4 text-[1.02rem] text-white/75">Conheça nossas unidades.</p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {list.map((u) => (
              <li key={u.city}>
                {hasAddr(u) ? (
                <button type="button" onClick={() => setSel(u)} aria-label={`Ver informações da unidade ${u.city}`} className="group relative block aspect-[5/4] w-full overflow-hidden rounded-2xl border border-gold-500/25 bg-ink">
                  <Image src={`/img/city-${extra[u.city].img}.webp`} alt="" fill sizes="(min-width:1024px) 220px, 46vw" quality={85} className="object-cover transition duration-700 group-hover:scale-[1.05]" />
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-2 flex flex-col items-center gap-1"><Pin id={extra[u.city].img} /><span className="text-center text-[0.95rem] font-bold text-white [text-shadow:0_1px_8px_rgba(0,0,0,.65)] sm:text-[1.05rem]">{u.city}</span></span>
                </button>
                ) : (
                <div className="relative block aspect-[5/4] w-full overflow-hidden rounded-2xl border border-gold-500/25 bg-ink">
                  <Image src={`/img/city-${extra[u.city].img}.webp`} alt="" fill sizes="(min-width:1024px) 220px, 46vw" quality={85} className="object-cover transition duration-700" />
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-2 flex flex-col items-center gap-1"><Pin id={extra[u.city].img} /><span className="text-center text-[0.95rem] font-bold text-white [text-shadow:0_1px_8px_rgba(0,0,0,.65)] sm:text-[1.05rem]">{u.city}</span></span>
                </div>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {sel && x && (
        <div className="fixed inset-0 z-[100] flex items-stretch justify-center bg-ink/60 p-0 sm:items-center sm:p-6 sm:backdrop-blur-sm" onClick={() => setSel(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="unit-t" onClick={(e) => e.stopPropagation()} className="relative h-[100dvh] w-full overflow-y-auto overflow-x-hidden bg-ivory text-ink sm:h-auto sm:max-h-[92dvh] sm:max-w-[500px] sm:rounded-[24px] sm:shadow-soft">
            <button type="button" onClick={() => setSel(null)} aria-label="Fechar" className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-sand text-ink hover:bg-line"><X size={18} /></button>
            <Image src="/img/emblem.png" alt="" width={200} height={300} aria-hidden className="pointer-events-none absolute -right-4 top-10 h-40 w-auto opacity-[0.09]" />
            <div className="relative p-6 pt-16 sm:p-9">
              <div className="flex items-center gap-3">
                <p className="eyebrow">Instituto Sharon</p>
                {sel.tag && <span className="rounded-full bg-gold-500 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white">{sel.tag}</span>}
              </div>
              <h3 id="unit-t" className="mt-2 font-display text-[2.4rem] font-semibold leading-[1.05] sm:text-[2.7rem]">Unidade <span className="italic text-gold-600">{sel.city}</span></h3>
              <div className="mt-3 flex items-start gap-2 text-[0.98rem] text-ink/70"><MapPin size={18} className="mt-1 shrink-0 text-gold-600" aria-hidden /><p className="flex-1">{sel.line}</p>
                <button type="button" onClick={() => copy(sel.line)} aria-label="Copiar endereço" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold-500/60 text-gold-700 transition hover:bg-sand">{copied ? <Check size={16} /> : <Copy size={16} />}</button></div>
                {copied && <p role="status" className="mt-1 text-right text-xs font-semibold text-gold-700">Endereço copiado</p>}
              <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-white">
                <iframe title={`Mapa — ${sel.city}`} loading="lazy" referrerPolicy="no-referrer" className="h-[240px] w-full sm:h-[280px]" src={`https://www.google.com/maps?q=${encodeURIComponent(x.q)}&output=embed&hl=pt-BR`} />
              </div>
                            <div className="mt-6 grid gap-3">
                {dir && (
                  <a href={dir} target="_blank" rel="noopener noreferrer" className="btn btn-gold !min-h-[48px] !text-[0.85rem]">Como chegar <ArrowUpRight size={16} /></a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
