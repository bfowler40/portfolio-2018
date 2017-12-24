import './src/scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const World = ():JSX.Element => {
  return (
    <span>World</span>
  );
}

const App = () => {
  return (
    <h1>Hello <World /></h1>
  );
}

const root = document.getElementById('app');

ReactDOM.render(<App />, root);
