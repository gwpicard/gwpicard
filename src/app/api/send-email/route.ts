import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate the inputs
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        console.log('Email request received:', { name, email, message });

        if (!process.env.RESEND_API_KEY) {
            console.log('RESEND_API_KEY not found. Email would be sent with:', { name, email, message });
            // For testing without an API key
            return NextResponse.json({
                success: true,
                message: 'Email sending simulated (no API key)'
            });
        }

        try {
            // Send email using Resend
            const { data, error } = await resend.emails.send({
                from: 'Contact Form <onboarding@resend.dev>', // Use verified domain in production
                to: 'gwpicard@gmail.com', // Replace with your email
                subject: `Website Contact Form: Message from ${name}`,
                text: `
Name: ${name}
Email: ${email}

Message:
${message}
                `,
            });

            if (error) {
                console.error('Resend API error:', error);
                return NextResponse.json(
                    { error: 'Failed to send email' },
                    { status: 500 }
                );
            }

            console.log('Email sent successfully:', data);
            return NextResponse.json({
                success: true,
                data: data
            });
        } catch (sendError) {
            console.error('Error sending email:', sendError);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Error in email API:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 