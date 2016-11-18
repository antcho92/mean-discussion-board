var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function() {
  return {
    index: function(req, res) {
      Topic.find({})
        .populate('_user')
        .exec(function(err, topics) {
          if (err) {
            res.json(err);
          } else {
            res.json(topics);
          }
        });
    },
    create: function(req, res) {
      User.findOne({_id: req.body._user}, function(err, user) {
        if (err) {console.log(err)}
        var topic = new Topic(req.body);
        topic.save(function(err) {
          if (err) {console.log(err)}
          user.topics.push(topic);
          user.save(function(err, user) {
            if (err) {console.log(err)}
            res.json(user);
          })
        })
      });
    },
    getTopic: function(req, res) {
      Topic.findOne({_id: req.params.topicId})
      //populates topic user
      .populate('_user')
      // populates comments and user of each comment
      .populate({
        path: 'posts',
        model: 'Post',
        populate: {
          path: 'comments',
          model: 'Comment',
          populate: {
            path: '_user',
            model: 'User'
          }
        }
      })
      // populates post user
      .populate({
        path: 'posts',
        populate: {
          path: '_user upvotes downvotes',
          model: 'User'
        }
      })
      .exec(function(err, topic) {
        if (err) {
          res.json(err)
        } else {
          res.json(topic);
        }
      })
    }
  }
})();
