// Fonte única de conteúdo. Somente informações confirmadas (perfil público, anúncios e cadastro do Instituto).
export const site = {
  name: 'Instituto Sharon',
  legal: 'IS Instituto Sharon Serviços de Educação e Saúde Ltda.',
  cnpj: '08.355.520/0001-62',
  since: 2006,
  // wa.me abre o app no celular e o WhatsApp Web/Desktop no computador, já com mensagem inicial.
  whatsapp: `https://wa.me/5592981429369?text=${encodeURIComponent('Olá! Gostaria de conhecer os cursos do Instituto Sharon.')}`,
  whatsappBio: 'https://wa.me/message/CLTYAEPHX3TAI1',
  phones: [
    { label: '(92) 98142-9369', tel: '+5592981429369' },
    { label: '(92) 98154-0508', tel: '+5592981540508' },
  ],
  email: 'institutosharon@gmail.com',
  instagram: 'https://www.instagram.com/institutosharon/',
  instagramHandle: '@institutosharon',
  instagramUser: 'institutosharon',
  address: 'Av. Torquato Tapajós, 19 · Letra B — Flores, Manaus/AM · CEP 69058-830',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Av.+Torquato+Tapaj%C3%B3s,+19,+Flores,+Manaus+AM',
};

export const waCourse = (course: string) =>
  `https://wa.me/5592981429369?text=${encodeURIComponent(
    `Olá! Gostaria de receber informações sobre: ${course}.`,
  )}`;

export const nav = [
  { href: '#cursos', label: 'Cursos' },
  { href: '#instituto', label: 'Instituto' },
  { href: '#unidades', label: 'Unidades' },
  { href: '#contato', label: 'Contato' },
];

export type Course = {
  slug: string;
  name: string;
  area: 'Harmonização' | 'Odontologia';
  format: string;
  desc: string;
  note?: string;
  img: string;
  w: number;
  h: number;
};

export const courses: Course[] = [
  { slug: 'mini-residencia', name: 'Mini Residência em Harmonização Facial', area: 'Harmonização', format: 'Mini residência', desc: 'Formação intensiva em harmonização facial, com anatomia e técnicas aplicadas.', img: 'c-mini-residencia', w: 720, h: 1380 },
  { slug: 'fullface', name: 'Fullface', area: 'Harmonização', format: 'Curso', desc: 'Toxina botulínica e preenchedores, do básico ao avançado.', note: 'Coordenação: Dra. Renata Sharon', img: 'c-fullface', w: 720, h: 884 },
  { slug: 'fios-faciais-vip', name: 'Fios Faciais VIP', area: 'Harmonização', format: 'Imersão', desc: 'Imersão para elevar a técnica e redefinir contornos com fios faciais.', note: 'Dra. Renata Sharon', img: 'c-fios-faciais-vip', w: 720, h: 906 },
  { slug: 'preenchimento-labial', name: 'Preenchimento Labial', area: 'Harmonização', format: 'Imersão', desc: 'Imersão em técnicas de preenchimento labial.', img: 'c-preenchimento-labial', w: 720, h: 873 },
  { slug: 'harmonizacao-glutea', name: 'Harmonização Glútea', area: 'Harmonização', format: 'Curso', desc: 'Curso de harmonização glútea para profissionais da saúde.', img: 'c-harmonizacao-glutea', w: 720, h: 1456 },
  { slug: 'implantodontia', name: 'Implantodontia e Prótese sobre Implante', area: 'Odontologia', format: 'Capacitação', desc: 'Capacitação em implantodontia e prótese sobre implante.', img: 'c-implantodontia', w: 720, h: 885 },
  { slug: 'cirurgia-oral', name: 'Cirurgia Oral', area: 'Odontologia', format: 'Capacitação', desc: 'Capacitação em cirurgia oral.', note: '6ª edição', img: 'c-cirurgia-oral', w: 720, h: 900 },
  { slug: 'ortodontia', name: 'Especialização em Ortodontia', area: 'Odontologia', format: 'Especialização', desc: 'Especialização em ortodontia.', note: '8ª edição', img: 'c-ortodontia-especializacao', w: 720, h: 1280 },
  { slug: 'ortodontia-workshop', name: 'Ortodontia e Cirurgia Ortognática', area: 'Odontologia', format: 'Workshop', desc: 'Workshop sobre ortodontia e cirurgia ortognática.', img: 'c-ortodontia-workshop', w: 720, h: 1127 },
  { slug: 'facetas-de-resina', name: 'Facetas de Resina', area: 'Odontologia', format: 'Imersão', desc: 'Imersão em facetas de resina com foco em naturalidade.', img: 'c-facetas-de-resina', w: 720, h: 854 },
  { slug: 'biomimetica', name: 'Biomimética na Prática', area: 'Odontologia', format: 'Hands-on', desc: 'Hands-on de restaurações posteriores extensas.', img: 'c-biomimetica', w: 720, h: 871 },
  { slug: 'odontologia-hospitalar', name: 'Odontologia Hospitalar e Home Care', area: 'Odontologia', format: 'Capacitação', desc: 'Capacitação com 16 módulos e experiência prática em hospitais.', img: 'c-odontologia-hospitalar', w: 720, h: 871 },
];

export type Shot = { src: string; alt: string; caption: string; w: number; h: number; span: string };

export const shots: Shot[] = [
  { src: 'p-alunas', alt: 'Alunas da Mini Residência HOF PRO sorrindo em ambiente do Instituto', caption: 'Mini Residência HOF PRO · alunas', w: 360, h: 422, span: 'sm:col-span-2 sm:row-span-1' },
  { src: 'p-meeting-4', alt: 'Arte do Meeting Instituto Sharon, 4ª edição, com palestrante', caption: 'Meeting Instituto Sharon · 4ª edição', w: 360, h: 640, span: 'sm:row-span-2' },
  { src: 'p-certificado', alt: 'Entrega de certificado i-THREAD K-Club, Bangkok 2026', caption: 'Certificação i-THREAD · K-Club · Bangkok 2026', w: 480, h: 640, span: 'sm:row-span-2' },
  { src: 'p-residencia-pvh', alt: 'Arte da Residência HOF PRO em Porto Velho', caption: 'Residência HOF PRO · Porto Velho', w: 360, h: 640, span: 'sm:row-span-2' },
  { src: 'p-meeting-4b', alt: 'Arte do Meeting Instituto Sharon, 4ª edição, com palestrante', caption: 'Meeting Instituto Sharon · 4ª edição', w: 360, h: 640, span: 'sm:row-span-2' },
  { src: 'p-meeting-2026', alt: 'Arte do Meeting 2026 do Instituto Sharon', caption: 'Meeting 2026', w: 360, h: 640, span: 'sm:row-span-2' },
];

export const units = [
  { city: 'Manaus', tag: 'Sede', line: site.address },
  { city: 'Fortaleza', line: 'Av. Antônio Sales, 2371 · Fortaleza/CE · CEP 60135-203', maps: 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('Antonio Sales, 2371, Fortaleza, CE, 60135-203'), ig: 'https://www.instagram.com/instituto_sharonfortaleza/' },
  { city: 'Porto Velho', line: 'Turmas presenciais · confirme o local com a equipe', ig: 'https://www.instagram.com/institutosharon_portovelho/' },
  { city: 'São Paulo', line: 'Turmas presenciais · confirme o local com a equipe' },
];
