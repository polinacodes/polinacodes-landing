import type { FaqItem } from './faqs';
import type { ServiceSlug } from './services';
import type { ImageMetadata } from 'astro';
import tiendasHero from '../assets/services/tiendas-hero.avif';
import tiendasStart from '../assets/services/tiendas-start.avif';
import landingsHero from '../assets/services/landings-hero.avif';
import landingsStart from '../assets/services/landings-start.avif';
import sistemasHero from '../assets/services/sistemas-hero.avif';
import sistemasStart from '../assets/services/sistemas-start.avif';
import mantenimientoHero from '../assets/services/mantenimiento-hero.avif';
import mantenimientoStart from '../assets/services/mantenimiento-start.avif';

export type FeatureIcon =
  | 'palette' | 'package' | 'credit-card' | 'truck' | 'gauge' | 'graduation-cap'
  | 'mail' | 'search' | 'smartphone' | 'pencil'
  | 'calendar-check' | 'bell' | 'workflow' | 'message-circle' | 'layout-dashboard' | 'list-checks' | 'clipboard-check' | 'wrench';

export type SpotlightIcon =
  | 'target' | 'zap' | 'shield-check' | 'pointer'
  | 'message' | 'bell' | 'workflow' | 'calendar'
  | 'gauge' | 'search' | 'palette';
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
  includesHeading?: { eyebrow: string; title: string };
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
  
  'sistemas-a-medida': {
    seoTitle: 'Sistemas a medida, turnos y automatizaciones | Polinacodes',
    seoDescription:
      'Desarrollo sistemas a medida: turnos y reservas online, automatizaciones y chatbots para WhatsApp y redes. Pedí tu presupuesto sin compromiso.',
    h1: 'Sistemas a medida: turnos online, automatizaciones y chatbots',
    subtitle:
      'Herramientas pensadas para tu forma de trabajar: que tus clientes reserven solos, que las tareas repetitivas se hagan solas y que nadie se quede sin respuesta.',
    heroImage: { src: sistemasHero, alt: 'Laptop mostrando un panel de administración de turnos y reservas online' },
    startImage: { src: sistemasStart, alt: 'Escritorio con un cuaderno abierto mostrando un diagrama de flujo de un sistema a medida, junto a una laptop y un café' },
    badges: [
      'Hecho a medida de tu proceso',
      'Empezamos por lo más simple',
      'Trabajás directo conmigo',
    ],
    ctaLabel: 'Pedir presupuesto para tu sistema',

    includesHeading: {
      eyebrow: 'QUÉ PUEDO CONSTRUIR',
      title: 'Qué puedo construir para tu negocio',
    },

    answer: {
      heading: 'Un sistema hecho para tu forma de trabajar',
      text: 'Desarrollo sistemas a medida para negocios y profesionales de Argentina, Latinoamérica y España: turnos y reservas online, automatizaciones que ahorran tareas repetitivas y chatbots para atender por WhatsApp y redes. Soy desarrolladora web full-stack freelance: diseño y programo desde la pantalla que usan tus clientes hasta el panel con el que administrás todo, y te acompaño desde que definimos qué necesitás hasta que el sistema está funcionando.',
      forYou: [
        'Hoy agendás turnos o reservas por WhatsApp, llamadas o planillas y querés ordenarlo.',
        'Repetís siempre las mismas tareas (avisos, mails, copiar datos) y querés que se hagan solas.',
        'Querés responder consultas frecuentes por WhatsApp o redes sin estar todo el día pendiente.',
        'Las herramientas que existen no se adaptan a cómo trabajás.',
      ],
      notForYou: [
        'Buscás un programa ya hecho para usar hoy mismo. En ese caso te recomiendo una herramienta existente.',
        'Querés tener todo terminado de un día para otro, sin pasar por una primera versión.',
        'Esperás que un chatbot reemplace por completo la atención de una persona: es un apoyo, no un sustituto.',
      ],
    },

    includes: [
      {
        title: 'Turnos y reservas online',
        text: 'Tus clientes eligen día y horario desde tu web, sin mensajes de ida y vuelta. Vos ves y gestionás todo desde un panel.',
        icon: 'calendar-check',
      },
      {
        title: 'Avisos y recordatorios',
        text: 'Confirmaciones y recordatorios automáticos por email y, según el caso, por WhatsApp, para que nadie se olvide de su turno.',
        icon: 'bell',
      },
      {
        title: 'Integraciones',
        text: 'Conecto tu web, tu email, tus planillas y otras herramientas para que los datos pasen solos de un lugar a otro.',
        icon: 'workflow',
      },
      {
        title: 'Chatbots para WhatsApp y redes',
        text: 'Respondo las consultas frecuentes automáticamente y derivo a una persona lo que lo necesita. Dependen de las reglas de cada plataforma, y lo vemos en cada caso.',
        icon: 'message-circle',
      },
      {
        title: 'Panel para administrar',
        text: 'Un panel simple para ver y gestionar turnos, clientes y datos, con distintos permisos si trabajás en equipo.',
        icon: 'layout-dashboard',
      },
      {
        title: 'Se construye por etapas',
        text: 'Empezamos por una primera versión simple y la vamos ampliando, para que empieces a usarlo pronto y no pagues por cosas que no necesitás.',
        icon: 'list-checks',
      },
    ],
    includesNote:
      'Los costos de plataformas externas (por ejemplo WhatsApp Business, hosting o herramientas de automatización) los define cada proveedor y se suman al desarrollo. Los revisamos juntos antes de empezar.',
    midCta: '¿Tenés una tarea que te quita tiempo todos los días?',

    deepDive: {
      eyebrow: 'ELEGIR CAMINO',
      title: '¿Sistema a medida, herramienta lista o automatización?',
      intro:
        'No siempre hace falta programar un sistema desde cero. Te recomiendo la opción que mejor resuelva tu caso, aunque no sea la más grande.',
      table: {
        columns: ['Sistema a medida', 'Herramienta ya hecha', 'Automatización con herramientas existentes'],
        rows: [
          {
            label: 'Ideal para',
            cells: [
              'Procesos propios que ninguna herramienta cubre bien',
              'Necesidades comunes que ya resuelve un producto del mercado',
              'Conectar herramientas que ya usás y evitar tareas manuales',
            ],
          },
          {
            label: 'Adaptación a tu forma de trabajar',
            cells: [
              'Total: se construye alrededor de tu proceso',
              'Limitada a lo que ofrece el producto',
              'Media: depende de lo que permitan las herramientas conectadas',
            ],
          },
          {
            label: 'Tiempo de arranque',
            cells: [
              'Más largo: se desarrolla por etapas',
              'Inmediato',
              'Rápido',
            ],
          },
          {
            label: 'Costos recurrentes',
            cells: [
              'Hosting y mantenimiento',
              'Suscripción al producto',
              'Suscripción a las herramientas de automatización',
            ],
          },
          {
            label: 'Control',
            cells: [
              'Mayor control sobre el sistema y los datos',
              'Dependés del proveedor',
              'Dependés de las herramientas conectadas',
            ],
          },
        ],
      },
      footnote:
        'Los costos y planes de cada herramienta los define su proveedor y cambian con el tiempo. Siempre te recomiendo la opción más simple que resuelva tu necesidad.',
    },

    spotlight: {
      eyebrow: 'AUTOMATIZACIONES Y CHATBOTS',
      title: '¿Querés dejar de repetir las mismas tareas?',
      intro:
        'Si pasás el día respondiendo lo mismo, copiando datos de un lado a otro o recordando turnos, hay tareas que pueden hacerse solas. Diseño automatizaciones y chatbots que se encargan de lo repetitivo y te dejan el tiempo para lo importante.',
      points: [
        {
          icon: 'message',
          title: 'Consultas frecuentes',
          text: 'Un chatbot responde precios, horarios y dudas comunes, y te pasa la conversación cuando hace falta una persona.',
        },
        {
          icon: 'bell',
          title: 'Avisos automáticos',
          text: 'Confirmaciones, recordatorios y seguimientos que salen solos en el momento justo.',
        },
        {
          icon: 'workflow',
          title: 'Datos que viajan solos',
          text: 'Lo que llega por tu web o por WhatsApp se guarda en tus planillas o herramientas, sin copiar y pegar.',
        },
        {
          icon: 'calendar',
          title: 'Turnos sin vueltas',
          text: 'Tus clientes reservan solos y vos ves todo ordenado en un panel.',
        },
      ],
      useCasesTitle: 'Ideal para',
      useCases: [
        'Consultorios y profesionales',
        'Servicios con turnos',
        'Atención por WhatsApp',
        'Tareas repetitivas del día a día',
      ],
      ctaLabel: 'Quiero automatizar mi negocio',
      ctaNote: 'Contame qué tarea te quita más tiempo y vemos cómo resolverla.',
    },

    needs: [
      {
        title: 'Cómo trabajás hoy',
        text: 'Contame cómo manejás tus turnos, consultas o tareas: en un cuaderno, en planillas, por WhatsApp, como sea. Con eso entiendo tu proceso.',
      },
      {
        title: 'Qué querés mejorar',
        text: 'Las tareas que más tiempo te llevan o los problemas que se repiten, como olvidos, mensajes perdidos o datos desordenados.',
      },
      {
        title: 'Quién lo va a usar',
        text: 'Si lo usás solo vos, tu equipo o también tus clientes, para definir las pantallas y los permisos.',
      },
      {
        title: 'Herramientas que ya usás',
        text: 'Tu web, tu email, tus planillas o tu cuenta de WhatsApp Business, si las tenés, para poder conectarlas.',
      },
      {
        title: 'Sistemas que te gusten',
        text: 'Ejemplos de apps o sitios de reservas que te resulten cómodos, para entender qué esperás.',
      },
    ],

    faqs: [
      {
        question: '¿Cuánto cuesta un sistema a medida?',
        answer:
          'Depende del alcance: qué funciones necesitás, cuántas personas lo usan y con qué herramientas tiene que conectarse. Escribime desde el formulario con tu idea y te envío un presupuesto claro, sin compromiso.',
      },
      {
        question: '¿Cuánto tarda en estar listo?',
        answer:
          'Depende del alcance. Un sistema de turnos simple se resuelve antes que uno con muchas funciones. Trabajamos por etapas, así que podés empezar a usar una primera versión antes de que esté todo terminado. El plazo exacto te lo paso después del diagnóstico.',
      },
      {
        question: '¿Puedo empezar con algo chico y ampliarlo después?',
        answer:
          'Sí, y es lo que recomiendo. Empezamos por lo que más te ordena la vida y vamos sumando funciones cuando las necesites, sin rehacer lo anterior.',
      },
      {
        question: '¿Me conviene un sistema a medida o una herramienta que ya existe?',
        answer:
          'Depende de tu caso. Si una herramienta ya hecha resuelve lo que necesitás, te lo digo: no tiene sentido programar algo que ya existe. El sistema a medida vale la pena cuando tu forma de trabajar es particular o necesitás conectar varias cosas.',
      },
      {
        question: '¿Puedo tener un chatbot que responda por WhatsApp?',
        answer:
          'Sí. Lo evalúo según tu caso, porque funciona a través de las plataformas oficiales (como WhatsApp Business), que tienen sus propias reglas y costos. Un chatbot responde lo frecuente y deriva lo importante a una persona. Escribime tu caso y te cuento qué opción conviene.',
      },
      {
        question: '¿Qué pasa con mis datos y los de mis clientes?',
        answer:
          'Se tratan con cuidado y solo se guarda lo necesario para que el sistema funcione. La conexión es segura (HTTPS), los accesos están protegidos con usuario y contraseña, y cada persona ve solo lo que le corresponde según sus permisos. Los datos se alojan en servicios reconocidos, con copias de seguridad periódicas, y el sistema incluye el aviso de privacidad y el consentimiento que corresponden. Para cuestiones legales específicas de tu actividad, conviene consultar también con un profesional.',
      },
      {
        question: '¿Quién mantiene el sistema después de entregarlo?',
        answer:
          'Podés pedirme ajustes y mejoras puntuales o contratar un plan de mantenimiento, para que todo siga funcionando y actualizado.',
      },
    ],
  },

  'mantenimiento-web': {
    seoTitle: 'Mantenimiento web y rediseño de páginas | Polinacodes',
    seoDescription:
      'Mantenimiento web, rediseño UI/UX, optimización SEO y GEO y migraciones para mejorar tu página actual sin empezar de cero. Pedí un diagnóstico.',
    h1: 'Mantenimiento web, rediseño y optimización de tu página actual',
    subtitle:
      'Mejoro lo que ya tenés sin empezar de cero: más rápida, más clara, mejor posicionada y siempre al día. Vos elegís qué mejorar.',
    badges: [
      'Mejoras a tu medida',
      'Diagnóstico inicial gratuito',
      'Sin empezar de cero',
    ],
    ctaLabel: 'Quiero un diagnóstico de mi web',
    shortCta: 'Quiero un diagnóstico de mi web',
    heroImage: {
      src: mantenimientoHero,
      alt: 'Mockup de una página web renovada mostrada en una laptop',
    },

    includesHeading: {
      eyebrow: 'QUÉ PUEDO MEJORAR',
      title: 'Qué puedo mejorar en tu web',
    },

    answer: {
      heading: 'Mejorar tu web sin empezar de cero',
      text: 'Mejoro y mantengo páginas web existentes para negocios y profesionales de Argentina, Latinoamérica y España: rediseño UI/UX, adaptación a celular, optimización de velocidad, SEO y GEO, migraciones de plataforma y mantenimiento continuo. Soy desarrolladora web freelance: reviso tu sitio, te cuento qué conviene mejorar y hago solo lo que vos elijas.',
      forYou: [
        'Tu web se ve vieja o confusa y querés renovar su diseño sin rehacer todo.',
        'Tu sitio es lento o no se ve bien en el celular.',
        'No aparecés en Google o querés prepararte para las respuestas de la IA.',
        'Querés mudar tu web a otra plataforma sin perder tu posicionamiento.',
        'Tu web necesita cuidado constante y no tenés quién se ocupe.',
      ],
      notForYou: [
        'Querés una web totalmente nueva desde cero: en ese caso conviene un proyecto nuevo y no un mantenimiento.',
        'Buscás soporte las 24 horas, todos los días.',
        'Esperás que mejorar el SEO te posicione de un día para otro: los resultados llevan tiempo.',
      ],
    },

    includes: [
      {
        title: 'Diagnóstico de tu web',
        text: 'Reviso tu sitio, te cuento qué se puede mejorar y qué conviene hacer primero. Vos elegís qué encargar.',
        icon: 'clipboard-check',
      },
      {
        title: 'Rediseño UI/UX',
        text: 'Renuevo el diseño y la experiencia de uso para que tu web sea más clara, moderna y fácil de recorrer.',
        icon: 'palette',
      },
      {
        title: 'Adaptación a celular',
        text: 'Hago que tu web se vea y funcione bien en celulares, tablets y computadoras.',
        icon: 'smartphone',
      },
      {
        title: 'Velocidad y rendimiento',
        text: 'Optimizo imágenes, código y recursos para que tu web cargue más rápido.',
        icon: 'gauge',
      },
      {
        title: 'SEO y GEO',
        text: 'Mejoro la parte técnica y los textos para que Google te entienda mejor, y preparo tu sitio para aparecer también en las respuestas de la IA.',
        icon: 'search',
      },
      {
        title: 'Migraciones y mantenimiento',
        text: 'Muevo tu web a otra plataforma cuidando tu posicionamiento, y me ocupo de actualizaciones, seguridad y mejoras continuas.',
        icon: 'wrench',
      },
    ],
    includesNote:
      'No hace falta hacer todo junto: las mejoras son las que vos encargues. Los costos de hosting, dominio y plugins los define cada proveedor.',
    midCta: '¿Tu web necesita una puesta a punto?',

    deepDive: {
      eyebrow: 'ELEGIR OPCIÓN',
      title: '¿Mejoras puntuales, mantenimiento o rediseño?',
      intro:
        'Cada web necesita algo distinto. Esta es una guía rápida; después del diagnóstico te recomiendo la opción que mejor encaje con tu caso.',
      table: {
        columns: ['Mejoras puntuales', 'Mantenimiento continuo', 'Rediseño completo'],
        rows: [
          {
            label: 'Ideal para',
            cells: [
              'Resolver algo concreto: una corrección, una mejora de velocidad o un ajuste de SEO',
              'Webs que necesitan cuidado constante y cambios frecuentes',
              'Webs con un diseño antiguo o una experiencia que ya no funciona',
            ],
          },
          {
            label: 'Qué incluye',
            cells: [
              'Solo lo que encargues',
              'Actualizaciones, seguridad y mejoras periódicas, según lo que acordemos',
              'Nuevo diseño y experiencia de uso, conservando tu contenido y tu posicionamiento',
            ],
          },
          {
            label: 'Cómo se contrata',
            cells: [
              'Por trabajo, con presupuesto previo',
              'Con un plan acordado con vos',
              'Como un proyecto, con presupuesto previo',
            ],
          },
        ],
      },
      footnote:
        'Podés combinar opciones: por ejemplo, empezar con un rediseño y después sumar un plan de mantenimiento.',
    },

    spotlight: {
      eyebrow: 'DIAGNÓSTICO DE TU WEB',
      title: '¿No sabés qué mejorar de tu web?',
      intro:
        'Empezamos por un diagnóstico gratuito: reviso tu sitio, te muestro qué está frenando tus resultados y qué cambios conviene hacer primero. Después vos decidís qué encargar.',
      points: [
        {
          icon: 'gauge',
          title: 'Velocidad y rendimiento',
          text: 'Cómo carga tu web y qué la hace lenta.',
        },
        {
          icon: 'search',
          title: 'SEO y GEO',
          text: 'Qué le falta a tu sitio para que Google y las IAs lo entiendan mejor.',
        },
        {
          icon: 'palette',
          title: 'Diseño y uso',
          text: 'Si tu web es clara, se ve bien en el celular y guía al visitante.',
        },
        {
          icon: 'shield-check',
          title: 'Seguridad y actualizaciones',
          text: 'Si todo está al día y bien protegido.',
        },
      ],
      useCasesTitle: 'Qué recibís',
      useCases: [
        'Qué mejorar y en qué orden',
        'Los cambios y optimizaciones posibles',
        'Un presupuesto de lo que elijas',
      ],
      ctaLabel: 'Quiero un diagnóstico de mi web',
      ctaNote: 'Pasame el enlace de tu sitio y te cuento qué veo.',
    },

    needs: [
      {
        title: 'Enlace de tu web',
        text: 'La dirección de tu sitio actual, para que pueda revisarlo.',
      },
      {
        title: 'Qué querés mejorar',
        text: 'Lo que te molesta o lo que querés lograr: más velocidad, un diseño nuevo, más consultas, aparecer en Google.',
      },
      {
        title: 'Accesos',
        text: 'Los accesos a tu sitio, tu hosting y tu dominio, si hace falta tocar algo. Los compartimos de forma segura.',
      },
      {
        title: 'Logo y materiales',
        text: 'Tu logo, tus colores y las imágenes que tengas, si vamos a renovar el diseño.',
      },
      {
        title: 'Webs que te gusten',
        text: 'Algunos sitios que te gusten, para entender qué estilo buscás en el rediseño.',
      },
    ],
    startImage: {
      src: mantenimientoStart,
      alt: 'Escritorio con una notebook mostrando un panel de métricas y un cuaderno con una lista de tareas de mantenimiento',
    },

    faqs: [
      {
        question: '¿Qué incluye el mantenimiento de una página web?',
        answer:
          'Depende de lo que necesite tu sitio: actualizaciones, seguridad, copias de seguridad, corrección de errores, mejoras de velocidad y cambios de contenido. Lo definimos después del diagnóstico y hago solo lo que vos elijas.',
      },
      {
        question: '¿Cuánto cuesta el mantenimiento o el rediseño de una web?',
        answer:
          'Depende de lo que necesite tu sitio y de lo que decidas encargar. Escribime desde el formulario con el enlace de tu web y te envío un presupuesto claro, sin compromiso.',
      },
      {
        question: '¿Cuánto tarda?',
        answer:
          'Depende de lo que se encargue: un ajuste puntual es rápido y un rediseño completo lleva más tiempo. Después del diagnóstico te paso un plazo concreto.',
      },
      {
        question: '¿El diagnóstico tiene costo?',
        answer:
          'No, el primer diagnóstico es gratuito. Reviso tu web y te cuento qué se puede mejorar y cuánto costaría cada cambio.',
      },
      {
        question: '¿Hace falta rehacer toda mi web?',
        answer:
          'Muchas veces no. Se puede mejorar lo que ya tenés, de a una cosa o todas juntas, según lo que elijas. Y si algo no tiene arreglo, te lo digo.',
      },
      {
        question: '¿Se puede migrar mi web a otra plataforma sin perder posicionamiento?',
        answer:
          'Sí. Cuido las direcciones, los títulos y los textos, y configuro las redirecciones para no perder visitas. Puede haber pequeñas variaciones temporales en Google mientras se actualiza, y las revisamos.',
      },
      {
        question: '¿Trabajás con la plataforma que ya uso?',
        answer:
          'Sí. Trabajo con WordPress, Wix, Tiendanube, Shopify y sitios a medida. Si usás otra plataforma, consultame.',
      },
    ],
  },

};
