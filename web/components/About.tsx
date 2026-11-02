import Image from 'next/image';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="instituto">
      <Reveal>
        <div className="relative isolate flex aspect-[3.8/1] max-h-[380px] min-h-[190px] w-full items-center overflow-hidden bg-ink text-white">
          <Image src="/img/banner-experiencias.webp" alt="" fill sizes="100vw" quality={90} loading="eager" className="-z-20 object-cover object-[85%_40%] sm:object-[70%_40%]" />
          <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-transparent to-80%" />
          <svg aria-hidden viewBox="0 0 1440 28" preserveAspectRatio="none" className="absolute -top-px left-0 h-3 w-full fill-[#F6F2E7] sm:h-5"><path d="M0 0H1440V10C1200 26 960 22 720 12C480 2 240 0 0 14Z" /></svg>
          <div className="pl-[8%] pr-4">
            <p className="flex items-center gap-[1.6vw] text-[clamp(0.5rem,1.6vw,0.8rem)] font-semibold uppercase leading-none tracking-[0.04em] text-[#e0aa3e] sm:gap-4">
              Imersões, encontros e experiências
            </p>
            <h2 className="mt-[1.4vw] text-[clamp(1.4rem,5.4vw,3.4rem)] font-semibold leading-[1.05] sm:mt-3">Muito além da<br />sala de aula.</h2>
            <p className="mt-[1.4vw] text-[clamp(0.6rem,2.45vw,1.2rem)] leading-[1.3] text-white/85 sm:mt-3">Experiências práticas, atualização<br />profissional e networking com especialistas<br />referência na estética.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
