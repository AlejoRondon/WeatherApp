import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// require('dotenv').config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // https://stackoverflow.com/questions/62185425/why-is-console-log-logging-twice-in-react-js
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
