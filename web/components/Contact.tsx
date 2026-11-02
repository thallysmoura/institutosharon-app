import { ArrowRight } from 'lucide-react';
import { site } from '@/lib/data';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contato" className="bg-[#FBF1E3]">
      <Reveal>
        <div className="container-x grid grid-cols-[1fr_auto_auto] items-center gap-3 py-7 sm:gap-8 sm:py-10 lg:gap-12">
          <h2 className="font-[family-name:var(--font-cta)] text-[clamp(1.1rem,4vw,2.4rem)] font-bold leading-[1.18] tracking-[-0.01em] text-ink">Dê o próximo passo<br />na sua carreira.</h2>
          <span aria-hidden className="h-12 w-px bg-gold-500/40 sm:h-16" />
          <a href={site.whatsapp} className="btn btn-gold !min-h-[40px] !gap-1.5 !px-4 !text-[clamp(0.68rem,2.4vw,0.95rem)] sm:!min-h-[54px] sm:!px-8">
            Inscreva-se agora <ArrowRight size={16} aria-hidden />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
