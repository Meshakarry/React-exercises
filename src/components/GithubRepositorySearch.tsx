interface GithubRepositorySearchProps {
  username: string
  setUsername: (username: string) => void
}

export default function GithubRepositorySearch ({ username, setUsername }: GithubRepositorySearchProps) {
  return (
    <div>
      <h2 className="text-blue-300 font-semibold text-xl mb-6">Type github username</h2>

      <input
        type="search"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-6 border-2 border-black"
      />
    </div>
  )
}