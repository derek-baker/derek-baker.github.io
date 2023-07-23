# Derek-Baker's Personal Site

## How is the project laid out?
- The `src` directory contains the files used to generate the site.
- Because the site is "deployed" to Github Pages, the build outputs static files in the `docs` directory.
    - [Github Pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

## What software is required to build and run the app?
- NodeJS (v16 or greater should be fine) & NPM
- Bash (the NPM scripts assume you can use Bash)

## How do I install dependencies?
``` bash
cd <REPO_ROOT>/src
npm install
```

## How do I build it?
``` bash
cd <REPO_ROOT>/src
npm run build
```
See the `package.json` file for more details.

## Why does the production build create a `.nojekyll` file?
Because if we allow Github Pages' default `Build with Jekyll` step to run, folders with names beginning with underscores are not served (EX: `_next/`). See [this issue](https://github.com/vercel/next.js/issues/2029) for more details.

## How do I run it?
``` bash
cd <REPO_ROOT>/src
npm run dev
```
See the `package.json` file for more details.

