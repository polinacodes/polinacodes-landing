export type ServiceSlug =
  | 'tiendas-online'
  | 'landing-pages'
  | 'sistemas-a-medida'
  | 'mantenimiento';

export interface Service {
  /** Se usa en la URL (/servicios/[slug]), en el <select> del form y para filtrar proyectos */
  slug: ServiceSlug;
  name: string;
  /** Texto corto para el <select> del formulario */
  formLabel: string;
  icon: string;
  summary: string;
  bullets: string[];
  /** Poné true cuando exista /servicios/[slug]; habilita el link "Ver detalle" en la tarjeta */
  hasPage: boolean;
}

export const services: Service[] = [
  {
    slug: 'tiendas-online',
    name: 'Tiendas Online & E-commerce',
    formLabel: 'E-commerce',
    icon: '🛒',
    summary: 'Tiendas listas para vender y administrar sin dolores de cabeza.',
    bullets: ['Tiendanube, Shopify, WooCommerce', 'Checkout y medios de pago', 'WPO y SEO técnico'],
    hasPage: false,
  },
  {
    slug: 'landing-pages',
    name: 'Landing Pages & Webs Corporativas',
    formLabel: 'Landing Page',
    icon: '🚀',
    summary: 'Sitios que comunican valor rápido y convierten visitas en consultas.',
    bullets: ['HTML/CSS/JS, Next.js, Astro, WP', 'Responsive y accesible', 'SEO/GEO técnico desde la base'],
    hasPage: false,
  },
  {
    slug: 'sistemas-a-medida',
    name: 'Sistemas de Gestión & CRM a Medida',
    formLabel: 'CRM / Sistema a medida',
    icon: '⚙️',
    summary: 'Herramientas internas para automatizar procesos y centralizar datos.',
    bullets: ['Full-Stack Node.js, React, DB', 'Roles, paneles y automatizaciones', 'Arquitectura escalable'],
    hasPage: false,
  },
  {
    slug: 'mantenimiento',
    name: 'Mantenimiento, Rediseño & Migraciones',
    formLabel: 'Mantenimiento / Rediseño',
    icon: '🛠️',
    summary: 'Mejoras técnicas sin tirar por la borda lo que ya funciona.',
    bullets: ['Optimización WPO', 'Mudanzas de plataforma', 'Correcciones y evolución continua'],
    hasPage: false,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
