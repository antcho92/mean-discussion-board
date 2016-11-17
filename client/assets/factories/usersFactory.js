app.factory('usersFactory', ['$http', '$location', function($http, $location) {
  function UsersFactory() {
    var self = this;
    this.login = function(user, callback) {
      $http.post('/users', user).then(function(res) {
        if (res.data.errors) {
          callback(res.data.errors);
        } else {
          $location.url('/discussion')
        }
      })
    };
    this.checkSess = function(callback) {
      $http.get('/users/checkSess').then(function(res) {
        if (!res.data) {
          console.log('user is not logged in');
          $location.url('/');
        } else {
          console.log(res, 'id');
          callback(res.data);
          $location.url('/dashboard');
        }
      });
    };
  }
  return new UsersFactory();
}])
