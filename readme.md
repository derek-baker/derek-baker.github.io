# Derek-Baker's Personal Site

## How is the project laid out?
- The `src` directory contains the files used to generate the site.
- Because the site is "deployed" to Github Pages, we need to generate an `index.html` file in the root of the repo, which can reference other files 

## How do I install dependencies?
``` bash
cd <REPO_ROOT>/src
npm install
```

## How do I build it?
``` bash
cd <REPO_ROOT>/src
npm run build
# TODO: Step to copy build `index.html` and `dist/`
```
See the `package.json` for more details.

## How do I run it?
``` bash
cd <REPO_ROOT>/src
npm run dev
```
See the `package.json` for more details.

### References
- Increase VS Code file tab indent: https://stackoverflow.com/questions/55310734/how-to-add-more-indentation-in-the-visual-studio-code-explorer-file-tree-structu

- https://code.visualstudio.com/docs/getstarted/settings#_settingsjson