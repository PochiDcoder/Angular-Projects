(function() {
	'use strict';
	var countercontroller=function countercontroller () {
		var self=this;
		self.count=1;
		self.increment=function increment () {
			self.count++;
		};
		self.decrement=function decrement () {
		     self.count--;
		};
	};

	angular.module("myapp")
	       .controller("countercontroller",countercontroller);
})();