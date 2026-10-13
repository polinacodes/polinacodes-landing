import type { FaqItem } from './faqs';
import type { ServiceSlug } from './services';
import type { ImageMetadata } from 'astro';
import tiendasHero from '../assets/services/tiendas-hero.avif';
import tiendasStart from '../assets/services/tiendas-start.avif';
import landingsHero from '../assets/services/landings-hero.avif';
import landingsStart from '../assets/services/landings-start.avif';

export type FeatureIcon = 'palette' | 'package' | 'credit-card' | 'truck' | 'gauge' | 'graduation-cap' | 'mail' | 'search' | 'smartphone' | 'pencil';
export type SpotlightIcon = 'target' | 'zap' | 'shield-check' | 'pointer';
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
  spotlight?: {
    eyebrow: string;
    title: string;
    intro: string;
    points: { title: string; text: string; icon: SpotlightIcon }[];
    useCasesTitle?: string;
    useCases?: string[];
    ctaLabel: string;
    ctaNote?: string;
  };
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

  'landing-pages': {
    seoTitle: 'Diseño de landing pages y webs corporativas | Polinacodes',
    seoDescription:
      'Diseño y desarrollo landing pages y páginas web para empresas, a medida o en WordPress. Enfoque en conversión y SEO técnico. Pedí tu presupuesto.',
    h1: 'Diseño de landing pages y páginas web corporativas',
    subtitle:
      'Sitios rápidos y claros, pensados para que quien te visita entienda lo que ofrecés y te contacte. A medida o en WordPress, según lo que necesite tu proyecto.',
    heroImage: { src: landingsHero, alt: 'Laptop mostrando en pantalla una landing page' },

    badges: [
      'Diseño pensado para convertir',
      'A medida o en WordPress',
      'SEO técnico desde la base',
    ],
    ctaLabel: 'Pedir presupuesto para tu web',

    answer: {
      heading: 'Tu página web, hecha para convertir',
      text: 'Diseño y desarrollo landing pages y páginas web corporativas para negocios y profesionales de Argentina, Latinoamérica y España. Soy desarrolladora web freelance y trabajo con la tecnología que mejor le convenga a tu proyecto: código a medida, WordPress o constructores como Wix. Me ocupo del diseño, el desarrollo, la velocidad y el SEO técnico, y al final te entrego una web que explica rápido lo que ofrecés y hace que te contacten.',
      forYou: [
        'Necesitás una página clara que explique lo que ofrecés y te traiga consultas.',
        'Querés una landing para una campaña, un lanzamiento o un servicio puntual.',
        'Tu web actual es lenta, está desactualizada o no se ve bien en el celular.',
        'Querés que tu sitio esté bien preparado para aparecer en Google y en las respuestas de la IA.',
      ],
      notForYou: [
        'Buscás una web lista en un día, sin pasar por un proceso de diseño.',
        'Esperás aparecer primero en Google de un día para otro: el posicionamiento lleva tiempo.',
        'Querés una web armada con una plantilla genérica, sin pensar en tu marca ni en tu público.',
        'Todavía no sabés qué querés ofrecer ni a quién. Antes de la web conviene definir tu propuesta.',
      ],
    },

    includes: [
      {
        title: 'Diseño a medida',
        text: 'Diseño pensado para tu marca y para que quien te visita entienda rápido lo que ofrecés y dé el siguiente paso. La cantidad de páginas y secciones la definimos juntos.',
        icon: 'palette',
      },
      {
        title: 'Desarrollo rápido y limpio',
        text: 'Una web liviana que carga rápido y funciona bien, construida con la tecnología que mejor se adapte a tu proyecto.',
        icon: 'gauge',
      },
      {
        title: 'Contacto y redes',
        text: 'Formulario de contacto que te llega por email, con protección anti-spam, y enlaces a tus redes sociales. Si querés, también un botón de WhatsApp.',
        icon: 'mail',
      },
      {
        title: 'SEO desde la base',
        text: 'Dejo lista la parte técnica para que Google entienda tu web y reviso tus textos para que estén bien orientados. Si querés ir más lejos, puedo sumar SEO avanzado y GEO, para aparecer también en las respuestas de la IA.',
        icon: 'search',
      },
      {
        title: 'Adaptada a celular',
        text: 'Se ve y funciona bien en celulares, tablets y computadoras.',
        icon: 'smartphone',
      },
      {
        title: 'Cómo actualizás tu web',
        text: 'Con WordPress o Wix editás vos desde un panel. Con una web a medida, me pedís los cambios y los hago yo.',
        icon: 'pencil',
      },
    ],
    includesNote:
      'El dominio y el hosting no están incluidos: tienen que quedar a tu nombre, y te asesoro para contratarlos.',
    midCta: '¿Querés una web que te traiga consultas?',

    deepDive: {
      eyebrow: 'ELEGIR TECNOLOGÍA',
      title: '¿Código a medida, WordPress u otra opción?',
      intro:
        'No hay una tecnología mejor para todos: depende de cuánto vas a actualizar el contenido y de tu presupuesto. Esta es una guía rápida; lo definimos juntos en el diagnóstico.',
      table: {
        columns: ['Código a medida (Astro, Next.js, React)', 'WordPress', 'Wix y otros constructores'],
        rows: [
          {
            label: 'Ideal para',
            cells: [
              'Sitios que priorizan velocidad y un diseño único',
              'Sitios que se actualizan seguido, con blog o novedades',
              'Presencia simple, rápida de armar y con presupuesto ajustado',
            ],
          },
          {
            label: 'Edición de contenido',
            cells: [
              'Los cambios los hago yo',
              'Panel visual para editar textos e imágenes (Elementor, Themify y otros)',
              'Editor visual propio de la plataforma',
            ],
          },
          {
            label: 'Velocidad',
            cells: [
              'Muy alta: se envía solo lo necesario',
              'Buena si se optimiza (caché, buen hosting y pocos plugins)',
              'Depende de la plataforma y del diseño, con menos control técnico',
            ],
          },
          {
            label: 'Mantenimiento',
            cells: [
              'Menos piezas que actualizar',
              'Hay que actualizar WordPress, el tema y los plugins periódicamente',
              'Lo gestiona la plataforma',
            ],
          },
          {
            label: 'Costos recurrentes',
            cells: [
              'Hosting y dominio',
              'Hosting y dominio, más plugins o licencias premium si hacen falta',
              'Suscripción de la plataforma, más el dominio',
            ],
          },
        ],
      },
      footnote:
        'Los costos de hosting, dominio, plugins y suscripciones dependen de cada proveedor y cambian con el tiempo. Los revisamos juntos antes de elegir.',
    },

    spotlight: {
      eyebrow: 'ALTA CONVERSIÓN',
      title: '¿Necesitás una landing de alta conversión?',
      intro:
        'La conversión es el porcentaje de visitantes que hace lo que querés que hagan: escribirte, pedir un presupuesto o comprar. Una landing de alta conversión (CRO) se diseña con un solo objetivo, para que quien llega entienda tu oferta y dé el siguiente paso.',
      points: [
        {
          icon: 'target',
          title: 'Un solo objetivo',
          text: 'Cada landing tiene una acción principal. Todo lo demás se ordena para llevar a ese paso.',
        },
        {
          icon: 'zap',
          title: 'Un mensaje que se entiende rápido',
          text: 'Un titular y una propuesta claros desde el primer vistazo, antes de que el visitante decida irse.',
        },
        {
          icon: 'shield-check',
          title: 'Confianza en los momentos justos',
          text: 'Testimonios, casos y datos reales ubicados donde el visitante suele dudar.',
        },
        {
          icon: 'pointer',
          title: 'Botones y formularios sin vueltas',
          text: 'Llamados a la acción visibles y formularios cortos, cómodos de usar desde el celular.',
        },
      ],
      useCasesTitle: 'Ideal para',
      useCases: [
        'Campañas de publicidad',
        'Lanzamientos',
        'Captar consultas o reservas',
        'Promociones por tiempo limitado',
      ],
      ctaLabel: 'Quiero mi landing de alta conversión',
      ctaNote: 'Contame tu objetivo y te cuento cómo lo encararía.',
    },

    needs: [
      {
        title: 'Identidad de marca',
        text: 'Tu logo (idealmente en vectorial o PNG) y tus colores. Si todavía no los tenés, definimos una paleta juntos.',
      },
      {
        title: 'Textos y estructura',
        text: 'Si ya tenés los textos, los reviso y los ajusto para el posicionamiento. Si no, los armamos juntos a partir de lo que me cuentes de tu negocio.',
      },
      {
        title: 'Fotos y recursos',
        text: 'Fotos de tus servicios, tu equipo o tu espacio de trabajo. Si no tenés, puedo crear imágenes con IA según lo que necesites.',
      },
      {
        title: 'Dominio y hosting',
        text: 'Los accesos a tu dominio y tu hosting, si ya los tenés. Si no, te asesoro para contratarlos a tu nombre.',
      },
      {
        title: 'Webs de referencia',
        text: 'Dos o tres páginas que te gusten, para alinear el estilo desde el principio.',
      },
    ],

    startImage: { src: landingsStart, alt: 'Escritorio de madera con una libreta que muestra el boceto a mano de una landing page (hero, servicios, precios y contacto), junto a una laptop con código, un café y paletas de colores.' },

    faqs: [
      {
        question: '¿Qué diferencia hay entre una landing page y una página web?',
        answer:
          'Una landing page está pensada para un único objetivo (por ejemplo, conseguir consultas o vender un servicio) y suele ser corta y directa. Una página web corporativa tiene varias secciones o páginas, como inicio, servicios, nosotros y contacto, y presenta a toda la empresa.',
      },
      {
        question: '¿Cuánto cuesta una landing page o una página web corporativa?',
        answer:
          'Depende de la cantidad de páginas, el diseño, las funcionalidades y la tecnología elegida. Escribime desde el formulario con tu idea y te envío un presupuesto claro, sin compromiso.',
      },
      {
        question: '¿Cuánto tarda en estar lista?',
        answer:
          'En la mayoría de los casos, entre 5 y 10 días, según la cantidad de páginas. Los sitios más complejos pueden llevar más tiempo. Los plazos corren desde que tengo el material (logo, textos e imágenes), y el plazo exacto te lo paso después del diagnóstico.',
      },
      {
        question: '¿Qué me conviene: una web a medida, WordPress o Wix?',
        answer:
          'Depende de tu objetivo. Si priorizás velocidad, un diseño único y poco mantenimiento, conviene una web a medida. Si necesitás una web que crezca con blog o novedades, WordPress es una buena base. Y si buscás algo simple y económico, Wix puede alcanzar. En el diagnóstico te recomiendo la opción que mejor encaje con tu proyecto.',
      },
      {
        question: '¿Quién actualiza los textos y las imágenes después?',
        answer:
          'En WordPress y en Wix los editás vos desde un panel visual. En una web a medida, me pedís los cambios y los hago yo, ya sea de forma puntual o con un plan de mantenimiento.',
      },
      {
        question: '¿El servicio incluye dominio y hosting?',
        answer:
          'No, porque tienen que quedar a tu nombre. Te asesoro paso a paso para contratarlos.',
      },
      {
        question: '¿Qué SEO incluye?',
        answer:
          'Todas las webs salen con SEO técnico básico: títulos y descripciones, estructura de encabezados, sitemap y vista previa al compartir en redes. También reviso que tus textos estén bien orientados al posicionamiento. Si querés ir más lejos, hago SEO avanzado y GEO, que es la optimización para aparecer en las respuestas de buscadores con IA. Los alcances dependen de cada proyecto.',
      },
      {
        question: '¿Puedo agregar páginas o secciones más adelante?',
        answer:
          'Sí. El sitio se arma de forma que se pueda ampliar cuando lo necesites. Los cambios se cotizan según su alcance.',
      },
    ],
  },
  

};
