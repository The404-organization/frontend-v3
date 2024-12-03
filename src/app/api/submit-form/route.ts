import { NextRequest, NextResponse } from 'next/server';

interface Body {
	name: string;
	email: string;
	message: string;
}

export const POST = async (req: NextRequest) => {
	try {
		const { name, email, message }: Body = await req.json();
		const key = process.env.HUBSPOT_KEY;

		await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${key}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				properties: {
					firstname: name,
					email,
					message,
				},
			}),
		});

		return NextResponse.json({ message: 'Ok' });
	} catch (error) {
		console.log('Failed to submit form:', error);
		return new NextResponse('Internal Server', { status: 500 });
	}
};
