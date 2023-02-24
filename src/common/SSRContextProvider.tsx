import React, { useState } from "react";
import SSRContext, { SSRState } from "./SSRContext";

interface Props {
  children: React.ReactNode;
  initial: { [key: string]: any };
}

export default function SSRContextProvider({ children, initial }: Props) {
  const [state] = useState<SSRState>(initial);

  return (
    <SSRContext.Provider value={state}>
      {children}
    </SSRContext.Provider>
  );
}
