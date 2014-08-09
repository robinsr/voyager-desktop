'use-strict'

angular.module('voyagerDesktopApp')
.service('AuthService',['$http','SessionService','API_ENDPOINT',function ($http, Session, API_ENDPOINT){
	var authService = {};

	/**
	* [login description]
	* @param  {Object} credentials has usernameOrEmail and password properties
	* @return {Object}  User object
	*/
	authService.login = function(credentials){
		return $http
		.post(API_ENDPOINT + '/users/session', credentials)
		.then(function(res){
			// create a session with session id, user id, and user role ('*' for now)
			Session.create(res.data.id, res.data.user._id, '*');
			return res.data.user
		})
	}

	authService.isAuthenticated = function () {
		return !!Session.userId;
	};

	authService.isAuthorized = function (authorizedRoles) {
		if (!angular.isArray(authorizedRoles)) {
			authorizedRoles = [authorizedRoles];
		}
		return (authService.isAuthenticated() &&
			authorizedRoles.indexOf(Session.userRole) !== -1);
	};

	return authService;
}]);