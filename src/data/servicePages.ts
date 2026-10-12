import type { FaqItem } from './faqs';
import type { ServiceSlug } from './services';
import type { ImageMetadata } from 'astro';
import tiendasHero from '../assets/services/tiendas-hero.avif';
import tiendasStart from '../assets/services/tiendas-start.avif';

export type FeatureIcon = 'palette' | 'package' | 'credit-card' | 'truck' | 'gauge' | 'graduation-cap';

// Contenido de cada página de servicio (/servicios/[slug]).
// Para sumar una página: completá su entrada acá y poné `hasPage: true` en services.ts.

export interface ServicePage {
  /** <title> de la página (ideal: menos de 60 caracteres) */
  seoTitle: string;
  /** Meta description (ideal: menos de 155 caracteres) */
  seoDescription: string;
  h1: string;
  subtitle: string;
  /** 3 datos breves y verdaderos para ese servicio */
  badges: string[];
  ctaLabel: string;
  /** Bloque de respuesta directa (clave para que las IAs te citen) */
  answer: {
    heading: string;
    text: string;
    forYou: string[];
    notForYou: string[];
  };
  includes: { title: string; text: string; icon?: FeatureIcon }[];
  heroImage?: { src: ImageMetadata; alt: string };
  startImage?: { src: ImageMetadata; alt: string };
  includesNote?: string;
  /** Frase de la franja de CTA que va después de "Qué incluye" */
  midCta: string;
  /** Bloque propio de cada servicio (evita contenido duplicado entre páginas) */
  deepDive?: {
    eyebrow: string;
    title: string;
    intro: string;
    table?: {
      columns: string[];
      rows: { label: string; cells: string[] }[];
    };
    footnote?: string;
  };
  needs: { title: string; text: string }[];
  faqs: FaqItem[];
}

