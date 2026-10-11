export interface FaqItem {
  question: string;
  answer: string;
}

export const generalFaqs: FaqItem[] = [
  {
    question: '¿Cuánto tarda en estar lista una web?',
    answer:
      'Depende del alcance. Una landing sencilla puede resolverse en pocos días; una tienda o sistema a medida requiere más etapas. El plazo se define después del diagnóstico.',
  },
  {
    question: '¿Ofreces mantenimiento después de entregar?',
    answer:
      'Sí. Puedes contratar soporte puntual o un plan de mantenimiento para actualizaciones, mejoras, seguridad y rendimiento.',
  },
  {
    question: '¿Cómo funciona el pago 50/50?',
    answer:
      'Se abona el 50% para comenzar y reservar agenda. El 50% restante se liquida antes del lanzamiento final.',
  },
  {
    question: '¿Voy a poder editar los contenidos?',
    answer:
      'Sí. Según el proyecto, se puede incorporar CMS o panel de gestión para que puedas actualizar contenidos sin depender del código.',
  },
];
