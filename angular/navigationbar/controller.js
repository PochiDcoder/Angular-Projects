(function() {
	var homecontroller=function homecontroller ($scope) {
		$scope.view="Home View!"
	};

	var newscontroller=function newscontroller ($scope) {
		$scope.view="News View!"
	};

	var contactcontroller=function contactcontroller ($scope) {
		$scope.view="Contact View!"
	};

	var logincontroller=function logincontroller ($scope) {
		$scope.view="Login View!"
	};


    angular.module("myapp")
	       .controller("homecontroller",homecontroller)
	       .controller("newscontroller",newscontroller)
	       .controller("contactcontroller",contactcontroller)
	       .controller("logincontroller",logincontroller);
})();