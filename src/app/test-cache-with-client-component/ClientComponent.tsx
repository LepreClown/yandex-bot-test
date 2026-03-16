"use client"

import {useEffect, useState} from "react";

export const ClientComponent = ({title}: {title: string}) => {
	const [data, setData] = useState<{title: string} | null>(null)

	useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/2')
        const json = await res.json()
        setData(json)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
	
	return <div className="flex gap-2">
		
		<div className="text-red-500">Title from props: {title}</div>
		<div className="text-green-500">Title from use effect: {data?.title}</div>
	</div>;
};
