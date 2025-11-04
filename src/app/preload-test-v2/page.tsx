const PreloadTestPage = () => {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
				<h1 className="text-2xl font-bold text-white mb-4">
					Страница с preload link в Head
				</h1>
			</main>
		</div>
	);
};

export default PreloadTestPage;

