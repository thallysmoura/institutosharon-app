'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { courses, site, waCourse } from '@/lib/data';
import Reveal from './Reveal';

const filters = ['Todos', 'Harmonização', 'Odontologia'] as const;
const areas = ['Harmonização', 'Odontologia'] as const;

export default function Courses() {
  const [f, setF] = useState<(typeof filters)[number]>('Todos');
  const list = courses.filter((c) => f === 'Todos' || c.area === f);
  const count = (x: (typeof filters)[number]) => (x === 'Todos' ? courses.length : courses.filter((c) => c.area === x).length);

  return (
    <section id="cursos" className="section-y">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Cursos e especializações</p>
            <h2 className="mt-6 max-w-[16ch] text-[clamp(2.3rem,4.6vw,4rem)]">Formações para cada etapa da carreira.</h2>
            <p className="mt-4 max-w-[52ch] text-ink/65">{courses.length} formações em harmonização e odontologia, de cursos e imersões a especializações, com prática no centro. E tem muito mais: acompanhe novas turmas e conteúdos nas nossas redes sociais, <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold-700 underline decoration-gold-500/50 underline-offset-4">{site.instagramHandle}</a>.</p>
          </div>
          <div role="group" aria-label="Filtrar por área" className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
            {filters.map((x) => (
              <button key={x} type="button" aria-pressed={f === x} onClick={() => setF(x)} className={`flex flex-col items-center justify-center gap-1 rounded-2xl border px-1 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.06em] transition sm:flex-row sm:gap-2 sm:rounded-full sm:px-5 sm:text-[0.8rem] sm:tracking-[0.14em] ${f === x ? 'border-ink bg-ink text-white' : 'border-ink/20 text-ink/70 hover:border-gold-500 hover:text-gold-700'}`}>
                {x}<span className={`rounded-full px-2 py-0.5 text-[0.65rem] ${f === x ? 'bg-white/20' : 'bg-sand'}`}>{count(x)}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <nav aria-label="Visão geral das formações" className="mt-10 grid gap-x-12 gap-y-8 border-t border-line pt-8 sm:grid-cols-2">
            {areas.filter((a) => list.some((c) => c.area === a)).map((a) => (
              <div key={a}>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-600">{a} · {list.filter((c) => c.area === a).length}</p>
                <ul className="mt-3 divide-y divide-line">
                  {list.filter((c) => c.area === a).map((c) => (
                    <li key={c.slug}>
                      <a href={`#curso-${c.slug}`} className="flex items-baseline justify-between gap-4 py-3 transition hover:text-gold-700">
                        <span className="font-display text-[1.15rem] leading-tight">{c.name}</span>
                        <span className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/50">{c.format}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </Reveal>

        <ul className="-mx-6 mt-12 grid gap-12 sm:mx-0 sm:mt-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-3">
          {list.map((c, i) => (
            <li key={c.slug} id={`curso-${c.slug}`} className="scroll-mt-24">
              <Reveal delay={(i % 3) * 80}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-sand sm:rounded-[22px] sm:shadow-soft">
                    <Image src={`/img/${c.img}.webp`} alt={`Arte de divulgação — ${c.name}`} fill sizes="(min-width:1024px) 380px, (min-width:640px) 45vw, 100vw" loading="lazy" className="object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="px-6 pt-5 sm:px-1 sm:pt-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-gold-700">{c.format}</span>
                      <span className="rounded-full bg-sand px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-ink/60">{c.area}</span>
                      {c.note && <span className="rounded-full bg-sand px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-ink/60">{c.note}</span>}
                    </div>
                    <h3 className="mt-3 text-[1.7rem] leading-tight sm:text-[1.9rem]">{c.name}</h3>
                    <p className="mt-2 text-[0.98rem] text-ink/65">{c.desc}</p>
                    <a href={waCourse(c.name)} target="_blank" rel="noopener noreferrer" aria-label={`Solicitar detalhes — ${c.name}`} className="btn btn-ghost mt-5 w-full !min-h-[48px] !border-gold-500 !text-[0.8rem] sm:w-auto">
                      Solicitar detalhes <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-ink/55">Datas, valores e disponibilidade de turmas: consulte nossa equipe.</p>
      </div>
    </section>
  );
}
