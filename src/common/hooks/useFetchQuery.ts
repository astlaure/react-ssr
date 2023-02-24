import { useContext, useEffect, useState } from "react";
import FetchQueryContext from "../contexts/FetchQueryContext";

export const isSSR = typeof window === 'undefined';

export default function useFetchQuery<T>(key: string, deps: any[], url: string, options: RequestInit) {
  const { state, setState } = useContext(FetchQueryContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error|undefined>(undefined);

  useEffect(() => {
    if ((window as any).__APP_DATA__[key]) {
      delete (window as any).__APP_DATA__[key];
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
    .then(json => setState({ ...state, [key]: json }))
    .catch(err => setError(err))
    .then(() => setLoading(false));

    return () => {
      controller.abort();
    }
  }, deps)

  return { data: state[key] as T, loading, error };
}
