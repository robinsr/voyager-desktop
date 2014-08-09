'use-strict'

angular.module("voyagerDesktopApp")
.controller("MessageCtrl", ["$scope", "MessageService", function($scope, messageService){
	$scope.messages = messageService.messages,
    $scope.closeMsg = function(index) {
        $scope.messages[index].remove();
    };
}])