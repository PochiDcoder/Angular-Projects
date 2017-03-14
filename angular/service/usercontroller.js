(function() {
	
	var maincontroller=function maincontroller (userService) {
	       var self=this;
        self.userId="";
        self.chosenUser={};
        self.getUser=function getUser() {
        
                 if(!self.userId){
                 	return;
                 }
                 userService.
                             getUser(self.userId)
                             .then(function (response) {
                             	self.chosenUser=response;
                             },
                             function (error) {
                             	
                             });	
        };

	};


	angular.module("myapp")
	       .controller("maincontroller",maincontroller);
})();