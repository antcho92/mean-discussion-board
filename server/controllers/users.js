var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
  return {
    index: function(req, res) {
      User.find({}, function(err, users) {
        res.json(users);
      })
    },
    getUser: function(req, res) {
      console.log(req.params.userId);
      User.findOne({_id: req.params.userId}, function(err, user) {
        if (err) {
          res.json(err);
        } else {
          res.json(user);
        }
      })
    },
    login: function(req, res) {
      console.log(req.body);
      User.findOne({
        name: req.body.name
      }, function(err, user) {
        if (err) {
          console.log()
          res.json(err);
        } else {
          if (!user) {
            var userInstance = new User(req.body);
            userInstance.save(function(err, user) {
              if (err) {
                console.log(err);
                res.json(err)
              } else {
                req.session.user = user;
                req.session.save();
                res.json(req.session.user);
              }
            });
          } else {
            req.session.user = user;
            req.session.save();
            res.json(req.session.user);
          }
        }
      })
    },
    checkSess: function(req, res) {
      if (req.session.user) {
        res.json(req.session.user);
      } else {
        res.send(null);
      }
    },
    logout: function(req, res) {
      req.session.destroy(function(err) {
        if (err) {
          res.json(err);
        } else {
          res.redirect('/');
        }
      })
    }
  }
})()