export const servicePages: Partial<Record<ServiceSlug, ServicePage>> = {
  'tiendas-online': {
    seoTitle: 'Crear tienda online (Tiendanube, Shopify) | Polinacodes',
    seoDescription:
      'Creo tu tienda online en Tiendanube, Shopify o WooCommerce, con pagos y envíos según tu país. Partner de Tiendanube. Pedí tu presupuesto sin compromiso.',
    h1: 'Creación de tiendas online en Tiendanube, Shopify y WooCommerce',
    subtitle:
      'Tiendas rápidas, fáciles de administrar y listas para cobrar en tu país. Trabajás directo conmigo, de la idea al lanzamiento.',
    heroImage: { src: tiendasHero, alt: 'Laptop con tienda online' },
      badges: [
      'Partner de Tiendanube',
      'Pagos y envíos según tu país',
      'Tienda a tu nombre, con todos los accesos',
    ],
    ctaLabel: 'Pedir presupuesto para tu tienda',

    answer: {
      heading: 'Crear tu tienda online conmigo',
      text: 'Creo tiendas online en Tiendanube, Shopify y WooCommerce para negocios de Argentina, Latinoamérica y España. Soy desarrolladora web freelance y partner de Tiendanube. Me ocupo del diseño, la carga del catálogo, los medios de pago, los envíos y la velocidad, y al final te entrego la tienda a tu nombre, con todos los accesos, para que la administres vos.',
      forYou: [
        'Tenés productos o servicios para vender y querés lanzar tu primera tienda.',
        'Hoy vendés por redes sociales o WhatsApp y querés una tienda propia.',
        'Tu tienda actual es lenta, confusa o difícil de administrar.',
        'Querés vender en tu país o en varios, con los medios de pago que corresponden a cada uno.',
      ],
      notForYou: [
        'Buscás una tienda con plantilla sin personalizar y al precio más bajo posible.',
        'Necesitás un marketplace con muchos vendedores publicando a la vez.',
        'Querés una tienda lista en 24 horas.',
      ],
    },

    includes: [
      {
        icon: 'palette',
        title: 'Diseño adaptado a tu marca',
        text: 'Personalizo la tienda con tu logo, tus colores y tu estilo, pensada primero para celular.',
      },
      {
        icon: 'package',
        title: 'Catálogo y categorías',
        text: 'Armo la estructura del catálogo y cargo los productos iniciales.',
      },
      {
        icon: 'credit-card',
        title: 'Medios de pago',
        text: 'Configuro los medios de pago que corresponden a tu país, por ejemplo Mercado Pago, PayPal o Stripe, según disponibilidad.',
      },
      {
        icon: 'truck',
        title: 'Envíos y retiro',
        text: 'Dejo configuradas las opciones de envío y retiro que uses.',
      },
      {
        icon: 'gauge',
        title: 'Velocidad y SEO técnico',
        text: 'Optimizo imágenes, títulos y descripciones y la estructura del catálogo para que cargue rápido y Google lo entienda.',
      },
      {
        icon: 'graduation-cap',
        title: 'Capacitación y entrega',
        text: 'Te enseño a administrar la tienda y te entrego todo a tu nombre: cuenta, dominio y accesos.',
      },
    ],
    includesNote:
      'No están incluidos: la suscripción de la plataforma, las comisiones de los medios de pago ni la fotografía de producto.',
    midCta: '¿Tenés productos y querés empezar a vender?',

    deepDive: {
      eyebrow: 'ELEGIR PLATAFORMA',
      title: '¿Tiendanube, Shopify o WooCommerce?',
      intro:
        'No hay una plataforma mejor para todos. Esta es una guía rápida; la decisión final la tomamos juntos según tu catálogo, tu mercado y tu presupuesto.',
      table: {
        columns: ['Tiendanube', 'Shopify', 'WooCommerce'],
        rows: [
          {
            label: 'Ideal para',
            cells: [
              'Emprendimientos y pymes de Latinoamérica que quieren empezar rápido',
              'Marcas que venden a varios países o planean crecer mucho',
              'Negocios que necesitan personalizar cada detalle',
            ],
          },
          {
            label: 'Administración',
            cells: [
              'Muy simple, pensada para personas no técnicas',
              'Simple, con muchas herramientas',
              'Flexible, pero requiere más conocimiento técnico',
            ],
          },
          {
            label: 'Medios de pago',
            cells: [
              'Integraciones con medios locales según tu país',
              'Gran variedad de pasarelas; la disponibilidad depende del país',
              'Muchas pasarelas disponibles mediante plugins',
            ],
          },
          {
            label: 'Costos recurrentes',
            cells: [
              'Suscripción mensual de la plataforma',
              'Suscripción mensual, más apps opcionales',
              'Hosting y dominio, más plugins si los necesitás',
            ],
          },
          {
            label: 'Mantenimiento técnico',
            cells: [
              'Lo gestiona la plataforma',
              'Lo gestiona la plataforma',
              'Actualizaciones y seguridad a cargo tuyo o de un plan de mantenimiento',
            ],
          },
        ],
      },
      footnote:
        'Los precios, planes y comisiones de cada plataforma y de los medios de pago los define cada proveedor y cambian con el tiempo. Los revisamos juntos antes de elegir.',
    },

    needs: [
      { title: 'Identidad de marca', text: 'Tu logo y tus colores. Si todavía no los tenés, definimos una paleta juntos.' },
      { title: 'Catálogo base', text: 'Nombre, precio, descripción y fotos de tus productos. Podemos empezar con algunos y sumar el resto después.' },
      { title: 'Cobros y envíos', text: 'Qué medios de pago querés usar y cómo hacés tus envíos.' },
      { title: 'Cuentas y accesos', text: 'Tu dominio y tu cuenta en la plataforma, si ya los tenés. Si no, te guío para crearlos a tu nombre.' },
      { title: 'Tiendas que te gusten', text: 'Dos o tres tiendas de referencia, para entender tu estilo.' },
    ],

    startImage: { src: tiendasStart, alt: 'Vista desde arriba de un escritorio con un cuaderno abierto mostrando el diseño a mano de una ficha de producto de tienda online, acompañado de una laptop y muestras de color.' },

    faqs: [
      {
        question: '¿Cuánto cuesta crear una tienda online?',
        answer:
          'Depende de la plataforma, la cantidad de productos, el diseño y las integraciones que necesites. Escribime desde el formulario con tu idea y te envío un presupuesto claro, sin compromiso.',
      },
      {
        question: '¿Cobrás comisión por cada venta?',
        answer:
          'No cobro comisión sobre tus ventas: mi trabajo se paga por proyecto. Lo que sí pueden cobrar son la plataforma (suscripción) y los medios de pago (comisión por transacción). Los revisamos juntos antes de elegir, para que no haya sorpresas.',
      },
      {
        question: '¿Voy a poder cargar y editar productos yo?',
        answer:
          'Sí. La tienda queda a tu nombre y te muestro cómo cargar productos, cambiar precios y gestionar pedidos.',
      },
      {
        question: '¿Puedo vender a otros países?',
        answer:
          'Sí, depende de la plataforma y de los medios de pago disponibles en tu país. Shopify suele ser la opción más flexible para vender al exterior; lo definimos en el diagnóstico.',
      },
      {
        question: '¿Podés migrar mi tienda actual?',
        answer:
          'Sí. Cuidamos las URLs y el posicionamiento para no perder visitas.',
      },
      {
        question: '¿Cuánto tarda en estar lista?',
        answer:
          'Depende de la cantidad de productos y del diseño. Plazo típico 7-10 días hábiles, tiendas más complejas pueden tardar un poco más. Después del diagnóstico te paso un plazo concreto.',
      },
    ],
  },
};
