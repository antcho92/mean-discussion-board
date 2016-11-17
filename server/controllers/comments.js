var mongoose = require('mongoose');
var Topic = mongoose.model('Topic')
    User = mongoose.model('User'),
    Post = mongoose.model('Post'),
    Comment = mongoose.model('Comment');

module.exports = (function() {
  return {
    create: function(req, res) {
      console.log(req.body);
      User.findOne({_id: req.body._user}, function(err, user) {
        if (err) {throw err}
        Post.findOne({_id: req.body._post}, function(err, post) {
          if (err) {throw err}
          var comment = new Comment(req.body)
          .save(function(err, comment) {
            if (err) {throw err}
            user.comments.push(comment);
            user.save(function(err, user) {
              if (err) {throw err}
              post.comments.push(comment)
              post.save(function(err, post) {
                if (err) {throw err}
                res.json(comment);
              })
            })
          })
        })
      })
    },
    index: function(req, res) {
      Comment.find({}, function(err, comments) {
        if (err) {
          res.json(err);
        } else {
          res.json(comments);
        }
      })
    }
  }
})();
