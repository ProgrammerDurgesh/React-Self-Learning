import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './Practice-pages/User';
import ClassComponents from './Practice-pages/ClassComponents';
import FunctionalCoponents from './Practice-pages/FunctionalCoponents';
import reportWebVitals from './reportWebVitals';
import Event from './Practice-pages/ButtonEvent';
import { ClassicComponentClass } from 'react';
import Form from './Practice-pages/FormBasic';
import FunctionD, { FunctionA, FunctionB, FunctionC, Mul, Add, Sub } from './Practice-pages/NewComponents';
import States from './Practice-pages/State';
import About from './Pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App/>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
