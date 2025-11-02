import {Head, Html, Main, NextScript} from "next/document";

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
	return 'https://your-site.netlify.app';
};

export default function Document() {
	const baseUrl = getBaseUrl();

	return (
		<Html lang="ru">
			<Head>
				<meta name="robots" content="index, follow" />
				<meta name="yandex-verification" content="" />
				<link rel="canonical" href={baseUrl} />
				<meta name="yandex-verification" content="c40c272ea7a1f7d6" />
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
