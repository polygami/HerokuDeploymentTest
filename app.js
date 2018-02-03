// These 2 lines are used to initialise express
var express = require("express");
var app = express();

// Tell Express what the default file extension will be for files that will be rendered
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/about", function(req, res) {
	res.render("about");
});

app.listen(process.env.PORT, process.env.IP);