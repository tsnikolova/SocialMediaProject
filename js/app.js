'use strict';

var Advertisements = angular.module('Advertisements', ['ngRoute', 'angular-loading-bar']);

Advertisements.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api');

Advertisements.config(function ($routeProvider) {
    $routeProvider
        .when('#/', {
            templateUrl:'index.html',
            controller:'MainController'
        })
        .when('#/home', {
            templateUrl:'login-home-view.html',
            controller:'MainController'
        })
        .when('#/profile', {
            templateUrl:'edit-profile.html',
            controller:'MainController'
        })
        .when('#/profile/password', {
            templateUrl:'change-password.html',
            controller:'MainController'
        })
        .otherwise({redirectTo: '/'})

});
