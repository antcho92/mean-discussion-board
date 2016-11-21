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
                        res.json(post);
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
      console.log(req.params.topicId);
      Post.find({_topic: req.params.topicId}, function(err, posts) {
        if (err) {
          res.json(err);
        } else {
          res.json(posts);
        }
      })
    },
    upvote: function(req, res) {
      console.log(req.body);
      User.find({_id: req.body.userId}, function(err, user) {
        console.log(user, 'user');
        Post.find({_id: req.body.postId}, function(err, post) {
          console.log(post, 'post');
          if (req.body.type) {
            //upvote
          } else {
            //downvote
          }
        })
      })
    }
  }
})()
