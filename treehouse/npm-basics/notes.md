#NPM
npm: a JavaScript Package Manager

What are packages?
* Packages are bundles of software
* npm packages are mainly JS code
* npm packages for Node.js projects are called modules

Can install compilers or transpilers

transpiling: the process of converting the source code of one language into another

###Terminal Commands

Clear the screen
clear

###npm Command Line Usage

See list of commands

npm
Get help for a command

npm <command> -h
e.g. npm install -h
Installing a package

npm install <package_name>
e.g. npm install bcrypt
e.g. with a flag npm install bcrypt --python=mySpecialPythonExecutable

Get help for a command

npm <command> -h
e.g. npm init -h
Initializing a package.json file

npm init
npm help json for what each of the fields in the package.json does
Installing an npm Package as a dependency

npm install colors --save
Installing an npm Package as a development dependency

npm install mocha --save-dev
Install all packages specified in your package.json

npm install <flags>
e.g. npm install
e.g. npm install --python=python2
Running npm in a production environment

NODE_ENV=production npm install

Check for outdated packages

npm outdated
Update packages in your project

For local packages npm update
For global packages npm update <package name> -g
e.g. npm update http-server -g

Uninstalling packages

Uninstall a local dependency: npm uninstall <package name>
e.g. npm uninstall colors
Uninstall a local dependency and remove frompackage.json: npm uninstall <package name> --save
e.g. npm uninstall colors --save
Uninstall a local development dependency and remove frompackage.json: npm uninstall <package name> --save-dev
e.g. npm uninstall mocha --save-dev
Uninstall a global dependency: npm uninstall <package name> -g
e.g. npm uninstall http-server -g
