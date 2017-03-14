(function() {
	'use strict';
	var maincontroller = function maincontroller ($scope) {
		var self=this;
		 self.name="prashanth pochiraju";
		   $scope.name="snigdha";
	};


    angular.module("myapp")
	       .controller("maincontroller",maincontroller);
})();