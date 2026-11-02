'use client';
import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: { children: ReactNode; delay?: number; as?: ElementType; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) return el.setAttribute('data-in', '');
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.setAttribute('data-in', ''); io.disconnect(); } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ ['--d' as string]: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
