#Angular Basics
*Declarative Programming: A programming paradigm in which you build a program's logic describing its control flow. In other words, you tell Angular, "What to do," instead of "How to do it."

*Benfits of Angular JS
  * You can do more with less code
  * It's easy to keep your code well-organized, even as your project grows
  * A great community of support offering many third-party AngularJS projects

* Client-side application frameowrk
  * Backbone and Ember

### 4 Main Concepts of Angular
1. Templates
  * Hold most HTML and wha structure our application
2. Directives
  * Extend html templates with tags and attributes
  * Evaluates user interactions
  * Provides easy ways to manipulate data
  * Create reusable custom directives
3. Controllers
  * Tells our application how to behave:
    * What data should be displayed on button click
    * What elements should be displayed
  * Like the glue
  * Cannot use functions from sibling $scopes
4. Scope
  * Allows you to manipulate data and make changes to UI
  * Every template, directive, and controller has a Scope
  * The area of operation for a controller
  * Parent $scopes can share functions and values with their children
  * Values and functions created on the $rootScope are available in all child scopes.
