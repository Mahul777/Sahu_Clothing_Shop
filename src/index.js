import React from 'react';
import ReactDOM from 'react-dom/client'; // Update the import statement
import './index.css';
import App from './App';

// Create a root using ReactDOM.createRoot and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
