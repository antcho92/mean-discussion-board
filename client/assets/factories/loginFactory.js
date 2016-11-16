app.factory('loginFactory', ['$http', '$location', function($http, $location) {
  function LoginFactory() {
    var self = this;
    this.login = function(user) {
      $http.post('/users', user).then(function(res) {
        console.log(res.data);
        $location.url('/discussion')
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
          $location.url('/topics');
        }
      });
    };
  }
  return new LoginFactory();
}])
