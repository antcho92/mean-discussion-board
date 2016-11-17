var users = require('./../controllers/users.js')
var topics = require('./../controllers/topics.js')
var posts = require('./../controllers/posts.js')
var comments = require('./../controllers/comments.js')

module.exports = function(app) {
  app.get('/users', users.index);
  app.get('/user/:userId', users.getUser)
  app.post('/users', users.login);
  app.get('/users/checkSess', users.checkSess);
  app.get('/users/logout', users.logout);
  app.get('/topics', topics.index);
  app.post('/topics/', topics.create);
  app.get('/topic/:topicId', topics.getTopic);
  app.post('/posts', posts.create);
  app.get('/posts/:topicId', posts.get);
  app.post('/comments', comments.create);
  app.get('/comments', comments.index);
}
