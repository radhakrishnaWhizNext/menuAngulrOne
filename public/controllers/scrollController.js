mainapp.controller('scrollController', ['$scope', '$global', '$location', '$filter', '$http','$window', function ($scope, $global, $location, $filter, $http,$window) {
	if (!$global.getAdminlogged()) {
		$location.path('/login');
	}

	$global.setShowlogin(false);
	$global.setShowhomepage(true);
	$global.setShowschedulepage(true);
	$global.setShowlogout(true);
	$global.setShowScrollNews(true);

	
}]);