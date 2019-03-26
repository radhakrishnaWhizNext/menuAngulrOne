mainapp
		.controller(
				'youtubeController',
				[
						'$scope',
						'$global',
						'$location',
						'$http',
						function($scope, $global, $location,$http) {
							if (!$global.getAdminlogged()) {
								$location.path('/login');
							}

							$global.setShowlogin(false);
							$global.setShowhomepage(false);
							$global.setShowschedulepage(false);
							$global.setShowlogout(true);
							$global.setShowScrollNews(false);
							$global.setYouTube(true);



						} ]);