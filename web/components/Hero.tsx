import Image from 'next/image';
import { site } from '@/lib/data';
import HeroCopy from './HeroCopy';
import Reveal from './Reveal';

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
          <div className="hero-in mt-5 grid w-fit max-w-full gap-2 sm:mt-8 sm:auto-cols-fr sm:grid-flow-col sm:gap-3" style={{ ['--d' as string]: '270ms' }}>
            <a href="#cursos" className="btn btn-gold !min-h-[42px] !whitespace-normal !px-4 text-center !text-[0.7rem] leading-tight sm:!min-h-[54px] sm:!whitespace-nowrap sm:!px-8 sm:!text-[0.92rem]">Conheça nossos cursos</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-[42px] !whitespace-normal !px-4 text-center !text-[0.7rem] leading-tight sm:!min-h-[54px] sm:!whitespace-nowrap sm:!px-8 sm:!text-[0.92rem]">Iniciar atendimento</a>
          </div>
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

      </div>
      <div className="container-x pb-10 sm:pb-20">
        <Reveal>
          <div className="grid overflow-hidden rounded-[18px] border border-line bg-ivory shadow-soft sm:grid-cols-[1.15fr_1fr] sm:rounded-[26px]">
            <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[260px]">
              <Image src="/img/sede.webp" alt="Fachada da sede do Instituto Sharon em Manaus" fill sizes="(min-width:1280px) 640px, (min-width:640px) 55vw, 94vw" className="object-cover object-[50%_42%]" />
            </div>
            <div className="relative flex flex-col justify-center gap-3 overflow-hidden px-6 py-7 sm:gap-4 sm:px-10 sm:py-10">
              <svg aria-hidden viewBox="0 0 200 120" fill="none" className="pointer-events-none absolute -bottom-2 right-0 w-48 text-gold-500/60 sm:w-64">
                <path d="M200 20C150 60 110 100 40 120" stroke="currentColor" strokeWidth="1" />
                <path d="M200 40C160 75 125 105 80 120" stroke="currentColor" strokeWidth="1" opacity=".6" />
              </svg>
              <p className="eyebrow !gap-3 !text-[0.65rem] !tracking-[0.2em] sm:!text-[0.74rem]">Instituto Sharon</p>
              <h2 className="relative max-w-[16ch] font-display text-[1.9rem] font-semibold leading-[1.1] sm:text-[clamp(2rem,3.4vw,3rem)]">Excelência que transforma carreiras.</h2>
              <p className="relative max-w-[34ch] text-sm text-ink/75 sm:text-base">Formação de qualidade para você ir mais longe.</p>
              <a href="#instituto" className="btn btn-ghost relative mt-1 !min-h-[44px] self-start !border-gold-500 !px-6 text-[0.85rem] !text-gold-700 sm:!min-h-[50px]">Conheça o Instituto <span aria-hidden>→</span></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
