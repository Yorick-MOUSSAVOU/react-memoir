import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  {name:"Manger", completed:true, id:"todo-4"},
  {name:"Dormir", completed:false, id:"todo-5"},
  {name:"Recommencer", completed:false, id:"todo-6"}
]

const DATAFILTER = [
  {id:"todo-0", name:"Toutes", pressed:true },
  {id:"todo-1", name:"Actives", pressed:false },
  {id:"todo-3", name:"Terminées", pressed:false }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA}
        prends={DATAFILTER}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
