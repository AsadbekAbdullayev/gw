// import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import { BrowserRouter } from 'react-router-dom';
import MainContextProvider from './context';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'atropos/css';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainContextProvider>
          <Root />
        </MainContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
