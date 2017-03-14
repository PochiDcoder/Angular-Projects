(function  () {
	'use strict';
	var aboutcontroller=function aboutcontroller ($scope) {
		$scope.view="ABOUT VIEW!";
	};

	angular.module("myapp")
	       .controller("aboutcontroller",aboutcontroller);
})();