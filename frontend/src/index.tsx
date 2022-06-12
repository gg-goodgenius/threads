import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import 'antd/dist/antd.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {UserState} from "./context/UserState";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const httpLink = new HttpLink({
    uri: 'https://api.threads.goodgenius.ru/graphql'
});

const authLink = setContext(async (_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ApolloProvider client={client}>
              <UserState>
                  <App />
              </UserState>
          </ApolloProvider>
      </BrowserRouter>
  </React.StrictMode>
);
