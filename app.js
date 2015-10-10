var express = require('express');
var createObject = require(__dirname + '/custom-modules/create_object.js');
var http = require("http");

var app = express();
app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res) {

	res.render('index');

});

app.get('/:username', function(req, res) {

	var username = req.params.username;

	//Connect to the API URL (http://teamtreehouse.com/username.json)
    var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
        var body = "";

        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
        });

        response.on('end', function () {
            if(response.statusCode === 200) {
                try {
                    //Parse the data
                    var profile = JSON.parse(body);
                    var newProfile = createObject(profile);
                    res.send(newProfile);
                    // res.send(profile);
                } catch (error) {
                    console.log(error);
                }
            }
        })

    });

	// res.render('profile');

});

app.listen(8080, function() {

	console.log('Frontend server is running on port 8080...');

});