import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import 'antd/dist/antd.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
    uri: 'https://api.threads.goodgenius.ru/',
    cache: new InMemoryCache()
});
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ApolloProvider client={client}>
              <App />
          </ApolloProvider>

      </BrowserRouter>
  </React.StrictMode>
);
