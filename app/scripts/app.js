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
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'loginCtrl'
  })
  .when('/expeditions', {
    templateUrl: 'views/expeditionList.html',
    controller: 'listCtrl'
  })
  .when('/expeditions/new',{
    templateUrl: 'views/expeditionEdit.html',
    controller: 'expeditionEditCtrl',
    isLogin: true
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
}])
 .constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})
 .constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
})
 .constant("API_ENDPOINT", "http://localhost:8128")
 .constant('ERROR_MESSAGES', {
  login: {
    severity: "danger", title: "Wait a minute!", text: "You need to be logged in to do that"
  },
  usernameOrPassword : {
    severity: "danger", title: "Oh Snap!", text: "Incorrect username or password"
  }
 })
 .constant('MAPBOX','http://{s}.tiles.mapbox.com/v3/robinsr.iomn5e9d/{z}/{x}/{y}.png')
