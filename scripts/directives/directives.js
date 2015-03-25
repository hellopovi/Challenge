nordeaApp.directive('appIcon', ['$animate', function($animate) {
	return {
		restrict: 'A',
		scope: true,
		link: function(scope, element, attrs) {
			var closeButton;
			var appType = attrs.appIcon;
			scope.$watch(element.children().length, function() {
				closeButton = element.children()[0];
			});
			element.bind('click', function (e) {
				if(appType != "default"){
					angular.element(closeButton).toggleClass('ng-hide');
					element.toggleClass('animated infinite pulse');
				}
			});
		}
	};
}]);

nordeaApp.directive('deleteAppIcon', function() {
	return {
		restrict: 'A',
		scope: true,
		link: function(scope, element, attrs) {
			element.bind('click', function (e) {
				scope.$apply(attrs.deleteAppIcon);
			});
		}
	};
});