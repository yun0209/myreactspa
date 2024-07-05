import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './intro';  //상대경로는 모두 src집에서 찾아라
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


