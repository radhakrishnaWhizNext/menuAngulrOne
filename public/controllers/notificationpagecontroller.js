mainapp.controller( 'NotificationPageController', ['$scope', '$global', '$location', '$filter', '$http', function($scope, $global, $location, $filter, $http){
	if(! $global.getAdminlogged())
	{
		$location.path('/login');
	}

	$global.setShowlogin(false);
	$global.setShowhomepage(true);
	$global.setShowschedulepage(true);
	$global.setShowlogout(true);
	$global.setShowScrollNews(true);


	
}]);