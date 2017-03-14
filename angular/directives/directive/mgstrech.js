(function() {
	'use strict';
	var mgStrech=function mgStrech () {
		return{
        link:function link ($scope,$attrs,$element) {
        	console.log($element);
        	console.log($attrs);
        	var element=$element[0];
                element.addEventListener('focus', function() {
                    this.style.width = 250 + 'px';
                    this.style.padding = '4px 2px';
                    this.style.outline = 'red auto 2px';
                    console.dir(this.style);
                }, false);
                element.addEventListener('blur', function() {
                    this.style.width = 120 + 'px';
                    this.style.padding = '1px';
                    this.style.outline = 'none';
                }, false);

        }
		};
	};



	angular.module("myapp")
	       .directive("mgStrech",mgStrech);
})();