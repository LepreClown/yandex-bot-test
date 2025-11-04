import { MetadataRoute } from 'next';

const getBaseUrl = (): string => {
	if (process.env.NEXT_PUBLIC_BASE_URL) {
		return process.env.NEXT_PUBLIC_BASE_URL;
	}
	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}
	if (process.env.NETLIFY && process.env.URL) {
		return `https://${process.env.URL}`;
	}
	return 'https://testing-yandex-robots.netlify.app';
};

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = getBaseUrl();
	const currentDate = new Date().toISOString();

	const staticPages: MetadataRoute.Sitemap = [
		{
			url: `${baseUrl}/`,
			lastModified: currentDate,
			changeFrequency: 'daily',
			priority: 1.0,
		},
		{
			url: `${baseUrl}/prognozy-v2`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/prognozy2-v2`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/preload-test-v2`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/articles-v2`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/news-v2`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.8,
		},
	];

	const exampleSlugs = ['test-slug-1', 'test-slug-2'];
	const dynamicPages: MetadataRoute.Sitemap = exampleSlugs.flatMap((slug) => [
		{
			url: `${baseUrl}/prognozy-v2/${slug}`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/prognozy2-v2/${slug}`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/preload-test-v2/${slug}`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.6,
		},
	]);

	return [...staticPages, ...dynamicPages];
}

