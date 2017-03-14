(function() {
  'use strict';

var contactcontroller=function contactcontroller ($scope) {
	$scope.view="CONTACT VIEW!"
};

  angular.module("myapp")
         .controller("contactcontroller",contactcontroller);

})();