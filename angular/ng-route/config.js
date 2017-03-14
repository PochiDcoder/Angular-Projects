(function  () {
	
	angular.module("myapp")
	       .config(function($routeProvider) {
	       	
	       	$routeProvider
	       	.when("/",{
	       		templateUrl:"home.html",
	       		controller:"homecontroller"
	       		
	       	})
           
           .when("/About",{
	       		templateUrl:"about.html",
	       		controller:"aboutcontroller"
	       		
	       	})
	       	
	       	.when("/Contact",{
	       		templateUrl:"contact.html",
	       		controller:"contactcontroller"
	       		
	       	})
	       	.othewise({
	       		templateUrl:"about.html"
	       	});

	       });




})();
