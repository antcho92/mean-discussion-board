var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Post = mongoose.model('Post');

module.exports = (function() {
  return {
    create: function(req, res) {
      console.log(req.body);
      User.findOne({_id: req.body._user}, function(err, user) {
        if (err) {
          res.jon(err);
        } else {
          Topic.findOne({_id: req.body._topic}, function(err, topic) {
            if (err) {
              res.json(err);
            } else {
              var post = new Post(req.body)
              .save(function(err, post) {
                console.log(user);
                user.posts.push(post)
                user.save(function(err, user) {
                  if (err) {
                    res.json(err);
                  } else {
                    topic.posts.push(post)
                    topic.save(function(err, topic) {
                      if (err) {
                        res.json(err);
                      } else {
                        res.json(topic);
                      }
                    })
                  }
                })
              })
            }
          })
        }
      })
    },
    get: function(req, res) {
      console.log(req.params.id);

    }
  }
})()
