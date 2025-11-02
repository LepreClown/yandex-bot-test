#!/usr/bin/env ts-node

import { checkYandexIndexing } from '../src/utils/yandex-webmaster.hook';

const BASE_URL = process.env.BASE_URL || 'https://your-site.netlify.app';

const urlsToCheck = [
	`${BASE_URL}/`,
	`${BASE_URL}/prognozy`,
	`${BASE_URL}/prognozy2`,
	`${BASE_URL}/prognozy/test-slug-1`,
	`${BASE_URL}/prognozy2/test-slug-1`,
];

async function main() {
	const token = process.env.YANDEX_OAUTH_TOKEN;
	const hostId = process.env.YANDEX_HOST_ID;

	if (!token || !hostId) {
		console.error('❌ Ошибка: Установите переменные окружения:');
		console.error('   YANDEX_OAUTH_TOKEN - OAuth токен из Яндекс.Вебмастера');
		console.error('   YANDEX_HOST_ID - ID хоста из Яндекс.Вебмастера');
		console.error('   BASE_URL - базовый URL вашего сайта (опционально)');
		process.exit(1);
	}

	console.log('🔍 Проверка индексации страниц в Яндекс...\n');
	console.log(`Сайт: ${BASE_URL}\n`);

	const result = await checkYandexIndexing(urlsToCheck, token, hostId);

	if (!result.ok) {
		console.error(`❌ Ошибка: ${result.error}`);
		process.exit(1);
	}

	console.log('Результаты проверки:\n');
	console.log('─'.repeat(80));

	result.data?.forEach((item) => {
		const statusIcon = item.status === 'indexed' ? '✅' : item.status === 'not-indexed' ? '⏳' : '❌';
		console.log(`${statusIcon} ${item.url}`);
		console.log(`   Статус: ${getStatusText(item.status)}`);
		if (item.lastCrawl) {
			console.log(`   Последний обход: ${item.lastCrawl}`);
		}
		if (item.error) {
			console.log(`   Ошибка: ${item.error}`);
		}
		console.log('');
	});

	console.log('─'.repeat(80));

	const indexed = result.data?.filter((item) => item.status === 'indexed').length || 0;
	const total = result.data?.length || 0;

	console.log(`\n📊 Всего страниц: ${total}`);
	console.log(`✅ Проиндексировано: ${indexed}`);
	console.log(`⏳ Не проиндексировано: ${total - indexed}`);
}

function getStatusText(status: string): string {
	const statusMap: Record<string, string> = {
		indexed: 'Проиндексировано',
		'not-indexed': 'Не проиндексировано',
		error: 'Ошибка',
	};
	return statusMap[status] || status;
}

main().catch((error) => {
	console.error('❌ Критическая ошибка:', error);
	process.exit(1);
});

