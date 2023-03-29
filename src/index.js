import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import ClassComponents from './ClassComponents';
import FunctionalCoponents from './FunctionalCoponents';
import reportWebVitals from './reportWebVitals';
import Event from './ButtonEvent';
import { ClassicComponentClass } from 'react';
import FunctionD, { FunctionA, FunctionB, FunctionC, Mul, Add, Sub } from './NewComponents';
import States from './State';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User />
    <ClassComponents />
    <FunctionalCoponents />
    {/* <FunctionA/>
    <FunctionB/>
    <FunctionC/>
    <FunctionD />
    <Mul/>
    <Add/>
    <Sub/> */}
    <Event />
    <States />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
