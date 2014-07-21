'user-strict'

angular.module('voyagerDesktopApp')
.controller('ApplicationCtrl', function ($scope, $rootScope, $location, USER_ROLES, ERROR_MESSAGES, AuthService, MessageService) {
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = AuthService.isAuthorized;
 
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };

  $rootScope.$on('auth-login-success', function(evt, cur, prev) {
  	var returnTo = $rootScope.savedLocation || "/expeditions/";
  	$location.path(returnTo)
    MessageService.removeMessage(ERROR_MESSAGES.login)
  });


  // Redirects users to login form for login-restricted urls
  $rootScope.$on('$routeChangeStart', function (event, next) {
  	var userAuthenticated = $scope.currentUser;

  	if (!userAuthenticated && next.isLogin) {
  		/* You can save the user's location to take him back to the same page after he has logged-in */
  		$rootScope.savedLocation = $location.url();

  		MessageService.addMessage(ERROR_MESSAGES.login)
  		$location.path('/login');
  	}
  });

  $scope.isActive = '/';

  // Changes $scope.isActive, updates UI active tab
  $rootScope.$on('$routeChangeSuccess', function () {
  	console.log($location.path())
  	$scope.isActive = $location.path();
  });
})