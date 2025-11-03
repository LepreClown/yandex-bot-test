const mobileImageSrc =
	'https://i.ytimg.com/vi/Tfu252cYFVc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBd6FHPqn8ohOm8BPCoYjxTL7HvFA';
const mobileMedia = '(max-width: 768px)';

const PreloadTestPage = () => {
	return (
		<>
			<link
				rel="preload"
				as="image"
				href={mobileImageSrc}
				media={mobileMedia}
				fetchPriority="high"
			/>
			<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
					<h1 className="text-2xl font-bold text-white mb-4">
						Страница с preload link в Head
					</h1>
				</main>
			</div>
		</>
	);
};

export default PreloadTestPage;

