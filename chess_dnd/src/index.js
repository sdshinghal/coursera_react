import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board'
import { observe } from './components/Game';

// ReactDOM.render(<Board knightPosition={[7, 4]}/>, document.getElementById('root'));

const root = document.getElementById('root');

observe(knightPosition =>
    ReactDOM.render(<Board knightPosition={knightPosition} />, root),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


