import type { NextApiRequest, NextApiResponse } from 'next';

interface IResponseData {
	name: string;
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseData>
) {
	res.status(200).json({ name: 'John Doe' });
}

