var Profile = require("./profile.js");
var renderer = require("./renderer");
var querystring = require('querystring')

var commonHeaders = {'Content-Type': 'text/html'};

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if( request.url === '/' ) {
    if(request.method.toLowerCase() === "get") {
      //show search
      response.writeHead(200, commonHeaders);
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    } else {
      
      request.on('data', function(postBody) {
        var query = querystring.parse(postBody.toString());
        response.writeHead(303, {"location": "/" + query.username });
        response.end();
      });
      
      //if url == '/' && POST
        //redirect to :/username
    }
  }
  
}  
  
//Handle HTTP route GET /:username i.e. /danielbotta
function user(request, response) {
  var username = request.url.replace("/", "");
  if ( username.length > 0 ) {
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response);
    
     //get json from treehouse
     var studentProfile = new Profile(username);
     //on "end" 
     studentProfile.on("end", function(profileJSON) {
        //show profile
        
       //store the values which we need
       var values = {
         avatarUrl: profileJSON.gravatar_url,
         username: profileJSON.profile_name,
         badges: profileJSON.badges.length,
         javascriptPoints: profileJSON.points.JavaScript
       }
       //Simple Response
        renderer.view("profile", values, response);
        renderer.view("footer", {}, response);
        response.end();
       
     });
     
    //on "error"
    studentProfile.on("error", function(error) {
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