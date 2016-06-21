var fs = require('fs');

function view(templateName, values, response) {
  //Read from the template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html');
  //Insert values into the Content-Type

  //Write out the content to the repsonse
  response.write(fileContents);
}

module.exports.view = view;
