'use client';
import { useEffect } from 'react';

// Dissuasão: bloqueia botão direito, arrastar e menu de pressão longa em imagens (inclui a logo).
export default function ImageGuard() {
  useEffect(() => {
    const isImg = (t: EventTarget | null) => t instanceof Element && !!t.closest('img, picture, svg image');
    const block = (e: Event) => { if (isImg(e.target)) e.preventDefault(); };
    document.addEventListener('contextmenu', block);
    document.addEventListener('dragstart', block);
    document.addEventListener('selectstart', block);
    const lock = () => document.querySelectorAll('img:not([draggable="false"])').forEach((i) => i.setAttribute('draggable', 'false'));
    lock();
    const mo = new MutationObserver(lock);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      document.removeEventListener('contextmenu', block);
      document.removeEventListener('dragstart', block);
      document.removeEventListener('selectstart', block);
      mo.disconnect();
    };
  }, []);
  return null;
}
