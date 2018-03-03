module.exports = function(app,db){

  var reqcollection = "caller";

  //GET one
  app.get('/getCallerInfo/:phone',function(req,res){

    var phone = parseInt(req.params.phone);
    //console.log(phone);
    var details = {"phone":phone};

    db.collection(reqcollection).findOne(details, function(err, item){
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }

    });
  });

  // GET all
  app.get('/getAllCallers',function(req,res){

    db.collection(reqcollection,function(err,collection){
      collection.find().toArray(function(err, items){
            if (err) {
              res.send({'error':'An error has occurred'});
            } else {
              res.send(items);
            }
          //  db.close();
      });

    });

  });

};
