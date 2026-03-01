export const ServerComponent =async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos/2').then((res) => res.json())
	
	
	return <div className="flex gap-2">
		<div className="text-red-500">title:</div>
		
		<div>{data.title}</div>
	</div>;
};
