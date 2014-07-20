'use-strict'

angular.module("voyagerDesktopApp")
.controller("MessageCtrl", function($scope, $rootScope){

 	function clearMessages(){
 		$scope.errorMessage = null;
		angular.forEach([$scope.errorMessage,$scope.warningMessage,$scope.successMessage],function(m){
			console.log(m);
			m = null;
		});
		//$scope.apply();				
 	}

 	angular.extend($scope, {
 		errorMessage: null,
 		warningMessage: null,
 		successMessage: null
 	});
	
 	$rootScope.$on('errorMessage',function(evt, message){
 		$scope.errorMessage = message;
 	});

 	$rootScope.$on('clearMessages',function(){
 		console.log("event clearMessages")
 		clearMessages();
 	})

})