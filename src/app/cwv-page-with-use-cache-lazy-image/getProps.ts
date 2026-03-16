import { cacheLife, cacheTag } from "next/cache";

export interface IFetchData {
  todos: any[];
  posts: any[];
  photos: any[];
}

export async function fetchCWVPageData(): Promise<IFetchData> {
  "use cache";

  cacheLife({
    stale: 60,
    revalidate: 60,
    expire: 3600,
  });

  cacheTag("cwv-page-with-use-cache");

  try {
    const [todos, posts, photos] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/photos").then((r) => r.json()),
    ]);

    return {
      todos: todos.slice(0, 5),
      posts: posts.slice(0, 5),
      photos: photos.slice(0, 21),
    };
  } catch {
    return {
      todos: [],
      posts: [],
      photos: [],
    };
  }
}
