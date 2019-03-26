
mainapp.controller( 'LoginController', ['$scope', '$location', '$http', '$global', function($scope, $location, $http ,$global){
	$global.setShowlogin(false);
	$global.setShowhomepage(false);
	$global.setShowschedulepage(false);
	$global.setShowlogout(false);
	$global.setShowScrollNews(false);
	$global.setYouTube(false);
	
	$scope.message = '';
	
	$scope.login = function(){

			var data = '-1';
			var youtube = "-2";

			if($scope.userid == 'admin' && $scope.password == 'admin')
			{
				data = '1';
				$global.setAdminlogged(true);
			}
			if($scope.userid == 'youtube' && $scope.password == 'youtube'){
				data = '2';
				$global.setAdminlogged(true);
			}
			if( data == '1')
			{
				$location.path('/homepage');		
			}
			if( data == '2')
			{
				$location.path('/youtube');		
			}
			else if( data == '-1' || youtube == "-2")
			{
				$scope.message = '* Please enter the correct username and password.';	
			}

	};

}]);
