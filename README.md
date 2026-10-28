# SK Energy website

Static site — no build step. `index.html` redirects to the homepage.

Deploy: push to GitHub, then enable GitHub Pages (Settings → Pages → Deploy from branch → root), or import the repo into Vercel/Netlify as a static site.

Run locally: serve the folder over HTTP (e.g. `npx serve .`) — opening files directly via `file://` will block the shared header/footer and data files from loading.

Photography is hosted on Higgsfield's CDN; logos are in `/assets`.
