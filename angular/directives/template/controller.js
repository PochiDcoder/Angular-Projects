(function () {
	'use strict';
	var myDirective=function myDirective () {

	      return{
	      	restrict:"ECAM",
	      	replace:"true",
	      	template:"<h1> My First directive </h1>"
	      };

	};





	angular.module("myapp")
	       .directive("myDirective",myDirective);
})();