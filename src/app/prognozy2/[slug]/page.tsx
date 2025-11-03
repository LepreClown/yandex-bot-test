import Image from 'next/image';

interface IPrognozy2DetailPageProps {
	params: Promise<{
		slug: string;
	}>;
}

const Prognozy2DetailPage = async ({ params }: IPrognozy2DetailPageProps) => {
	const { slug } = await params;

	return (
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
	);
};

export default Prognozy2DetailPage;

