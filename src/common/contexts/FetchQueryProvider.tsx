import React, { useState } from "react";
import FetchQueryContext, { FetchQueryState } from "./FetchQueryContext";

interface Props {
  children: React.ReactNode;
  initial: { [key: string]: any };
}

export default function FetchQueryProvider({ children, initial }: Props) {
  const [state, setState] = useState<FetchQueryState>(initial);

  return (
    <FetchQueryContext.Provider value={{ state, setState }}>
      {children}
    </FetchQueryContext.Provider>
  );
}
