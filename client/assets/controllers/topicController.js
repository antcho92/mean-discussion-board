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
  tF.getTopic($routeParams.topicId, updateTopic)

  this.createPost = function() {
    tF.createPost(this.user._id, this.post, $routeParams.topicId, updateTopic);
  }
  this.createComment = function(comment, postId) {
    comment._post = postId;
    comment._user = this.user._id;
    tF.createComment(comment, updateTopic);
  };
  this.vote = function(postId, bool) {
    var vote = {
      postId: postId,
      type: bool,
      userId: this.user._id
    }
    tF.vote(vote, updateTopic);
  }
}])
