app.controller('loginController', ['$scope', 'loginFactory', function($scope, lF) {
  var self = this;
  this.login = function() {
    lF.login(this.user);
  };
  lF.checkSess(function(user) {
    self.user = user;
  });
}])
