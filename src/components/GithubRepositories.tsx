import { useCallback } from 'react';
import { Repo } from '../pages/GithubRepositoriesList'

interface GithubRepositoriesProps {
  repos: Repo[]
  username: string
}

export default function GithubRepositories ({ repos, username }: GithubRepositoriesProps) {
  const formatDate = useCallback(
      (iso: string) =>
        new Intl.DateTimeFormat(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(new Date(iso)),
      []
    );

  return (
    <>
      {
        repos?.length ? (
          <ul className="flex flex-col gap-6">
            {
              repos.map(item =>
                <li
                  className="p-4 rounded-lg grid grid-cols-12 gap-3 border border-gray-300" 
                  key={item.id}
                >
                  <img
                    src={item?.owner?.avatar_url}
                    alt={item?.owner?.login}
                    className="col-span-4"
                  />

                  <div className="col-span-8 flex flex-col gap-4">
                    <h3 className="font-bold">{item?.owner?.login}</h3>
                    <h4>Repository name: { item?.name }</h4>
                    <h4>Created at: { formatDate(item?.created_at) }</h4>
                    <h4>Description: { item?.description ?? '/' }</h4>
                    <h4>Last commit: { formatDate(item?.pushed_at) }</h4>
                  </div>
                </li>
              )
            }
          </ul>
        ) : (
          <h2>No public repositories for user: { username }</h2>
        )
      }
    </>
  )
}