import Image from 'next/image';
import { site } from '@/lib/data';
import HeroCopy from './HeroCopy';
import Reveal from './Reveal';

const stats = [['2006', 'Desde'], ['4', 'Cidades'], ['12', 'Formações']];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[76px] sm:pt-[88px]">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-10 hidden h-[620px] w-[360px] opacity-[0.10] lg:block">
        <Image src="/img/emblem.png" alt="" fill sizes="360px" className="object-contain" />
      </div>
      <div className="container-x grid grid-cols-[1.12fr_.88fr] items-center gap-4 py-10 sm:gap-10 sm:py-24 lg:min-h-[calc(100svh-88px)] lg:grid-cols-[1.1fr_.9fr] lg:gap-14 lg:py-12">
        <div>
          <p className="eyebrow hero-in !gap-2 !text-[0.55rem] !tracking-[0.16em] sm:!gap-3 sm:!text-[0.72rem] sm:!tracking-[0.28em]">Educação e Saúde · Manaus · Desde {site.since}</p>
          <div className="hero-in mt-4 sm:mt-7" style={{ ['--d' as string]: '90ms' }}><HeroCopy /></div>
          <div className="hero-in mt-5 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3" style={{ ['--d' as string]: '270ms' }}>
            <a href="#cursos" className="btn btn-gold !min-h-[42px] !whitespace-normal !px-4 text-center !text-[0.7rem] leading-tight sm:!min-h-[54px] sm:!whitespace-nowrap sm:!px-8 sm:!text-[0.92rem]">Conheça nossos cursos</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-[42px] !whitespace-normal !px-4 text-center !text-[0.7rem] leading-tight sm:!min-h-[54px] sm:!whitespace-nowrap sm:!px-8 sm:!text-[0.92rem]">Fale com nossa equipe</a>
          </div>
          <dl className="hero-in mt-6 hidden max-w-[32rem] sm:grid grid-cols-3 gap-2 border-t border-line pt-4 sm:mt-14 sm:gap-6 sm:pt-8" style={{ ['--d' as string]: '360ms' }}>
            {stats.map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-semibold text-gold-600 sm:text-5xl">{n}</dt>
                <dd className="mt-0.5 text-[0.5rem] uppercase tracking-[0.1em] text-ink/55 sm:mt-1 sm:text-[0.72rem] sm:tracking-[0.2em]">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-in relative w-full" style={{ ['--d' as string]: '200ms' }}>
          <div aria-hidden className="absolute -left-2 -top-2 h-full w-full rounded-t-[999px] rounded-b-[28px] border border-gold-500/60 sm:-left-6 sm:-top-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-sand shadow-soft">
            <Image src="/img/hero.webp" alt="Dra. Renata Sharon, coordenadora do Instituto Sharon" fill priority sizes="(min-width:1024px) 38vw, 90vw" className="object-cover object-[30%_20%]" />
          </div>
          <div className="drift absolute -bottom-3 right-0 rounded-xl border border-line bg-ivory/95 px-3 py-2 shadow-soft backdrop-blur sm:-bottom-6 sm:right-[-12px] sm:rounded-2xl sm:px-6 sm:py-4">
            <p className="font-display text-[0.8rem] font-semibold sm:text-xl">Dra. Renata Sharon</p>
            <p className="text-[0.5rem] uppercase tracking-[0.14em] text-gold-600 sm:text-[0.72rem] sm:tracking-[0.18em]">Coordenação</p>
          </div>
        </div>

        <dl className="col-span-2 mt-4 grid grid-cols-3 gap-2 border-t border-line pt-8 text-center sm:hidden">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 180}>
              <dt className="font-display text-[3.2rem] font-semibold leading-none text-gold-600">{n}</dt>
              <dd className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink/75">{l}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
