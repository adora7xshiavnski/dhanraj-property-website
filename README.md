# Dhanraj Property Website

React + Vite website for Dhanraj Property, Indore.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for production

```bash
npm run build    # output in dist/
npm run preview  # preview the production build
```

## Pages

- `/` home (hero, services, why choose us, property types, about, contact with map)
- `/privacy-policy` privacy policy

## Editing content

- Phone, email, address and WhatsApp number: `src/data/site.js`
- Page sections: `src/sections/`
- Privacy policy text and effective date: `src/pages/PrivacyPolicy.jsx`
- Styles and brand colours: `src/index.css`

## Deploying

Upload `dist/` to any static host. The site uses client-side routing, so the host must send all paths
to `index.html`. `public/_redirects` (Netlify) and `vercel.json` (Vercel) already handle this. On other
hosts (cPanel/Apache), add an equivalent rewrite rule.

Original brand files are kept in `brand/`.
