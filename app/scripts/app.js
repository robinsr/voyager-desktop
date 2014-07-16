'use strict';

/**
 * @ngdoc overview
 * @name voyagerDesktopApp
 * @description
 * # voyagerDesktopApp
 *
 * Main module of the application.
 */
angular
  .module('voyagerDesktopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'leaflet-directive',
    'geolocation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/expeditionList.html',
        controller: 'listCtrl'
      })
      .when('/expeditions', {
        templateUrl: 'views/expeditionList.html',
        controller: 'listCtrl'
      })
      .when('/expeditions/new',{
        templateUrl: 'views/expeditionEdit.html',
        controller: 'expeditionEditCtrl'
      })
      .when('/expeditions/:id',{
        templateUrl: 'views/expeditionShow.html',
        controller: 'expeditionCtrl'
      })
      .when('/expeditions/:id/edit',{
        templateUrl: 'views/expeditionEdit.html',
        controller: 'expeditionEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
