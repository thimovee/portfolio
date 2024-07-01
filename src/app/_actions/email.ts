"use server"
import { emailSchema } from '@/lib/validations/email';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(input: z.infer<typeof emailSchema>) {
    const { error } = await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: ['thimove@gmail.com'],
        subject: `Nieuwe bericht van ${input.name} <${input.email}>`,
        text: input.message,
    });
    if (error) {
        return error;
    }
}
