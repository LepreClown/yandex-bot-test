import { NextRequest, NextResponse } from 'next/server';
import { checkYandexIndexing } from '@/utils/yandex-webmaster.hook';

interface IRequestBody {
	urls: string[];
	token: string;
	hostId: string;
}

export async function POST(req: NextRequest) {
	try {
		const body: IRequestBody = await req.json();
		const { urls, token, hostId } = body;

		if (!urls || !Array.isArray(urls) || urls.length === 0) {
			return NextResponse.json(
				{ error: 'URLs array is required' },
				{ status: 400 }
			);
		}

		if (!token || !hostId) {
			return NextResponse.json(
				{ error: 'Token and hostId are required' },
				{ status: 400 }
			);
		}

		const result = await checkYandexIndexing(urls, token, hostId);

		if (!result.ok) {
			return NextResponse.json(
				{
					error: result.error || 'Failed to check indexing',
				},
				{ status: 500 }
			);
		}

		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{
				error: error instanceof Error ? error.message : 'Unknown error',
			},
			{ status: 500 }
		);
	}
}

