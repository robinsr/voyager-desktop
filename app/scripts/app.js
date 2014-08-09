'use strict';

define([
  'angular',
  'controllers'
], function(angular){

  return angular
   .module('voyagerDesktopApp', [
    'ngRoute'
    'voyagerDesktopApp.controllers'
    ])

});
