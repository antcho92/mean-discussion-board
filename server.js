var express = require('express'),
    path = require('path'),
    bp = require('body-parser'),
    port = process.env.PORT || 8080;

var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bp.json());

var session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function() {
  console.log(`listening on port ${port}`)
})
