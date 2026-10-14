import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { site } from '../config/site';

// Genera /llms.txt a partir de tus datos, así se mantiene al día solo.
export const GET: APIRoute = () => {
  const serviceLines = services.map((s) => {
    const url = s.hasPage ? `${site.url}/servicios/${s.slug}` : `${site.url}/servicios`;
    return `- [${s.name}](${url}): ${s.summary}`;
  });

  const body = [
    `# ${site.name}`,
    '',
    '> Desarrolladora web freelance en Argentina. Diseño y desarrollo páginas web, landing pages, tiendas online y sistemas a medida para clientes de Argentina, Latinoamérica y España. Trabajo 100 % remoto.',
    '',
    '## Servicios',
    '',
    ...serviceLines,
    '',
    '## Más información',
    '',
    `- [Todos los servicios](${site.url}/servicios)`,
    `- [Proyectos](${site.url}/#portfolio)`,
    `- [Preguntas frecuentes](${site.url}/#faqs)`,
    `- [Contacto](${site.url}/#contacto)`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
