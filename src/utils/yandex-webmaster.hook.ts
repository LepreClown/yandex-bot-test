interface IYandexIndexingResult {
	url: string;
	status: 'indexed' | 'not-indexed' | 'error';
	lastCrawl?: string;
	error?: string;
}

interface IYandexIndexingResponse {
	ok: boolean;
	data?: IYandexIndexingResult[];
	error?: string;
}

const YANDEX_WEBMASTER_API = 'https://api.webmaster.yandex.net/v4';

export const checkYandexIndexing = async (
	urls: string[],
	token: string,
	hostId: string
): Promise<IYandexIndexingResponse> => {
	try {
		const results: IYandexIndexingResult[] = [];

		for (const url of urls) {
			const response = await fetch(
				`${YANDEX_WEBMASTER_API}/user/${hostId}/hosts/${hostId}/search-urls/info?url=${encodeURIComponent(url)}`,
				{
					headers: {
						Authorization: `OAuth ${token}`,
						'Content-Type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				results.push({
					url,
					status: 'error',
					error: `HTTP ${response.status}: ${response.statusText}`,
				});
				continue;
			}

			const data = await response.json();

			if (data.in_index === true) {
				results.push({
					url,
					status: 'indexed',
					lastCrawl: data.last_crawl_date,
				});
			} else {
				results.push({
					url,
					status: 'not-indexed',
				});
			}
		}

		return {
			ok: true,
			data: results,
		};
	} catch (error) {
		return {
			ok: false,
			error: error instanceof Error ? error.message : 'Unknown error',
		};
	}
};

export const getYandexIndexingStatus = async (
	url: string,
	token: string,
	hostId: string
): Promise<IYandexIndexingResponse> => {
	return checkYandexIndexing([url], token, hostId);
};

