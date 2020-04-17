import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


let lastScrollTop = 0;
const carEl = document.getElementById('car');
window.onscroll = onScroll;

function onScroll(e) {
  const top = window.pageYOffset;
  if (lastScrollTop > top) {
    carEl.classList.add('rotate');
  } else if (lastScrollTop < top) {
    carEl.classList.remove('rotate');
  }
  lastScrollTop = top;
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

