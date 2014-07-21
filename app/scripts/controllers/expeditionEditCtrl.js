'use strict';

/**
 * @ngdoc function
 * @name voyagerDesktopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the voyagerDesktopApp
 */
angular.module('voyagerDesktopApp')
  .controller('expeditionEditCtrl', ['$scope','$routeParams','ExpeditionFactory','MessageService', 
    function ($scope, $routeParams, exp, MessageService) {


  	var expedition = new exp({
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

    var saveSuccessHandler = function(data){
      expedition._id = data._id;

      var successMessage = {
        severity: "success",
        title: "Success!",
        text: "Expedition created!"
      }

      MessageService.addMessage(successMessage);

      setTimeout(function(){
        MessageService.removeMessage(successMessage)
      }, 5000);

    }

    var saveErrorHandler = function(data){

      var errorMessage = {
        severity: "danger",
        title: "Oh Snap!",
        text: data.error || "There was an error creating this expedition!"
      }

      MessageService.addMessage(errorMessage);

      setTimeout(function(){
        MessageService.removeMessage(errorMessage)
      }, 5000);
    }

    var updateSuccessHandler = function(data){

      var successMessage = {
        severity: "success",
        title: "Success!",
        text: "Expedition updated!"
      }

      MessageService.addMessage(successMessage);

      setTimeout(function(){
        MessageService.removeMessage(successMessage)
      }, 5000);

    }

    var updateErrorHandler = function(data){

      var errorMessage = {
        severity: "danger",
        title: "Oh Snap!",
        text: data.error || "There was an error updating this expedition!"
      }

      MessageService.addMessage(errorMessage);

      setTimeout(function(){
        MessageService.removeMessage(errorMessage)
      }, 5000);
    }

  	$scope.save = function(){
  		if (!expedition._id){
	  		expedition.$save(saveSuccessHandler,saveErrorHandler)
  		} else {
  			expedition.$update(angular.extend({ id: expedition._id }, expedition), updateSuccessHandler,updateErrorHandler);
      }
    }

  	$scope.expedition = expedition;

  }]);
