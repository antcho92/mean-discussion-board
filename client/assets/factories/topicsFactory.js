app.factory('topicsFactory', ['$http', function($http) {
  function TopicsFactory() {
    var self = this;
    this.index = function(callback) {
      $http.get('/topics').then(function(res) {
        console.log(res.data, 'topics');
        callback(res.data)
      });
    }
  }
  return new TopicsFactory();
}])
