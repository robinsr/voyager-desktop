'use-strict'

angular.module('voyagerDesktopApp')
.factory('ExpeditionsFactory',['$resource', '$location', 'API_ENDPOINT', function ($resource, $location, API_ENDPOINT){
	return $resource(API_ENDPOINT + '/api/expeditions', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
}]);