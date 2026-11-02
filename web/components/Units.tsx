import { ArrowUpRight, MapPin } from 'lucide-react';
import { site, units } from '@/lib/data';
import Reveal from './Reveal';

export default function Units() {
  return (
    <section id="unidades" className="section-y bg-sand/60">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Unidades</p>
          <h2 className="mt-6 max-w-[16ch] text-[clamp(2.3rem,4.6vw,4rem)]">Quatro cidades, um mesmo padrão.</h2>
        </Reveal>
        <div className="mt-16 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <ul className="divide-y divide-line border-y border-line">
            {units.map((u, n) => (
              <li key={u.city}>
                <Reveal delay={n * 60} className="py-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[2rem]">{u.city}</h3>
                    {u.tag && <span className="rounded-full bg-gold-500 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white">{u.tag}</span>}
                  </div>
                  <p className="mt-2 flex gap-2 text-[0.98rem] text-ink/65"><MapPin size={18} className="mt-1 shrink-0 text-gold-600" aria-hidden />{u.line}</p>
                  {u.city === 'Manaus' && (
                    <a href={site.mapsDirections} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 border-b border-gold-500 pb-1 text-[0.8rem] font-semibold uppercase tracking-[0.16em] hover:text-gold-700">Como chegar <ArrowUpRight size={16} /></a>
                  )}
                  {u.ig && (
                    <a href={u.ig} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 border-b border-gold-500 pb-1 text-[0.8rem] font-semibold uppercase tracking-[0.16em] hover:text-gold-700">Instagram da unidade <ArrowUpRight size={16} /></a>
                  )}
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[24px] border border-line bg-white shadow-soft">
              <iframe title="Mapa — Instituto Sharon, Manaus" loading="lazy" referrerPolicy="no-referrer" className="h-[420px] w-full sm:h-[520px]" src="https://www.openstreetmap.org/export/embed.html?bbox=-60.0400%2C-3.0780%2C-60.0100%2C-3.0560&layer=mapnik&marker=-3.06696%2C-60.0250" />
            </div>
            <p className="mt-3 text-xs text-ink/50">Mapa © OpenStreetMap. Posição aproximada da Av. Torquato Tapajós.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
