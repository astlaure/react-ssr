import React from "react";

export interface FetchQueryState {
  [key: string]: any;
};

type Context = { state: FetchQueryState, setState: React.Dispatch<React.SetStateAction<any>>};

const FetchQueryContext = React.createContext<Context>({ state: {}, setState: () => {} });

export default FetchQueryContext;
