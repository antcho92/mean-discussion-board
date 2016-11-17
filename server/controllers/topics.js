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
      User.findOne({_id: req.params.UserId}, function(err, user) {
        if (err) {console.log(err)}
        var topic = new Topic(req.body);
        topic._user = user;
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
        .populate('_user')
        .populate({
          path: 'posts',
          model: 'Post',
          populate: {
            path: '_user',
            model: 'User'
          }
        })
        .exec(function(err, topic) {
          if (err) {throw err}
          Topic
          .populate(topic, {
            path: 'posts.comments',
            model: 'Comment',
            populate: {
              path: '_user',
              model: 'User'
            }
          }, function(err, topic) {
            if (err) {throw err}
            res.json(topic);
          })
        })
        // .populate({
        //   path: 'posts.comments',
        //   model: 'Comment',
        //   populate: {
        //     path: '_user',
        //     model: 'User'
        //   }
        // })
        // .exec(function(err, topic) {
        //   if (err) {console.log(err)}
        //   res.json(topic);
        // })
    }
  }
})();
