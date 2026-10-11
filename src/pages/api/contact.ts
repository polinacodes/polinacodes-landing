import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { getService } from '../../data/services';

export const prerender = false;

// const resend = new Resend(import.meta.env.RESEND_API_KEY);

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:0 0 18px;">
      <div style="font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#777777;margin-bottom:4px;">${label}</div>
      <div style="font-size:15px;font-weight:600;color:#111111;">${escapeHtml(value)}</div>
    </td>
  </tr>`;

const buildEmail = (d: { name: string; email: string; service: string; budget: string; message: string }) => `
<div style="background:#F8F8FA;padding:32px 16px;font-family:'Plus Jakarta Sans',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#111111;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">
    <tr>
      <td style="padding:0 4px 16px;font-size:18px;font-weight:800;letter-spacing:-0.04em;">
        Polina<span style="color:#E378D3;">.</span>codes
      </td>
    </tr>
    <tr>
      <td style="background:#FFFFFF;border:1px solid #E5E5EA;border-radius:18px;padding:32px;">
        <p style="margin:0 0 10px;font-size:11px;font-weight:800;letter-spacing:.15em;color:#777777;">NUEVA CONSULTA</p>
        <h1 style="margin:0 0 28px;font-size:24px;line-height:1.2;letter-spacing:-0.03em;color:#111111;">
          ${escapeHtml(d.name)} quiere hablar de su proyecto
        </h1>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${row('Email', d.email)}
          ${row('Servicio', d.service)}
          ${row('Presupuesto', d.budget || 'No especificado')}
        </table>

        <div style="font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#777777;margin:4px 0 8px;">Mensaje</div>
        <div style="background:#F8F8FA;border-radius:12px;padding:16px;font-size:14px;line-height:1.6;color:#111111;">
          ${escapeHtml(d.message).replace(/\n/g, '<br/>')}
        </div>

        <div style="margin-top:28px;">
          <a href="mailto:${escapeHtml(d.email)}" style="display:inline-block;background:#111111;color:#FFFFFF;text-decoration:none;font-size:13px;font-weight:700;padding:14px 24px;border-radius:999px;">
            Responder
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 4px 0;font-size:11px;color:#999999;">
        Enviado desde el formulario de polinacodes.dev
      </td>
    </tr>
  </table>
</div>`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Falta RESEND_API_KEY');
      return json({ success: false, error: 'server_config' }, 500);
    }
    const resend = new Resend(apiKey);

    const data = await request.formData();
    const get = (key: string) => data.get(key)?.toString().trim() ?? '';

    // Honeypot: un bot completa este campo oculto, una persona no
    if (get('hp_check')) return json({ success: true });

    const name = get('name').replace(/[\r\n]+/g, ' ');
    const email = get('email');
    const message = get('message');
    const budget = get('budget');
    const service = getService(get('service'))?.formLabel ?? 'No especificado';

    if (!name || !email || !message) return json({ success: false, error: 'missing_fields' }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ success: false, error: 'invalid_email' }, 400);

    const { error } = await resend.emails.send({
      from: 'Polinacodes <hola@polinacodes.dev>',
      to: 'hola@polinacodes.dev',
      replyTo: email,
      subject: `Nueva consulta de ${name} [Polinacodes - Landing]`,
      html: buildEmail({ name, email, service, budget, message }),
      text: `Nueva consulta\n\nNombre: ${name}\nEmail: ${email}\nServicio: ${service}\nPresupuesto: ${budget || 'No especificado'}\n\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return json({ success: false, error: 'send_failed' }, 500);
    }

    return json({ success: true });
  } catch (err) {
    console.error(err);
    return json({ success: false, error: 'server_error' }, 500);
  }
};