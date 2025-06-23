import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('SENDGRID_API_KEY');
    if (!apiKey) {
      throw new Error(
        'SENDGRID_API_KEY is not defined in environment variables',
      );
    }
    sgMail.setApiKey(apiKey);
  }

  async sendOrderConfirmation(to: string, orderData: any) {
    const { burger, extras, sauces, drink, side, totalPrice } = orderData;
    const safeTotal =
      typeof totalPrice === 'number' ? totalPrice : parseFloat(totalPrice);

    const html = `
      <h2>Gracias por tu pedido 🍔</h2>
      <p><strong>Hamburguesa:</strong> ${burger.name}</p>
      <p><strong>Extras:</strong> ${extras.join(', ')}</p>
      <p><strong>Salsas:</strong> ${sauces.join(', ')}</p>
      <p><strong>Bebida:</strong> ${drink}</p>
      <p><strong>Acompañamiento:</strong> ${side}</p>
      <p><strong>Total:</strong> $${safeTotal.toFixed(2)}</p>
    `;

    const fromEmail = this.configService.get<string>('SENDGRID_FROM_EMAIL');
    if (!fromEmail) {
      throw new Error(
        'SENDGRID_FROM_EMAIL is not defined in environment variables',
      );
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
