import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/wrapper';
import Gallery from './components/gallery';

console.log("Greetings visitor!");
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Wrapper/>, root);
})
