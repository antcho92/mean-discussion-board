app.factory('topicsFactory', ['$http', function($http) {
  function TopicsFactory() {
    var self = this;
    this.index = function(callback) {
      $http.get('/topics').then(function(res) {
        console.log(res.data, 'topics');
        callback(res.data)
      });
    };
    this.create = function(topic, userId, callback) {
      $http.post(`/topics/${userId}`, topic).then(function(res) {
        console.log(res.data);
        self.index(callback);
      })
    };
    this.getTopic = function(topicId, callback) {
      $http.get(`/topic/${topicId}`).then(function(res) {
        console.log(res.data);
        callback(res.data);
      })
    }
  }
  return new TopicsFactory();
}])
