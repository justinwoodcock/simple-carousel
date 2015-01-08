'use strict';

wdCarousel.controller('CarouselController', ['$scope',
    function($scope) {
        $scope.slides = [
            {
                src: 'images/cat.jpg',
                caption: 'Here\'s a cat.'
            },
            {
                src: 'images/cat-2.jpg',
                caption: 'Here\'s another cat.'
            },
            {
                src: 'images/cat.jpg',
                caption: 'Here\'s a cat.'
            },
            {
                src: 'images/cat-2.jpg',
                caption: 'Here\'s another cat.'
            }
        ]
        $scope.slideLength = $scope.slides.length;
        $scope.imgIndex = 0;
        $scope.navigate = function(direction) {
            if(direction === 'next') {
                $scope.imgIndex = $scope.imgIndex + 1;
            } else {
                $scope.imgIndex = $scope.imgIndex - 1;
            }
        }
    }
]);