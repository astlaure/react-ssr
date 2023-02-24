import { useContext, useEffect, useState } from "react";
import FetchQueryContext from "../contexts/FetchQueryContext";

export const defaultCacheExpiration = 1000 * 60 * 1; // 1 minutes

export default function useFetchQuery<T>(key: string, deps: any[], url: string, options: RequestInit) {
  const { handleGetData, handleSetData } = useContext(FetchQueryContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error|undefined>(undefined);

  useEffect(() => {
    if ((window as any).__APP_DATA__[key]) {
      delete (window as any).__APP_DATA__[key];
      return;
    }

    if (handleGetData(key).cache > Date.now() - defaultCacheExpiration) {
      return;
    }

    setLoading(true);
    setError(undefined);

    const controller = new AbortController();

    fetch(url, {
      ...options,
      signal: controller.signal,
    })
    .then(response => response.json())
    .then(json => handleSetData(key, json))
    .catch(err => setError(err))
    .then(() => setLoading(false));

    return () => {
      controller.abort();
    }
  }, deps)

  return { data: handleGetData(key).data as T, loading, error };
}
