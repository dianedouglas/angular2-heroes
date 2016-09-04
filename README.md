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

### Add HTML and CSS with gulp and bower to serve

* Create index.html 

The main part of this to notice is that it uses the </my-app> selector defined as the tag to load the app component. But the included file also has tags to load dependency files vendor.js and vendor.css from a build folder for any frontend bower dependencies, and it also has a tag to load all compiled SASS or plain CSS concatenated together.

* Create `resources` folder with sub folders for images and `styles`. Optional js folder. Inside of `styles` add `styles.css`

* Run `bower init` to create bower.json file. Keep all defaults. If you need to install bower on your machine `sudo npm install bower -g`.

* Create gulpfile.js with tasks for serving the app, compiling the typescript, concatenating/minifying all bower dependencies, as well as concatenating/building styles. 

### Run the app

These 4 steps are the same whether you are running a cloned project or a new project:

* npm install
* bower install
* gulp build
* gulp serve

This will install all dependencies, compile all your code and, create a build folder and put the needed files into it, and start your development server with automatic reloading. 