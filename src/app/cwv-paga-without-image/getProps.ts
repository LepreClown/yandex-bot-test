export interface IFetchData {
  todos: any[];
  posts: any[];
  photos: any[];
}

export async function fetchCWVPageData(): Promise<IFetchData> {
  try {
    const [todos, posts, photos] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/photos?_limit=21").then((r) => r.json()),
    ]);

    return {
      todos: todos.slice(0, 5),
      posts: posts.slice(0, 5),
      photos,
    };
  } catch {
    return {
      todos: [],
      posts: [],
      photos: [],
    };
  }
}
