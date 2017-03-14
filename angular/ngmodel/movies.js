(function() {
	
var moviescontroller=function moviescontroller () {
	var self=this;
	self.favorites=[{
		title:"Bahubali",
		year:"2015"
	},{
		title:"Mirchi",
		year:"2013"
	},{
		title:"Rebel",
		year:"2012"
	},{
		title:"Mr Perfect",
		year:"2011"
	},{
		title:"Darling",
		year:"2010"
	}];
};


    angular.module("myapp")
	       .controller("moviescontroller",moviescontroller);
})();