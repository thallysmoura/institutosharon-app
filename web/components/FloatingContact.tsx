'use client';
import { site } from '@/lib/data';

const WA = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';
const IG = 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z';

const cls = 'grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_12px_26px_-8px_rgba(0,0,0,.5)] md:h-16 md:w-16';

// No celular tenta abrir o app do Instagram; se não abrir, cai no perfil web.
function openInstagram(e: React.MouseEvent<HTMLAnchorElement>) {
  const ua = navigator.userAgent;
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  if (!isAndroid && !isIOS) return; // desktop: link normal em nova aba
  e.preventDefault();
  if (isAndroid) {
    window.location.href = `intent://instagram.com/_u/${site.instagramUser}/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=${encodeURIComponent(site.instagram)};end`;
    return;
  }
  const t = setTimeout(() => { window.location.href = site.instagram; }, 1200);
  document.addEventListener('visibilitychange', () => clearTimeout(t), { once: true });
  window.location.href = `instagram://user?username=${site.instagramUser}`;
}

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-3 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-5">
      <a href={site.instagram} onClick={openInstagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Instituto Sharon" className={`${cls} bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285aeb_90%)]`}>
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white md:h-8 md:w-8" aria-hidden><path d={IG} /></svg>
      </a>
      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className={`${cls} bg-[#25d366]`}>
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white md:h-9 md:w-9" aria-hidden><path d={WA} /></svg>
      </a>
    </div>
  );
}
