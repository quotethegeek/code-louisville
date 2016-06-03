Object Oriented JavaScript
======
#Object
* A container for values in the form of properties and functionality in the form of methods.
```javascript
var h1 = document.getElementById("header");
console.log(h1.innerHTML);
h1.innerHTML = "JavaScript is Awesome!";
alert(s);
```
* Provide functionality through methods.
* Provides data storage in properties
* The name of the property is a key
* The contents of a property is known as a value

## Types of Objects
1. Native Objects
   * Number
   * String
   * Array
   * Boolean
   * Object
2. Host Objects in the Browser
  * document
  * console
  * Element
3. Custom Objects

### Review
* Values stored in objects are properties
* Functionality encapsulated by an object is known as a method.
* A "String" is a Native Object
* An array is a Native Object
* The object's state is the condition of all values at a particular point in time
* The "document" is only available in the Web Browser and is a Host object.

## Object Literal
Examples:
```javascript
var person = {
  name: "Lauren",
  treehouseStudent: true
}
```
or
```javascript
person.name;
person.treehouseStudent;
person["full name"];
}
```
### Review
* If I had the key of "full name" how would I access the value of that property on an object?
  * person["full name"]
* Which of these is NOT a valid way to access a property, "name", on an object?
  * var key = "name"; cat.key; - cat.key is accessing a proptery called "key"
* All object property keys are of the type String?
  * True

## Constructor Function
* Describes how an object should be created
* Create similar objects
* Each object created is known as an instance of that object type

Example:
```javascript
function Contact(name, email) {
  this.name = name;
  this.email = email;
}

var contact = new Contact("Andrew", "andrew@teamtreehouse.com");
```

* "return this;" is not needed

### Review
* The prototype property allows you to add properties and methods to objects with the same constructor function.

## Prototypal Inheritance / Prototype Chain
* Which sentence best describes the first argument passed in to the call() method?
  * The first argument sets the value of this when the function is executed
* The technique used in JS to share functionality between similar types of objects isknown as: Prototypal Inheritance
