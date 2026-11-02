'use client';
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

// Aparece depois de rolar para baixo; centralizado no celular, à esquerda no desktop.
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const up = () => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' });
  };
  return (
    <button type="button" onClick={up} aria-label="Voltar ao topo" tabIndex={show ? 0 : -1} aria-hidden={!show}
      className={`fixed bottom-4 left-1/2 z-40 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-white/50 bg-zinc-500/35 text-white shadow-[0_10px_28px_-10px_rgba(20,17,10,.55)] backdrop-blur-md transition duration-500 sm:bottom-6 md:left-6 md:translate-x-0 ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
      <ChevronUp size={22} strokeWidth={2.2} aria-hidden />
    </button>
  );
}
