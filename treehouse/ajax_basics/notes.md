#AJAX Basics
##Asynchronous JavaScript And XML

Lets you update content on a web page without loading a new web page.

Request: webpage asks for information from server
Response: server responds

XMLHttpRequest Object / XHR: The type of JavaScript object browsers use to managed AJAX requests

Callbacks for multiple AJAX requests may not run in the order the requests were sent.

###How AJAX Works
1. Create an XMLHttpRequest Object
2. Create a callback function
3. Open a Request
4. Send the Request

###Post vs GET: Methods
*[]Get: Only interested in receiving data from a server. Sends data in the URL, therefore, a URL required. Is limited to 2083 characters in some browsers (IE)
*[]Post: Used to send data that will be stored. Sends infinite amounts of data. It is more secure than GET. Sends data in the "body" of the request.
( Query string: Information sent to the web server, added to the end of a URL.
  Example: example.url.com/test.php?lastName=Dunn )

###Handling lots of information
Use 2 popular methods of data organization:
XML, Extensible Markup Language: Markup data with tags. Can create your own tags. Breaking up into parts is called parsing.
JSON, Easiest format for JavaScript to work with.

####Methods for requesting AJAX
Web proxy: Allows you to bypoass a web browser's same-origin policy by retrieving data from another server, while keeping JAAX requests within the same domain.

JSONP: JSON with padding
*[] A method for requesting data from another web server by bypassing a web browser's "same origin" policy.
*[] A way of sending data in a JavaScript file.
*[] https://api.flickr.com/services/feeds/photos_public.gne?format=json is the method used to retrieve a JSON formatted version of Flickr Photo feed
*[]jQuery's $.getJSON() method:
  #[] A URL
  #[] A JavaScript object to send ata to the server
  #[] A callback function to process the response from the server
*[] jQuery's $.each() method
  #[] An object OR an array
  #[] A callback function to process either the object's property names and values OR the array's items (The index value of current array item, The value of the current array item)

CORS: Crossorigin resource sharing

####API Keys
*[] Lets a web developer connect with a third party API like Google maps
*[] Lets a website limit access to its API
*[] Lets a web track use of its API and charge money for its use.
