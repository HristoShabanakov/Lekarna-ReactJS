import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App >
    <Navigation/>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
