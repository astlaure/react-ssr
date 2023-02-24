/**
 * cannot use in frontend because of fs
 */

import React from "react";
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import fs from 'fs';
import App from "../../web/App";
import FetchQueryProvider from "../contexts/FetchQueryProvider";

const template = fs.readFileSync('public/index.html', { encoding: 'utf-8' });

export const isSSR = typeof window === 'undefined';

export const render = (data: any, url: string) => {
  const html = ReactDOM.renderToString(
    <FetchQueryProvider initial={data}>
      <StaticRouter location={url}>
        <App/>
      </StaticRouter>
    </FetchQueryProvider>
  );

  return template
    .replace('<!--APP_ROOT-->', html)
    .replace('<!--APP_DATA-->', `window.__APP_DATA__ = ${JSON.stringify(data)};`);
};
