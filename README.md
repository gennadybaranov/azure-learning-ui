### To install: ###
1. in console open directory of package.json file.
2. type "npm install". It will install all npm modules from package.json settings.
3. if there are errors like 'cant find module', type "npm install this-module-name --save".

### For developing, when you make some changes in project: ###
1. Open the directory in console.
2. Type "npm start". It will start webpack-dev-server on localhost:3000 (can be changed in config-file)

For what: when you change the project (add some changes in js, css, html and etc), you can see results of your changes. If the server is started, it would watch for your changes and make auto-recompiling.

### Commands: ###
* "npm run build" - building the project
* "npm start" - building and starting dev-server in browser
* "npm install module-name --save" - installing module into the project

### Recommendations: ###
1. Use Visual Studio Code for development.
2. Install extensions for VS Code(ES7 React/Redux/GraphQL/React-Native snippets,Prettier - Code formatter - format all user defined js files).In root folder you can find the user settings for prettier.
