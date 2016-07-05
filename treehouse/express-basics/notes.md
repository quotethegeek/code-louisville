#Express Basics
http://expressjs.com/
http://expressjs.com/en/4x/api.html

* Routing is a core component of Express.js
* Express.js is a web frameowrk for Node.js
* In order to use node modules in a file, they need to be required using the require method.
* To start a node project in a github repository without a package.json file run the following command: npm init
* To install a node project in a github repo with a package.json file run: npm install ___ --save (--save saves the package.json file)
* Client: Browser (Device that's used to visit the website)
* Request: URL
* Client makes a GET request, the server will send back a response or an error (with a status code)

###Setting up Express in your app
* Start with calling express.js:
```javascript
'use strict'; // Causes JS interpreter to run a strict varient

var express = require('express');
var app = express();
```
* Set up your paths & server:
```javascript
app.get('/', function(request, response){
  response.send("I love Treehouse!")
});
app.listen(3000);
```
* The 'get' method takes 2 parameters: request, response
* 'app.listen' method can take a parameter, which will tell the server which port to serve the application on
* A route is where a server is set up to respond to a request from a client
* The 'get' method registers a route that will listen or HTTP GET requests at a given route

###Setting up Debugger (node-inspector) and refreshing server (nodemon)
* In one console run: node-inspector - This will setup the platform for investigating code and provide URL
  * `node-inspector` can be used to run node apps directly OR to debug node apps being run in debug mode:
  * A breakpoint in a JavaScript application can be set by clicking on the line of a file in the browser console, or writing the 'debugger;' statement directly into your code.
* In another console (or tab), run: nodemon --debug app.js - This will tell nodemon to communicate with the node-inspector, so it updates every time you save files
  * Use 'debugger;' to set a breakpoint in your code and run nodemon as: nodemon --debug-brk app.js to break the debugger on the first line
  * When the debugger breaks in the application, you have access to all variables in the current application context in the browser’s console.

###Running Requests with Express
* The request object stores route parameters in the params object
* Express route parameters allow you to request different data simply by changing the URL
* The request object is like a JavaScript bundle of the incoming HTTP Request
* The request object gives you access to the "hostname" where the server is serving from.
* The response object’s 'render' method is used to turn templates into HTML.
* Status codes can be set manually on the response object.
* The response object’s `send` method can be used to send a string or JSON.
* In express the '?' character at the end of a route parameter indicates that it is optional.
