'user-strict'

angular.module('voyagerDesktopApp').
controller("SimpleMapController", ['$scope','$q', function($scope,$q) {
	$scope.center = {};
	$scope.markers = {};
	var mapData = {
		defaults: {
			scrollWheelZoom: false
		},
		markers: {}
	}

	$scope.$parent.expedition.$promise.then(function(data) {
		var totalLat = 0;
		var totalLng = 0;
		var totalPoints = 0;
       	angular.forEach(data.places,function(place){
			if (place.latitude && place.longitude){
				mapData.markers[place._id] = {
					lat: parseFloat(place.latitude),
					lng: parseFloat(place.longitude),
					message: place.name,
					focus: true,
                	draggable: false
				}
				totalLat += parseFloat(place.latitude);
				totalLng += parseFloat(place.longitude);
				totalPoints++;
			}
		})
		mapData.center = {
			lat: totalLat / totalPoints,
			lng: totalLng / totalPoints,
			zoom: 11
		}
		angular.extend($scope, mapData)
   	});
}]);