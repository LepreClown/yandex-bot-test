'use cache';

import {ServerComponent} from "./ServerComponent";

export default async function CachedServerPage() {
	
	const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json())
	
	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			Cached page with server component
			<div className="text-green-300">Cached data: {data.title}</div>
			
			
			<ServerComponent/>
		</div>
	);
}

