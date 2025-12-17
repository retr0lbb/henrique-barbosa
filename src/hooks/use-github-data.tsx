import { GithubData } from "@/components/terminal/types";
import { useEffect, useState } from "react";

export function useGithubData(shouldFetch: boolean) {
  const [data, setData] = useState<GithubData>({
    followers: 0,
    last_update: "",
    public_repos: 0,
  });
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!shouldFetch) {
      return;
    }
    setIsPending(true);

    fetch("/api/github_data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsPending(false);
      });

    fetch;
  }, [shouldFetch]);

  return { data, isPending, error };
}
