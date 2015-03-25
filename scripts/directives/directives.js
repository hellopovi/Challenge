nordeaApp.directive('applicationIcon', ['$animate','$compile', function($animate, $compile) {
	return {
		restrict: 'A',
		scope: true,
		link: function(scope, element, attrs) {
			element.bind('click', function (e) {
				element.unbind();
				element.prepend($compile('<button type="button" class="close" aria-label="Close" delete-app-icon="deleteApplication(app.id)"><span aria-hidden="true">&times;</span></button>')(scope));
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
				element.unbind();
				scope.$apply(attrs.deleteAppIcon);
			});
		}
	};
});