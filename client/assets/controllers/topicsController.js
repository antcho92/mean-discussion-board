app.controller('topicsController', ['$scope', 'usersFactory', 'topicsFactory', function($scope, uF, tF) {
  var self = this;
  uF.checkSess(function(user) {
    self.user = user;
  });
  function getTopics(topics) {
    self.topics = topics;
    self.topic = {};
  }
  tF.index(getTopics);
  this.create = function() {
    console.log(this.topic)
    tF.create(this.topic, this.user._id, getTopics);
  }
}])
