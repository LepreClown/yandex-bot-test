import type { NextApiRequest, NextApiResponse } from 'next';
import { checkYandexIndexing } from '../../utils/yandex-webmaster.hook';

interface IRequestBody {
	urls: string[];
	token: string;
	hostId: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const { urls, token, hostId }: IRequestBody = req.body;

	if (!urls || !Array.isArray(urls) || urls.length === 0) {
		return res.status(400).json({ error: 'URLs array is required' });
	}

	if (!token || !hostId) {
		return res.status(400).json({ error: 'Token and hostId are required' });
	}

	try {
		const result = await checkYandexIndexing(urls, token, hostId);

		if (!result.ok) {
			return res.status(500).json({
				error: result.error || 'Failed to check indexing',
			});
		}

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

