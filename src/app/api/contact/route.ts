import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name: string = (body?.name || '').toString().trim();
    const email: string = (body?.email || '').toString().trim();
    const message: string = (body?.message || '').toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nedostaju podaci.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Email servis nije konfiguriran.' }, { status: 500 });
    }

    const payload = {
      from: 'Cesar Transport <onboarding@resend.dev>',
      to: ['info@cesar-transport.hr'],
      subject: `Novi upit s weba — ${name}`,
      reply_to: email,
      text: `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`,
    };

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return NextResponse.json({ error: 'Slanje nije uspjelo.', detail: errText }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Neočekivana greška.' }, { status: 500 });
  }
}


