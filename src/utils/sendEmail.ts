// src/utils/sendEmail.ts
//--------------------------------------------------
// Tipo del payload que espera tu Worker
//--------------------------------------------------
export interface EmailPayload {
  to: string;        // Destinatario
  subject: string;   // Asunto
  html: string;      // Cuerpo en HTML
}

//--------------------------------------------------
// URL del Worker:
// • En producción toma la variable de entorno
// • En desarrollo cae por defecto al dominio workers.dev
//--------------------------------------------------
const WORKER_URL =
  import.meta.env.VITE_EMAIL_WORKER_URL ||
  "https://resend-wirin.pelusa.workers.dev/";

/**
 * Envía un correo usando el Cloudflare Worker que
 * encapsula la API de Resend. Devuelve la respuesta
 * JSON de Resend (id, to, etc.).
 */
export async function sendEmail(payload: EmailPayload) {
  // En desarrollo, simular el envío exitoso para evitar problemas de CORS
  if (import.meta.env.DEV) {
    console.log('📧 [DESARROLLO] Email simulado enviado:', {
      to: payload.to,
      subject: payload.subject,
      timestamp: new Date().toISOString()
    });
    
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      id: `dev-${Date.now()}`,
      to: payload.to,
      subject: payload.subject,
      status: 'simulated'
    };
  }

  // En producción, usar el worker real
  const resp = await fetch(WORKER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // Respuesta ≠ 2xx → lanzo un error legible
  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Worker ${resp.status}: ${errText}`);
  }

  return resp.json(); // ← { id: "...", to: "...", ... }
}

/**
 * Genera el HTML del email con los datos del formulario
 */
export function generateEmailHTML(formData: {
  name: string;
  email: string;
  phone: string;
  address: string;
  userType: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nueva Solicitud de Digitalización - WIRIN</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #1e40af, #0ea5e9);
          color: white;
          padding: 20px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }
        .content {
          background: #f8fafc;
          padding: 30px;
          border: 1px solid #e2e8f0;
        }
        .field {
          margin-bottom: 15px;
          padding: 10px;
          background: white;
          border-radius: 5px;
          border-left: 4px solid #0ea5e9;
        }
        .field-label {
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 5px;
        }
        .field-value {
          color: #374151;
        }
        .footer {
          background: #1e40af;
          color: white;
          padding: 15px;
          text-align: center;
          border-radius: 0 0 8px 8px;
          font-size: 14px;
        }
        .user-type {
          display: inline-block;
          background: #0ea5e9;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🔤 Nueva Solicitud de Digitalización</h1>
        <p>WIRIN - Digitalización Accesible</p>
      </div>
      
      <div class="content">
        <div class="field">
          <div class="field-label">👤 Nombre Completo:</div>
          <div class="field-value">${formData.name}</div>
        </div>
        
        <div class="field">
          <div class="field-label">📧 Email:</div>
          <div class="field-value">${formData.email}</div>
        </div>
        
        <div class="field">
          <div class="field-label">📞 Teléfono:</div>
          <div class="field-value">${formData.phone}</div>
        </div>
        
        <div class="field">
          <div class="field-label">📍 Dirección:</div>
          <div class="field-value">${formData.address}</div>
        </div>
        
        <div class="field">
          <div class="field-label">👥 Tipo de Usuario:</div>
          <div class="field-value">
            <span class="user-type">${formData.userType}</span>
          </div>
        </div>
        
        <div class="field">
          <div class="field-label">📚 Detalles del Libro a Digitalizar:</div>
          <div class="field-value" style="white-space: pre-wrap;">${formData.message}</div>
        </div>
      </div>
      
      <div class="footer">
        <p>Esta solicitud fue enviada desde el formulario de contacto de WIRIN</p>
        <p>Fecha: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}</p>
      </div>
    </body>
    </html>
  `;
}