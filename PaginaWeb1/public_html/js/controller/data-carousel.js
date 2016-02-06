angular.module('Myapp')
	.controller('obtenerCarousel',
	  function($scope,$http){
				$http.get("http://j4loxa.com/serendipity/sr/browse?q=&wt=json&rows=10")
				.then(function (response) {
     			$scope.posts = response.data.response.docs;

     			   
			$scope.searchClic = function(){
			console.log("http://j4loxa.com/serendipity/sr/browse?q="+$scope.countryName+"&wt=json&rows=10");
			$http.get("http://j4loxa.com/serendipity/sr/browse?q="+$scope.countryName+"&wt=json&rows=10")
				.then(function (response) {

     			$scope.posts2 = response.data.response.docs;
		
				});
				
			}

				
	}); 
});

		
		
		