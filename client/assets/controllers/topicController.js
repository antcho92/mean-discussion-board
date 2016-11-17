app.controller('topicController', ['$scope', '$routeParams', 'topicsFactory', 'postsFactory', function($scope, $routeParams, tF, pF) {
  console.log('topic factory')
  var self = this;
  console.log($routeParams, 'topicId');
  pF.checkSess(function(user) {
    self.user = user;
  })
  tF.getTopic($routeParams.id, function(topic) {
    self.topic = topic;
    console.log(topic);
  })
  pF.index($routeParams.id, function(posts) {
    self.posts = posts;
  })
  this.createPost = function() {
    pF.create(this.user._id, this.post, $routeParams.id);
  }
}])
