module.exports = function(app, conn, upload) {
    var express = require('express');
    var router = express.Router();
    
    router.get('/', function(req, res, next) {
      res.render('sugang/sugang', {
        title: "Hanguler"
      });
    });

    router.get('/', function(req, res, next) {
      res.render('sugang/welldone', {
        title: "Hanguler"
      });
    });
    
    return router;
    };