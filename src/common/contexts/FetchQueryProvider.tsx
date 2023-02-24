import React, { useState } from "react";
import FetchQueryContext, { FetchQueryState } from "./FetchQueryContext";

interface Props {
  children: React.ReactNode;
  initial: { [key: string]: any };
}

const defaultCacheExpiration = 1000 * 60 * 5; // 5 minutes

export default function FetchQueryProvider({ children, initial }: Props) {
  const [state, setState] = useState<FetchQueryState>({ ...initial });
  const [cache, setCache] = useState(() => {
    const result: any = {};
    Object.keys(initial).map(key => result[key] = Date.now());
    return result;
  });

  const handleGetData = (key: string) => {
    return { data: state[key], cache: cache[key] };
  }

  const handleSetData = (key: string, data: any) => {
    setState({ ...state, [key]: data });
    setCache({ ...cache, [key]: Date.now() });
  }

  return (
    <FetchQueryContext.Provider value={{ handleGetData, handleSetData }}>
      {children}
    </FetchQueryContext.Provider>
  );
}
