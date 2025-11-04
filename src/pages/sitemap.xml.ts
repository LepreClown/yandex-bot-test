import { GetServerSideProps } from 'next';

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

const generateSitemap = (): string => {
	const baseUrl = getBaseUrl();
	const currentDate = new Date().toISOString().split('T')[0];

	const staticPages = [
		{ loc: '/', priority: '1.0', changefreq: 'daily' },
		{ loc: '/prognozy-v2', priority: '0.9', changefreq: 'weekly' },
		{ loc: '/prognozy2-v2', priority: '0.8', changefreq: 'weekly' },
		{ loc: '/preload-test-v2', priority: '0.8', changefreq: 'weekly' },
		{ loc: '/articles-v2', priority: '0.8', changefreq: 'weekly' },
		{ loc: '/news-v2', priority: '0.8', changefreq: 'weekly' },
	];

	const prognozySlugs = [
		'app-router',
		'app-router-2',
		'app-router-long-slug-without-slash',
		'app-router-with-slash',
		'test-slug-1',
		'test-slug-2',
	];
	const prognozy2Slugs = [
		'app-router',
		'app-router-2',
		'app-router-long-slug-without-slash',
		'app-router-with-slash',
		'app-routerrr',
		'pronoz-perexod-slash',
		'test-slug-1',
		'test-slug-2',
	];
	const preloadTestSlugs = ['app-router', 'test-slug-1', 'test-slug-2'];

	const dynamicPages = [
		...prognozySlugs.map((slug) => ({
			loc: `/prognozy-v2/${slug}`,
			priority: '0.7',
			changefreq: 'weekly' as const,
		})),
		...prognozy2Slugs.map((slug) => ({
			loc: `/prognozy2-v2/${slug}`,
			priority: '0.6',
			changefreq: 'weekly' as const,
		})),
		...preloadTestSlugs.map((slug) => ({
			loc: `/preload-test-v2/${slug}`,
			priority: '0.6',
			changefreq: 'weekly' as const,
		})),
	];

	const allUrls = [...staticPages, ...dynamicPages];

	const urlEntries = allUrls
		.map(
			(url) => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
		)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const sitemap = generateSitemap();

	res.setHeader('Content-Type', 'text/xml');
	res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default function Sitemap() {
	return null;
}

