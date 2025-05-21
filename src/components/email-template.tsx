import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
    return {
        subject: `Contact Form from gwpicard.com: Message from ${name}`,
        html: `
      <div style="font-family: Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb">
          <div style="text-align: center; margin-bottom: 24px">
            <h1 style="font-size: 24px; font-weight: bold; color: #1a202c; margin: 0 0 12px">New Message from Your Website</h1>
            <div style="width: 80px; height: 4px; background-color: #3b82f6; margin: 0 auto"></div>
          </div>
          
          <div style="padding: 20px; background-color: #f8fafc; border-radius: 6px; margin-bottom: 24px">
            <h2 style="font-size: 18px; font-weight: bold; color: #1a202c; margin-top: 0; margin-bottom: 12px">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #64748b; width: 120px">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 500; color: #1a202c">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b">Email:</td>
                <td style="padding: 8px 0">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-weight: 500">${email}</a>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="margin-bottom: 24px">
            <h2 style="font-size: 18px; font-weight: bold; color: #1a202c; margin-top: 0; margin-bottom: 12px">Message</h2>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; color: #334155; line-height: 1.6; white-space: pre-wrap">
              ${message}
            </div>
          </div>
          
          <div style="margin-top: 32px; text-align: center; color: #64748b; font-size: 14px">
            <p>This message was sent from the contact form on gwpicard.com.</p>
          </div>
        </div>
      </div>
    `,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    };
}; 