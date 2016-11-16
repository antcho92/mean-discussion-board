var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

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

  }
})();
