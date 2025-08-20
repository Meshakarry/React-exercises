interface GithubRepositoriesErrorProps {
  error: string
}

export default function GithubRepositoriesError({ error }: GithubRepositoriesErrorProps) {
  return (
    <div className="mt-6 rounded-xl border border-red-800 bg-red-950/40 text-red-300 p-4">
      {error}
    </div>
  )
}