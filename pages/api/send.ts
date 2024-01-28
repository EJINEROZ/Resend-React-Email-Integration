import { SkyConfirmEmail } from "../../emails/sky-confirm";
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Sky <onboarding@resend.dev>',
    to: ['ejirouweghrepha@gmail.com'],
    subject: 'Welcome to Sky Ejiro!',
    react: SkyConfirmEmail ({ firstName: 'John' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json({message: "Email sent successfully!"});
};
