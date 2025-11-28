# Portfolio (Ajeebba Yasmin)

This repository contains a single-page portfolio generated from the resume (resume.pdf) in this repo.

Files added
- index.html — main page (already pushed)
- styles.css — dark theme styles
- script.js — prefilled projects + interactions (parsed from resume.pdf)
- resume.pdf — original resume (kept in place)
- assets/README.md — guidance for adding profile images if desired

Local preview
1. Clone the repo (if needed):
   git clone https://github.com/211301002-gif/211301002-gif.github.io
2. Serve locally:
   python -m http.server 8000
   open http://localhost:8000

Customizing
- Edit index.html to change hero text and About section.
- Update the `projects` array in script.js to add your project URLs and longer descriptions.
- Update the `skills` array in script.js to reflect your actual skills.

Deploy
- Files are pushed to branch `main`. If GitHub Pages isn't enabled, go to Settings → Pages and set the source to `main` (root).
- Your Pages URL will be: https://211301002-gif.github.io/