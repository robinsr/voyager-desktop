'use-strict'

angular.module('voyagerDesktopApp')
.factory('ExpeditionFactory',['$resource', '$location', function ($resource, $location){
	return $resource('http://localhost:8128/api/expeditions/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
}]);