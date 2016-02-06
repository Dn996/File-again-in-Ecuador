angular.module('Myapp')
	.directive('carousel', function(){
		return{
			restrict: 'E',
			templateUrl:'templates/carousel.html',
			controller:'obtenerCarousel',
			replace: true,
			scope: {
				posts:'@'

			},
			link: function(scope,element){
			
				var $element=$(element);
				$element.carousel();

				$element.find('.left').on("click",function(){
					$element.carousel("prev");

				})
				$element.find('.right').on("click",function(){
					$element.carousel("next");
				})
			}
		}
	});