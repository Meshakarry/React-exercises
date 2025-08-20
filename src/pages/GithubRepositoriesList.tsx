import { useEffect, useState, useRef } from 'react';

import GithubRepositoriesError from '../components/GithubRepositoriesError';
import GithubRepositoriesSkeleton from '../components/GithubRepositoriesSkeleton';
import GithubRepositorySearch from '../components/GithubRepositorySearch';
import GithubRepositories from '../components/GithubRepositories';

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string | null;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
};

/** Debounce any changing value */
function useDebouncedValue<T>(value: T, delay = 500) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

export default function GithubRepositoriesList() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState<Repo[]>([]);

  const debouncedUsername = useDebouncedValue(username.trim(), 500);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchRepositories = async() => {
      if (abortRef.current) abortRef.current.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/users/${debouncedUsername}/repos`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          if (response.status === 404) throw new Error("User not found.");
          if (response.status === 403) throw new Error("Rate limit exceeded. Try later.");
          throw new Error(`GitHub error ${response.status}.`);
        }

        const result = await response.json();
        result.sort(
          (a: Repo, b: Repo) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );
        setRepos(result);
      } catch(err) {
        if (err instanceof Error) {
          if (err?.name === "AbortError") return;
          setError(err?.message || "Unknown error.");
          setRepos([]);
        }
      } finally {
        setLoading(false);
      }
    }

    if (debouncedUsername.length > 2) {
      fetchRepositories();
    } else {
      setRepos([]);
      setError(null);
    }

  }, [debouncedUsername])

  useEffect(() => {
    document.body.style.backgroundColor = '#145da0';
  }, [])

  return (
    <div className="container">
      <h1 className="text-white font-bold text-3xl mb-9">List of the github repositories for provided user: </h1>
      <div className="rounded-2xl border border-black p-6 bg-white">
        <GithubRepositorySearch
          username={username}
          setUsername={setUsername}
        />

        {
          loading && (
            <GithubRepositoriesSkeleton />
          )
        }

        {error && !loading && (
          <GithubRepositoriesError error={error} />
        )}

        { !error && !loading && (
          <GithubRepositories
            username={debouncedUsername}
            repos={repos}
          />
        )}

      </div>
    </div>
  )
}