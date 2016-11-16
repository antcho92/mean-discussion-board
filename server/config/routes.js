var users = require('./../controllers/users.js')
var topics = require('./../controllers/topics.js')

module.exports = function(app) {
  app.get('/users', users.index);
  app.post('/users', users.login);
  app.get('/users/checkSess', users.checkSess);
  app.get('/users/logout', users.logout);
  app.get('/topics', topics.index);
}
