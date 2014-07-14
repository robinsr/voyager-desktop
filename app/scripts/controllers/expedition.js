'use strict';

/**
 * @ngdoc function
 * @name voyagerDesktopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the voyagerDesktopApp
 */
angular.module('voyagerDesktopApp')
  .controller('expeditionCtrl', ['$scope','$routeParams','ExpeditionFactory',function ($scope, $routeParams, exp) {
    $scope.expedition = exp.show({ id: $routeParams.id });
  }]);
