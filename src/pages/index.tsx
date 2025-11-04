import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Test Yandex Bot</title>
			</Head>
			<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
					<Image
						src="https://i.ytimg.com/vi/FN15RuTnd2c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDD10WAP2RwtrTybmFdgcDoRvBnwA"
						alt="Next.js logo"
						width={500}
						height={300}
						priority={false}
					/>
					<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
						<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
							Тестовая площадка для Яндекс.Индекса
						</h1>
						<p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
							Обновленная версия сайта для проверки работы поискового робота
						</p>
					</div>
					<div className="flex flex-col gap-4 w-full">
						<h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
							Страницы с Image и priority:
						</h2>
						<div className="flex flex-col gap-3 mb-4">
							<Link
								href="/prognozy-v3-pages"
								className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
							>
								/prognozy-v3-pages
							</Link>
							<Link
								href="/prognozy2-v3-pages"
								className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
							>
								/prognozy2-v3-pages
							</Link>
							<Link
								href="/prognozy-v3-pages/test-slug-1"
								className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
							>
								/prognozy-v3-pages/[slug]
							</Link>
							<Link
								href="/prognozy2-v3-pages/test-slug-1"
								className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
							>
								/prognozy2-v3-pages/[slug]
							</Link>
						</div>
						<h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
							Страницы с preload link:
						</h2>
						<div className="flex flex-col gap-3">
							<Link
								href="/preload-test-v3-pages"
								className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
							>
								/preload-test-v3-pages
							</Link>
							<Link
								href="/articles-v3-pages"
								className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
							>
								/articles-v3-pages
							</Link>
							<Link
								href="/news-v3-pages"
								className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
							>
								/news-v3-pages
							</Link>
							<Link
								href="/preload-test-v3-pages/test-slug-1"
								className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
							>
								/preload-test-v3-pages/[slug]
							</Link>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

