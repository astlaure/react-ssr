import { useContext, useEffect, useState } from "react";
import SSRContext from "./SSRContext";

export const isSSR = typeof window === 'undefined';

export default function useFetchQuery<T>(key: string, deps: any[], url: string, options: RequestInit) {
  const state = useContext(SSRContext);
  const [data, setData] = useState<T|undefined>(isSSR ? state[key] : (window as any).__APP_DATA__[key]);
  const [isLoading, setLoading] = useState(!data);
  const [error, setError] = useState<Error|undefined>(undefined);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    if ((window as any).__APP_DATA__[key]) {
      delete (window as any).__APP_DATA__[key];
      return;
    }

    setLoading(true);
    const controller = new AbortController();

    fetch(url, {
      ...options,
      signal: controller.signal,
    })
    .then(response => {
      setHasErrors(false);
      setError(undefined);
      return response.json();
    })
    .then(json => setData(json))
    .catch(err => {
      setHasErrors(true);
      setError(err);
    })
    .then(() => setLoading(false));

    return () => {
      controller.abort();
    }
  }, deps)

  return { data, isLoading, hasErrors, error };
}
