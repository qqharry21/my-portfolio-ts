import { Resend } from 'resend';
import type { z } from 'zod';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ResponseNoticeEmail, ThankYouEmail } from '@/components/email';

import { connectDB } from '@/lib/mongodb';
import type { contactSchema } from '@/lib/schemas';
import { formatDate } from '@/lib/utils';

type ContactFormValues = z.infer<typeof contactSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const client = await connectDB();
  const session = client.startSession();
  try {
    session.startTransaction();

    const body = (await req.json()) as ContactFormValues;
    const currentDate = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
    const date = formatDate(new Date(), 'PPP iii');

    // Save to database
    const db = client.db(process.env.MONGODB_DB);
    await db.collection('contact').insertOne({ ...body, date: currentDate }, { session });

    // Send email
    const emailTo = [
      {
        to: [body.email],
        react: ThankYouEmail({ ...body, date }),
        subject: 'Thank you for contacting me',
      },
      {
        to: ['qqharry21@gmail.com'],
        react: ResponseNoticeEmail({ ...body, date }),
        subject: `New message from ${body.name}`,
      },
    ];

    const mailToSends = emailTo.map((item) => ({
      ...item,
      from: 'Harry Chen <harrychen@chenchuanhao.com>',
      reply_to: 'Harry Chen <qqharry21@gmail.com>',
      text: 'Hello world',
    }));

    await resend.batch.send(mailToSends);

    await session.commitTransaction();

    return NextResponse.json({ message: 'Send message successful' }, { status: 200 });
  } catch (error) {
    console.log('🚨 - error', error);
    await session.abortTransaction();
    return new NextResponse('Failed to send message', { status: 500 });
  } finally {
    session.endSession();
  }
}
