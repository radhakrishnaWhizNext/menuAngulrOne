mainapp.controller( 'LogoutController', ['$scope', '$global', '$location', function($scope, $global, $location){
	$global.setShowlogin(false);
	$global.setShowhomepage(false);
	$global.setShowschedulepage(false);
	$global.setShowlogout(false);
	$global.setShowScrollNews(false);
	$global.setYouTube(false);

	$location.path('/login');

}]);