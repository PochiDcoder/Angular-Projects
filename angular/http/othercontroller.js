(function() {
	var othercontroller=function othercontroller ($scope) {
	 $scope.name="prashanth";	
	};
	angular.module("myapp")
	       .controller("othercontroller",othercontroller);
})();