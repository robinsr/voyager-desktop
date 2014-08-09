'use-strict'

angular.module("voyagerDesktopApp")
.controller("loginCtrl",['$scope', '$rootScope', 'AUTH_EVENTS', 'ERROR_MESSAGES', 'MessageService', 'AuthService',
 function($scope, $rootScope, AUTH_EVENTS, ERROR_MESSAGES, MessageService, AuthService){
	$scope.credentials = {
		usernameOrEmail: '',
		password: ''
	}

	$scope.loginFailed = false;

	$scope.sendCredentials = function(credentials){
		AuthService.login(credentials).then(function(user){
			$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
			$scope.$parent.setCurrentUser(user);
			MessageService.removeMessage(ERROR_MESSAGES.usernameOrPassword);
		},function(){
			$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
			MessageService.addMessage(ERROR_MESSAGES.usernameOrPassword);
		})
	}
}])