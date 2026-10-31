// Renders the prerendered routes into dist/ so crawlers that don't run JavaScript see the content.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle in dist-ssr/).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const ROUTES = ['/'];

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

if (!template.includes('<div id="root"></div>')) throw new Error('Could not find <div id="root"></div> in dist/index.html');

for (const route of ROUTES) {
  const html = template.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`Prerendered ${route} -> dist/${file}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
