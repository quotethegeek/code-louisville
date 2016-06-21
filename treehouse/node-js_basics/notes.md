#Node.js Basics Notes

Node.js can perform other tasks whilst it waits on others to complete

###JavaScript in the Browser
Native Objects
* String
* Array
* Date
* Math
* Et al..

Host Objects
* Window
* Document
* History
* XMLHttpRequest (Ajax)
* Et al..

###Node.js Platform: Node.js uses Chrome's V8 JavaScript engine
Native Objects
* String
* Array
* Date
* Math
* Et al..

Host Objects
* http
* https
* fs
* url
* Et al..
This allows JS to work outside the browser

###The 4 P's of Problem Solving
1. Preparation - where we understand the problem and think of a high level solution
2. Plan - where we plan out the solution
3. Perform - where we perform what's required in our proposed solution
4. Perfect - where we perfect the solution

Example of printing Name "Lauren" via node.js
```javascript
var personString = '{"name": "Lauren"}'
try {
  var person = JSON.parse(personString);
  console.log(person.name);
} catch(err) {
  console.error("Couldn't parse the JSON");
}
```

Process is a global object we can access things like the current version of node and arguments passed in as a command line.

The command line arguments can be accessed through which property on the `process` object?
argv
