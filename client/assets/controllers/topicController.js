app.controller('topicController', ['$scope', '$routeParams', 'dashboardFactory', 'postsFactory', function($scope, $routeParams, dF, pF) {
  console.log('topic factory')
  var self = this;
  console.log($routeParams, 'topicId');
  pF.checkSess(function(user) {
    self.user = user;
  })
  dF.getTopic($routeParams.id, function(topic) {
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
