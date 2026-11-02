import Image from 'next/image';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { site } from '@/lib/data';
import Reveal from './Reveal';

const row = 'flex items-start gap-4 text-white/80 transition hover:text-gold-300';

export default function Contact() {
  return (
    <section id="contato" className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-10 top-1/2 -z-10 h-[560px] w-[330px] -translate-y-1/2 opacity-[0.12]">
        <Image src="/img/emblem.png" alt="" fill sizes="330px" className="object-contain" />
      </div>
      <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <Reveal>
          <p className="eyebrow !text-gold-300 before:!bg-gold-300">Contato</p>
          <h2 className="mt-6 text-[clamp(2.4rem,5vw,4.4rem)]">Sua próxima formação começa com uma conversa.</h2>
          <p className="mt-6 max-w-[32rem] text-[1.1rem] text-white/65">Conte-nos seu momento profissional e nossa equipe indica a formação e a turma ideais.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Falar no WhatsApp</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">{site.instagramHandle}</a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="space-y-6 rounded-[24px] border border-white/15 p-8 sm:p-10">
            {site.phones.map((p) => (
              <li key={p.tel}><a href={`tel:${p.tel}`} className={row}><Phone size={20} className="mt-1 text-gold-300" aria-hidden />{p.label}</a></li>
            ))}
            <li><a href={`mailto:${site.email}`} className={row}><Mail size={20} className="mt-1 text-gold-300" aria-hidden />{site.email}</a></li>
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className={row}><Instagram size={20} className="mt-1 text-gold-300" aria-hidden />{site.instagramHandle}</a></li>
            <li><a href={site.mapsDirections} target="_blank" rel="noopener noreferrer" className={row}><MapPin size={20} className="mt-1 shrink-0 text-gold-300" aria-hidden />{site.address}</a></li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
