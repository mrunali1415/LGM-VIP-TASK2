import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { spinner } from 'reactstrap';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

//If you want to strat measuring performance in your app, pass a function
//to log results (for example: reportWebVitals(console.log))
//or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();