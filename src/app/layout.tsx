import {ReactNode} from "react";

import type {Metadata} from 'next';
import '@/styles/globals.css';

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

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: 'Test Yandex Bot',
	description: 'Test site for Yandex Bot indexing',
	robots: {
		index: true,
		follow: true,
	},
	verification: {
		yandex: 'c40c272ea7a1f7d6',
	},
	alternates: {
		canonical: baseUrl,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className="antialiased" suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}

