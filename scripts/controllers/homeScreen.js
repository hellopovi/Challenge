nordeaApp.controller('HomeScreenController', ['$scope', 'applicationsService', '$modal', function($scope, applicationsService, $modal) {

	// function to get installed applications
	$scope.getHomeScreenApplications = function(){
		$scope.applications = applicationsService.getInstalledApplications();
	}

	// function to delete application
	$scope.deleteApplication = function(appId){
		var modalInstance = $modal.open({
			templateUrl: 'views/modals/confirmationModal.html',
			controller: 'ConfirmationModalController',
			size: 'sm'
		});

		modalInstance.result.then(function () {
			applicationsService.deleteApplication(appId);
			$scope.applications = applicationsService.getInstalledApplications();
		}, function () {});
	}

	// getting installed applications
	$scope.getHomeScreenApplications();
}]);