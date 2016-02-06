angular.module('Myapp')
.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl:'templates/vista.html'
	});
}); 