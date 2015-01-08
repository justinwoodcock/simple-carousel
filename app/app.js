'use strict';

var wdCarousel = angular.module('wdCarousel', [
    'ngAnimate',
    'ui.router'
]);

wdCarousel.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('home', {
        url: '/carousel',
        views: {
            header: {
                templateUrl: '/components/header/header.index.html'
            },
            content: {
                templateUrl: '/components/carousel/carousel.index.html',
                controller: 'CarouselController'
            },
            footer: {
                templateUrl: '/components/footer/footer.index.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/carousel');
});
