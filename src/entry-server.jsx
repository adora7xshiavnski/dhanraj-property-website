import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
import { ToastProvider } from './components/Toast.jsx';

// Used at build time by scripts/prerender.js to put real page content into the HTML.
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </StaticRouter>
  );
}
