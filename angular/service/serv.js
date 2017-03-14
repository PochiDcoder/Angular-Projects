(function () {
	
	var userService=function userService ($http) {
	            
	     var API = '//jsonplaceholder.typicode.com/users/';
         
         var _getUser=function _getUser (userId) {
         	
                  return   $http.
                          get(API+userId)
                          .then(function (response) {
                          	return response.data;
                          },
                          function  (error) {
                          	
                          });
         };	     
 
	            return{
	            	getUser:_getUser
	            };	
	};

	angular.module("myapp")
	       .factory("userService",userService);
})();