import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FunctionalComponent from './components/FunctionalComponent';
import reportWebVitals from './reportWebVitals';
import EmployeeListMap from './components/EmployeeListMap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <FunctionalComponent />
    <EmployeeListMap />
  </React.StrictMode>
);

reportWebVitals();
