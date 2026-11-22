# Ruba Bounai: portfolio

My personal portfolio: a one-page site with my projects, skills and experience. It is written in plain HTML, CSS and JavaScript, with no build step. It has an English and a Russian version (the buttons in the header switch between them) and a light and a dark theme.

## Run it on your computer

Open `index.html` in a browser. Or, from this folder:

```bash
python -m http.server 8000
```

and go to http://localhost:8000.

## Change things

- **Texts in English:** edit `index.html`.
- **Texts in Russian:** edit the `RU` list at the top of `js/main.js`. Each line has the same name as the `data-i18n` attribute in the HTML.
- **Colours:** the variables at the top of `css/style.css`.
- **CV files:** replace the PDFs in `assets/cv/`, keeping the same names.
- **Project screenshots:** put `flowboard.png`, `maracaibo.png` and `valetta.png` (about 1280 x 720) in `assets/screenshots/`. Until they exist, each card shows a coloured header with the project name.

## Publish it

On GitHub Pages: create a public repository called exactly `RubaAlbounai.github.io`, upload these files, and the site appears at https://rubaalbounai.github.io after a minute or two.
