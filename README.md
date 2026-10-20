# Christine Elstad — Portfolio

A minimal personal portfolio built with React, Vite and plain CSS.
Pages: Home, About, Contact.

## Run it

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Deploy on Vercel

Push the project to GitHub, then import the repository in Vercel.
Vercel detects Vite automatically (build command `npm run build`, output `dist`).
`vercel.json` makes sure pages like `/about` also work on refresh.

## Project structure

```
src/
  main.jsx            starts the app and loads the CSS
  App.jsx             the list of pages (routes)
  data/siteConfig.js  your name, email and links in one place
  components/         Header, Footer, Layout, Button, OrganicFrame, Placeholder
  pages/              Home, About, Contact
  styles/
    tokens.css        colours, fonts, spacing (start here to change the look)
    base.css          resets and element defaults
    layout.css        header, footer, page frame
    components.css    buttons, organic image frame, placeholder marking
    pages.css         layout for each page
  assets/             images (replace image-placeholder.svg with a real photo)
```

## Things to fill in

- Search the project for `<Placeholder` to find all text that still needs your own copy.
- Add your email and profile links in `src/data/siteConfig.js`.
- Replace `src/assets/image-placeholder.svg` with your photo, or pass a new `src` to `OrganicFrame`.
- The Home headline and short text are draft copy. Edit them in `src/pages/Home.jsx`.
- The contact form opens the visitor's email app. Swap in a form service later if you want messages delivered directly.

## Adding a portfolio section later

1. Create `src/pages/Work.jsx`.
2. Add `<Route path="work" element={<Work />} />` in `src/App.jsx`.
3. Add `{ to: '/work', label: 'Work' }` to the `links` list in `src/components/Header.jsx`.

## Palette

Ignition `#0E7C72` · Ivory `#FAF9F6` · Mist `#A7C4BC` · Sand `#EAD9C8` · Deep `#1F2E2B`
