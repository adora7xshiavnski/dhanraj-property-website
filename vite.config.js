import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The privacy policy is a static page (public/privacy-policy.html). Vercel serves it at
// /privacy-policy through "cleanUrls"; this does the same for `npm run dev` and `npm run preview`.
const cleanPrivacyUrl = () => {
  const rewrite = (req, _res, next) => {
    if (req.url === '/privacy-policy' || req.url.startsWith('/privacy-policy?')) {
      req.url = req.url.replace('/privacy-policy', '/privacy-policy.html');
    }
    next();
  };
  return {
    name: 'clean-privacy-url',
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
};

export default defineConfig({
  plugins: [react(), cleanPrivacyUrl()],
});
