import Image from 'next/image';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

interface IPrognozy2DetailPageProps {
	slug: string;
}

const Prognozy2DetailPage = ({ slug }: IPrognozy2DetailPageProps) => {
	return (
		<>
			<Head>
				<title>Страница без priority, slug: {slug} - Test Yandex Bot</title>
			</Head>
			<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
					<h1 className="text-2xl font-bold text-white mb-4">
						Страница без priority, но теперь slug: {slug}
					</h1>
					<Image
						src="https://i.ytimg.com/vi/Tfu252cYFVc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBd6FHPqn8ohOm8BPCoYjxTL7HvFA"
						alt="Next.js logo"
						width={500}
						height={500}
						priority={false}
					/>
				</main>
			</div>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = [
		'app-router',
		'app-router-2',
		'app-router-long-slug-without-slash',
		'app-router-with-slash',
		'app-routerrr',
		'pronoz-perexod-slash',
		'test-slug-1',
		'test-slug-2',
	].map((slug) => ({
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

export default Prognozy2DetailPage;

