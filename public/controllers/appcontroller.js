

var mainapp = angular.module('jjsmobile', ['ngRoute','xeditable']);

 mainapp.run(['$global',function($global){
		$global.setShowlogin(true);
		$global.setShowhomepage(false);
		$global.setShowlogout(false);
		$global.setAdminlogged(false);
		$global.setShowScrollNews(false);
		$global.setYouTube(false);
		}]);


mainapp.config( function ($routeProvider) {
	$routeProvider
		.when( '/homepage', 
				{
					controller: 'HomePageController',
					templateUrl: '../homepage.html'
				})
		.when( '/schedulepage', 
				{
					controller: 'SchedulePageController',
					templateUrl: '../schedulepage.html'
				})
		.when( '/login',
				{
					controller: 'LoginController',
					templateUrl: '../login.html'
				})
		.when( '/logout',
				{
					controller: 'LogoutController',
					templateUrl: '../login.html'
				})
		.when( '/adminconsole',
				{
					controller: 'AdminConsoleController',
					templateUrl: '../adminconsole.html'
				})
		.when( '/festivalpage',
				{
					controller: 'FestivalPageController',
					templateUrl: '../festivalpage.html'
				})
		.when( '/notificationpage',
				{
					controller: 'NotificationPageController',
					templateUrl: '../notificationpage.html'
				})
		.when( '/success',
				{
					//controller: 'AdminConsoleController',
					templateUrl: '../success.html'
				})
		.when( '/error',
				{
					//controller: 'AdminConsoleController',
					templateUrl: '../error.html'
				})
		.when( '/scrollPage',
				{
					controller: 'scrollController',
					templateUrl: '../scrollPage.html'
				})
		.when( '/youtube',
				{
					controller: 'youtubeController',
					templateUrl: '../youtubePage.html'
				})			
		.otherwise(
				{
					redirectTo: '/login'}
				);
});



mainapp.factory( '$global', function(){

	var showlogin = true;
	var showhomepage = true;
	var showschedulepage = true;
	var showlogout = true;
	var adminlogged = false;
	var scrollPage = true;
	var youtube = true;

	return{
		    setShowlogin : function(val){
		                showlogin = val;
		            },
		    setShowhomepage : function(val){
		                showhomepage = val;
		            },
		    setShowschedulepage : function(val){
		                showschedulepage = val;
		            },        
		    setShowlogout : function(val){
		                showlogout = val;
		            },
		    setAdminlogged : function(val){
		                adminlogged = val;
		            },
		    setShowScrollNews : function(val) {
		    	scrollPage = val;
			        },
			setYouTube : function(val) {
				youtube = val;
					},       
		    getShowlogin : function(){
		                return showlogin;
		            },
   		    getShowhomepage : function(){
		                return showhomepage;
		            },
		    getShowschedulepage : function(){
		                return showschedulepage;
		            },        
		    getShowlogout : function(){
		                return showlogout;
		            },
		    getAdminlogged : function(){
		                return adminlogged;
		            },
		    getShowScrollNews : function() {
						return scrollPage
					},
			getYouTube : function() {
				        return youtube;
					}   
        };
});

mainapp.controller('NavController', ['$scope', '$global', function($scope, $global){
	$scope.template = {
		navmenu: 'navmenu.html'
	};
	$scope.showlogin = $global.getShowlogin();
	$scope.showhomepage = $global.getShowhomepage();
	$scope.showschedulepage = $global.getShowschedulepage();
	$scope.showlogout = $global.getShowlogout();
	$scope.showScrollNews = $global.getShowScrollNews();
	$scope.showYoutube = $global.getYouTube();
	
}]);