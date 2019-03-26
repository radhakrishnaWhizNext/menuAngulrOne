
mainapp.controller( 'HomePageController', ['$scope', '$global', '$location', '$http', '$filter', function($scope, $global, $location, $http, $filter){
	if(! $global.getAdminlogged())
	{
		$location.path('/login');
	}

	$global.setShowlogin(false);
	$global.setShowhomepage(true);
	$global.setShowschedulepage(true);
	$global.setShowlogout(true);
	$global.setShowScrollNews(true);
	$global.setYouTube(false);
	

	
	
}]);