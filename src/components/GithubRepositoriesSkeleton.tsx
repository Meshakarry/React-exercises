export default function GithubRepositoriesSkeleton () {
  return (
    <ul className="flex flex-col gap-6">
      {[...Array(5)].map((_, i) => (
        <li key={i} className="p-4 rounded-lg grid grid-cols-12 gap-3 border border-gray-300">
          <div className="h-full col-span-4 bg-zinc-700" />
          <div className="col-span-8 flex flex-col gap-4">
              <span className="bg-zinc-800 h-6" />
              <span className="bg-zinc-800 h-6" />
              <span className="bg-zinc-800 h-6" />
              <span className="bg-zinc-800 h-6" />
              <span className="bg-zinc-800 h-6" />
            </div>
        </li>
      ))}
    </ul>
  )
}