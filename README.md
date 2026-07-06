# Aekant Villa — Website

A modern, responsive, single-page website for **Aekant Villa**, a vacation rental property near Trimbakeshwar, Nashik, Maharashtra. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step. Just open `index.html`.

## Project Structure

```
Aekant-Villa/
├── index.html
├── style.css
├── script.js
├── images/        ← add your real photos here (see placeholders below)
├── videos/         ← add your real video clips here
└── README.md
```

## Before You Launch — Replace These Placeholders

| What | Where | File |
|---|---|---|
| Hero, gallery & video-poster images | `images/hero.jpg`, `images/villa1.jpg`, `images/villa2.jpg`, `images/villa3.jpg`, `images/pool.jpg`, `images/bedroom.jpg`, `images/terrace.jpg`, `images/favicon.png` | drop files into `images/` |
| Video tour clips | `videos/villa-tour.mp4`, `videos/pool.mp4`, `videos/drone.mp4` | drop files into `videos/` |
| WhatsApp number | `91XXXXXXXXXX` (appears in Hero, CTA strip, Contact section, footer, and floating WhatsApp button) | `index.html` |
| Phone number | `+91 XXXXX XXXXX` | `index.html` (Contact + footer) |
| Email address | `booking@aekantvilla.com` | `index.html` (Contact + footer) |
| Google Maps embed | `src="https://www.google.com/maps/embed?pb=REPLACE_WITH_YOUR_EMBED_LINK"` | `index.html` Contact section |
| Social links | `#` placeholders under Follow Us | `index.html` footer |

**Tip:** Use `Ctrl+F` / `Cmd+F` for `XXXXX` and `REPLACE_WITH` in `index.html` to find every placeholder quickly.

### Getting your Google Maps embed link
1. Open [Google Maps](https://maps.google.com) and search for your villa's location.
2. Click **Share → Embed a map → Copy HTML**.
3. Copy just the `src="..."` URL from the `<iframe>` and paste it into the `contact__map` iframe in `index.html`.

## Local Preview

No build tools needed — just double-click `index.html`, or serve it locally:

```bash
# Python
python3 -m http.server 8080

# Node (if you have npx)
npx serve .
```

Then visit `http://localhost:8080`.

## Deployment

### 1. GitHub Pages
1. Create a new GitHub repository and push this folder's contents to it.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/root` folder.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/`.

### 2. Netlify
1. Sign in at [netlify.com](https://netlify.com).
2. Drag and drop the `Aekant-Villa` folder onto the Netlify dashboard ("Deploy manually"), **or**
3. Connect your GitHub repo for continuous deployment (Netlify auto-detects static sites — no build command needed, publish directory is `/`).

### 3. Cloudflare Pages
1. Sign in at [pages.cloudflare.com](https://pages.cloudflare.com).
2. Click **Create a project → Connect to Git** (or use direct upload).
3. Framework preset: **None**. Build command: *(leave empty)*. Output directory: `/`.
4. Deploy — Cloudflare gives you a `*.pages.dev` URL, with the option to add a custom domain.

### 4. Wasmer
1. Install the Wasmer CLI: `curl https://get.wasmer.io -sSfL | sh` (or see [wasmer.io](https://wasmer.io)).
2. From inside the `Aekant-Villa` folder, run:
   ```bash
   wasmer deploy
   ```
3. Follow the CLI prompts to publish the static site; Wasmer will give you a live URL.

### 5. GoDaddy Static Hosting
1. Log in to your GoDaddy hosting account (cPanel or GoDaddy Website Builder's static hosting option).
2. Open **File Manager** and navigate to `public_html` (or your domain's web root).
3. Upload all files and folders (`index.html`, `style.css`, `script.js`, `images/`, `videos/`) directly into that root directory — preserve the folder structure.
4. Visit your domain to confirm it's live.

## Notes

- All images use `loading="lazy"` (except the hero) to keep the initial page load light.
- Animations respect `prefers-reduced-motion` for accessibility.
- The WhatsApp floating button and booking links pre-fill a message — update the phone number and the message text as needed.
- Color palette: Forest Green `#2E7D32`, Warm Beige `#F5F1E8`, Golden Accent `#D4AF37`.
- Fonts: `Playfair Display` (headings) + `Poppins` (body), loaded from Google Fonts.
