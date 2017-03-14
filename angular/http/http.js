(function() {
	var maincontroller=function maincontroller ($http) {
		var self=this;
		var API="http://jsonplaceholder.typicode.com/users/";
		self.name="pochiraju";
		self.chosenUser={};
		self.userId="";
		self.getUser=function getUser() {
			
	      if (!self.userId) {
	      	return;
	      }	
          $http.
		     get(API+self.userId)
		     .then(function(response) {
		     	self.chosenUser=response.data;
		     },function  (error) {
		     	
		     }
		     );
     }	
};

	angular.module("myapp")
	       .controller("maincontroller",maincontroller);
})();