'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { courses } from '@/lib/data';

const WA = 'https://wa.me/5592981429369';
const WA_ICON = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';
const NONE = '';

export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [course, setCourse] = useState(NONE);
  const [kind, setKind] = useState<'Cursos' | 'Paciente modelo'>('Cursos');
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a');
      if (!a || !a.href.startsWith(WA)) return;
      e.preventDefault();
      const m = decodeURIComponent(new URL(a.href).searchParams.get('text') || '').match(/sobre: (.+)\.$/);
      setCourse(m && courses.some((c) => c.name === m[1]) ? m[1] : NONE);
      setKind('Cursos');
      setLoading(true);
      timer = setTimeout(() => { setLoading(false); setOpen(true); }, 700);
    };
    document.addEventListener('click', onClick);
    return () => { clearTimeout(timer); document.removeEventListener('click', onClick); };
  }, []);

  useEffect(() => {
    if (!open) return;
    nameRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  if (loading) return (
    <div role="status" aria-label="Carregando" className="fixed inset-0 z-[100] grid place-items-center bg-ivory/80 backdrop-blur-sm">
      <svg viewBox="0 0 50 50" className="h-14 w-14 animate-spin text-gold-500" fill="none" aria-hidden>
        <circle cx="25" cy="25" r="20" stroke="currentColor" strokeOpacity=".2" strokeWidth="4" />
        <path d="M25 5a20 20 0 0 1 20 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
  if (!open) return null;

  const ready = name.trim().length >= 2 && (kind === 'Paciente modelo' || course !== NONE);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready) return;
    const linhas = ['Olá! Vim pelo site do Instituto Sharon e gostaria de atendimento.', '', `*Nome:* ${name.trim()}`];
    if (kind === 'Paciente modelo') linhas.push('*Interesse:* Paciente modelo');
    else linhas.push('*Interesse:* Cursos', `*Curso:* ${course}`);
    const text = linhas.join('\n');
    window.open(`${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setOpen(false);
    setName('');
  };

  const field = 'mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-[1rem] outline-none transition focus:border-gold-500';

  return (
    <div className="fixed inset-0 z-[100] flex items-stretch justify-center bg-ink/50 p-0 sm:items-center sm:p-6 sm:backdrop-blur-sm" onClick={() => setOpen(false)}>
      <form onSubmit={submit} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="lead-t" className="relative h-[100dvh] w-full overflow-y-auto overflow-x-hidden bg-ivory p-6 pt-16 sm:h-auto sm:max-h-[92dvh] sm:max-w-[460px] sm:rounded-[24px] sm:p-9 sm:shadow-soft">
        <button type="button" onClick={() => setOpen(false)} aria-label="Fechar" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink/60 hover:bg-sand"><X size={18} /></button>
        <Image src="/img/emblem.png" alt="" width={200} height={300} aria-hidden className="pointer-events-none absolute -right-4 top-10 h-40 w-auto opacity-[0.09]" />
        <p className="eyebrow">Instituto Sharon</p>
        <h2 id="lead-t" className="mt-3 font-display text-[2.4rem] font-semibold leading-[1.05] sm:text-[2.7rem]">Inicie o seu <span className="italic text-gold-600">atendimento</span></h2>
        <p className="mt-2 text-sm text-ink/65">Informe seu nome e o seu interesse. Abriremos o WhatsApp com a mensagem já preenchida, para que nossa equipe agilize o seu atendimento.</p>
        <label className="mt-6 block text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink/70">Nome
          <input ref={nameRef} required minLength={2} maxLength={80} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Digite seu nome completo" className={field} />
        </label>
        <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink/70">Interesse</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {(['Cursos', 'Paciente modelo'] as const).map((k) => (
            <button key={k} type="button" onClick={() => setKind(k)} aria-pressed={kind === k} className={`rounded-xl border px-4 py-3 text-[0.9rem] font-semibold transition ${kind === k ? 'border-gold-500 bg-gold-500 text-white' : 'border-line bg-white text-ink/75 hover:border-gold-500'}`}>{k}</button>
          ))}
        </div>
        {kind === 'Cursos' && (
          <label className="mt-4 block text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink/70">Curso de interesse
            <select required value={course} onChange={(e) => setCourse(e.target.value)} className={field}>
              <option value="" disabled>Selecione o curso</option>
              {courses.map((c) => <option key={c.slug}>{c.name}</option>)}
            </select>
          </label>
        )}
        <button type="submit" disabled={!ready} className="btn mt-7 w-full bg-[#25d366] text-white shadow-[0_14px_30px_-14px_rgba(18,140,70,.8)] enabled:hover:-translate-y-0.5 enabled:hover:bg-[#1fb957] disabled:cursor-not-allowed disabled:bg-ink/15 disabled:text-ink/40 disabled:shadow-none"><svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden><path d={WA_ICON} /></svg>Continuar para o WhatsApp</button>
      </form>
    </div>
  );
}
