'use-strict'

angular.module("voyagerDesktopApp")
.controller("loginCtrl",['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService',
 function($scope, $rootScope, AUTH_EVENTS, AuthService){
	$scope.credentials = {
		usernameOrEmail: '',
		password: ''
	}

	$scope.loginFailed = false;

	$scope.sendCredentials = function(credentials){
		AuthService.login(credentials).then(function(user){
			$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
			$scope.$parent.setCurrentUser(user);
		},function(){
			$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
			$rootScope.$broadcast('errorMessage', {
				title: "Oh Snap!",
				text: "Incorrect username or password"
			});
		})
	}
}])