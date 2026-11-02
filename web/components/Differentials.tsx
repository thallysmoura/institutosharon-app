import { GraduationCap, MapPin, Stethoscope, Users } from 'lucide-react';
import Reveal from './Reveal';

const icons = [Stethoscope, GraduationCap, MapPin, Users];

const items = [
  ['Prática com pacientes', 'Mini residências, imersões e hands-on pensados para que o aluno execute a técnica, não apenas assista.'],
  ['Formatos para cada momento', 'Cursos livres, workshops, imersões, capacitações e especializações — da primeira formação à evolução da carreira.'],
  ['Presença em quatro cidades', 'Manaus, Fortaleza, Porto Velho e São Paulo, com a coordenação do Instituto em cada turma.'],
  ['Uma comunidade que se encontra', 'O Meeting Instituto Sharon reúne alunos e palestrantes em encontros de atualização e networking.'],
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-y">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Diferenciais</p>
          <h2 className="mt-6 max-w-[18ch] text-[clamp(2.1rem,4.4vw,3.6rem)]">Por que estudar no Instituto Sharon.</h2>
        </Reveal>
        <ol className="mt-16 divide-y divide-line border-y border-line">
          {items.map(([t, d], n) => (
            <li key={t}>
              <Reveal delay={n * 60} className="grid gap-4 py-10 sm:grid-cols-[1fr_1.1fr] sm:items-baseline sm:gap-10">
                <div className="flex items-center gap-4 sm:gap-5">
                  {(() => { const Icon = icons[n]; return <Icon aria-hidden strokeWidth={1.4} className="h-10 w-10 shrink-0 text-gold-500 sm:h-12 sm:w-12" />; })()}
                  <h3 className="text-[1.9rem] sm:text-[2.2rem]">{t}</h3>
                </div>
                <p className="text-ink/65">{d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
