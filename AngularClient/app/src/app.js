'use strict';

angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('MY_CONSTANTS', {
    "RACK": "http://127.0.0.1:9292",
    "NODE": "http://127.0.0.1:3000",
    "TEST_CONST" : 1000
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rails', {
        templateUrl: 'src/views/main.html',
        controller: 'SoapCtrl'
      })
      .when('/node', {
        templateUrl: 'src/views/about.html',
        controller: 'SoapNodeCtrl'
      })
      .otherwise({
        redirectTo: '/rails'
      });
  });
