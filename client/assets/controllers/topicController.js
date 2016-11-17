app.controller('topicController', ['$scope', '$routeParams', 'topicFactory', function($scope, $routeParams, tF) {
  console.log('topic factory')
  var self = this;
  console.log($routeParams, 'topicId');
  tF.checkSess(function(user) {
    self.user = user;
  })
  tF.getTopic($routeParams.id, function(topic) {
    self.topic = topic;
    console.log(topic);
  })
  this.createPost = function() {
    tF.createPost(this.user._id, this.post, $routeParams.id);
  }
}])
