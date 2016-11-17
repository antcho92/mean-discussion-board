app.controller('topicController', ['$scope', '$routeParams', 'topicFactory', function($scope, $routeParams, tF) {
  console.log('topic factory')
  var self = this;
  tF.checkSess(function(user) {
    self.user = user;
  })
  function updateTopic(topic) {
    self.topic = topic;
    self.post = {};
  }
  tF.getTopic($routeParams.id, updateTopic)

  this.createPost = function() {
    tF.createPost(this.user._id, this.post, $routeParams.id, updateTopic);
  }
  this.createComment = function() {
    
  }
}])
