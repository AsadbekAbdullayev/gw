// import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import { BrowserRouter } from 'react-router-dom';
import MainContextProvider from './context';
import 'atropos/css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <Root />
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
