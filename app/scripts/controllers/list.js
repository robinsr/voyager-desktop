'use strict';

/**
 * @ngdoc function
 * @name voyagerDesktopApp.controller:listCtrl
 * @description
 * # MainCtrl
 * Controller of the voyagerDesktopApp
 */
angular.module('voyagerDesktopApp')
  .controller('listCtrl', ['$scope','ExpeditionsFactory',function ($scope, ExpeditionsFactory) {
    $scope.expeditions = ExpeditionsFactory.query();
  }]);
