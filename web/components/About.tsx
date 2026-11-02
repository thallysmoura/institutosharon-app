import Image from 'next/image';
import Reveal from './Reveal';
import { site } from '@/lib/data';

export default function About() {
  return (
    <section id="instituto" className="section-y">
      <div className="container-x grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">O Instituto</p>
          <h2 className="mt-6 text-[clamp(2.3rem,4.6vw,4rem)]">Educação e saúde, com a prática no centro.</h2>
          <figure className="mt-10 overflow-hidden rounded-[22px] shadow-soft">
            <Image src="/img/p-alunas.webp" alt="Alunas da Mini Residência HOF PRO do Instituto Sharon" width={360} height={422} sizes="(min-width:1024px) 360px, 90vw" loading="lazy" className="h-auto w-full max-w-[420px]" />
          </figure>
        </Reveal>
        <Reveal delay={120} className="space-y-7 text-[1.1rem] text-ink/75 sm:text-[1.18rem]">
          <p>
            O Instituto Sharon atua em Manaus desde <strong className="font-semibold text-ink">{site.since}</strong>, oferecendo cursos, imersões, workshops e especializações para profissionais da saúde.
          </p>
          <p>
            Hoje conduz formações presenciais em <strong className="font-semibold text-ink">quatro cidades</strong> — Manaus, Fortaleza, Porto Velho e São Paulo — nas áreas de harmonização orofacial, ortodontia, implantodontia, dentística, cirurgia e odontologia hospitalar.
          </p>
          <p className="font-display text-[1.7rem] italic leading-snug text-gold-700 sm:text-[2rem]">
            Cada turma é pensada para que o aluno aprenda fazendo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
