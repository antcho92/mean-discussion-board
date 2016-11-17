app.factory('postsFactory', ['$http', '$location', function($http, $location) {
  function PostsFactory() {
    var self = this;
    this.index = function(topicId, callback) {
      $http.get(`/posts/${topicId}`).then(function(res) {
        callback(res.data);
      });
    };
    this.create = function(userId, post, topicId) {
      post._user = userId;
      post._topic = topicId;
      $http.post(`/posts/`, post).then(function(res) {
        console.log(res);
      })
    };
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
  }
  return new PostsFactory();
}])
