export default function Loading() {
  return (
    <div className="flex min-h-screen bg-zinc-950 p-6 md:p-10 overflow-hidden">
      {/* Sidebar Skeleton */}
      <aside className="w-16 hidden md:block border-r border-zinc-900 mr-8 flex-shrink-0">
        <div className="w-10 h-10 bg-zinc-900 rounded-lg animate-pulse mb-8" />
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-10 h-10 bg-zinc-900 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <main className="flex-1 mt-4">
        {/* Header Skeleton */}
        <div className="h-10 w-64 bg-zinc-900 animate-pulse rounded-md mb-4" />
        <div className="h-5 w-48 bg-zinc-900 animate-pulse rounded-md mb-12" />

        {/* Bento Grid Skeleton */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Hero/Activity Tile Placeholder */}
          <article className="col-span-1 md:col-span-2 lg:col-span-2 bg-zinc-900 animate-pulse rounded-3xl" />
          {/* Smaller Course Tile Placeholders */}
          <article className="bg-zinc-900 animate-pulse rounded-3xl" />
          <article className="bg-zinc-900 animate-pulse rounded-3xl" />
          <article className="bg-zinc-900 animate-pulse rounded-3xl" />
          <article className="col-span-1 md:col-span-2 bg-zinc-900 animate-pulse rounded-3xl" />
        </section>
      </main>
    </div>
  );
}
