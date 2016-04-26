'use strict';
var express = require('express');
//var controller = require('./upload.controller');
//var controller = require('../product/product.controller');.
var controller = require('./imageupload.controller');
var http    = require('http');
var path    = require('path');
var fs      = require('fs');
var multiparty = require('connect-multiparty');
var uploadOptions = { autoFile: true,
                      uploadDir: 'app/public/images'
}
var app = express();
var router = express.Router();

router.post('/upload', multiparty(uploadOptions), controller.upload);


/*app.post('/', function(req, res) {
    var image =  req.files.image;
    console.log(image.name);
    console.log(image.type);
    console.log(image.path);
    console.log(req.body.image);
    var newImageLocation = path.join(__dirname, 'app/public/images', image.file.name);
    //var path = __dirname + "app\\public\\images" + image.name ;
    fs.readFile(image.path, function(err, data) {
      if (err) {
      return res.status(400).send({
            message: errorHandler.getErrorMessage(err)
        });
      } 
        fs.writeFile(newImageLocation, data, function(err) {
            res.json(200, { 
                src: 'images/' + image.name,
                size: image.size
            });
        });
    });
});*/


/*var path = "c:\\Temp\\Test.txt";
var data = "Hello from the Node writeFile method!";
app.post('/', function(req, res) {
   fs.writeFile(path, req, function(error) {
     if (error) {
       console.error("write error:  " + error.message);
     } else {
       console.log("Successful Write to " + path);
     }
  });
});*/

//module.exports = app;
module.exports = router;