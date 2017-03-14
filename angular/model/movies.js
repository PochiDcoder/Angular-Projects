(function() {
	'use strict';
	
var moviecontroller=function moviecontroller () {
	var self=this;
	self.favorates=[{
		title:"Bahubali",
		year:"2015"
	},{
		title:"Mirchi",
		year:"2013"
	},{
		title:"rebel",
		year:"2012"
	},{
		title:"Mr perfect",
		year:"2011"
	},{
		title:"Darling",
		year:"2010"
	}];
};


	angular.module("myapp")
	       .controller("moviecontroller",moviecontroller);
})();