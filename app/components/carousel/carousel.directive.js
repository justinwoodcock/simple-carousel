'use strict';

wdCarousel.directive('simple-carousel', function() {
    return {
        restrict: 'E',
        link: function($scope, $element, $attrs) {
            console.log($attrs);
        }
    }
})
