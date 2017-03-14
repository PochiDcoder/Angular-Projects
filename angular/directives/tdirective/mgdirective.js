(function () {
	'use strict';
	var mgDirective=function mgDirective () {
	       return{
             controller:"countercontroller as counter",
             controllerAs:"counter",
             template:`
             <div>
             <input type="text" ng-model="counter.count"> </br>
             <button ng-click="counter.increment();">+</button>
             <button ng-click="counter.decrement();">-</button>
             </div>
           `
	       };




	};





	angular.module("myapp")
	       .directive("mgDirective",mgDirective);
})();