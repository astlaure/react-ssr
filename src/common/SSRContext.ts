import React from "react";

export type SSRState = { [key: string]: any };

const SSRContext = React.createContext<SSRState>({});

export default SSRContext;
