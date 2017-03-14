(function() {
	angular.module("myapp")
	       .config(function($routeProvider) {
	       	
	       	$routeProvider.
	       	when("/Home",{
	       		templateUrl:"home.html",
	       		controller:"homecontroller"
	       	})
	       	.when("/News",{
	       		templateUrl:"news.html",
	       		controller:"newscontroller"
	       	})
	       	.when("/Contact",{
	       		templateUrl:"contact.html",
	       		controller:"contactcontroller"
	       	})
	       	.otherwise({
                templateUrl:"home.html"
	       	});
	       });
})();