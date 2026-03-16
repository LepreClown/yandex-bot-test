import { fetchCWVPageData } from "./getProps";

export default async function PriorityImagesPage() {
  const { todos, photos } = await fetchCWVPageData();

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <div className="w-60 p-4 border-r">
        <h2 className="font-bold mb-3">Sidebar</h2>

        {todos.map((todo) => (
          <div key={todo.id} className="text-sm mb-2">
            {todo.title}
          </div>
        ))}
      </div>

      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="border rounded-lg p-3 bg-white shadow-sm">
              <div className="text-xs line-clamp-2">{photo.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
