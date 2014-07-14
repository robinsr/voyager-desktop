'use-strict'

angular.module('voyagerDesktopApp')
.factory('ExpeditionsFactory',['$resource', '$location', function ($resource, $location){
	return $resource('http://localhost:8128/api/expeditions', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
}]);