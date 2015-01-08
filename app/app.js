'use strict';

var wdCarousel = angular.module('wdCarousel', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'restangular'
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

wdCarousel.config(['RestangularProvider',
    function(RestangularProvider) {
        var apiUrl = 'https://api.ui-base.dev';
        RestangularProvider.setBaseUrl(apiUrl);
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
            var extractedData = data.data;
            return extractedData;
        });
    }
]);
