app.controller('topicsController', ['$scope', 'loginFactory', 'topicsFactory', function($scope, lF, tF) {
  var self = this;
  lF.checkSess(function(user) {
    self.user = user;
  });
  function getTopics(topics) {
    self.topics = topics;
  }
  tF.index(getTopics);
}])
