nordeaApp.controller('ConfirmationModalController', ['$scope', '$modalInstance', function($scope, $modalInstance) {
    
    $scope.messageText = 'You are about to delete an APP!';
    
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);