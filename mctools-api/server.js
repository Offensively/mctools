var express = require('express'),
  app = express(),
  port = process.env.PORT || 8021;
  
  var routes = require('./routes/mctoolsRoutes.js'); //importing route
  routes(app); //register the route

  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl, error: 'Not Found'})
  });

app.listen(port);

console.log('mctools server started on: ' + port);
