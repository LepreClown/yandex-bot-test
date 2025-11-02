import { GetServerSideProps } from 'next';

interface ISitemapUrl {
	loc: string;
	lastmod?: string;
	changefreq?: string;
	priority?: string;
}

const getBaseUrl = (): string => {
	if (process.env.NEXT_PUBLIC_BASE_URL) {
		return process.env.NEXT_PUBLIC_BASE_URL;
	}
	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}
	if (process.env.NETLIFY) {
		return `https://${process.env.URL}`;
	}
	return 'https://your-site.netlify.app';
};

const generateSitemap = (urls: ISitemapUrl[]): string => {
	const baseUrl = getBaseUrl();
	const currentDate = new Date().toISOString().split('T')[0];

	const urlEntries = urls.map((url) => {
		return `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod || currentDate}</lastmod>
    <changefreq>${url.changefreq || 'weekly'}</changefreq>
    <priority>${url.priority || '0.8'}</priority>
  </url>`;
	}).join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

const Sitemap = () => {
	return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const baseUrl = getBaseUrl();

	const staticPages = [
		{
			loc: '/',
			priority: '1.0',
			changefreq: 'daily',
		},
		{
			loc: '/prognozy',
			priority: '0.9',
			changefreq: 'weekly',
		},
		{
			loc: '/prognozy2',
			priority: '0.8',
			changefreq: 'weekly',
		},
	];

	const dynamicPages: ISitemapUrl[] = [];
	const exampleSlugs = ['test-slug-1', 'test-slug-2'];

	exampleSlugs.forEach((slug) => {
		dynamicPages.push(
			{
				loc: `/prognozy/${slug}`,
				priority: '0.7',
				changefreq: 'weekly',
			},
			{
				loc: `/prognozy2/${slug}`,
				priority: '0.6',
				changefreq: 'weekly',
			}
		);
	});

	const allUrls = [...staticPages, ...dynamicPages];

	const sitemap = generateSitemap(allUrls);

	res.setHeader('Content-Type', 'text/xml');
	res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;

