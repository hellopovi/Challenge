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