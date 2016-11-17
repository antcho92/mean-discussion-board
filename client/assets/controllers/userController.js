app.controller('userController', ['$scope', 'usersFactory', '$routeParams', function($scope, uF, $routeParams) {
  var self = this;
  function updateUser(user) {
    self.currUser = user;
  }
  uF.checkSess(function(user) {
    self.user = user;
  });
  uF.getUser($routeParams.userId, updateUser);
}])
