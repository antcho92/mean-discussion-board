app.controller('dashboardController', ['$scope', 'usersFactory', 'dashboardFactory', function($scope, uF, dF) {
  var self = this;
  uF.checkSess(function(user) {
    self.user = user;
  });
  function getTopics(topics) {
    self.topics = topics;
    self.topic = {};
  }
  dF.index(getTopics);
  this.create = function() {
    console.log(this.topic)
    this.topic._user = this.user._id
    dF.create(this.topic, getTopics);
  }
}])
