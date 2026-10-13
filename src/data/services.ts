export type ServiceSlug =
  | 'tiendas-online'
  | 'landing-pages'
  | 'sistemas-a-medida'
  | 'mantenimiento-web';

export type ServiceIcon = 'cart' | 'rocket' | 'dashboard' | 'wrench';

export interface Service {
  /** Se usa en la URL (/servicios/[slug]), en el <select> del form y para filtrar proyectos */
  slug: ServiceSlug;
  name: string;
  /** Texto corto para el <select> del formulario */
  formLabel: string;
  /** Clave del icono; se mapea a Lucide en ServiceCard.astro */
  icon: ServiceIcon;
  summary: string;
  bullets: string[];
  /** Poné true cuando exista /servicios/[slug]; habilita el link "Ver detalle" en la tarjeta */
  hasPage: boolean;
}

export const services: Service[] = [
  {
    slug: 'tiendas-online',
    name: 'Tiendas Online y Ecommerce',
    formLabel: 'Tienda online / Ecommerce',
    icon: 'cart',
    summary: 'Creo tu tienda online para que puedas vender y administrarla fácilmente.',
    bullets: [
      'Partner de Tiendanube; también Shopify y WooCommerce',
      'Medios de pago según tu país: Mercado Pago, PayPal, Stripe y más',
      'Velocidad de carga y SEO para tu catálogo',
    ],
    hasPage: true,
  },
  {
    slug: 'landing-pages',
    name: 'Landing Pages y Páginas Web para Empresas',
    formLabel: 'Landing page / Web para empresa',
    icon: 'rocket',
    summary: 'Diseño páginas web claras que explican lo que ofrecés y hacen que te consulten.',
    bullets: [
      'HTML, CSS y JS, Astro, Next.js o WordPress',
      'Se ven bien en celular y son accesibles',
      'SEO técnico desde la base',
    ],
    hasPage: true,
  },
  {
    slug: 'sistemas-a-medida',
    name: 'Sistemas a Medida y Automatizaciones',
    formLabel: 'Sistema a medida / Automatización',
    icon: 'dashboard',
    summary: 'Desarrollo sistemas de turnos, automatizaciones y chatbots que ordenan tu negocio y te ahorran tareas repetitivas.',
    bullets: ['Turnos y reservas online', 'Automatizaciones y avisos', 'Chatbots para WhatsApp y redes'],
    hasPage: true,
  },
  {
    slug: 'mantenimiento-web',
    name: 'Mantenimiento Web, Rediseño y Migraciones',
    formLabel: 'Mantenimiento / Rediseño',
    icon: 'wrench',
    summary: 'Mejoro tu página web actual sin empezar de cero: más rápida, segura y al día.',
    bullets: [
      'Optimización de velocidad',
      'Migración de plataforma sin perder posicionamiento',
      'Correcciones y mejoras continuas',
    ],
    hasPage: false,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);