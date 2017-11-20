import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/wrapper';
import Root from './root';

console.log("Greetings visitor!");
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
})
