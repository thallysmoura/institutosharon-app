'use client';
import { Fragment, useEffect, useState } from 'react';

// Mensagens do hero: somente fatos já confirmados (atuação desde 2006, 4 cidades, formatos de curso).
const slides = [
  { pre: 'Onde a teoria encontra a', accent: 'prática clínica.', sub: 'Há quase 20 anos em Manaus, o Instituto Sharon forma profissionais da saúde com cursos, imersões e especializações em harmonização orofacial, odontologia e muito mais.' },
  { pre: 'Formação em saúde que', accent: 'se aprende fazendo.', sub: 'Mini residências, imersões e hands-on pensados para você executar a técnica com segurança.' },
  { pre: 'Sua carreira merece uma', accent: 'formação à altura.', sub: 'Cursos e especializações em harmonização orofacial, ortodontia, implantodontia, cirurgia e odontologia hospitalar.' },
  { pre: 'Do primeiro curso à', accent: 'especialização.', sub: 'Workshops, capacitações, imersões e pós-graduações: um formato para cada momento da sua trajetória.' },
  { pre: 'Educação e saúde,', accent: 'com propósito.', sub: 'Manaus, Fortaleza, Porto Velho e São Paulo: quatro cidades e a mesma exigência de qualidade.' },
];

const words = (t: string, off: number, accent = false) =>
  t.split(' ').map((w, i) => (
    <Fragment key={`${off}-${i}`}>
      <span className="w-wrap">
        <span className={`w ${accent ? 'w-accent' : ''}`} style={{ ['--i' as string]: off + i } as React.CSSProperties}>{w}</span>
      </span>{' '}
    </Fragment>
  ));

export default function HeroCopy() {
  const [a, setA] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setA((v) => (v + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, [paused, a]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div className="grid">
        {slides.map((s, n) => {
          const on = n === a;
          const pre = s.pre.split(' ').length;
          return (
            <div key={n} aria-hidden={!on} className={`slide col-start-1 row-start-1 ${on ? 'is-active' : ''}`}>
              <h1 className="text-[clamp(1.6rem,7vw,2.6rem)] sm:text-[clamp(2.6rem,6vw,5.4rem)]">
                {words(s.pre, 0)}
                <em className="not-italic">{words(s.accent, pre, true)}</em>
              </h1>
              <p className="mt-4 max-w-[34rem] text-[0.78rem] leading-relaxed text-ink/70 sm:mt-8 sm:text-[1.18rem] sm:leading-[1.7]">
                <span className="sub">{s.sub}</span>
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex items-center gap-2 sm:mt-8" role="group" aria-label="Mensagens">
        {slides.map((_, n) => (
          <button key={n} type="button" onClick={() => setA(n)} aria-label={`Mensagem ${n + 1}`} aria-current={n === a} className={`h-1.5 rounded-full transition-all duration-500 ${n === a ? 'w-10 bg-gold-500' : 'w-4 bg-ink/20 hover:bg-gold-300'}`} />
        ))}
      </div>
    </div>
  );
}
