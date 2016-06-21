var Profile = require("./profile.js");
var renderer = require("./renderer.js")

//Handle HTTP route GET / and POST / ie Home
function home(request, response) {
  //if url === "/" && GET
  if(request.url === "/") {
    //show search field
    response.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, response);
    renderer.view("search", {}, response);
    renderer.view('footer', {}, response);
    response.end();
  }
  //if url === "/" && POST
    //redirect to /:username
}

//Handle HTTP route GET /:username ie /ravendunn
function user(request, response) {
  //if url == "/..."
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, repsonse);
    //get json from treerhouse
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON){
    //show profile
      //Store the values we need
      var values = {
        avatarURL: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      //Simple repsonse
      renderer.view("profile", values, response);
      renderer.view("footer", {}}, response);
      response.end();
    });
    //on "error"
    studentProfile.on("error", functon(error){
      //show error
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });
  }
}

module.exports.home = home;
module.exports.user = user;
