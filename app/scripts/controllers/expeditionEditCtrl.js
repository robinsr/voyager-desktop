'use strict';

/**
 * @ngdoc function
 * @name voyagerDesktopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the voyagerDesktopApp
 */
angular.module('voyagerDesktopApp')
  .controller('expeditionEditCtrl', ['$scope','$routeParams','ExpeditionFactory',function ($scope, $routeParams, exp) {


  	var expedition = new exp({
  		isNew: true,
  		_id : null,
  		title : "New Expedition",
        description : null,
        places : [],
        tags : [],
        images : [],
        popularity : null,
        score : null,
        user : {},
  	});


  	console.log(expedition)

  	$scope.save = function(){
  		if (expedition.isNew){
	  		expedition.$save(function(data){
	  			console.log(data)
	  		})
  		} else {
  			expedition.$update(angular.extend({ id: expedition.id }, expedition),function(data){
  				console.log(data)
  			})
  		}
  	}

  	$scope.expedition = expedition;

    //$scope.expedition : exp.show({ id: $routeParams.id });
  }]);
