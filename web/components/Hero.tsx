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
      <div className="container-x grid grid-cols-[1.12fr_.88fr] items-start gap-4 sm:items-center py-10 sm:gap-10 sm:py-24 lg:min-h-[calc(100svh-88px)] lg:grid-cols-[1.1fr_.9fr] lg:gap-14 lg:py-12">
        <div>
          <p className="eyebrow hero-in !gap-2 !text-[0.55rem] !tracking-[0.16em] sm:!gap-3 sm:!text-[0.72rem] sm:!tracking-[0.28em]">Educação e Saúde · Desde {site.since}</p>
          <div className="hero-in mt-4 sm:mt-7" style={{ ['--d' as string]: '90ms' }}><HeroCopy /></div>
          <div className="hero-in mt-5 grid w-fit max-w-full gap-2 sm:mt-8 sm:auto-cols-fr sm:grid-flow-col sm:gap-3" style={{ ['--d' as string]: '270ms' }}>
            <a href="#cursos" className="btn btn-gold !min-h-[42px] !whitespace-normal !px-[clamp(0.75rem,3vw,2rem)] text-center !text-[clamp(0.66rem,2.6vw,0.92rem)] leading-tight sm:!min-h-[54px]">Conheça nossos cursos</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-[42px] !whitespace-normal !px-[clamp(0.75rem,3vw,2rem)] text-center !text-[clamp(0.66rem,2.6vw,0.92rem)] leading-tight sm:!min-h-[54px]">Iniciar atendimento</a>
          </div>
        </div>

        <div className="hero-in relative mt-11 w-full sm:mt-0" style={{ ['--d' as string]: '200ms' }}>
          <div aria-hidden className="absolute -left-[11px] -top-[11px] h-full w-full rounded-t-[999px] rounded-b-[28px] border border-gold-500/60 sm:-left-6 sm:-top-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-sand shadow-soft">
            <Image src="/img/hero.webp" alt="Dra. Renata Sharon, coordenadora do Instituto Sharon" fill priority sizes="(min-width:1024px) 38vw, 90vw" className="object-cover object-[30%_20%]" />
          </div>
          <div className="drift absolute -bottom-3 right-0 rounded-xl border border-line bg-ivory/95 px-3 py-2 shadow-soft backdrop-blur sm:-bottom-6 sm:right-[-12px] sm:rounded-2xl sm:px-6 sm:py-4">
            <p className="font-display text-[0.8rem] font-semibold sm:text-xl">Dra. Renata Sharon</p>
            <p className="text-[0.5rem] uppercase tracking-[0.14em] text-gold-600 sm:text-[0.72rem] sm:tracking-[0.18em]">Coordenação</p>
          </div>
        </div>

      </div>
      <div className="container-x !px-0 pb-0 sm:!px-10 sm:pb-20">
        <Reveal>
          <div className="relative grid overflow-hidden bg-ivory sm:rounded-[26px] sm:border sm:border-line sm:shadow-soft sm:grid-cols-[1.15fr_1fr]">
            <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[260px]">
              <Image src="/img/sede.webp" alt="Fachada da sede do Instituto Sharon em Manaus" fill sizes="(min-width:1280px) 640px, (min-width:640px) 55vw, 94vw" className="object-cover object-[50%_42%]" />
              <svg aria-hidden viewBox="0 0 1440 48" preserveAspectRatio="none" className="absolute -top-px left-0 h-7 w-full fill-ivory sm:hidden"><path d="M0 0H1440V20C1200 52 960 46 720 24C480 2 240 -2 0 28Z" /></svg>
            </div>
            <div className="relative flex flex-col justify-center gap-3 overflow-hidden px-6 pb-14 pt-7 sm:gap-4 sm:px-10 sm:pb-20 sm:pt-10">
              <svg aria-hidden viewBox="0 0 400 80" preserveAspectRatio="none" fill="none" className="pointer-events-none absolute bottom-0 left-0 z-10 h-14 w-full text-gold-500 sm:h-12">
                <path d="M0 52C60 20 120 20 180 44S300 74 400 30" stroke="currentColor" strokeWidth="1" opacity=".55" vectorEffect="non-scaling-stroke" />
                <path d="M0 62C70 34 130 36 190 56S310 80 400 46" stroke="currentColor" strokeWidth="1" opacity=".35" vectorEffect="non-scaling-stroke" />
                <path d="M0 72C80 50 140 52 200 66S320 86 400 62" stroke="currentColor" strokeWidth="1" opacity=".2" vectorEffect="non-scaling-stroke" />
              </svg>
              <p className="eyebrow relative z-20 !gap-3 !text-[0.65rem] !tracking-[0.2em] sm:!text-[0.74rem]">Instituto Sharon</p>
              <h2 className="relative z-20 max-w-[16ch] font-display text-[1.9rem] font-semibold leading-[1.1] sm:text-[clamp(2rem,3.4vw,3rem)]">Excelência que transforma carreiras.</h2>
              <p className="relative z-20 max-w-[34ch] text-sm text-ink/75 sm:text-base">Formação de qualidade para você ir mais longe.</p>
              <a href="#instituto" className="btn btn-ghost relative z-20 mt-1 !min-h-[44px] self-start !border-gold-500 !px-6 text-[0.85rem] !text-gold-700 sm:!min-h-[50px]">Conheça o Instituto <span aria-hidden>→</span></a>
            </div>
            <svg aria-hidden viewBox="0 0 1440 48" preserveAspectRatio="none" className="absolute -bottom-px left-0 h-7 w-full fill-[#F6F2E7] sm:hidden"><path d="M0 48H1440V28C1200 -4 960 2 720 24C480 46 240 50 0 20Z" /></svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
