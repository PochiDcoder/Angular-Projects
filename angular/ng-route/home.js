(function () {
	var homecontroller=function homecontroller ($scope) {
	
	           $scope.view="HOME VIEW!";	
	};

	angular.module("myapp")
	       .controller("homecontroller",homecontroller);
})();