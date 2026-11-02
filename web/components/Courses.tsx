'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { courses, waCourse } from '@/lib/data';
import Reveal from './Reveal';

const filters = ['Todos', 'Harmonização', 'Odontologia'] as const;

export default function Courses() {
  const [f, setF] = useState<(typeof filters)[number]>('Todos');
  const list = courses.filter((c) => f === 'Todos' || c.area === f);

  return (
    <section id="cursos" className="section-y">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Cursos e especializações</p>
            <h2 className="mt-6 max-w-[16ch] text-[clamp(2.3rem,4.6vw,4rem)]">Formações para cada etapa da carreira.</h2>
          </div>
          <div role="group" aria-label="Filtrar por área" className="flex flex-wrap gap-2">
            {filters.map((x) => (
              <button key={x} type="button" aria-pressed={f === x} onClick={() => setF(x)} className={`rounded-full border px-5 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition ${f === x ? 'border-ink bg-ink text-white' : 'border-ink/20 text-ink/70 hover:border-gold-500 hover:text-gold-700'}`}>
                {x}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-16 columns-1 gap-8 sm:columns-2 lg:columns-3 [&>li]:mb-10">
          {list.map((c, i) => (
            <li key={c.slug} className="break-inside-avoid">
              <Reveal delay={(i % 3) * 80}>
                <article className="group">
                  <div className="relative overflow-hidden rounded-[22px] bg-sand shadow-soft">
                    <Image src={`/img/${c.img}.webp`} alt={`Arte de divulgação — ${c.name}`} width={c.w} height={c.h} sizes="(min-width:1024px) 380px, (min-width:640px) 45vw, 92vw" loading="lazy" className="h-auto w-full transition duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="px-1 pt-6">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-600">
                      {c.area} · {c.format}{c.note ? ` · ${c.note}` : ''}
                    </p>
                    <h3 className="mt-3 text-[1.9rem]">{c.name}</h3>
                    <p className="mt-3 text-[0.98rem] text-ink/65">{c.desc}</p>
                    <a href={waCourse(c.name)} target="_blank" rel="noopener noreferrer" aria-label={`Solicitar detalhes — ${c.name}`} className="mt-5 inline-flex items-center gap-2 border-b border-gold-500 pb-1 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-ink transition hover:gap-3 hover:text-gold-700">
                      Solicitar detalhes <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink/55">Datas, valores e disponibilidade de turmas: consulte nossa equipe.</p>
      </div>
    </section>
  );
}
