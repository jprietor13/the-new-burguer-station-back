import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor() {
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      throw new Error('SENDGRID_API_KEY is not defined in .env');
    }
    sgMail.setApiKey(apiKey);
    console.log('API KEY:', process.env.SENDGRID_API_KEY);
  }

  async sendOrderConfirmation(to: string, orderData: any) {
    const { burger, extras, sauces, drink, side, totalPrice } = orderData;

    const html = `
      <h2>Gracias por tu pedido 🍔</h2>
      <p><strong>Hamburguesa:</strong> ${burger.name}</p>
      <p><strong>Extras:</strong> ${extras.join(', ')}</p>
      <p><strong>Salsas:</strong> ${sauces.join(', ')}</p>
      <p><strong>Bebida:</strong> ${drink}</p>
      <p><strong>Acompañamiento:</strong> ${side}</p>
      <p><strong>Total:</strong> $${totalPrice.toFixed(2)}</p>
    `;

    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    if (!fromEmail) {
      throw new Error('SENDGRID_FROM_EMAIL is not defined in .env');
    }

    const msg = {
      to,
      from: fromEmail,
      subject: 'Confirmación de tu pedido 🍔 The Burger Station',
      html,
    };

    await sgMail.send(msg);
  }
}
