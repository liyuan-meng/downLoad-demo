import angular from 'angular';
import uiRouter from 'angular-ui-router';

import lyComponent from './components/index';

angular.module('app', [uiRouter, lyComponent])
    .controller('controller', $scope => {
        $scope.testMsg = 'hello sss world';
    })
    .config(($stateProvider, $urlRouterProvider)  => {
        $urlRouterProvider.otherwise('/download');
        $stateProvider
            .state('print', {
                url: '/print',
                template: '<print></print><print></print>'
            })
            .state('printA4', {
                url: '/printA4',
                template: '<print-a4></print-a4>'
            })
            .state('download', {
                url: '/download',
                template: '<download></download>'
            })
            .state('downloadCanvas', {
                url: '/downloadCanvas',
                template: '<download-canvas></download-canvas>'
            })
            .state('downloadSvg', {
                url: '/downloadSvg',
                template: '<download-svg></download-svg>'
            })
            .state('downloadAjax', {
                url: '/downloadAjax',
                template: '<download-ajax></download-ajax>'
            });
    });


