'use strict';

wdCarousel.factory('WdCarouselFactory', ['Restangular',
    function(Restangular) {
        return {
            createEntity: function(entity) {
                return Restangular.all(entity).getList();
            },
            getStorage: function() {
                var data = localStorage.getItem('uibase');
                if (data === null || typeof(data) === 'undefined' || _.isEmpty(data) || data.toString() === '[object Object]') {
                    return {};
                }
                return JSON.parse(data);
            },
            setStorage: function(object) {
                var data = JSON.stringify(object);
                localStorage.setItem('uibase', data);
            }
        };
    }

]);