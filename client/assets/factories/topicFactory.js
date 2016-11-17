app.factory('topicFactory', ['$http', '$location', function($http, $location) {
  function TopicFactory() {
    var self = this;
    this.getTopic = function(topicId, callback) {
      $http.get(`/topic/${topicId}`).then(function(res) {
        console.log(res.data);
        callback(res.data);
      })
    }
    this.checkSess = function(callback) {
      $http.get('/users/checkSess').then(function(res) {
        if (!res.data) {
          console.log('user in not logged in');
          $location.url('/');
        } else {
          callback(res.data);
        }
      });
    };
    this.createPost = function(userId, post, topicId, callback) {
      post._user = userId;
      post._topic = topicId;
      $http.post(`/posts/`, post).then(function(res) {
        console.log(res);
        self.getTopic(topicId, callback);
      })
    };
    this.createComment = function(comment, topicId, callback) {
      $http.post('/comments', comment).then(function(res) {
        console.log(res);
        self.getTopic(topicId, callback);
      })
    }
  }
  return new TopicFactory();
}])
