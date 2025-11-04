import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

const mobileImageSrc =
	'https://i.ytimg.com/vi/Tfu252cYFVc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBd6FHPqn8ohOm8BPCoYjxTL7HvFA';
const mobileMedia = '(max-width: 768px)';

interface IPreloadTestDetailPageProps {
	slug: string;
}

const PreloadTestDetailPage = ({ slug }: IPreloadTestDetailPageProps) => {
	return (
		<>
			<Head>
				<title>Страница с preload link, slug: {slug} - Test Yandex Bot</title>
				<link
					rel="preload"
					as="image"
					href={mobileImageSrc}
					media={mobileMedia}
					fetchPriority="high"
				/>
			</Head>
			<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
					<h1 className="text-2xl font-bold text-white mb-4">
						Страница с preload link в Head, но теперь slug: {slug}
					</h1>
				</main>
			</div>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = ['app-router', 'test-slug-1', 'test-slug-2'].map((slug) => ({
		params: { slug },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug as string;

	return {
		props: {
			slug,
		},
	};
};

export default PreloadTestDetailPage;

