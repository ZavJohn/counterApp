import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraAPP';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value = { 123456 }/>, divRoot);

//console.log(saludo);