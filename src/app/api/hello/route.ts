import { NextResponse } from 'next/server';

interface IResponseData {
	name: string;
}

export async function GET() {
	const data: IResponseData = {
		name: 'John Doe',
	};

	return NextResponse.json(data);
}

