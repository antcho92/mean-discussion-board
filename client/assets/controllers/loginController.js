app.controller('loginController', ['$scope', 'usersFactory', function($scope, uF) {
  var self = this;
  this.login = function() {
    uF.login(this.user, function(err) {
      console.log(err)
      self.errors = err;
    })
  };
  uF.checkSess(function(user) {
    self.user = user;
  });
}])
