
var express = require('express');
var router = express.Router()
var port = 3000;


app.set('views', __dirname + '/views');

/* Create a root route to render a homepage */


/* set up your app and view engine */
app.set('view engine', 'html');
/* and listen on your port */
app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
  })


  /* ### Part 2 - Functionality*/

