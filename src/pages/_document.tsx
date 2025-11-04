import { Html, Head, Main, NextScript } from 'next/document';

const getBaseUrl = (): string => {
	if (typeof window !== 'undefined') {
		return window.location.origin;
	}
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

export default function Document() {
	const baseUrl = getBaseUrl();

	return (
		<Html lang="ru">
			<Head>
				<meta name="description" content="Test site for Yandex Bot indexing" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href={baseUrl} />
				<meta name="yandex-verification" content="c40c272ea7a1f7d6" />
			</Head>
			<body className="antialiased" suppressHydrationWarning>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

