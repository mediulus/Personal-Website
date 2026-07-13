# Personal Website

My personal website, built with [React](https://react.dev/) and plain CSS. It showcases a little about me, my software projects, and my artwork.

**Live site:** https://mediulus.github.io/Personal-Website

## About this project

I originally built this site completely from scratch to sharpen my web development skills, hand-writing the HTML, CSS, and JavaScript myself. Later, I revamped it using [Cursor](https://cursor.com/) — refreshing the design, restructuring the components, and updating the content.

## Tech stack

- React
- React Router
- CSS
- GitHub Pages (deployment)

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm start
```

This runs the app in development mode at [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm start` — run the app in development mode
- `npm run build` — build the app for production into the `build` folder
- `npm run deploy` — deploy the production build to GitHub Pages

## Project structure

```
src/
  App.js             # App shell and routing
  NavBar.js          # Top navigation
  AboutMe.js         # Intro, background, and projects
  CurrentInterest.js # Artwork gallery
  Resume.js          # Resume
  index.css          # Global styles
  imgs/              # Images and artwork
```
