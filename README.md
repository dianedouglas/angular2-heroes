# Angular2 Project Notes

### Setup and Installation

* node v5.x.x or higher and npm 3.x.x or higher
* use homebrew or download the installer for node, then `sudo npm install npm -g`
* create config files: package.json (npm), tsconfig.json (controls ts compilation), typings.json (definitions for ts), systemjs.config.js (information to a module loader)
* create gitignore file
* `npm install` should create `node_modules` and `typings`. If no typings folder, run `npm run typings install`

### Create entry points to your app: root module, root component, main.ts

* Create `app.module.ts`. This is the root module. 
* Create `app.component.ts`. This is the root component.
* Create `main.ts`. This bootstraps the app.
* `main.ts` loads the root module, which uses the BrowserModule to allow our app to run in the browser. It can load other modules too. The root module also loads our root component, which in turn loads other components.

