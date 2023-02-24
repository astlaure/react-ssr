import React from "react";

export interface FetchQueryState {
  [key: string]: any;
};

// type Context = { state: FetchQueryState, setState: React.Dispatch<React.SetStateAction<any>>};
type Context = { handleGetData: (key: string) => any, handleSetData: (key: string, data: any) => any };

const FetchQueryContext = React.createContext<Context>({ handleGetData: () => {}, handleSetData: () => {} });

export default FetchQueryContext;
