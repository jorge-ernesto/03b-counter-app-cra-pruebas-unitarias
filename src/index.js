import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/styles.css';
// import { HelloWorldApp } from './components/HelloWorldApp';
// import { FirstApp } from './components/FirstApp';
import { CounterApp } from './components/CounterApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp title="Hola, soy Goku" subTitle={123} /> */}
        <CounterApp value={10} />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
