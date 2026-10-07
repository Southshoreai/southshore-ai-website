import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Keep meaningful homepage text available in the delivered HTML, then remove it for app visitors.
document.getElementById('ssai-static-fallback')?.remove();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
