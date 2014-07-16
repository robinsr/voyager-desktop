'use-strict'

angular.module('voyagerDesktopApp')
.factory('ExpeditionFactory',['$resource', '$location', 'API_ENDPOINT', function ($resource, $location, API_ENDPOINT){
	return $resource(API_ENDPOINT + '/api/expeditions/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
}]);