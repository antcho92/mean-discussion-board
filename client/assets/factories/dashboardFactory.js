app.factory('dashboardFactory', ['$http', function($http) {
  function DashboardFactory() {
    var self = this;
    this.index = function(callback) {
      $http.get('/topics').then(function(res) {
        console.log(res.data, 'topics');
        callback(res.data)
      });
    };
    this.create = function(topic, callback) {
      console.log(topic);
      $http.post(`/topics/`, topic).then(function(res) {
        console.log(res.data);
        self.index(callback);
      })
    };
  }
  return new DashboardFactory();
}])
