import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ToastProvider } from './components/Toast.jsx';
import './index.css';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// The home page HTML is prerendered at build time (scripts/prerender.js), so attach to it.
// Other paths get the same HTML through the SPA fallback, so render them fresh.
if (container.hasChildNodes() && window.location.pathname === '/') {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
