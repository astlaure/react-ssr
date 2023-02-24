import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import FetchQueryProvider from "../common/contexts/FetchQueryProvider";
import App from "./App";

ReactDOM.hydrateRoot(
  document.querySelector('#root') as HTMLElement,
  <FetchQueryProvider initial={(window as any).__APP_DATA__}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </FetchQueryProvider>
);
