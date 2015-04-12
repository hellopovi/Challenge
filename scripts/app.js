var nordeaApp = angular.module('nordeaApp', ['ngRoute', 'nordeaApp.services', 'ui.bootstrap'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/homeScreen.html',
                controller: 'HomeScreenController'
            })
            .when( '/appStore', {
                templateUrl: 'views/partials/appStore.html',
                controller: 'AppStoreController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);