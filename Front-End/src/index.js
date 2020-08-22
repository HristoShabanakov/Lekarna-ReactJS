import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation';
import GlobalContextProvider from './providers/GlobalContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
    <Navigation/>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
