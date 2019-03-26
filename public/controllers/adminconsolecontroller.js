mainapp.controller( 'AdminConsoleController', ['$scope', '$global', '$location', function($scope, $global, $location){
	if(! $global.getAdminlogged())
	{
		$location.path('/login');
	}

	$global.setShowlogin(false);
	$global.setShowhomepage(true);
	$global.setShowschedulepage(true);
	$global.setShowlogout(true);
	$global.setShowScrollNews(true);
	$global.setYouTube(true);
	$global.setShowScrollNews(true);
	
}]);