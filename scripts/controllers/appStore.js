nordeaApp.controller('AppStoreController', ['$scope', 'applicationsService', function($scope, applicationsService) {
	
	// function to get available to install applications
	$scope.getAvailableApplications = function(){
		$scope.availableToInstallApplications = applicationsService.getAvailableToInstallApplications();
	}
	
	// function to install application on the phone
	$scope.installApplication = function(appId){
		applicationsService.installApplication(appId);
		$scope.getAvailableApplications();
	}

	// function to delete application
	$scope.deleteApplication = function(appId){
		applicationsService.deleteApplication(appId);
		$scope.getAvailableApplications();
	}

	// getting available applications
	$scope.getAvailableApplications();
}]);