var express         = require('express');
var MongoClient     = require('mongodb').MongoClient;
var bodyParser      = require('body-parser');
var conn            = require('./config/dbConf.js');
var port            = conn.port;

var app             = express();

MongoClient.connect(conn.url, function(error, client) {

  if (error){
    console.log(error);
    console.log("\nCould not connect to the database!");
    console.log("\n Exiting now.......");
    process.exit();
  }

  console.log("Successfully connected to database!");
  var db = client.db(conn.db);
  require('./app/routes/caller.routes.js')(app,db);

  app.listen(port,function(){
    console.log("Server is listening on port " + port);
  });
});
