'use-strict'

angular.module('voyagerDesktopApp')
.factory('GeocodeFactory',['$resource', function ($resource){
	return $resource('http://localhost:8128/api/geocode?address=:address', {}, {
        show: { method: 'GET', params: {address: '@address'} }
    })
})