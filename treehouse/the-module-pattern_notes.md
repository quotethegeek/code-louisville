# The Module Pattern in JS
Easy readable + well structured
Function that logs a string to the console:
```javascript
function foo() {
  console.log('foobar');
};

foo();
```
In the above function, "foo" is accessible in the global namespace aka Cluttering the Global Namespace

## Cluttering the Global namespace
* So much is happening in browsers, such as loading so many JS libraries. This runs the risk of sharing variables that shouldn't be shared.
* To solve: wrap in a self-executing anonymous function:
```javascript
(function(){
  function foo() {
    console.log('foobar');
};

foo();
}());
```
The above wraps the function in closers, and then I can call it.

Instead of Closers, a + or ! can be used if you are concatenating multiple files together and you'd have to remember to end every module pattern with the closing ). Example:
```javascript
+function(){
  function foo() {
    console.log('foobar');
};

foo();
}();
```
or
```javascript
!function(){
  function foo() {
    console.log('foobar');
};

foo();
}();
```
If you don't know which file would come next, you'd need to do this:
```javascript
;(function(){
  function foo() {
    console.log('foobar');
};

foo();
}());
```
