var mongoose = require('mongoose');
var Topic = mongoose.model('Topic')
    User = mongoose.model('User'),
    Post = mongoose.model('Post'),
    Comment = mongoose.model('Comment');

module.exports = (function() {
  return {
    create: function(req, res) {
      console.log(req);
    }
  }
})();
