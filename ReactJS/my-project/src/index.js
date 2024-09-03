import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './Demo';
import Seperator from './Sepeartor';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Demo />
    <Seperator count={10} symbol="---" />
  </React.StrictMode>
);