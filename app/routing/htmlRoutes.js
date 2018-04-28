var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var connect = require("connect");
//require("./app/routing/apiRoutes.js")(app);

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* app.get("/", function(req, res) {no
    res.sendFile(path.join(__dirname, "home.html"));
  }); */

app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

app.get("/:friends", function(req, res) {
        return res.json(friends);
      });


    








app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})