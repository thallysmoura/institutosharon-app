'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { courses, type Course } from '@/lib/data';
import Reveal from './Reveal';

const featured: Record<string, string> = {
  'mini-residencia': 'Mini Residência em',
  ortodontia: 'Especialização em',
  implantodontia: 'Capacitação em',
  'cirurgia-oral': 'Capacitação em',
};
const mainName: Record<string, string> = {
  'mini-residencia': 'Harmonização Facial',
  ortodontia: 'Ortodontia',
  implantodontia: 'Implantodontia e Prótese sobre Implante',
  'cirurgia-oral': 'Cirurgia Oral',
};
const top = Object.keys(featured).map((s) => courses.find((c) => c.slug === s)!);
const rest = courses.filter((c) => !featured[c.slug]);

function Card({ c, i, cls }: { c: Course; i: number; cls?: string }) {
  const pre = featured[c.slug] ?? c.format;
  const main = mainName[c.slug] ?? c.name;
  return (
    <li className={cls}>
      <Reveal delay={(i % 4) * 70}>
        <div role="img" aria-label={c.name} className="relative block aspect-[3/4] overflow-hidden rounded-[18px] bg-ink shadow-soft sm:rounded-[22px]">
          <Image src={`/img/${c.img}.webp`} alt="" fill sizes="(min-width:1024px) 300px, 50vw" loading="lazy" className="object-cover object-top" />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent to-60%" />
          <span className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
            <span className="block text-[0.66rem] font-medium leading-tight text-white/80 sm:text-[0.8rem]">{pre}</span>
            <span className="mt-0.5 block font-display text-[1.05rem] font-semibold leading-[1.1] text-white sm:text-[1.45rem]">{main}</span>
            <span aria-hidden className="mt-2 block h-[2px] w-8 bg-gold-500 sm:mt-3 sm:w-10" />
          </span>
        </div>
      </Reveal>
    </li>
  );
}

export default function Courses() {
  const [all, setAll] = useState(false);
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ prev: false, next: true });
  const sync = () => { const el = track.current; if (el) setEdge({ prev: el.scrollLeft > 8, next: el.scrollLeft < el.scrollWidth - el.clientWidth - 8 }); };
  useEffect(() => { sync(); window.addEventListener('resize', sync); return () => window.removeEventListener('resize', sync); }, []);
  const go = (d: number) => { const el = track.current; if (el) el.scrollBy({ left: d * el.clientWidth * 0.72, behavior: 'smooth' }); };
  return (
    <section id="cursos" className="section-y bg-[#F6F2E7]">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Pós-graduações</p>
          <h2 className="mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)]">Amplie seus horizontes</h2>
        </Reveal>

        <div className="relative mt-6 sm:hidden">
          <ul ref={track} onScroll={sync} className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[...top, ...rest].map((c, i) => <Card key={c.slug} c={c} i={0} cls="w-[72%] shrink-0 snap-start" />)}
          </ul>
          <button type="button" onClick={() => go(-1)} aria-label="Anterior" tabIndex={edge.prev ? 0 : -1} className={`absolute -left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-gold-500/60 bg-ivory/40 text-gold-700 backdrop-blur-sm transition duration-300 ${edge.prev ? 'opacity-100' : 'pointer-events-none opacity-0'}`}><ChevronLeft size={20} /></button>
          <button type="button" onClick={() => go(1)} aria-label="Próximo" tabIndex={edge.next ? 0 : -1} className={`absolute -right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-gold-500/60 bg-ivory/40 text-gold-700 backdrop-blur-sm transition duration-300 ${edge.next ? 'opacity-100' : 'pointer-events-none opacity-0'}`}><ChevronRight size={20} /></button>
        </div>

        <ul className="mt-10 hidden grid-cols-2 gap-3 sm:grid sm:gap-5 lg:grid-cols-4">
          {top.map((c, i) => <Card key={c.slug} c={c} i={i} />)}
        </ul>

        <div id="mais-formacoes" className={all ? 'hidden sm:block' : 'hidden'}>
          <ul className="mt-3 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-5 lg:grid-cols-4">
            {rest.map((c, i) => <Card key={c.slug} c={c} i={i} />)}
          </ul>
        </div>

        <div className="mt-8 hidden flex-col items-center gap-3 text-center sm:flex">
          <button type="button" onClick={() => setAll((v) => !v)} aria-expanded={all} aria-controls="mais-formacoes" className="btn btn-ghost !border-gold-500 !text-[0.85rem]">
            {all ? 'Mostrar menos' : 'Ver todas as formações'} <ArrowRight size={16} className={`transition ${all ? '-rotate-90' : 'rotate-90'}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
